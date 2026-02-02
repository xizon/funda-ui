
import React, { useEffect, useState, useRef, useImperativeHandle } from "react";


import Textarea from 'funda-textarea';
import RootPortal from 'funda-root-portal';

import useComId from 'funda-utils/dist/cjs/useComId';
import useDebounce from 'funda-utils/dist/cjs/useDebounce';
import useThrottle from 'funda-utils/dist/cjs/useThrottle';
import useClickOutside from 'funda-utils/dist/cjs/useClickOutside';
import useStreamController from 'funda-utils/dist/cjs/useStreamController';
import { htmlEncode } from 'funda-utils/dist/cjs/sanitize';
import { isJSON } from 'funda-utils/dist/cjs/validate';
import guid from 'funda-utils/dist/cjs/guid';
import { uint8arrayToBase64Str } from 'funda-utils/dist/cjs/buffer';



// loader
import PureLoader from './PureLoader';
import TypingEffect from './TypingEffect';
import { getValueByPath } from './helpers';


import {
    formatLatestDisplayContent,
    formatName,
    fixHtmlTags,
    isStreamResponse,
    toBoolean
} from './utils/func';


export interface CustomMethod {
    name: string;
    func: (...args: any[]) => any;
}

export type MessageDetail = {
    sender: string; // Sender's name
    timestamp: string; // Time when the message was sent
    content: string; // The message content
    tag: string; // such as '[reply]'
};


export type QuestionData = {
    title: string;
    list: Array<string>;
};

export type SelectedOption = {
    [key: string]: string | number;
    curIndex: number;
    curValue: string;
};

export interface FloatingButton {
    label: string;  // HTML string
    value: string;
    onClick: string;
    active?: boolean; // Specify if the button should be active by default
    isSelect?: boolean;  // Mark whether it is a drop-down selection button
    dynamicOptions?: boolean; // Mark whether to use dynamic options
    defaultSelected?: number; // Specify default selected option index
    [key: string]: any;  // Allows dynamic `onSelect__<number>` attributes, such as `onSelect__1`, `onSelect__2`, ...
}


export interface FloatingButtonSelectOption {
    label: string;
    value: string;
    onClick: string;
}

export interface RequestConfig {
    apiUrl: string;
    requestBody: string;  // JSON string for request body template
    responseExtractor: string;  // JSON path to extract response
}

export type CustomRequestConfig = {
    requestBody: any;
    apiUrl: string;
    headers: any;
};

export type CustomRequestResponse = {
    content: string | Response | null;
    isStream: boolean;
};

export type CustomRequestFunction = (
    message: string,
    config: CustomRequestConfig,
    customMethods: CustomMethod[],
    conversationHistory: MessageDetail[],
) => Promise<CustomRequestResponse>;

// iFlytek voice configuration
export type VoiceConfig = {
    enableVoiceInput: boolean;
    holdToTalk?: boolean;
    voiceInputAppId?: string;
    voiceInputApiKey?: string;
    voiceInputApiSecret?: string;
    voiceInputSampleRate?: number;
    voiceInputFormat?: string;
    voiceInputEncoding?: string;
    voiceInputHost?: string;
    voiceInputPath?: string;
    voiceInputProtocol?: string;
    voiceInputHmacAlgorithm?: string;
    voiceInputHashAlgorithm?: string;
    voiceInputUrlTemplate?: string;
    voiceInputRequestBodyTemplate?: string;
    voiceInputAudioBodyTemplate?: string;
    voiceInputUuid?: string;
    voiceInputLang?: string;
    voiceInputUtc?: string;
    voiceResponseExtractor?: string;
    voiceInputIdleTimeoutSeconds?: number;
    voiceInputEndTimeoutSeconds?: number;
    generateVoiceSignature?: (params: {
        host: string;
        path: string;
        date: string;
        apiKey: string;
        apiSecret: string;
    }) => string | Promise<string> ;
    onVoiceInputStart?: () => void;
    onVoiceInputEnd?: (text: string) => void;
    onVoiceInputError?: (error: Error) => void;
    onVoiceInputInterrupt?: () => void;
};

export type ChatboxProps = {
    debug?: boolean;
    defaultRows?: number;
    prefix?: string;
    contentRef?: React.RefObject<any>;
    model?: string;
    baseUrl?: string;
    apiKey?: string;
    token?: string | (() => string);
    defaultMessages?: MessageDetail[];
    verbose?: boolean;
    reasoningSwitchLabel?: string;
    stopLabel?: React.ReactNode;
    questionName?: React.ReactNode;
    answerName?: React.ReactNode;
    questionNameIcon?: string;
    answerNameIcon?: string;
    bubble?: boolean;
    bubbleLabel?: string;
    sendLabel?: string;
    sendLoading?: boolean;
    sendLoadingLabel?: string;
    copyLabel?: string;
    closeLabel?: string;
    placeholder?: string;
    noDataPlaceholder?: string;
    requestConfig: RequestConfig;
    headerConfig?: any;
    maxHistoryLength?: number;
    contextData?: Record<string, any>;  // Dynamic JSON data
    toolkitButtons?: FloatingButton[];
    newChatButton?: FloatingButton;
    customMethods?: CustomMethod[]; // [{"name": "method1", "func": "() => { console.log('test'); }"}, ...]
    defaultQuestions?: QuestionData;
    showCopyBtn?: boolean;  // Whether to show copy button for each reply
    autoCopyReply?: boolean;  // Whether to automatically copy reply to clipboard
    usePopUp?: boolean;
    customRequest?: CustomRequestFunction;
    renderParser?: (input: string) => Promise<string>;
    requestBodyFormatter?: (body: any, contextData: Record<string, any>, conversationHistory: MessageDetail[]) => Promise<Record<string, any>>;
    copiedContentFormatter?: (string: string) => string;
    nameFormatter?: (input: string) => string;
    onCopyCallback?: (res: Record<string, any>) => void;
    onQuestionClick?: (text: string, methods: Record<string, Function>) => void;
    onInputChange?: (controlRef: React.RefObject<any>, val: string) => any;
    onInputCallback?: (input: string) => Promise<string>;
    onChunk?: (controlRef: React.RefObject<any>, lastContent: string, conversationHistory: MessageDetail[]) => any;
    onComplete?: (controlRef: React.RefObject<any>, lastContent: string, conversationHistory: MessageDetail[]) => any;
    voiceConfig?: VoiceConfig; // Voice configuration
};


const Chatbox = (props: ChatboxProps) => {

    const chatId = useComId().replace(/\-/g, '_');

    // Store latest props in refs
    const propsRef = useRef<any>(props);

    // Store context data in ref to get latest values
    const contextDataRef = useRef<Record<string, any> | undefined>(props.contextData);
    
    // Store config in ref to get latest values
    const configRef = useRef<RequestConfig>({
        apiUrl: "{baseUrl}/v1/chat/completions",
        requestBody: `{
    "model": "{model}",
    "messages": [{
        "role": "user",
        "content": "{message}"
    }],
    "stream": true
}`,
        responseExtractor: "data.choices.0.delta.content"
    });


    const tokenFormat = (inputTokenValue: any) => {
        if (typeof inputTokenValue === 'undefined') return '';

        // Resolve token value (string or function)
        if (typeof inputTokenValue === 'function') {
            return inputTokenValue();
        } else {
            return inputTokenValue || '';
        }
    };



    //
    const rootRef = useRef<HTMLDivElement>(null);
    const msgContainerRef = useRef<HTMLDivElement>(null);
    const msInput = useRef<HTMLTextAreaElement>(null);
    const inputContentRef = useRef<any>(null);
    const [focused, setFocused] = useState(false);

    const [loaderDisplay, setLoaderDisplay] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [thinking, setThinking] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [msgList, setMsgList] = useState<MessageDetail[]>([]);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [tempAnimText, setTempAnimText] = useState<string>('');
    const [enableStreamMode, setEnableStreamMode] = useState<boolean>(true);
    const animatedMessagesRef = useRef<Set<number>>(new Set()); // Add a ref to keep track of messages that have already been animated

    // Keep track of whether the default values have been initialized
    const [initializedDefaults, setInitializedDefaults] = useState<Record<string, boolean>>({});

    //
    const timer = useRef<NodeJS.Timeout | null>(null);


    //================================================================
    // helper
    //================================================================
    const customMethodsRef = useRef<Record<string, Function>>({});
    useEffect(() => {
        if (props.customMethods && Array.isArray(props.customMethods)) {
            const methodsMap: Record<string, Function> = {};
            
            props.customMethods.forEach(method => {
                if (typeof method.func === 'function') {
                    methodsMap[method.name] = method.func;
                }
            });

            customMethodsRef.current = methodsMap;
        }
    }, [props.customMethods]);

    const exposedMethods = () => {
        return {
            chatOpen: () => {
                setShow(true);
                setTimeout(() => {
                    if (msInput.current) msInput.current.focus();
                }, 0);
            },
            chatClose: () => {
                setShow(false);
            },
            clearData: () => {
                // Update both the conversation history and displayed messages
                conversationHistory.current = [];
                setMsgList([]);
                
            },
            sendMsg: () => {
                handleClickSafe();
            },
            getHistory: () => conversationHistory.current,
            trimHistory: (length?: number) => {
                const maxLength = length || args().maxHistoryLength || 20;
                if (conversationHistory.current.length > maxLength) {
                    conversationHistory.current = conversationHistory.current.slice(-maxLength);
                }
            },
            setHistory: (messages: MessageDetail[]) => {
                // Update both the conversation history and displayed messages
                conversationHistory.current = [...messages];
                setMsgList([...messages]);
            },
            setVal: (v: string) => {
                if (inputContentRef.current) inputContentRef.current.set(v);
            },
            getContextData: () => {
                return contextDataRef.current;
            },
            setContextData: (v: Record<string, any>) => {
                contextDataRef.current = v;
            },
            getMessages: () => {
                return msgList;
            },
            setMessages: (v: MessageDetail[]) => {
                setMsgList(v);
            },
            // 
            getCustomMethods: () => {
                return Object.keys(customMethodsRef.current);
            },
            executeCustomMethod: (methodName: string, ...args: any[]) => {
                if (methodName in customMethodsRef.current) {
                    try {
                        return customMethodsRef.current[methodName](...args);
                    } catch (error) {
                        console.error(`Error executing custom method ${methodName}:`, error);
                        return null;
                    }
                } else {
                    console.warn(`Custom method ${methodName} not found`);
                    return null;
                }
            },
            
        };
    };
    
    const scrollToBottom = useThrottle(() => {
        if (msgContainerRef.current) {
            msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
        }
    }, 300, []);

    const args = () => {
        const currentProps = propsRef.current;
        if (typeof currentProps.headerConfig === 'undefined' || typeof configRef.current.apiUrl === 'undefined') {
            return {};
        }
  
        const {
            debug,
            defaultRows,
            prefix,
            contentRef,
            model,
            baseUrl,
            apiKey,
            token,
            verbose,
            reasoningSwitchLabel,
            stopLabel,
            questionName,
            answerName,
            bubble,
            bubbleLabel,
            sendLabel,
            sendLoading,
            sendLoadingLabel,
            copyLabel,
            closeLabel,
            placeholder,
            noDataPlaceholder,
            requestConfig,
            headerConfig,
            toolkitButtons,
            newChatButton,
            maxHistoryLength,
            usePopUp,
            customRequest,
            onQuestionClick,
            onCopyCallback,
            renderParser,
            requestBodyFormatter,
            copiedContentFormatter,
            nameFormatter,
            showCopyBtn,
            autoCopyReply,
            onInputChange,
            onInputCallback,
            onChunk,
            onComplete,
        } = currentProps;


        const {
            apiUrl,
            requestBody,
            responseExtractor
        } = configRef.current;
        
        const latestContextData = contextDataRef.current ? contextDataRef.current : undefined;

        let _requestBodyTmpl = requestBody.replace(/\'/g, '"'); //  !!! REQUIRED !!!
        let _isStream: boolean = true;

        // request API
        const requestApiUrl = apiUrl.replace(/\{baseUrl\}/g, baseUrl);

        // header config       
        const _headerConfig = headerConfig.replace(/\{apiKey\}/g, apiKey)
                                           .replace(/\{token\}/g, tokenFormat(token))
                                           .replace(/\'/g, '"'); //  !!! REQUIRED !!!
        const headerConfigRes = typeof _headerConfig !== 'undefined' ? (isJSON(_headerConfig) ? JSON.parse(_headerConfig) : undefined) : {'Content-Type':'application/json'};


        // Determine whether it is in JSON format
        if (!isJSON(_requestBodyTmpl)) {
            console.log('--> [ERROR] Wrong JSON format');
            _requestBodyTmpl = '{}';
            return {};
        } else {

            try {
                if (JSON.parse(_requestBodyTmpl).hasOwnProperty('stream')) {
                    _isStream = toBoolean(JSON.parse(_requestBodyTmpl).stream) === true;
                }
            } catch (err) {
                console.error(err);
            }

        }

        // Whether or not to show reasoning
        const withReasoning = typeof verbose === 'undefined' ? true : verbose;
       
        // Get latest name values
        const _answerName: string = formatName(answerName, true, currentProps);
        const _questionName: string = formatName(questionName, false, currentProps);

        return {
            debug,
            defaultRows,
            prefix,
            contentRef,
            model,
            baseUrl,
            apiKey,
            token,
            verbose,
            reasoningSwitchLabel,
            stopLabel,
            bubble,
            bubbleLabel,
            sendLabel,
            sendLoading,
            sendLoadingLabel,
            copyLabel,
            closeLabel,
            placeholder,
            noDataPlaceholder,
            requestConfig,
            maxHistoryLength,
            toolkitButtons,
            newChatButton,
            usePopUp,
            customRequest,
            onQuestionClick,
            onCopyCallback,
            renderParser,
            requestBodyFormatter,
            copiedContentFormatter,
            nameFormatter,
            showCopyBtn,
            autoCopyReply,
            onInputChange,
            onInputCallback,
            onChunk,
            onComplete,

            // 
            defaultQuestionsRes: questions, 
            latestContextData,
            questionNameRes: _questionName,
            answerNameRes: _answerName,
            isStream: _isStream,
            headerConfigRes,
            requestApiUrl,
            requestBodyTmpl: _requestBodyTmpl,
            responseExtractor,
            withReasoning,
        }

    }

    //================================================================
    // Clipboard
    //================================================================
    const chatboxCopyToClipboard = async (text: string) => {

        let _content: string = text;
        if (typeof args().copiedContentFormatter === 'function') {
            _content = args().copiedContentFormatter(text);
        } 
        
        try {
            // Try using the modern Clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(_content);
                args().onCopyCallback?.({
                    success: true,
                    message: 'Text copied to clipboard',
                });
                return true;
            }

            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = _content;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                textArea.remove();
                args().onCopyCallback?.({
                    success: true,
                    message: 'Text copied to clipboard',
                });
                return true;
            } catch (err) {
                textArea.remove();
                return false;
            }
        } catch (err) {
            args().onCopyCallback?.({
                success: false,
                message: `Failed to copy text: ${err}`,
            });
            return false;
        }
    };


    //================================================================
    // Custom Questions
    //================================================================
    const [questions, setQuestions] = useState<QuestionData | undefined>(props.defaultQuestions);
    useEffect(() => {
        if (props.defaultQuestions) {
            setQuestions(props.defaultQuestions);
        }
    }, [props.defaultQuestions]);
    const hasQuestion = () => {
        return args().defaultQuestionsRes && (args().defaultQuestionsRes as QuestionData).list.length > 0;
    };
    const handleQuestionClick = (text: string) => {
        if (inputContentRef.current) {
            inputContentRef.current.set(text);
        }

        args().onQuestionClick?.(text, exposedMethods());
    };


    //================================================================
    // Custom buttons
    //================================================================
    const toolkitBtnsRef = useRef<any>(null);
    const [activeButtons, setActiveButtons] = useState<Record<string, boolean>>({});
    const closeDropdowns = () => {
        setActiveButtons(prev => {
            const newState = { ...prev };
            // Turn off only buttons with "isSelect"
            args().toolkitButtons?.forEach((btn: FloatingButton, index: number) => {
                if (btn.isSelect) {
                    const _id = `${args().prefix || 'custom-'}chatbox-btn-tools-${chatId}${index}`;
                    newState[_id] = false;
                }
            });
            return newState;
        });
    };

    // The onClick action specifically used to perform the default options
    const executeDefaultOptionAction = async (actionStr: string, buttonId: string) => {
        try {
            const actionFn = new Function('method', 'isActive', 'button', actionStr);
            // To perform the action, pass false as the "isActive" parameter, as this is the default option
            await actionFn(exposedMethods(), false, document.getElementById(buttonId));
        } catch (error) {
            console.error('Error executing default option action:', error);
        }
    };


    const executeButtonAction = async (actionStr: string, buttonId: string, buttonElement: HTMLButtonElement) => {
        try {
            const actionFn = new Function('method', 'isActive', 'button', actionStr);

            // !!!REQUIRED "await"
            // "customMethods" may be asynchronous
            const result = await actionFn(exposedMethods(), !activeButtons[buttonId], buttonElement);  

            // If the returned result is an array, it is a dynamic option
            if (Array.isArray(result) && Object.keys(dynamicOptions).length === 0) {
                const options: FloatingButtonSelectOption[] = result.map(item => {
                    const [key, value] = Object.entries(item)[0];
                    const [label, val, onClick] = (value as string).split('{#}').map((s: string) => s.trim());
                    return { label, value: val, onClick };
                });

                // Update dynamic options
                setDynamicOptions(prev => ({
                    ...prev,
                    [buttonId]: options
                }));
            }

            // Update the button status
            const newState = !activeButtons[buttonId];
            setActiveButtons(prev => ({
                ...prev,
                [buttonId]: newState
            }));

            return result;
        } catch (error) {
            console.error('Error executing button action:', error);
        }
    };
    
   

    // options
    const [selectedOpt, setSelectedOpt] = useState<SelectedOption>({
        curIndex: -1,
        curValue: ''
    });
    
    // Store dynamic options
    const [dynamicOptions, setDynamicOptions] = useState<Record<string, FloatingButtonSelectOption[]>>({});
    
    const getButtonOptions = (btn: FloatingButton, buttonId: string): FloatingButtonSelectOption[] => {
        // If you are using the dynamic option and already have a cache, return the option for caching
        //---------
        if (btn.dynamicOptions && dynamicOptions[buttonId]) {
            return dynamicOptions[buttonId];
        }

        // Use the static option from "props"
        //---------
        const options: FloatingButtonSelectOption[] = [];
        let index = 1;
        
        while (true) {
            const optionKey = `onSelect__${index}`;
            if (!(optionKey in btn)) break;
            
            const [label, value, onClick] = btn[optionKey].split('{#}').map((s: string) => s.trim());
            options.push({ label, value, onClick });
            index++;
        }

        return options;
    };

    const handleExecuteButtonSelect = (buttonId: string, option: FloatingButtonSelectOption, index: number, value: string, isDefaultSelection: boolean = false) => {

        if (option.value === "cancel") {
            setSelectedOpt(prev => {
                const newLabels = { ...prev };
                delete newLabels[buttonId]; // Deletes the saved selected label, which displays the default label
                return {
                    ...newLabels,
                    curIndex: index,
                    curValue: value
                };
            });

        } else {
            setSelectedOpt(prev => ({
                ...prev,
                [buttonId]: option.label,
                curIndex: index,
                curValue: value
            }));
        }

            
        // The button action is performed and the drop-down menu is closed only when it is not the default selection
        if (!isDefaultSelection) {
            executeButtonAction(option.onClick, buttonId, document.getElementById(buttonId) as HTMLButtonElement);
            
            // Close the drop-down
            closeDropdowns();
        }

    };

    // click outside
    useClickOutside({
        enabled: Object.values(activeButtons).some(isActive => isActive),
        isOutside: (event: any) => {
            return event.target.closest('.toolkit-select-wrapper') === null;
        },
        handle: (event: any) => {
            closeDropdowns();
        }
    }, [toolkitBtnsRef, activeButtons]);

 
    
    //================================================================
    // Conversation History
    //================================================================
    const conversationHistory = useRef<Array<MessageDetail>>([]);
    const updateConversationHistory = (newMessage: MessageDetail) => {
        const maxLength = args().maxHistoryLength || 20;

        // Add new messages to your history
        conversationHistory.current.push(newMessage);

        // If the maximum length is exceeded, the oldest record is deleted
        if (conversationHistory.current.length > maxLength) {
            const removeCount = conversationHistory.current.length - maxLength;
            conversationHistory.current = conversationHistory.current.slice(removeCount);
        }

    };


    //================================================================
    // normal request
    //================================================================
    const abortController = useRef<any>(new AbortController());  // DO NOT USE "useState()"

    const abortNormalRequest = () => {
        console.log('--> Abort stream');
        abortController.current.abort();
    };

    const reconnectNormalRequest = () => {
        console.log('--> Reconnect stream');
        abortController.current = new AbortController();
    };


    //================================================================
    // stream controller
    //================================================================
    const abortStream = () => {
        console.log('--> Abort stream');
        streamController.abort();
    };

    // parse chunk data
    const parseChunkData = async (chunk: string, index: number, complete: boolean) => {

        // Store the final content and bind it to loading
        let lastContent: string = '';

        try {

            // Streaming data is JSON split by rows
            const lines = chunk.split("\n").filter(line => line.trim() !== "");

    
            for (const line of lines) {

                // debug
                if (args().debug && index < 10 && !complete) {
                    console.log(`--> (${index}) ${line}`);
                }

                // Send the streamed data to the front end
                if (line.indexOf('[DONE]') < 0) {

                    // STEP 1: 
                    // ------
                    // Create a JSON string
                    const _content = `${line.replace(/^data:\s*/, '')}`;

                    // Determine whether it is in JSON format
                    if (!isJSON(_content)) {
                        console.log('--> [ERROR] Wrong JSON format');

                        //reset SSE
                        closeSSE();
                        break; // Exit the loop
                    }

                    // STEP 2: 
                    // ------
                    // Response body
                    const rootObj = JSON.parse(_content);

                    //*******
                    // for Ollama API (STREAM END)
                    //*******
                    if (typeof rootObj.done !== 'undefined') {
                        if (rootObj.done === true) {
                            console.log('--> [DONE]');

                            //reset SSE
                            closeSSE();
                            break; // Exit the loop
                        }
                    }

                    //*******
                    // for OpenAI API / other JSON structures, parse uniformly via responseExtractor
                    //*******
                    const rawPath = args().responseExtractor || "data.choices.0.delta.content";
                    const path = rawPath.startsWith('data.') ? rawPath.substring('data.'.length) : rawPath;
                    let content = getValueByPath(rootObj, path);

                    // STEP 3: 
                    // ------
                    // 🚀 !! IMPORTANT: Skip the error content
                    if (typeof content === 'undefined') {
                        continue;
                    }


                    // STEP 4: 
                    // ------
                    // Update thinking state
                    if (content.includes('<think>')) {
                        setThinking(true);
                    }
                    if (content.includes('</think>')) {
                        setThinking(false);
                    }
             

                    // STEP 5: 
                    // ------
                    // Replace with a valid label
                    content = fixHtmlTags(content, args().withReasoning, args().reasoningSwitchLabel);



                    // STEP 6: 
                    // ------
                    // By updating the stream text, you can update the UI
                    tempLastContent.current += content;
                    lastContent += content;


                    // STEP 7: 
                    // ------
                    let parsedContent = tempLastContent.current;
                    
                    // If a render parser exists, it is used to process the string
                    if (typeof args().renderParser === 'function') {
                        parsedContent = await args().renderParser(parsedContent);
                    } 

            
                    // STEP 8: 
                    // ------
                    // Real-time output
                    if (args().withReasoning) {
                        setTempAnimText(formatLatestDisplayContent(parsedContent));
                    } else {
                        if (!thinking) {
                            setTempAnimText(formatLatestDisplayContent(parsedContent));
                        }
                    }

                    // STEP 9: 
                    // ------
                    // Scroll to the bottom
                    scrollToBottom();


                } else {
                    console.log('--> [DONE]');

                    //reset SSE
                    closeSSE();

                    break; // Exit the loop
                }

            }
        } catch (error) {
            console.error('--> Error processing chunk:', error);
        }


   
        let latestRes = complete ? lastContent : tempLastContent.current;
                    
        // If a render parser exists, it is used to process the string
        if (typeof args().renderParser === 'function') {
            latestRes = await args().renderParser(latestRes);
        } 

        return formatLatestDisplayContent(latestRes);

    };

    // Store the final content and bind it to loading
    const tempLastContent = useRef<string>('');
    const streamController = useStreamController({
        onChunk: async (chunk: string, index: number) => {

            // start (Execute it only once)
            if (index === 0) {
                // hide loader
                setLoaderDisplay(false);
            }
           
            //
            const res = await parseChunkData(chunk, index, false);

            //
            args().onChunk?.(inputContentRef.current, res, conversationHistory.current);
        },
        onComplete: async (lastContent: string) => {
            console.log('--> Stream complete');
            
            const res = await parseChunkData(lastContent, 0 , true);

  
            // Display AI reply
            displayMessage(args().answerNameRes, res);

            //
            args().onComplete?.(inputContentRef.current, res, conversationHistory.current);

            //
            closeSSE();
        },
        onError: (error) => {
            console.error('--> Stream error:', error);
            closeSSE();
        },
        onAbort: () => {
            console.log('--> Stream aborted');
            closeSSE();
        }
    });


    //================================================================
    // Core
    //================================================================
    const closeSSE = () => {

        // reset 
        setTempAnimText('');
        tempLastContent.current = '';


        // Stop the timer
        if (timer.current) clearInterval(timer.current);
        timer.current = null;

        // loading
        setLoading(false);


    }
    const displayMessage = (sender: string | undefined, content: string) => {
        const timestamp = new Date().toLocaleTimeString(); // Get the current time
        const tag = sender === args().answerNameRes ? '[reply]' : '';
        
        const newMessage: MessageDetail = { 
            sender: sender || '', 
            timestamp, 
            content, 
            tag 
        };

        // update messages history
        updateConversationHistory(newMessage);
        
        // Update the message list state
        setMsgList((prevMessages) => [...prevMessages, newMessage]);

        // Auto copy reply if enabled
        if (args().autoCopyReply && sender === args().answerNameRes) {
            chatboxCopyToClipboard(content);
        }

    };

    const sendMessage = async () => {
        if (rootRef.current === null || msgContainerRef.current === null || msInput.current === null) return;

        const messageInput: any = msInput.current;
        let message = htmlEncode(messageInput.value);

        // It fires in real time as the user enters
        // Sanitizing input is the process of securing/cleaning/filtering input data.
        if (typeof args().onInputCallback === 'function') {
            message = await args().onInputCallback(message);
        }

        if (message.trim() === '') {
            return;
        }

        // Start the timer
        setElapsedTime(0); // Reset elapsed time
        timer.current = setInterval(() => {
            setElapsedTime((prev) => prev + 1); // Increment elapsed time every second
        }, 1000);

        // user message

        let inputMsg = `${message}`;
        // If a render parser exists, it is used to process the string
        if (typeof args().renderParser === 'function') {
            inputMsg = await args().renderParser(inputMsg);
        } 

        displayMessage(args().questionNameRes, inputMsg); // Display user message

        // loading
        setLoading(true);

        // show loader
        setLoaderDisplay(true);


        // clear
        if (inputContentRef.current) inputContentRef.current.clear();

        try {
            const res: any = await mainRequest(message);

            // reply (normal)
            //======================
            if (!res.useStreamRender) {
                const reply = res.reply;
                let replyRes = `${reply}`;

                // If a render parser exists, it is used to process the string
                if (typeof args().renderParser === 'function') {
                    replyRes = await args().renderParser(replyRes);
                } 

                displayMessage(args().answerNameRes, replyRes); // Display AI reply


                //
                args().onChunk?.(inputContentRef.current, replyRes, conversationHistory.current);
                args().onComplete?.(inputContentRef.current, replyRes, conversationHistory.current);

                //reset SSE
                closeSSE();
            }


        } catch (error) {

            // loading
            setLoading(false);

            // Stop the timer
            clearInterval(timer.current);
            timer.current = null;

            console.error('--> Error sending message:', error);
            displayMessage(args().answerNameRes, `Error: Unable to send message: ${String(error)}`); // Display AI reply

        }

        // clear
        messageInput.value = '';

        // reset textarea height
        if (inputContentRef.current) inputContentRef.current.resetHeight();
        

        // Scroll to the bottom
        scrollToBottom();
    };

    const handleClickSafe = useDebounce(() => {
        sendMessage();
    }, 300, []);

    const handleClose = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setShow(false);

    };


    const mainRequest = async (msg: string) => {

        const currentStreamMode: boolean | undefined = args().isStream;

        // Update stream mode
        setEnableStreamMode(currentStreamMode as boolean);

        try {

            // Parse and interpolate request body template
            let requestBodyRes = JSON.parse(
                (args().requestBodyTmpl || '{}')
                .replace(/\{model\}/g, args().model)
                .replace(/\{message\}/g, msg)
                .replace(/\{chatId\}/g, chatId)
                .replace(/\{token\}/g, tokenFormat(args().token) as string)
            );

            // 
            // If a formatter function exists, it is used to process the request body
            if (typeof args().requestBodyFormatter === 'function') {
                requestBodyRes = await args().requestBodyFormatter(requestBodyRes, args().latestContextData, conversationHistory.current);
            } 

            // Scroll to the bottom
            setTimeout(() => {
                // Scroll to the bottom
                scrollToBottom();
            }, 500);

            {/* ======================================================== */}
            {/* ===================== CUSTOM REQUEST  ================== */}
            {/* ======================================================== */}
            // Check if customRequest exists and use it
            if (typeof args().customRequest === 'function') {

                // Update stream mode
                setEnableStreamMode(false);

                let customResponse: any = await args().customRequest(
                    msg, 
                    {
                        requestBody: requestBodyRes,
                        apiUrl: args().requestApiUrl || '',
                        headers: args().headerConfigRes
                    },
                    customMethodsRef.current,
                    conversationHistory.current
                );
                const { content, isStream } = customResponse;
                let contentRes: any = content;



                // Update stream mode
                setEnableStreamMode(isStream);

                // NORMAL
                //++++++++++++++++++++++++++++++++++++++++++++++++
                if (!isStream && typeof contentRes === 'string' && contentRes.trim() !== '') {
                    // Replace with a valid label 
                    contentRes = fixHtmlTags(contentRes as string, args().withReasoning, args().reasoningSwitchLabel);

                    return {
                        reply: formatLatestDisplayContent(contentRes),
                        useStreamRender: false
                    };
                }
                
                // STREAM
                //++++++++++++++++++++++++++++++++++++++++++++++++
                if (isStream && isStreamResponse(contentRes as never)) {
                    // Start streaming
                    await streamController.start(contentRes as never);


                    return {
                        reply: tempAnimText, // The final content will be in tempAnimText
                        useStreamRender: true
                    };
                }


                // DEFAULT
                //++++++++++++++++++++++++++++++++++++++++++++++++
                if (contentRes === null) {
                    // Update stream mode
                    setEnableStreamMode(currentStreamMode as boolean);
                }

            }

            if (currentStreamMode) {
                {/* ======================================================== */}
                {/* ======================== STREAM  ====================== */}
                {/* ======================================================== */}
                const response: any = await fetch((args().requestApiUrl || ''), {
                    method: "POST",
                    body: JSON.stringify(requestBodyRes),
                    headers: args().headerConfigRes
                });

                if (!response.ok) {
                    const _errInfo = `[ERROR] HTTP Error ${response.status}: ${response.statusText}`;
                    
                    setTempAnimText(_errInfo);

                    // hide loader
                    setLoaderDisplay(false);


                    return {
                        reply: _errInfo,
                        useStreamRender: false
                    };
                }
                
                // Start streaming
                await streamController.start(response);

                return {
                    reply: tempAnimText, // The final content will be in tempAnimText
                    useStreamRender: true
                };


            } else {
                {/* ======================================================== */}
                {/* ======================== NORMAL  ====================== */}
                {/* ======================================================== */}

                const response = await fetch((args().requestApiUrl || ''), {
                    method: "POST",
                    headers: args().headerConfigRes,
                    body: JSON.stringify(requestBodyRes),
                    signal: abortController.current.signal
                });

                if (!response.ok) {
                    const _errInfo = `[ERROR] HTTP Error ${response.status}: ${response.statusText}`;

                    // hide loader
                    setLoaderDisplay(false);

                    return {
                        reply: _errInfo,
                        useStreamRender: false
                    };
                }
               
                const jsonResponse = await response.json();


                // hide loader
                setLoaderDisplay(false);

                // Use responseExtractor to parse the returned content uniformly
                const rawPath = args().responseExtractor || "data.choices.0.delta.content";
                const path = rawPath.startsWith('data.') ? rawPath.substring('data.'.length) : rawPath;
                let content = getValueByPath(jsonResponse, path);

                // Replace with a valid label
                content = fixHtmlTags(content, args().withReasoning, args().reasoningSwitchLabel);

                
                return {
                    reply: formatLatestDisplayContent(content),
                    useStreamRender: false
                };

            }



        } catch (error) {
            const _err = `--> Error in mainRequest: ${error}`;
            console.error(_err);

            //reset SSE
            closeSSE();
            
            return {
                reply: _err,
                useStreamRender: false
            };
        }

    };


    // exposes the following methods
    useImperativeHandle(
        propsRef.current.contentRef,
        () => exposedMethods(),
        [propsRef.current.contentRef, inputContentRef, msInput, msgList],
    );



    // Update ref when props change
    useEffect(() => {
        propsRef.current = props;
    }, [props]);

    useEffect(() => {
        if (props.requestConfig) {
            configRef.current = props.requestConfig;
        }
    }, [props.requestConfig]);
    
    useEffect(() => {
        contextDataRef.current = props.contextData;
    }, [props.contextData]);

    useEffect(() => {
        if (Array.isArray(props.defaultMessages) && props.defaultMessages.length > 0) {
            // Update the default messages
            setMsgList(props.defaultMessages);
        }
    }, [props.defaultMessages]);

    useEffect(() => {
        if (Array.isArray(props.defaultMessages) && props.defaultMessages.length > 0) {
            // Update the default messages
            setMsgList(props.defaultMessages);
        }
    }, [props.defaultMessages]);

    useEffect(() => {
        // Bind chatboxCopyToClipboard to window so it can be called in HTML code
        (window as any).chatboxCopyToClipboard = chatboxCopyToClipboard;
      }, []);



    // Initialize the default value of toolkit buttons
    useEffect(() => {
        if (args().toolkitButtons) {
            args().toolkitButtons.forEach((btn: FloatingButton, index: number) => {
                const _id = `${args().prefix || 'custom-'}chatbox-btn-tools-${chatId}${index}`;

                if (btn.isSelect) {
                    
                    if (!initializedDefaults[_id] && typeof btn.defaultSelected === 'number') {
                        const options = getButtonOptions(btn, _id);

                        // If there is a default selected item, initialize the selected state
                        if (btn.defaultSelected >= 0 && btn.defaultSelected < options.length) {
                            const defaultOption = options[btn.defaultSelected];
                            if (defaultOption) {
                                // Update the selected status
                                // console.log('--> defaultOption: ', defaultOption);
                    
                                // Pass the "isDefaultSelection" parameter as true
                                handleExecuteButtonSelect(_id, defaultOption, btn.defaultSelected, defaultOption.value, true);

                                // Perform the onClick action alone
                                executeDefaultOptionAction(defaultOption.onClick, _id);
                                    

                                // Mark this button with the default value initialized
                                setInitializedDefaults(prev => ({
                                    ...prev,
                                    [_id]: true
                                }));

                            }
                        }
                    }
                } else if (btn.active) {
                    // For non-select buttons, if defaultActive is true, execute the onClick action
                    executeButtonAction(btn.onClick, _id, document.getElementById(_id) as HTMLButtonElement);
                }

             
            })
        }
    }, [chatId, args().toolkitButtons]); // It is only executed when the component is first rendered and when toolkitButtons changes



    //================================================================
    // Voice Input
    //================================================================
    const pressStartTimeRef = useRef<number>(0); // Record the time when the button was pressed.
    const DEFAULT_VOICE_REQUEST_BODY_TEMPLATE = `{
        "common": {
            "app_id": "{appId}"
        },
        "business": {
            "language": "{lang}",
            "domain": "iat",
            "accent": "mandarin",
            "dwa": "wpgs"
        },
        "data": {
            "status": 0,
            "format": "{format}",
            "encoding": "{encoding}"
        }
    }`;

    const DEFAULT_AUDIO_BODY_TEMPLATE = `{
        "data": {
            "status": 1,
            "format": "{format}",
            "encoding": "{encoding}",
            "audio": "{audioData}"
        }
    }`;

    const [isVoiceInputActive, setIsVoiceInputActive] = useState<boolean>(false); // Whether recording is in progress
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioStreamRef = useRef<MediaStream | null>(null);
    const voiceInputWsRef = useRef<WebSocket | null>(null);

    const audioContextRef = useRef<AudioContext | null>(null);
    const processorRef = useRef<ScriptProcessorNode | null>(null);
    const finalVoiceTextRef = useRef<string>("");
    const voiceIdleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const voiceResultTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isVoiceInputActiveRef = useRef<boolean>(false);


    // Get voice configuration
    const getVoiceConfig = (): VoiceConfig => {
        return propsRef.current.voiceConfig || {};
    };

/**
     * Shared Helper: Get all available placeholders for voice templates
     */
    const getVoicePlaceholders = async () => {
        const config = getVoiceConfig();
        const dateGMT = new Date().toUTCString();
        const host = config.voiceInputHost || "custom-host.com";
        const path = config.voiceInputPath || "/custom/path";
        const apiKey = config.voiceInputApiKey || '';

        // Generate signature if needed
        let signature = '';
        if (typeof config.generateVoiceSignature === 'function') {
            signature = await config.generateVoiceSignature({
                host,
                path,
                date: dateGMT,
                apiKey: apiKey,
                apiSecret: config.voiceInputApiSecret || ''
            });
        }

        // Map all potential variables
        return {
            protocol: config.voiceInputProtocol || "wss://",
            host: host,
            path: path,
            date: dateGMT, // Standard GMT
            signature: signature,
            appId: config.voiceInputAppId || '',
            accessKeyId: apiKey,
            uuid: config.voiceInputUuid || guid(),
            utc: config.voiceInputUtc || generateUtc(),
            lang: config.voiceInputLang || 'en_us',
            format: config.voiceInputFormat || "audio/L16;rate=16000",
            samplerate: (config.voiceInputSampleRate || 16000).toString(),
            encoding: config.voiceInputEncoding || "raw"
        };
    };

    /**
     * Shared Helper: Replace {key} in a template string based on a data object
     */
    const replacePlaceholders = (template: string, data: Record<string, any>): string => {

        const { protocol, host, path, date, signature, appId, accessKeyId, uuid, utc, encoding, format, lang, samplerate, audioData } = data;


        // Replace placeholders: first replace predefined placeholders
        let result = template
            .replace(/\{protocol\}/g, protocol)
            .replace(/\{host\}/g, host)
            .replace(/\{date\}/g, encodeURIComponent(date))
            .replace(/\{path\}/g, path)
            .replace(/\{appId\}/g, appId)
            .replace(/\{accessKeyId\}/g, accessKeyId)
            .replace(/\{uuid\}/g, uuid)
            .replace(/\{utc\}/g, encodeURIComponent(utc))
            .replace(/\{encoding\}/g, encoding)
            .replace(/\{format\}/g, format)
            .replace(/\{lang\}/g, lang)
            .replace(/\{samplerate\}/g, samplerate.toString())
            .replace(/\{signature\}/g, encodeURIComponent(signature))

            // special placeholder for audio data
            .replace(/\{audioData\}/g, audioData);

        return result;
    };


    // Generate UTC time (ISO 8601 format with timezone, e.g. 2025-09-04T15:38:07+0800)
    const generateUtc = (): string => {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        // Calculate timezone offset (in minutes)
        const timezoneOffset = -now.getTimezoneOffset();
        const sign = timezoneOffset >= 0 ? '+' : '-';
        const offsetHours = Math.floor(Math.abs(timezoneOffset) / 60).toString().padStart(2, '0');
        const offsetMinutes = (Math.abs(timezoneOffset) % 60).toString().padStart(2, '0');
        const timezone = `${sign}${offsetHours}${offsetMinutes}`;
        
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezone}`;
    };


    // Generate WebSocket URL (voice input)
    const createVoiceInputWebSocketUrl = async (): Promise<string> => {
        const config = getVoiceConfig();
        const placeholders = await getVoicePlaceholders();

        // Use custom URL template or default template
        const urlTemplate = config.voiceInputUrlTemplate || "{protocol}{host}{path}?authorization={signature}&date={date}&host={host}";

        // Replace placeholders
        return replacePlaceholders(urlTemplate, placeholders);
    };

    const clearVoiceTimers = () => {
        if (voiceIdleTimeoutRef.current) {
            clearTimeout(voiceIdleTimeoutRef.current);
            voiceIdleTimeoutRef.current = null;
        }
        if (voiceResultTimeoutRef.current) {
            clearTimeout(voiceResultTimeoutRef.current);
            voiceResultTimeoutRef.current = null;
        }
    };

    useEffect(() => {
        isVoiceInputActiveRef.current = isVoiceInputActive;
    }, [isVoiceInputActive]);

    const startVoiceInput = async () => {
        const config = getVoiceConfig();
        if (!config.enableVoiceInput) return;

        try {
            // 1. Get microphone stream
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioStreamRef.current = stream;

            // 2. Initialize WebSocket
            const wsUrl = await createVoiceInputWebSocketUrl();
            const ws = new WebSocket(wsUrl);
            voiceInputWsRef.current = ws;

            // Maintain recognition text state (refer to test.js)
            let resultText = "";      // Confirmed text
            let resultTextTemp = "";  // Temporary corrected text

            ws.onopen = async () => {

                const placeholders = await getVoicePlaceholders();
                const requestBodyTmpl =
                    config.voiceInputRequestBodyTemplate ||
                    DEFAULT_VOICE_REQUEST_BODY_TEMPLATE;

                // 
                // Replace placeholders
                const finalRequestBody = replacePlaceholders(requestBodyTmpl, placeholders);

                // 
                if (isJSON(finalRequestBody)) {
                    ws.send(finalRequestBody);
                } else {
                    console.error("--> [ERROR] The property [voiceInputRequestBodyTemplate] is not a valid JSON");
                    interruptVoiceInput();
                }
            };

            ws.onmessage = (e) => {
                const jsonData = JSON.parse(e.data);

                if (jsonData.data) {
                    const data = jsonData.data;
                    const extractorTemplate = config.voiceResponseExtractor || `{{if data.result && data.result.pgs === "apd"}}resultText += resultTextTemp;{{/if}}{{resultTextTemp = getValueByPath(data, "result.ws[].cw[0].w");}}`;

                    // you could use `if (data.result && data.result.pgs === "apd") { resultText += resultTextTemp;} resultTextTemp = data.result.ws.map(w => w.cw[0].w).join("");`


                    if (extractorTemplate) {
                        try {

                            // Construct the execution function, passing in the context variables
                            // Syntax Translation: Convert {{if}} to standard JS
                            // Support: {{if}}, {{else}}, {{/if}}, and direct expressions {{...}}
                            let jsScript = extractorTemplate
                                .replace(/{{if\s+(.+?)}}/g, 'if ($1) {')
                                .replace(/{{else}}/g, '} else {')
                                .replace(/{{\/if}}/g, '}')
                                .replace(/{{(.+?)}}/g, '$1');

                            /**
                             * Sandbox Execution Environment
                             * @param data - The source data (jsonData.data)
                             * @param resultText - Confirmed text from previous turns
                             * @param resultTextTemp - Temporary text from the current turn
                             * @param getValueByPath - Helper for safe property access
                             */
                            const resolver = new Function('data', 'resultText', 'resultTextTemp', 'getValueByPath', `
                                try {
                                    ${jsScript}
                                } catch (e) {
                                    console.error("Voice Template Runtime Error:", e);
                                }
                                // Crucial: Return updated values to synchronize with component scope
                                return { resultText, resultTextTemp };
                            `);

                            // Execute and update local variables
                            const updated = resolver(data, resultText, resultTextTemp, getValueByPath);
                            resultText = updated.resultText;
                            resultTextTemp = updated.resultTextTemp;

                        } catch (err) {
                            console.error("--> [ERROR] Failed to parse property: [voiceResponseExtractor]");
                            interruptVoiceInput();
                        }
                    }

                    //
                    const currentFullText = resultText + resultTextTemp;

                    // Store to Ref for use by stopVoiceInput
                    finalVoiceTextRef.current = currentFullText;

                    // After recognition result is available, start/refresh the "post-result timeout" timer
                    if (currentFullText) {
                        const endTimeoutSeconds = typeof config.voiceInputEndTimeoutSeconds === 'number'
                            ? config.voiceInputEndTimeoutSeconds
                            : 5;
                        if (voiceResultTimeoutRef.current) {
                            clearTimeout(voiceResultTimeoutRef.current);
                        }
                        voiceResultTimeoutRef.current = setTimeout(() => {
                            if (isVoiceInputActiveRef.current) {
                                stopVoiceInput();
                            }
                        }, endTimeoutSeconds * 1000);
                    }

                    // Fill the input box in real time
                    if (inputContentRef.current) {
                        inputContentRef.current.set(currentFullText);
                    }
                }
                if (jsonData.code === 0 && jsonData.data.status === 2) {
                    ws.close();
                }
            };

            // 3. Capture raw PCM audio (16k)
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            const source = audioContext.createMediaStreamSource(stream);
            const processor = audioContext.createScriptProcessor(4096, 1, 1);

            source.connect(processor);
            processor.connect(audioContext.destination);
            
            audioContextRef.current = audioContext;
            processorRef.current = processor;

            processor.onaudioprocess = (e) => {
                if (ws.readyState !== WebSocket.OPEN) return;
                
                const inputData = e.inputBuffer.getChannelData(0);
                // Convert Float32 to Int16 PCM
                const outData = new Int16Array(inputData.length);
                for (let i = 0; i < inputData.length; i++) {
                    const s = Math.max(-1, Math.min(1, inputData[i]));
                    outData[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
                }

                // Send intermediate frame (status: 1)
                const base64Audio = uint8arrayToBase64Str(outData.buffer as never);

                // Prepare placeholder data (including existing placeholders and the latest audioData)
                
                getVoicePlaceholders().then(placeholders => {
                    const audioDataMap = {
                        ...placeholders,
                        audioData: base64Audio
                    };

                    const audioTemplate = config.voiceInputAudioBodyTemplate || DEFAULT_AUDIO_BODY_TEMPLATE;
                    const finalAudioBody = replacePlaceholders(audioTemplate, audioDataMap);

                    //
                    if (isJSON(finalAudioBody)) {
                        ws.send(finalAudioBody);
                    } else {
                        console.error("--> [ERROR] The property [voiceInputAudioBodyTemplate] is not a valid JSON");
                        interruptVoiceInput();
                    }
                });

            };

            setIsVoiceInputActive(true);
            console.log('--> The voice start');
            config.onVoiceInputStart?.();

            // Start the "no recognition after start" timeout timer
            const idleTimeoutSeconds = typeof config.voiceInputIdleTimeoutSeconds === 'number'
                ? config.voiceInputIdleTimeoutSeconds
                : 10;
            if (voiceIdleTimeoutRef.current) {
                clearTimeout(voiceIdleTimeoutRef.current);
            }
            voiceIdleTimeoutRef.current = setTimeout(() => {
                if (isVoiceInputActiveRef.current && !finalVoiceTextRef.current) {
                    stopVoiceInput();
                }
            }, idleTimeoutSeconds * 1000);

        } catch (error) {
            console.error('--> The voice input failed to start:', error);
            config.onVoiceInputError?.(error as Error);
        }

    };

    const stopVoiceInput = async () => {
        const config = getVoiceConfig();

        // If voice input is already inactive, return directly to avoid duplicate cleanup
        if (!isVoiceInputActiveRef.current) {
            return;
        }

        clearVoiceTimers();

        // 1. Send WebSocket end frame
        if (voiceInputWsRef.current && voiceInputWsRef.current.readyState === WebSocket.OPEN) {
            voiceInputWsRef.current.send(JSON.stringify({
                data: { status: 2, format: "audio/L16;rate=16000", encoding: "raw", audio: "" },
            }));
        }

        // 2. Stop audio capture
        if (processorRef.current) {
            processorRef.current.disconnect();
            processorRef.current = null;
        }
        if (audioContextRef.current) {
            audioContextRef.current.close();
            audioContextRef.current = null;
        }

        // 3. Stop microphone stream
        if (audioStreamRef.current) {
            audioStreamRef.current.getTracks().forEach(track => track.stop());
            audioStreamRef.current = null;
        }

        setIsVoiceInputActive(false);
        // No need to call setVal here because onmessage already updates it in real time
        console.log('--> The voice end');
        config.onVoiceInputEnd?.(finalVoiceTextRef.current); 
    };


    // Interrupt voice input
    const interruptVoiceInput = () => {
        const config = getVoiceConfig();
        clearVoiceTimers();
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
        if (audioStreamRef.current) {
            audioStreamRef.current.getTracks().forEach(track => track.stop());
            audioStreamRef.current = null;
        }
        if (voiceInputWsRef.current) {
            voiceInputWsRef.current.close();
            voiceInputWsRef.current = null;
        }
        setIsVoiceInputActive(false);
        console.error('--> The voice input was interrupted.');
        config.onVoiceInputInterrupt?.();
    };

    // Cleanup voice resources
    useEffect(() => {
        return () => {
            interruptVoiceInput();
        };
    }, []);


    return (
        <>

        <RootPortal show={true} usePortal={args().usePopUp} containerClassName="Chatbox">

            {/**------------- BUBBLE -------------*/}
            {args().bubble ? <>
                <div className={`${args().prefix || 'custom-'}chatbox-circle`} onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShow(true);
                }}
                >
                    <span dangerouslySetInnerHTML={{ __html: `${args().bubbleLabel}` }}></span>
                </div>
            </> : null}
            {/**------------- BUBBLE -------------*/}

            {/**------------- CLOSE BUTTON -------------*/}
            <button style={{ display: show ? 'block' : 'none' }} className={`${args().prefix || 'custom-'}chatbox-close`} aria-label={`${args().closeLabel || 'Close'}`} data-balloon-pos="left"  tabIndex={-1} onClick={handleClose}>
                <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#000000"><path d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z" fill="#000" /><path d="M328 340.8l32-31.2 348 348-32 32z" fill="#000" /></svg>

            </button>
            {/**------------- CLOSE BUTTON------------- */}


            <div style={{ display: show ? 'block' : 'none' }} className={`${args().prefix || 'custom-'}chatbox-container ${typeof args().usePopUp !== 'undefined' && args().usePopUp === false ? 'popup-none' : ''}`} ref={rootRef}>

                {/**------------- NO DATA -------------*/}
                {msgList.length === 0 ? <>

                    <div className={`d-flex flex-column align-items-center justify-content-center ${hasQuestion() ? '' : 'h-50'}`}>
                        <p>
                            <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#858297" strokeWidth="1.5" />
                                <path opacity="0.5" d="M8 10.5H16" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                                <path opacity="0.5" d="M8 14H13.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>

                        </p>
                        <p className="text-primary" dangerouslySetInnerHTML={{ __html: `${args().noDataPlaceholder}` }}></p>

                        {/** DEFAULT QUESTIONS */}
                        {hasQuestion() && (
                            <div className="default-questions">
                                <div className="default-questions-title" dangerouslySetInnerHTML={{ __html: `${(args().defaultQuestionsRes as QuestionData).title}` }}></div>
                                {(args().defaultQuestionsRes as QuestionData).list?.map((question: string, index: number) => (
                                    <div 
                                        key={index}
                                        className="default-question-item"
                                        onClick={() => handleQuestionClick(question)}
                                        dangerouslySetInnerHTML={{ __html: `${question}` }}
                                    />
                                ))}
                            </div>
                        )}
                        {/** /DEFAULT QUESTIONS */}

                    </div>


                </> : null}
                {/**------------- /NO DATA -------------*/}
          

                {/**------------- MESSAGES LIST -------------*/}
                {/** Prevent excessive height overflow */}
                <div className={`messages ${msgList.length === 0 ? 'd-none' : ''}`} ref={msgContainerRef}>

                    {msgList.map((msg, index) => {

                        const copyTargetId = `${args().prefix || 'custom-'}chatbox-content--${chatId}${index}`;
                        const isAnimProgress = tempAnimText !== '' && msg.sender !== args().questionNameRes && index === msgList.length - 1 && loading;
                        const hasAnimated = animatedMessagesRef.current.has(index);
                        
                        // Mark the message as animated;
                        animatedMessagesRef.current.add(index);

                        const timeShow = `<span class="qa-timestamp">${msg.timestamp}</span>${args().showCopyBtn && msg.tag?.indexOf('[reply]') >= 0 ?(`<button class="copy-btn" aria-label="${args().copyLabel || 'Copy'}" data-balloon-pos="up" onclick="window.chatboxCopyToClipboard(document.querySelector('#${copyTargetId} .qa-content-inner').innerHTML)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z"/><path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/></svg></button>`) : ''}`;

                        return <div key={index} className={msg.tag?.indexOf('[reply]') < 0 ? 'request' : 'reply'} style={{ display: isAnimProgress ? 'none' : '' }}>
                            <div className="qa-name" dangerouslySetInnerHTML={{ __html: `${msg.sender}` }}></div>


                            {msg.sender === args().questionNameRes ? <>
                                <div className="qa-content" id={copyTargetId} dangerouslySetInnerHTML={{ __html: `<div class="qa-content-inner">${msg.content}</div> ${timeShow}` }}></div>
                            </> : <>

                                {enableStreamMode ? <>
                                    <div className="qa-content" id={copyTargetId} dangerouslySetInnerHTML={{ __html: `<div class="qa-content-inner">${msg.content}</div> ${timeShow}` }}></div>
                                </> : <>
                                    <div className="qa-content" id={copyTargetId}>
                                        {hasAnimated ? (
                                            <div dangerouslySetInnerHTML={{ __html: `<div class="qa-content-inner">${msg.content}</div> ${timeShow}` }}></div>
                                        ) : (
                                            <TypingEffect
                                                onUpdate={() => {
                                                    scrollToBottom();
                                                }}
                                                content={`<div class="qa-content-inner">${msg.content}</div> ${timeShow}`}
                                                speed={10}
                                            />
                                        )}
                                        
                                    </div>
                                </>}
                            </>}

                        </div>
                    }
                    )}



                    {/* ======================================================== */}
                    {/* ====================== STREAM  begin ==================== */}
                    {/* ======================================================== */}
                    {enableStreamMode ? <>
                        {/** ANIM TEXT (has loading) */}
                        {loading ? <>
                            <div className="reply reply-waiting">
                                <div className="qa-name">
                                    <span dangerouslySetInnerHTML={{ __html: `${args().answerNameRes}` }} />
                                    {loaderDisplay ? <>
                                        <div className="msg-dotted-loader-container">
                                            <span className="msg-dotted-loader"></span>
                                            <span className="msg-dotted-loader-text">{args().sendLoadingLabel} ({elapsedTime}s)</span>
                                        </div>
                                    </> : null}

                                </div>

                                <div className="qa-content">
                                    <div className="qa-content" dangerouslySetInnerHTML={{ __html: `${tempAnimText}` }}></div>
                                </div>
                            </div>
                        </> : null}
                        {/** /ANIM TEXT (has loading) */}
                    </> : null}
                    {/* ======================================================== */}
                    {/* ====================== STREAM   end ===================== */}
                    {/* ======================================================== */}




                    {/* ======================================================== */}
                    {/* ====================== NORMAL  begin ==================== */}
                    {/* ======================================================== */}
                    {!enableStreamMode ? <>
                        {/** ANIM TEXT (has loading) */}
                        {loading ? <>
                            <div className="reply reply-waiting">
                                <div className="qa-name">
                                    <span dangerouslySetInnerHTML={{ __html: `${args().answerNameRes}` }} />
                                    <div className="msg-dotted-loader-container">
                                        <span className="msg-dotted-loader"></span>
                                        <span className="msg-dotted-loader-text">{args().sendLoadingLabel} ({elapsedTime}s)</span>
                                    </div>

                                </div>

                                {tempAnimText !== '' ? <>
                                    <div className="qa-content">
                                        <div className="qa-content" dangerouslySetInnerHTML={{ __html: `${tempAnimText}` }}></div>
                                    </div>
                                </> : null}

                            </div>
                        </> : null}
                        {/** /ANIM TEXT (has loading) */}
                    </> : null}
                    {/* ======================================================== */}
                    {/* ====================== NORMAL   end ===================== */}
                    {/* ======================================================== */}


                    {/**------------- NEW CHAT BUTTON -------------*/}
                    {args().newChatButton && msgList.length > 0 && !loading && (
                        <div className="newchat-btn">
                            <button 
                                id={`${args().prefix || 'custom-'}chatbox-btn-new-${chatId}`}
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => executeButtonAction(args().newChatButton.onClick, `${args().prefix || 'custom-'}chatbox-btn-new-${chatId}`, e.currentTarget)}
                            >
                                <span dangerouslySetInnerHTML={{ __html: args().newChatButton?.label || '' }}></span>
                            </button>
                        </div>
                    )}
                    {/**------------- /NEW CHAT BUTTON -------------*/}



                </div>
                {/**------------- /MESSAGES LIST -------------*/}




                {/**------------- CONTROL AREA -------------*/}
                <div className={`msgcontrol ${focused ? 'focus' : ''}`}>

                    <Textarea
                        ref={msInput}
                        contentRef={inputContentRef}
                        controlClassName="messageInput-control"
                        wrapperClassName="messageInput"
                        placeholder={args().placeholder}
                        disabled={loading ? true : false}
                        onKeyDown={(event: React.KeyboardEvent) => {
                            // line breaks
                            if ((event.key === 'Enter' || event.key === 'NumpadEnter') && (event.ctrlKey || event.metaKey)) {
                                return;
                            }
                            
                            if ((event.key === 'Enter' || event.key === 'NumpadEnter') && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
                                event.preventDefault(); // Prevent line breaks
                                handleClickSafe();
                            }

                        }}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement> | React.KeyboardEvent<HTMLTextAreaElement> | null, el: HTMLTextAreaElement | null, value: string) => {
                            args().onInputChange?.(inputContentRef.current, value);
                        }}
                        onFocus={() => {
                            setFocused(true);
                        }}
                        onBlur={() => {
                            setFocused(false);
                        }}
                        rows={args().defaultRows || 2}
                        autoSize
                        autoSizeMaxHeight={200}
                    />


                    {loading ? <>
                        <button
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                e.stopPropagation();

                                if (!enableStreamMode) {
                                    // normal request
                                    abortNormalRequest();
                                } else {
                                    // stop stream
                                    abortStream();
                                }

                                //reset SSE
                                closeSSE();
                            }}
                            className="is-suspended"
                            dangerouslySetInnerHTML={{ __html: `${args().stopLabel || '<svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="#1C274C"/></svg>'}` }}
                        ></button>
                    </> : <>
                        {/* Voice input button (microphone icon) */}
                        {(() => {
                            const voiceConfig = getVoiceConfig();
                            const enableVoiceInput = voiceConfig?.enableVoiceInput || false;
                            const holdToTalk = typeof voiceConfig?.holdToTalk === 'undefined' ? true : voiceConfig.holdToTalk;

                            if (enableVoiceInput) {

                                // Helper to stop recording safely
                                const handleActionStart = (e: React.SyntheticEvent) => {
                                    if (loading) return;
                                    if (e.cancelable) e.preventDefault();
                                    
                                    pressStartTimeRef.current = Date.now();
                                    
                                    if (!isVoiceInputActive) {
                                        startVoiceInput();
                                    }
                                };

                                const handleActionStop = (e: React.SyntheticEvent) => {
                                    if (e.cancelable) e.preventDefault(); 
                                    
                                    const duration = Date.now() - pressStartTimeRef.current;
                                
                                    // If the press time is extremely short (e.g. less than 100ms), 
                                    // it means that it is a mistakeal touch or extremely fast
                                    // Add a small delay to execute to ensure that startVoiceInput has finished initializing
                                    if (duration < 150) { // > 50, < 160
                                        setTimeout(() => {
                                            stopVoiceInput();
                                        }, 100);
                                        return;
                                    }

                                    stopVoiceInput();

                                };

                                return (
                                    <div className={`${args().prefix || 'custom-'}chatbox-voice-input-btn-wrapper ${isVoiceInputActive ? 'active' : ''}`}>
                                        {isVoiceInputActive ? <span></span> : null}
                                        <button
                                            // CSS touch-action is crucial here
                                            style={!holdToTalk ? undefined : { touchAction: 'none', userSelect: 'none' }}

                                            // Mobile & Desktop 
                                            // (using Pointer to avoid the stop problem caused by mixing Touch and Mouse)
                                            onPointerDown={holdToTalk ? handleActionStart : undefined}
                                            onPointerUp={holdToTalk ? handleActionStop : undefined}
                                            onPointerCancel={holdToTalk ? handleActionStop : undefined}
                                            onPointerLeave={holdToTalk ? handleActionStop : undefined}
                                            onContextMenu={(e) => e.preventDefault()}
                                            onClick={(e: React.MouseEvent) => {
                                                e.preventDefault();
                                                e.stopPropagation();

                                                // Only use the old click logic if hold-to-talk is not enabled
                                                if (!holdToTalk) {
                                                    if (isVoiceInputActive) {
                                                        stopVoiceInput();
                                                    } else {
                                                        startVoiceInput();
                                                    }
                                                }
                                            }}
                                            className={`${args().prefix || 'custom-'}chatbox-voice-input-btn`}
                                            disabled={loading}
                                        >
                                            <svg fill="currentColor" width="20px" height="20px" viewBox="0 0 472.61 472.61">
                                                <g>
                                                    <g>
                                                        <path d="M388.685,131.399v79.298c0,45.078-18.644,88.106-51.144,118.048c-31.231,28.769-71.673,42.808-113.827,39.231
    c-78.384-6.432-139.788-73.144-139.788-151.866v-84.711H64.233v84.711c0,88.895,69.345,164.222,157.865,171.5
    c1.46,0.12,2.907,0.096,4.365,0.178v65.129h-89.644v19.692H335.8v-19.692h-89.644v-65.173
    c38.858-2.221,75.401-17.504,104.731-44.519c36.539-33.654,57.491-81.961,57.491-132.529v-79.298H388.685z"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M236.31,0c-56.257,0-101.862,45.603-101.862,101.86v5.395h55.458v19.692h-55.458v27.259h55.458v19.692h-55.458v42.211
    c0,56.26,45.605,101.863,101.862,101.863c56.256,0,101.861-45.603,101.861-101.863V101.86C338.171,45.603,292.566,0,236.31,0z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>

                                );

                            }
                            return null;
                        })()}
                        
                        
                        {/* Original send button */}
                        <button
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                e.stopPropagation();

                                // normal request
                                if (!enableStreamMode) {
                                    if (abortController.current.signal.aborted) {
                                        reconnectNormalRequest();
                                    }
                                }

                                handleClickSafe();
                            }}
                            dangerouslySetInnerHTML={{ __html: `${args().sendLabel}` }}
                        ></button>
                    </>}


                </div>
                {/**------------- /CONTROL AREA -------------*/}



                {/**------------- SEND LOADING -------------*/}
                {args().sendLoading ? <div className="loading"><div style={{ display: loading ? 'block' : 'none' }}><PureLoader prefix={args().prefix} customClassName="w-100" txt="" /></div></div> : null}
                {/**------------- /SEND LOADING -------------*/}


                {/**------------- TOOLKIT BUTTONS -------------*/}
                {args().toolkitButtons && args().toolkitButtons.length > 0 && (
                    <div className="toolkit-btns" ref={toolkitBtnsRef}>
                        {args().toolkitButtons.map((btn: FloatingButton, index: number) => {
                            const _id = `${args().prefix || 'custom-'}chatbox-btn-tools-${chatId}${index}`;
                            const isActive = activeButtons[_id];

                            if (btn.isSelect) {
                                const options = getButtonOptions(btn, _id);

                                return (
                                    <div key={index} className="toolkit-select-wrapper">
                                        <button
                                            id={_id}
                                            data-value={btn.value || ''}
                                            className={`toolkit-select-btn ${isActive ? 'active' : ''} ${selectedOpt.curValue !== 'cancel' && typeof selectedOpt.curValue !== 'undefined' && selectedOpt.curValue !== '' ? 'opt-active' : ''}`}
                                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                e.preventDefault();
                                                setActiveButtons(prev => ({
                                                    ...prev,
                                                    [_id]: !prev[_id]
                                                }));

                                                //
                                                executeButtonAction(btn.onClick, _id, e.currentTarget);
                                            }}
                                        >
                                            <span dangerouslySetInnerHTML={{
                                                __html: selectedOpt[_id] as string || btn.label
                                            }}></span>
                                            
                                            <span className="toolkit-select-arrow"><svg width="5px" height="5px" viewBox="0 -4.5 20 20">
                                                <g stroke="none" strokeWidth="1" fill="none">
                                                    <g transform="translate(-180.000000, -6684.000000)" className="arrow-fill-g" fill="currentColor">
                                                        <g transform="translate(56.000000, 160.000000)">
                                                            <path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39">
                                                            </path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg></span>
                                        </button>

                                        {/* OPTIONS */}
                                        <div className={`toolkit-select-options ${isActive ? 'active' : ''}`}>

                                            {options.length > 0 ? <>
                                                {options.map((option: FloatingButtonSelectOption, optIndex: number) => (
                                                    <div
                                                        key={optIndex}
                                                        data-value={option.value || ''}
                                                        className={`toolkit-select-option ${selectedOpt.curIndex === optIndex ? 'selected' : ''}`}
                                                        onClick={() => handleExecuteButtonSelect(_id, option, optIndex, option.value)}
                                                    >
                                                        <span dangerouslySetInnerHTML={{ __html: option.label }}></span>
                                                    </div>
                                                ))}
                                            </> : <>
                                                <div className={`${args().prefix || 'custom-'}chatbox-mini-loader`}></div>
                                            </>}
                                            
                                        </div>
                                    </div>
                                );
                            }

                            // The rendering of the normal button
                            return (
                                <button
                                    key={index}
                                    id={_id}
                                    className={`${btn.value || ''} ${isActive ? 'active' : ''}`}
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => executeButtonAction(btn.onClick, _id, e.currentTarget)}
                                >
                                    <span dangerouslySetInnerHTML={{ __html: btn.label }}></span>
                                </button>
                            );
                        })}
                    </div>
                )}
                {/**------------- /TOOLKIT BUTTONS -------------*/}



            </div>

        </RootPortal>

        </>
    );


}



export default Chatbox;


