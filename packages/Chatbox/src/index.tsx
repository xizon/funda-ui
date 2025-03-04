
import React, { useEffect, useState, useRef, useImperativeHandle } from "react";


import Textarea from 'funda-textarea';
import RootPortal from 'funda-root-portal';

import useComId from 'funda-utils/dist/cjs/useComId';
import useDebounce from 'funda-utils/dist/cjs/useDebounce';
import useThrottle from 'funda-utils/dist/cjs/useThrottle';



// loader
import PureLoader from './PureLoader';
import TypingEffect from "./TypingEffect";

import {
    isValidJSON,
    formatLatestDisplayContent,
    formatName,
    fixHtmlTags
} from './utils/func';

import useStreamController from './useStreamController';

export type MessageDetail = {
    sender: string; // Sender's name
    timestamp: string; // Time when the message was sent
    content: string; // The message content
    tag: string; // such as '[reply]'
};

export interface FloatingButton {
    label: string;  // HTML string
    value: string;
    onClick: string;
}

export interface RequestConfig {
    apiUrl: string;
    requestBody: string;  // JSON string for request body template
    responseExtractor: string;  // JSON path to extract response
}

export type ChatboxProps = {
    debug?: boolean;
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
    placeholder?: string;
    noDataPlaceholder?: string;
    requestConfig: RequestConfig;
    headerConfig?: any;
    maxHistoryLength?: number;
    contextData?: Record<string, any>;  // Dynamic JSON data
    toolkitButtons?: FloatingButton[];
    newChatButton?: FloatingButton;
    renderParser?: (input: string) => Promise<string>;
    requestBodyFormatter?: (body: any, contextData: Record<string, any>, conversationHistory: MessageDetail[]) => any;
    nameFormatter?: (input: string) => string;
    onInputChange?: (controlRef: React.RefObject<any>, val: string) => any;
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

    const [loaderDisplay, setLoaderDisplay] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [thinking, setThinking] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [msgList, setMsgList] = useState<MessageDetail[]>([]);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [tempAnimText, setTempAnimText] = useState<string>('');

    //
    const timer = useRef<any>(null);


    //================================================================
    // helper
    //================================================================
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
                setMsgList([]);
                conversationHistory.current = [];
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
            setVal: (v: string) => {
                if (inputContentRef.current) inputContentRef.current.set(v);
            },
            getContextData: () => {
                return contextDataRef.current;
            },
            setContextData: (v: Record<string, any>) => {
                contextDataRef.current = v;
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
            placeholder,
            noDataPlaceholder,
            requestConfig,
            headerConfig,
            toolkitButtons,
            newChatButton,
            maxHistoryLength,
            renderParser,
            requestBodyFormatter,
            nameFormatter,
            onInputChange,
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
            placeholder,
            noDataPlaceholder,
            requestConfig,
            maxHistoryLength,
            toolkitButtons,
            newChatButton,
            renderParser,
            requestBodyFormatter,
            nameFormatter,
            onInputChange,
            onChunk,
            onComplete,

            // 
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
    // Custom buttons
    //================================================================
    const [activeButtons, setActiveButtons] = useState<Record<string, boolean>>({});
    const executeButtonAction = (actionStr: string, buttonId: string, buttonElement: HTMLButtonElement) => {
        try {
            // Create a new function to execute
            const actionFn = new Function('method', 'isActive', 'button', actionStr);
            /*
            function (method, isActive, button) {
                console.log('Clearing chat');
                method.clearData();
            }
            */

            // Update the button status
            const newState = !activeButtons[buttonId];
            setActiveButtons(prev => ({
                ...prev,
                [buttonId]: newState
            }));

            return actionFn(exposedMethods(), newState, buttonElement);

           
        } catch (error) {
            console.error('Error executing button action:', error);
        }
    };

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

    };

    const sendMessage = async () => {
        if (rootRef.current === null || msgContainerRef.current === null || msInput.current === null) return;

        const messageInput: any = msInput.current;
        const message = messageInput.value;

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
            if (!args().isStream) {
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

        // Use vLLM's API
        //======================
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
                requestBodyRes = args().requestBodyFormatter(requestBodyRes, args().latestContextData, conversationHistory.current);
            } 

            // Scroll to the bottom
            setTimeout(() => {
                // Scroll to the bottom
                scrollToBottom();
            }, 500);


            if (args().isStream) {
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
                        reply: _errInfo
                    };
                }
                
                // Start streaming
                await streamController.start(response);

                return {
                    reply: tempAnimText // The final content will be in tempAnimText
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
                        reply: _errInfo
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
                    reply: formatLatestDisplayContent(content)
                };

            }






        } catch (error) {
            const _err = `--> Error in mainRequest: ${error}`;
            console.error(_err);

            //reset SSE
            closeSSE();
            
            return {
                reply: _err
            };
        }

    };


    // exposes the following methods
    useImperativeHandle(
        propsRef.current.contentRef,
        () => exposedMethods(),
        [propsRef.current.contentRef, inputContentRef, msInput],
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



    return (
        <>

        <RootPortal show={true} containerClassName="Chatbox">

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
            <button style={{ display: show ? 'block' : 'none' }} className={`${args().prefix || 'custom-'}chatbox-close`} tabIndex={-1} onClick={handleClose}>
                <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#000000"><path d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z" fill="#000" /><path d="M328 340.8l32-31.2 348 348-32 32z" fill="#000" /></svg>

            </button>
            {/**------------- CLOSE BUTTON------------- */}


            <div style={{ display: show ? 'block' : 'none' }} className={`${args().prefix || 'custom-'}chatbox-container`} ref={rootRef}>

                {/**------------- NO DATA -------------*/}
                {msgList.length === 0 ? <>

                    <div className="d-flex flex-column align-items-center justify-content-center h-50">
                        <p>
                            <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#858297" strokeWidth="1.5" />
                                <path opacity="0.5" d="M8 10.5H16" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                                <path opacity="0.5" d="M8 14H13.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>

                        </p>
                        <p className="text-primary" dangerouslySetInnerHTML={{ __html: `${args().noDataPlaceholder}` }}></p>
                    </div>
                </> : null}
                {/**------------- /NO DATA -------------*/}



                {/**------------- MESSAGES LIST -------------*/}
                <div className="messages" ref={msgContainerRef}>

                    {msgList.map((msg, index) => {

                        const isAnimProgress = tempAnimText !== '' && msg.sender !== args().questionNameRes && index === msgList.length - 1 && loading;


                        return <div key={index} className={msg.tag?.indexOf('[reply]') < 0 ? 'request' : 'reply'} style={{ display: isAnimProgress ? 'none' : '' }}>
                            <div className="qa-name" dangerouslySetInnerHTML={{ __html: `${msg.sender}` }}></div>

                            {msg.sender === args().questionNameRes ? <>
                                <div className="qa-content" dangerouslySetInnerHTML={{ __html: `${msg.content} <span class="qa-timestamp">${msg.timestamp}</span>` }}></div>
                            </> : <>

                                {args().isStream ? <>
                                    <div className="qa-content" dangerouslySetInnerHTML={{ __html: `${msg.content} <span class="qa-timestamp">${msg.timestamp}</span>` }}></div>
                                </> : <>
                                    <div className="qa-content">
                                        <TypingEffect
                                            messagesDiv={msgContainerRef.current}
                                            content={`${msg.content} <span class="qa-timestamp">${msg.timestamp}</span>`}
                                            speed={10}
                                        />
                                    </div>
                                </>}
                            </>}

                        </div>
                    }
                    )}



                    {/* ======================================================== */}
                    {/* ====================== STREAM  begin ==================== */}
                    {/* ======================================================== */}
                    {args().isStream ? <>
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
                    {!args().isStream ? <>
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
                    {args().newChatButton && msgList.length > 0 && (
                        <div className="newchat-btn">
                            <button 
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
                <div className="msgcontrol">


                    <Textarea
                        ref={msInput}
                        contentRef={inputContentRef}
                        controlClassName="messageInput-control"
                        wrapperClassName="messageInput"
                        placeholder={args().placeholder}
                        disabled={loading ? true : false}
                        onKeyDown={(event: React.KeyboardEvent) => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                handleClickSafe();
                            }
                        }}
                        onChange={(e) => {
                            args().onInputChange?.(inputContentRef.current, e.target.value);
                        }}
                        rows={3}
                        autoSize
                        autoSizeMaxHeight={200}
                    />


                    {loading ? <>
                        <button
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                e.stopPropagation();

                                if (!args().isStream) {
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
                                if (!args().isStream) {
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
                {args().sendLoading ? <div className="loading"><div style={{ display: loading ? 'block' : 'none' }}><PureLoader customClassName="w-100" txt="" /></div></div> : null}
                {/**------------- /SEND LOADING -------------*/}


                {/**------------- TOOLKIT BUTTONS -------------*/}
                {args().toolkitButtons && args().toolkitButtons.length > 0 && (
                    <div className="toolkit-btns">
                        {args().toolkitButtons.map((btn: FloatingButton, index: number) => {
                            const _id = `${args().prefix || 'custom-'}chatbox-btn-tools-${chatId}${index}`;
                            const isActive = activeButtons[_id];
                            return <button
                                key={index}
                                className={`${btn.value || ''} ${isActive ? 'active' : ''}`}
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => executeButtonAction(btn.onClick, _id, e.currentTarget)}
                            >
                                <span dangerouslySetInnerHTML={{ __html: btn.label }}></span>
                            </button>
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


