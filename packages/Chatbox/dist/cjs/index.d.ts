import React from "react";
export interface CustomMethod {
    name: string;
    func: (...args: any[]) => any;
}
export declare type MessageDetail = {
    sender: string;
    timestamp: string;
    content: string;
    tag: string;
};
export declare type QuestionData = {
    title: string;
    list: Array<string>;
};
export interface FloatingButton {
    label: string;
    value: string;
    onClick: string;
    isSelect?: boolean;
    [key: string]: any;
}
export interface FloatingButtonSelectOption {
    label: string;
    value: string;
    onClick: string;
}
export interface RequestConfig {
    apiUrl: string;
    requestBody: string;
    responseExtractor: string;
}
export declare type CustomRequestConfig = {
    requestBody: any;
    apiUrl: string;
    headers: any;
};
export declare type CustomRequestResponse = {
    content: string | Response | null;
    isStream: boolean;
};
export declare type CustomRequestFunction = (message: string, config: CustomRequestConfig) => Promise<CustomRequestResponse>;
export declare type ChatboxProps = {
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
    placeholder?: string;
    noDataPlaceholder?: string;
    requestConfig: RequestConfig;
    headerConfig?: any;
    maxHistoryLength?: number;
    contextData?: Record<string, any>;
    toolkitButtons?: FloatingButton[];
    newChatButton?: FloatingButton;
    customMethods?: CustomMethod[];
    defaultQuestions?: QuestionData;
    customRequest?: CustomRequestFunction;
    renderParser?: (input: string) => Promise<string>;
    requestBodyFormatter?: (body: any, contextData: Record<string, any>, conversationHistory: MessageDetail[]) => Promise<Record<string, any>>;
    nameFormatter?: (input: string) => string;
    onQuestionClick?: (text: string, methods: Record<string, Function>) => void;
    onInputChange?: (controlRef: React.RefObject<any>, val: string) => any;
    onInputCallback?: (input: string) => Promise<string>;
    onChunk?: (controlRef: React.RefObject<any>, lastContent: string, conversationHistory: MessageDetail[]) => any;
    onComplete?: (controlRef: React.RefObject<any>, lastContent: string, conversationHistory: MessageDetail[]) => any;
};
declare const Chatbox: (props: ChatboxProps) => JSX.Element;
export default Chatbox;
