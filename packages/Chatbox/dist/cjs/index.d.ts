import React from "react";
export declare type MessageDetail = {
    sender: string;
    timestamp: string;
    content: string;
    tag: string;
};
export interface FloatingButton {
    label: string;
    value: string;
    onClick: string;
}
export interface RequestConfig {
    apiUrl: string;
    requestBody: string;
    responseExtractor: string;
}
export declare type ChatboxProps = {
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
    contextData?: Record<string, any>;
    toolkitButtons?: FloatingButton[];
    newChatButton?: FloatingButton;
    renderParser?: (input: string) => Promise<string>;
    requestBodyFormatter?: (body: any, contextData: Record<string, any>, conversationHistory: MessageDetail[]) => any;
    nameFormatter?: (input: string) => string;
    onInputChange?: (controlRef: React.RefObject<any>, val: string) => any;
    onChunk?: (controlRef: React.RefObject<any>, lastContent: string, conversationHistory: MessageDetail[]) => any;
    onComplete?: (controlRef: React.RefObject<any>, lastContent: string, conversationHistory: MessageDetail[]) => any;
};
declare const Chatbox: (props: ChatboxProps) => JSX.Element;
export default Chatbox;
