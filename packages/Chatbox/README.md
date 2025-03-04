# Chatbox

Chat and conversational UI, which can be used to interface models similarly to the OpenAI API.

## Features

### 1. Core functions
- Support real-time conversation interaction
- Support streaming response (Stream) and normal request modes
- Maintain conversation history and support context association
- Support custom message rendering and formatting

### 2. Interface features
- Support floating bubble mode (bubble)
- Adaptive input box (autoSize)
- Support typewriter effect (TypingEffect)
- Automatically scroll to the latest message
- Display message timestamp
- Support thinking state display (thinking state)
- Support loading status and progress display

### 3. Request control
- Support interrupt request (abort)
- Support pause/resume streaming response
- Request error handling and retry mechanism
- Custom request header and request body configuration

### 4. Customization capabilities
```typescript
- Message formatting: renderParser?: (input: string) => Promise<string>
- Request body processing: requestBodyFormatter?: (body: any, contextData: Record<string, any>, conversationHistory: MessageDetail[]) => any
- Name formatter: nameFormatter?: (input: string) => string
```

### 5. Event callback
```typescript
- Input change: onInputChange?: (controlRef: React.RefObject<any>, val: string) => any
- Data block reception: onChunk?: (controlRef: React.RefObject<any>, lastContent: string, conversationHistory: MessageDetail[]) => any
- Completion callback: onComplete?: (controlRef: React.RefObject<any>, lastContent: string, conversationHistory: MessageDetail[]) => any
```

### 6. External method (accessed through ref)
```typescript
- chatOpen(): Open dialog box
- chatClose(): Close dialog box
- clearData(): Clear message and history
- sendMsg(): send message
- getHistory(): get conversation history
- trimHistory(length?: number): trim conversation history
- setVal(v: string): set input value
- setContextData(v: Record<string, any>): set context data
```

### 7. Configuration items
```typescript
- Model configuration: model, baseUrl, apiKey
- UI configuration: prefix, bubble, verbose
- Display text: placeholder, noDataPlaceholder, sendLabel
- Request configuration: requestConfig, headerConfig
- Context data: contextData
- History control: maxHistoryLength
```

## General

Use the chat area alone, without bubbles + read remote parameter configuration

```js
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { parse as markedParse } from "marked";
import Chatbox from 'funda-ui/Chatbox';

// component styles
import 'funda-ui/Chatbox/index.css';

export default () => {
   

    const aichatRef = useRef<any>(null);
    const [aiConfig, setAiConfig] = useState<any>({});
    const [contextData, setContextData] = useState<any>({
        systemPrompt: "Please keep your answer within 100 words",
        citation: "Analyze this sentence: The patient's name is Liu, 25 years old, and he has had a cold for 7 consecutive days.",
    });

    async function getAiConfig() {
        // const res = await axios({
        //     method: 'post',
        //     url: `http://yourapi`
        // });

        return {
            "show": true,
            "verbose": true,
            "reasoningSwitchLabel": "Idea",
            "maxHistoryLength": 10,
            "newChatButton": "{\"label\":\"<svg width='16' height='16' viewBox='0 0 24 24'><path fill='currentColor' d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg> New Chat\",\"value\":\"new\",\"onClick\":\"method.setVal(''); method.clearData();\"}",
            "toolkitButtons": "[{\"label\":\"<svg fill='currentColor' width='12' height='12' viewBox='0 0 24 24'><path d='M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z'/></svg> Brief\",\"value\":\"brief\",\"onClick\":\"console.log(button); console.log(isActive); if(isActive) { method.setContextData({systemPrompt: 'Please keep your answer within 77 words'}) } else { method.setContextData({}) }\"}]",
            "apiUrl": "{baseUrl}/v1/chat/completions",
            "requestBody": "{'model':'{model}','messages':[{'role':'user','content':'{message}'}],'stream': true}",
            "responseBody": "data.choices.0.delta.content",
            "headerConfig": "{'Content-Type': 'application/json'}",
            "aiLabel": "AI Helper",
            "coreIcon": "<svg height='18px' viewBox='0 0 55.0227 41.3595'><path fill='#fff' d='M55.6128,3.4712c-.5953-.2917-.8517.2642-1.1998.5466-.1191.0911-.2198.2095-.3206.3188-.8701.9292-1.8867,1.5398-3.2148,1.4668-1.9417-.1094-3.5995.5012-5.065,1.9863-.3114-1.8313-1.3463-2.9248-2.9217-3.6262-.8242-.3645-1.6577-.729-2.2348-1.5217-.403-.5647-.5129-1.1934-.7144-1.813-.1283-.3735-.2565-.7563-.687-.8201-.4671-.0728-.6503.3188-.8335.647-.7327,1.3394-1.0166,2.8154-.9892,4.3096.0641,3.3621,1.4838,6.0406,4.3047,7.9449.3206.2187.403.4372.3023.7563-.1924.656-.4214,1.2937-.6228,1.9497-.1283.4192-.3207.5103-.7694.3279-1.5479-.6467-2.8852-1.6035-4.0667-2.7605-2.0058-1.9407-3.8193-4.0818-6.0815-5.7583-.5312-.3918-1.0625-.7561-1.6121-1.1025-2.3081-2.2412.3023-4.0818.9068-4.3003.6319-.2278.2198-1.0115-1.8227-1.0022-2.0425.009-3.9109.6924-6.2922,1.6035-.348.1367-.7145.2368-1.09.3188-2.1615-.4099-4.4055-.5012-6.7502-.2368-4.4147.4919-7.9408,2.5784-10.5328,6.1409C.1914,13.1289-.5413,17.9941.3563,23.0691c.9434,5.3481,3.6727,9.7761,7.8676,13.2385,4.3506,3.5896,9.3606,5.3481,15.0758,5.011,3.4713-.2004,7.3364-.665,11.6961-4.355,1.099.5467,2.2531.7652,4.1674.9292,1.4746.1367,2.8943-.0728,3.9933-.3005,1.7219-.3645,1.6029-1.959.9801-2.2505-5.0466-2.3506-3.9385-1.394-4.9459-2.1685,2.5645-3.0339,6.4297-6.1865,7.9409-16.4001.119-.8108.0183-1.3211,0-1.9771-.0092-.4008.0824-.5556.5404-.6013,1.2639-.1458,2.4912-.4919,3.6178-1.1115,3.2698-1.7857,4.5886-4.7195,4.9-8.2364.0459-.5376-.0091-1.0935-.577-1.3757ZM27.119,35.123c-4.8909-3.8447-7.263-5.1113-8.2431-5.0566-.9159.0547-.751,1.1025-.5496,1.7859.2107.6741.4855,1.1389.8701,1.731.2656.3918.4489.9748-.2655,1.4123-1.5754.9749-4.314-.3281-4.4423-.3918-3.1872-1.877-5.8525-4.3553-7.7302-7.7444-1.8135-3.262-2.8667-6.7605-3.0408-10.4961-.0458-.9019.2198-1.221,1.1174-1.3848,1.1815-.2187,2.3997-.2644,3.5812-.0913,4.9918.729,9.2415,2.9612,12.8043,6.4963,2.0333,2.0135,3.572,4.419,5.1566,6.7696,1.6852,2.4963,3.4987,4.8745,5.8068,6.8242.8151.6833,1.4654,1.2026,2.0882,1.5854-1.8775.2095-5.01.2552-7.1532-1.4397ZM29.4637,20.0442c0-.4009.3206-.7197.7237-.7197.0916,0,.174.018.2473.0453.1008.0366.1924.0913.2656.1731.1283.1277.2015.3098.2015.5012,0,.4009-.3205.7197-.7234.7197s-.7145-.3188-.7145-.7197ZM36.7452,23.7798c-.4671.1914-.9342.3552-1.383.3735-.6961.0364-1.4563-.2461-1.8684-.5923-.6411-.5376-1.0991-.8381-1.2914-1.7766-.0825-.4009-.0367-1.0205.0367-1.3757.1648-.7654-.0184-1.2573-.5587-1.7039-.4397-.3645-.9984-.4646-1.6121-.4646-.229,0-.4395-.1003-.5953-.1823-.2565-.1275-.467-.4464-.2656-.8382.0641-.1274.3756-.4373.4489-.4919.8335-.4739,1.7952-.3189,2.6836.0364.8244.3371,1.4472.9567,2.3447,1.8313.9159,1.0568,1.0807,1.3486,1.6028,2.1411.4123.6196.7878,1.2573,1.0442,1.9863.1557.4556-.0458.8291-.5862,1.0569Z' /></svg>",
            "modelName1": "llama3.2-vision",
            "modelName2": "",
            "modelName3": "",
            "modelName4": "",
            "modelName5": "",
            "APIKey1": "",
            "APIKey2": "",
            "APIKey3": "",
            "APIKey4": "",
            "APIKey5": "",
            "params1": "",
            "params2": "",
            "params3": "",
            "params4": "",
            "params5": "",
            "noDataPlaceholder": "<div class='text-center'>Chat to AI <hr class='p-0 m-0 mt-2' /><small>Disclaimer: The dialogue content is generated by AI and is for reference only</small></div>",
            "placeholder": "Enter your question...",
            "sendLoadingLabel": "Thinking",
            "bubbleLabel": "<svg width='50px' height='50px' viewBox='0 0 24 24' fill='none'><path d='M20 7L4 7' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round' /><path d='M15 12L4 12' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round' /><path d='M9 17H4' stroke='#1C274C' stroke-width='1.5' stroke-linecap='round' /></svg>",
            "sendLabel": "<svg viewBox='0 0 512 512' width='15px'><path d='M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z' /></svg>",
            "questionName": "{icon} Me",
            "answerName": "{icon} AI",
            "questionNameIcon": "<svg width='15px' height='15px' viewBox='0 0 1024 1024'><path d='M512.524936 0.008332C229.809447 0.008332 0.587428 229.230351 0.587428 511.94584c0 174.13291 86.976883 327.943301 219.835665 420.423679 25.99266-90.522283 91.847122-158.622304 181.419521-189.5102a331.426209 331.426209 0 0 1 8.557288-2.807991c1.3665-0.429114 2.716335-0.870727 4.091168-1.283176a323.077229 323.077229 0 0 1 12.802603-3.562066l0.254136-0.058326a327.101737 327.101737 0 0 1 12.910924-2.978803c1.383164-0.291631 2.778827-0.554099 4.166158-0.829065a341.275007 341.275007 0 0 1 14.160772-2.512194 346.915985 346.915985 0 0 1 9.682151-1.354001c1.424826-0.179145 2.84132-0.37912 4.274478-0.5416a355.210806 355.210806 0 0 1 14.039953-1.354002h18.539404c1.891436 0.112486 3.778705 0.112486 5.670141 0h1.533146c-133.117084 0-241.028911-107.911827-241.028911-241.028911 0-1.266512 0.074991-2.516359 0.095822-3.774539-1.31234-152.377233 141.516058-244.178526 241.17056-237.37519 102.270849-6.965816 250.006982 89.397421 241.383034 248.353017-0.254136 0.158314-0.529102 0.279133-0.783237 0.43328-4.04534 129.575849-110.286537 233.392343-240.841434 233.392343h25.980162c4.724423 0.354123 9.394687 0.820733 14.035786 1.354002 1.437325 0.16248 2.857984 0.362456 4.282811 0.5416a359.614435 359.614435 0 0 1 14.402408 2.124741c3.153782 0.533268 6.2784 1.11653 9.386355 1.733121 1.412328 0.279133 2.837154 0.545767 4.236982 0.841564a327.626673 327.626673 0 0 1 12.59013 2.903813c0.279133 0.070825 0.566598 0.137483 0.84573 0.212474a318.461125 318.461125 0 0 1 12.42765 3.457911c1.470654 0.437447 2.912145 0.912389 4.366134 1.3665 2.753831 0.866561 5.490996 1.758119 8.207331 2.691338 89.605728 30.850401 155.497685 98.921258 181.536173 189.426876 132.742129-92.497042 219.635689-246.236608 219.635689-420.286195 0.008332-282.719655-229.20952-511.937508-511.929175-511.937508z' fill='#A6D4AE' /><path d='M753.36637 492.185752c-70.674706 43.161398-216.244436-31.629472-240.603963-134.708556-24.326197 103.449872-170.645836 178.444884-240.912258 134.271109a243.574433 243.574433 0 0 1-0.258302-10.977826c-0.020831 1.262346-0.095822 2.512193-0.095822 3.774539 0 133.117084 107.911827 241.028911 241.028911 241.028911 130.554896 0.004166 236.796094-103.812328 240.841434-233.388177z' fill='#FCE9EA' /><path d='M623.290581 742.805159c0.916555 0.316628 1.824777 0.645755 2.733 0.966549a119.589568 119.589568 0 0 1-10.448724 22.122299c17.243728 26.317621 12.931755 141.561886-12.944254 123.359941l-45.11116-31.650303-44.994507-31.650303 2.953806-2.083079c-0.983213 0.024997-1.96226 0.074991-2.953806 0.074991-1.033207 0-2.04975-0.05416-3.074625-0.079157l2.953806 2.087245-44.994507 31.650303-45.11116 31.650303c-25.809349 18.222776-30.167151-97.300622-12.877595-123.451596a119.714553 119.714553 0 0 1-10.373733-21.95982c0.929053-0.333293 1.858107-0.666585 2.791325-0.987379-89.572399 30.887896-155.42686 98.992083-181.41952 189.5102 82.84822 57.672127 183.519264 91.513829 292.101843 91.513828 108.670068 0 209.420269-33.895862 292.301818-91.651312-26.030156-90.501452-91.926279-158.57231-181.532007-189.42271zM468.467814 727.473697c1.424826-0.179145 2.84132-0.37912 4.274478-0.5416-1.433158 0.16248-2.845486 0.362456-4.274478 0.5416zM454.077904 729.594272zM440.458733 732.168957c1.383164-0.291631 2.778827-0.554099 4.166158-0.829065-1.387331 0.274966-2.782994 0.537434-4.166158 0.829065zM427.293673 735.20192l0.254136-0.058326c-0.083323 0.024997-0.170812 0.041662-0.254136 0.058326zM580.616624 731.331559c1.412328 0.279133 2.837154 0.545767 4.236983 0.841564-1.399829-0.295797-2.824655-0.562431-4.236983-0.841564zM610.721282 738.747321c1.470654 0.437447 2.912145 0.912389 4.366134 1.3665-1.453989-0.454111-2.899646-0.929053-4.366134-1.3665zM597.443737 735.076936c0.279133 0.070825 0.566598 0.137483 0.84573 0.212474-0.279133-0.074991-0.562431-0.141649-0.84573-0.212474zM410.399902 740.051328c1.3665-0.429114 2.716335-0.870727 4.091168-1.283176-1.370666 0.41245-2.724667 0.854062-4.091168 1.283176zM552.545051 726.932097c1.437325 0.16248 2.857984 0.362456 4.28281 0.5416-1.424826-0.179145-2.845486-0.37912-4.28281-0.5416zM566.497514 728.827698z' fill='#F08E83' /><path d='M409.425021 765.802352c3.43708-5.199365 7.724057-6.886659 12.877595-3.262102l45.11116 31.650303 42.036535 29.67971c1.024875 0.024997 2.041417 0.079157 3.074625 0.079157 0.991546 0 1.970593-0.049994 2.953806-0.074991l42.040701-29.683876 45.11116-31.650303c5.178535-3.645388 9.490508-1.920599 12.944254 3.353757a119.464584 119.464584 0 0 0 10.448724-22.122299c-0.912389-0.320794-1.820611-0.649921-2.733-0.966549a325.843558 325.843558 0 0 0-8.207331-2.691338c-1.453989-0.454111-2.89548-0.929053-4.366134-1.3665a320.515041 320.515041 0 0 0-12.427649-3.457911c-0.279133-0.074991-0.566598-0.141649-0.84573-0.212474a329.443118 329.443118 0 0 0-12.59013-2.903813c-1.399829-0.295797-2.824655-0.562431-4.236983-0.841564a336.479759 336.479759 0 0 0-23.788763-3.857862c-1.428992-0.179145-2.849652-0.37912-4.28281-0.5416a355.760739 355.760739 0 0 0-14.035787-1.354002h-27.513308c-1.891436 0.112486-3.778705 0.112486-5.670141 0h-18.539404a356.739786 356.739786 0 0 0-14.039953 1.354002c-1.433158 0.16248-2.849652 0.362456-4.274478 0.5416-3.245437 0.41245-6.478376 0.858229-9.682151 1.354001a346.299394 346.299394 0 0 0-14.160772 2.512194c-1.387331 0.274966-2.78716 0.537434-4.166158 0.829065a327.101737 327.101737 0 0 0-12.910924 2.978803l-0.254135 0.058326a337.958745 337.958745 0 0 0-12.802604 3.562066c-1.374832 0.41245-2.728834 0.854062-4.091167 1.283176a316.086415 316.086415 0 0 0-8.557289 2.807991c-0.933219 0.320794-1.862273 0.654087-2.791326 0.987379a119.514577 119.514577 0 0 0 10.369567 21.955654z' fill='#FEFEFE' /><path d='M602.630603 762.54025l-45.11116 31.650303-42.040701 29.683876-2.953806 2.083079 44.994507 31.650304 45.11116 31.650303c25.880174 18.201945 30.187982-97.042321 12.944254-123.359942-3.449579-5.278522-7.761553-7.003312-12.944254-3.357923zM422.302616 762.54025c-5.149371-3.624558-9.440514-1.937264-12.877595 3.262102-17.289556 26.146808-12.931755 141.674372 12.877595 123.451596l45.11116-31.650303 44.994507-31.650303-2.953806-2.087245-42.036535-29.67971-45.115326-31.646137z' fill='#CFE07D' /><path d='M512.762407 357.477196V243.399455C413.107905 236.596119 270.279507 328.393246 271.591847 480.774645c0.029163 3.637056 0.062492 7.274112 0.258302 10.977827 70.266423 44.165442 216.586061-30.825404 240.912258-134.275276z' fill='#ADBE20' /><path d='M512.762407 357.477196c24.359526 103.079084 169.929257 177.869954 240.603963 134.708556 0.254136-0.154148 0.529102-0.274966 0.783237-0.43328 8.619781-158.955596-139.116351-255.318833-241.383034-248.353017v114.077741z' fill='#7EA701' /></svg>",
            "answerNameIcon": "<svg height='15px' viewBox='0 0 48 48' fill='none'><rect width='48' height='48' fill='white' fill-opacity='0.01'/><rect x='9' y='18' width='30' height='24' rx='2' fill='#2F88FF' stroke='#000000' stroke-width='4'/><circle cx='17' cy='26' r='2' fill='white'/><circle cx='31' cy='26' r='2' fill='white'/><path d='M20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36V32ZM28 36C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32V36ZM20 36H28V32H20V36Z' fill='white'/><path d='M24 10V18' stroke='#000000' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/><path d='M4 26V34' stroke='#000000' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/><path d='M44 26V34' stroke='#000000' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='24' cy='8' r='2' stroke='#000000' stroke-width='4'/></svg>"
        };

    }


    useEffect(() => {
     
        getAiConfig().then((response) => {
            setAiConfig(response);
        });


    }, []);

    return (
        <>
           <a href="#" onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                if (aichatRef.current) aichatRef.current.chatOpen();   
            }}>Open Chat</a>
            <br />

           <a href="#" onClick={(e: React.MouseEvent) => {
                e.preventDefault();

                const randomPrompts = [
                    "Please keep your answer within 50 words",
                    "Please keep your answer within 150 words",
                    "Please answer in a professional tone",
                    "Please answer like a friend",
                ];

                const randomCitations = [
                    "Analyze this sentence: The patient's name is Zhang, 30 years old, with fever for 3 days.",
                    "Analyze this sentence: The patient's name is Wang, 45 years old, experiencing headaches for 5 days.",
                    "Analyze this sentence: The patient's name is Li, 28 years old, reporting chest pain for 2 days.",
                    "Analyze this sentence: The patient's name is Chen, 35 years old, with persistent cough for 10 days.",
                ];

                const timestamp = new Date().toLocaleString();
                const randomPrompt = randomPrompts[Math.floor(Math.random() * randomPrompts.length)];
                const randomCitation = randomCitations[Math.floor(Math.random() * randomCitations.length)];

                setContextData(prev => {
                    const newData = {
                        systemPrompt: randomPrompt,
                        citation: randomCitation,
                    };

                    return newData;
                });
            }}>Random Context</a>

            

            <Chatbox 
                bubble={false}
                contentRef={aichatRef}
                verbose={aiConfig.verbose}
                baseUrl={"http://localhost:11434"}
                apiKey={aiConfig.APIKey}
                renderParser={async (input: string) => {
                    const res = await markedParse(input);
                    return res;
                }}
                nameFormatter={(input: string) => {
                    return input;
                }}
                requestConfig={{
                    apiUrl: aiConfig.apiUrl,
                    requestBody: aiConfig.requestBody,
                    responseExtractor: aiConfig.responseBody
                }}
                headerConfig={aiConfig.headerConfig}
                model={aiConfig.modelName1}
                reasoningSwitchLabel={aiConfig.reasoningSwitchLabel}
                sendLoadingLabel={aiConfig.sendLoadingLabel}
                placeholder={aiConfig.placeholder}
                noDataPlaceholder={aiConfig.noDataPlaceholder}
                answerName={aiConfig.answerName}
                questionName={aiConfig.questionName}
                questionNameIcon={aiConfig.questionNameIcon}
                answerNameIcon={aiConfig.answerNameIcon}
                sendLabel={aiConfig.sendLabel}
                bubbleLabel={aiConfig.bubbleLabel}
                contextData={contextData}
                requestBodyFormatter={(body: any, context: Record<string, any>, conversationHistory: any[]) => {
                    /*
                    Target:
                    {
                        "model": "llama3.2-vision",
                        "messages": [
                            {
                                "role": "assistant",
                                "content": "Analyze this sentence: The patient's name is Liu, 25 years old, and he has had a cold for 7 consecutive days."
                            },
                            {
                                "role": "user",
                                "content": "Analyze the situation\nPlease keep your answer within 100 words"
                            }
                        ],
                        "stream": true
                    }
                    */
             
                    if (body.messages && Array.isArray(body.messages)) {
                        // Modify the content in the messages array
                        const modifiedMessages = body.messages.map(msg => {
                            if (msg.role === 'user') {
                                return {
                                    ...msg,
                                    content: `${msg.content}`
                                };
                            }
                            return msg;
                        });

                        /*++++++++++++++++ Contextual reasoning ++++++++++++++++++++++ */
                        // add conversation history
                        conversationHistory.forEach((item: any, index: number) => {
                            if (index < conversationHistory.length - 1) {
                                modifiedMessages.unshift({
                                    role: "assistant",
                                    content: item.content
                                });
                            }
                        });
                        /*++++++++++++++++ /Contextual reasoning ++++++++++++++++++++++ */

                        // Add a certain style to your answers
                        if (context.systemPrompt) {
                            modifiedMessages.unshift({
                                role: "system",
                                content: `${context.systemPrompt}`
                            });  
                        }

                
                        // Returns a new request body containing the modified messages
                        return {
                            ...body,
                            messages: modifiedMessages
                        };
                    }
                
                    //If there is no messages field, return the original request body
                    return body;
                }}
                onInputChange={(controlRef: React.RefObject<any>, val: string) => {
                    console.log('onInputChange: ', val);
                }}
                onChunk={(controlRef: React.RefObject<any>, lastContent: string, conversationHistory: any[]) => {
                    console.log('onChunk: ', lastContent, conversationHistory);
                }}
                onComplete={(controlRef: React.RefObject<any>, lastContent: string, conversationHistory: any[]) => {
                    console.log('onComplete: ', lastContent, conversationHistory);
                }}
                newChatButton={aiConfig.newChatButton ? JSON.parse(aiConfig.newChatButton) : undefined}
                toolkitButtons={aiConfig.toolkitButtons ? JSON.parse(aiConfig.toolkitButtons) : undefined}

                /*
                newChatButton={JSON.parse(JSON.stringify({
                    label: '<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> New Chat',
                    value: 'new',
                    onClick: 'method.setVal(""); method.clearData();'
                }))}
                toolkitButtons={JSON.parse(JSON.stringify([
                    {
                        label: '<svg fill="currentColor" width="12" height="12" viewBox="0 0 24 24"><path d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z"/></svg> Brief',
                        value: 'brief',
                        onClick: 'console.log(button); console.log(isActive); if(isActive) { method.setContextData({systemPrompt: "Please keep your answer within 77 words"}) } else { method.setContextData({}) }'
                    }
                ]))}
                */

            />
        </>
    );

}
```




## Using bubbles

```js
import React from "react";
import Chatbox from 'funda-ui/Chatbox';

// component styles
import 'funda-ui/Chatbox/index.css';


export default () => {

    return (
        <>
           <Chatbox 
                bubble={true} 
                ...  
            />


        </>
    );

}
```


## Custom styles

Use the `prefix` attribute and add your own stylesheet


```js
import React from "react";
import Chatbox from 'funda-ui/Chatbox';

// component styles
import 'funda-ui/Chatbox/index.css';


export default () => {

    return (
        <>
           <Chatbox 
                prefix="app-"
                ...  
            />


        </>
    );

}
```



## API

### Chatbox
```js
import Chatbox from 'funda-ui/Chatbox';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `contentRef` | React.RefObject | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.chatOpen()`</li><li>`contentRef.current.chatClose()`</li><li>`contentRef.current.clearData()`</li><li>`contentRef.current.sendMsg()`</li><li>`contentRef.current.getHistory()`</li><li>`contentRef.current.trimHistory(10)`</li><li>`contentRef.current.setVal('new value')`</li><li>`contentRef.current.setContextData({systemPrompt: "Please keep your answer within 77 words"})`</li></ol>| - |
| `debug` | boolean | false | Enable debug mode to output console information | - |
| `prefix` | string | `custom-` | Prefix for component wrapper class name | - |
| `model` | string | - | The model name to use | - |
| `baseUrl` | string | - | The base URL for API requests | - |
| `apiKey` | string | - | API key for authentication | - |
| `defaultMessages` | Array | - | Initial messages to display in the chat | - |
| `verbose` | boolean | true | Whether to show reasoning details | - |
| `reasoningSwitchLabel` | string | - | Label for the reasoning toggle button <blockquote>HTML tags are supported</blockquote>| - |
| `stopLabel` | React.ReactNode | - | Label for the stop button <blockquote>HTML tags are supported</blockquote>| - |
| `questionName` | React.ReactNode | - | Name to display for user messages <blockquote>HTML tags are supported</blockquote>| - |
| `answerName` | React.ReactNode | - | Name to display for AI responses <blockquote>HTML tags are supported</blockquote>| - |
| `questionNameIcon` | string | - | Icon URL for user messages <blockquote>HTML tags are supported</blockquote>| - |
| `answerNameIcon` | string | - | Icon URL for AI responses <blockquote>HTML tags are supported</blockquote>| - |
| `bubble` | boolean | false | Whether to show as a floating bubble | - |
| `bubbleLabel` | string | - | Label for the floating bubble <blockquote>HTML tags are supported</blockquote> | - |
| `sendLabel` | string | - | Label for the send button <blockquote>HTML tags are supported</blockquote>| - |
| `sendLoading` | boolean | false | Whether to show loading indicator when sending | - |
| `sendLoadingLabel` | string | - | Label to show during loading | - |
| `placeholder` | string | - | Placeholder text for input field | - |
| `noDataPlaceholder` | string | - | Text to show when no messages exist <blockquote>HTML tags are supported</blockquote>| - |
| `maxHistoryLength` | number | 20 | Controls the length of the history | - |
| `requestConfig` | JSON Object | - | Configuration for API requests | ✅ |
| `headerConfig` | any | - | Configuration for request headers. <blockquote>**Placeholder string**<ul><li>`{apiKey}` -> Your Secret API key on the API key page, It will use the incoming `apiKey` instead</li></ul></blockquote> | - |
| `contextData` | JSON Object | - | Dynamic JSON data for request formatting | - |
| `toolkitButtons` | Array | - | JSON string for toolkit buttons configuration. Each button can have label, value and **onClick** properties. The onClick function can access `contentRef` methods. Example: <br />`[{label:"Clear",value:"clear",onClick:"alert('new'); method.clearData();"},{label:"Send",value:"send",onClick:"method.sendMsg();"},{label:"Change Context",value:"changecontext",onClick:"method.setContextData({systemPrompt: "Please keep your answer within 77 words"});"}]` <br />Available methods in **onClick**: <br /><ol><li>`method.chatOpen()`: Open the dialog box</li><li>`method.chatClose()`: Close the dialog box</li><li>`method.clearData()`: Clear the data</li><li>`method.sendMsg()`: Send a message</li><li>`method.getHistory()`: Get the history</li><li>`method.trimHistory(10)`: Trim the history</li><li>`method.setVal('new value')`: Set the default value of the input box</li><li>`method.setContextData({systemPrompt: "Please keep your answer within 77 words"})`: Modify the context data</li></ol> <br />Additional parameters available in **onClick**: <br /><ul><li>**isActive**: The activation status of the current button</li><li>**button**: HTML object for the current button</li></ul> | - |
| `newChatButton` | JSON Object | - | JSON string for new chat button configuration. Similar to `toolkitButtons` but for a single button that appears when chat has messages. Example: <br /> `{label:"New Chat",value:"new",onClick:"method.clearData(); method.setVal('');"}` | - | 
| `renderParser` | Function | - | **(It must return a "Promise\<string\>" object)** Custom parser for rendering messages. such as `async(input:string)=>{const res=await markedParse(input);return res;}` | - |
| `requestBodyFormatter` | Function | - | Function to format request body. such as `(body:any,context:Record<string,any>,conversationHistory:any[])=>{if(body.messages&&Array.isArray(body.messages)){const modifiedMessages=body.messages.map(msg=>{if(msg.role==='user'){return{...msg,content:msg.content};}return msg;});conversationHistory.forEach((item:any,index:number)=>{if(index<conversationHistory.length-1){modifiedMessages.unshift({role:"assistant",content:item.content});}});return{...body,messages:modifiedMessages};}return body;}` | - |
| `nameFormatter` | Function | - | Function to format display names. such as `(input:string)=>{return input}` | - |
| `onInputChange` | Function | - | Callback when input changes. It returns only two values. <br /> <ol><li>The one is method reference of the input HTMLElement (**React.RefObject**) </li><li>The second parameter is the current value (**String**) </li></ol> | - |
| `onChunk` | Function | - | Callback when data processing. It returns three values. <br /> <ol><li>The one is method reference of the input HTMLElement (**React.RefObject**) </li><li>The second parameter is the current value (**String**) </li><li>The third parameter is the conversation history (**Array**) </li></ol> | - |
| `onComplete` | Function | - | Callback when message sending completes. It returns three values. <br /> <ol><li>The one is method reference of the input HTMLElement (**React.RefObject**) </li><li>The second parameter is the current value (**String**) </li><li>The third parameter is the conversation history (**Array**) </li></ol> | - |



---

JSON Object Literals configuration properties of the `toolkitButtons` and `newChatButton` (**JSON Object** && **Array**):

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `label` | string | - | The text displayed by the button <blockquote>HTML tags are supported</blockquote> | ✅ |
| `value` | string | - | Button identification | ✅ |
| `onClick` | string | - | Function expression in character format <blockquote>**onClick** uses a string to fully customize the configuration in the business</blockquote> | ✅ |



---

JSON Object Literals configuration properties of the `requestConfig` (**JSON Object**):

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `apiUrl` | string | - | The URL from which the request was made. such as `http://127.0.0.1:11434/v1/chat/completions` <blockquote>**Placeholder string**<ul><li>`{baseUrl}` -> A URL assigned to API to convert "relative URLs" into "absolute URLs" by the addition of a document name or trailing slash  (including port), It will use the incoming `baseUrl` instead</li></ul></blockquote> | ✅ |
| `requestBody` | string | - | JSON string for request body template. such as `{'model':'{model}','messages':[{'role':'user','content':'{message}'}],'stream': true}` <blockquote>**Placeholder string**<ul><li>`{model}` -> The name of the model</li><li>`{message}` -> Content sent by the user</li><li>`{token}` -> The identity string of the current session.</li></ul></blockquote> | ✅ |
| `responseExtractor` | string | - | JSON path to extract response. such as `data.choices.0.delta.content` <blockquote>Please use `.` to separate fields. `0` represents the first element of the array.</blockquote> | ✅ |


---

Array Object configuration properties of the `defaultMessages` (**Array**):

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `sender` | string | - | Sender's name <blockquote>HTML tags are supported</blockquote>| ✅ |
| `content` | string | - | The message content <blockquote>HTML tags are supported</blockquote>| ✅ |
| `timestamp` | string | - | Time when the message was sent | ✅ |
| `tag` | string | - | For an identifier, it is recommended to use [] separately, such as `[reply][response]` | ✅ |



```json
[
    {
        "sender": "David",
        "timestamp": "9:53:09 AM",
        "content": "<p>hello</p>\n",
        "tag": ""
    },
    {
        "sender": "System",
        "timestamp": "9:53:09 AM",
        "content": " \n\n<p>Hello! How can I assist you today? 😊</p>\n",
        "tag": "[reply]"
    },
    {
        "sender": "David",
        "timestamp": "9:53:15 AM",
        "content": "<p>how are you</p>\n",
        "tag": ""
    },
    {
        "sender": "System",
        "timestamp": "9:53:19 AM",
        "content": "<p>I&#39;m just a computer program, so I don&#39;t have feelings, but thanks for asking! How can I assist you today?</p>\n",
        "tag": "[reply]"
    },
    ...
]
```
