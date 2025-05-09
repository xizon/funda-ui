
import React, { useEffect, useState, useRef, useImperativeHandle } from "react";


import Textarea from 'funda-textarea';
import RootPortal from 'funda-root-portal';

import useComId from 'funda-utils/dist/cjs/useComId';
import useDebounce from 'funda-utils/dist/cjs/useDebounce';
import useThrottle from 'funda-utils/dist/cjs/useThrottle';
import useClickOutside from 'funda-utils/dist/cjs/useClickOutside';
import { htmlEncode } from 'funda-utils/dist/cjs/sanitize';


// loader
import PureLoader from './PureLoader';
import TypingEffect from "./TypingEffect";

import {
    isValidJSON,
    formatLatestDisplayContent,
    formatName,
    fixHtmlTags,
    isStreamResponse
} from './utils/func';

import useStreamController from './useStreamController';

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


export type ChatboxProps = {
    debug?: boolean;
    defaultRows?: number;
    prefix?: string;
    contentRef?: React.RefObject<any>;
    model?: string;
    baseUrl?: string;
    apiKey?: string;
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
    const timer = useRef<any>(null);


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
                                           .replace(/\'/g, '"'); //  !!! REQUIRED !!!
        const headerConfigRes = typeof _headerConfig !== 'undefined' ? (isValidJSON(_headerConfig) ? JSON.parse(_headerConfig) : undefined) : {'Content-Type':'application/json'};


        // Determine whether it is in JSON format
        if (!isValidJSON(_requestBodyTmpl)) {
            console.log('--> [ERROR] Wrong JSON format');
            _requestBodyTmpl = '{}';
            return {};
        } else {
            _isStream = JSON.parse(_requestBodyTmpl).hasOwnProperty('stream') && JSON.parse(_requestBodyTmpl).stream === true;
        }

        // Whether or not to show reasoning
        const withReasoning = typeof verbose === 'undefined' ? true : verbose;
       
        // Get latest name values
        const _answerName: string = formatName(answerName, true, currentProps);
        const _questionName: string = formatName(questionName, false, currentProps);

        // Responder deconstruction
        const responseExtractPath = responseExtractor.split('.');
  
        return {
            debug,
            defaultRows,
            prefix,
            contentRef,
            model,
            baseUrl,
            apiKey,
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
            responseExtractPath,
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


            // Extract response using the path
            const extractPath = args().responseExtractPath?.slice(1);

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
                    if (!isValidJSON(_content)) {
                        console.log('--> [ERROR] Wrong JSON format');

                        //reset SSE
                        closeSSE();
                        break; // Exit the loop
                    }

                    // STEP 2: 
                    // ------
                    // Response body
                    let result = JSON.parse(_content);

                    //*******
                    // for Ollama API (STREAM END)
                    //*******
                    if (typeof result.done !== 'undefined') {
                        if (result.done === true) {
                            console.log('--> [DONE]');

                            //reset SSE
                            closeSSE();
                            break; // Exit the loop
                        }
                    }

                    //*******
                    // for OpenAI API
                    //*******
                    if (extractPath) {
                        for (const path of extractPath) {
                            result = result[path];
                        }
                    }

                    let content = result;

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
        clearInterval(timer.current);
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
                .replace(/\{token\}/g, chatId)
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

                // Extract response using the path
                const extractPath = args().responseExtractPath?.slice(1);

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

                
                let result: any = jsonResponse;
                if (extractPath) {
                    for (const path of extractPath) {
                        result = result[path];
                    }
                }

                let content = result;

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
                        {args().verbose ? <>
                            {/* +++++++++++++++ With reasoning ++++++++++++++++++++ */}

                            {/** ANIM TEXT (has thinking) */}
                            {tempAnimText !== '' && loading ? <>
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
                            {/** /ANIM TEXT (has thinking) */}


                        </> : <>
                            {/* +++++++++++++++ Without reasoning ++++++++++++++++++++ */}
                            {/** ANIM TEXT (has loading) */}
                            {loading ? <>
                                <div className="reply reply-waiting">
                                    <div className="qa-name">
                                        <span dangerouslySetInnerHTML={{ __html: `${args().answerNameRes}` }} />
                                        {thinking ? <>
                                            <div className="msg-dotted-loader-container">
                                                <span className="msg-dotted-loader"></span>
                                                <span className="msg-dotted-loader-text">{args().sendLoadingLabel} ({elapsedTime}s)</span>
                                            </div>
                                        </> : null}

                                    </div>

                                    {tempAnimText !== '' ? <>
                                        <div className="qa-content">
                                            <div className="qa-content" dangerouslySetInnerHTML={{ __html: `${tempAnimText}` }}></div>
                                        </div>
                                    </> : null}

                                </div>
                            </> : null}
                            {/** /ANIM TEXT (has loading) */}

                        </>}

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
                            if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
                                return;
                            }
                            
                            if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
                                event.preventDefault(); // Prevent line breaks
                                handleClickSafe();
                            }

                        }}
                        onChange={(e: React.MouseEvent, el: any, value: string) => {
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


