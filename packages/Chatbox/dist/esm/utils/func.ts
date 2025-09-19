// app.ts
import type { ChatboxProps } from '../index';

export interface HtmlTagPlaceholder {
    original: string;
    placeholder: string;
    type: 'table' | 'img' | 'svg';
}

export function formatLatestDisplayContent(str: string) {
    // Regular expression to match <details> tags and their content
    let output = str.replace(/<details class="think"[^>]*>([\s\S]*?)<\/details>/g, (match, content) => {
        // Use regex to match the content inside the "div.think-content"
        const thinkContentMatch = content.match(/<div class="think-content">([\s\S]*?)<\/div>/);
        
        if (thinkContentMatch) {
            const thinkContent = thinkContentMatch[1].trim(); // Get the content inside "div.think-content" and trim whitespace
            
            // Check if "div.think-content" is empty
            if (thinkContent === '') {
                return ''; // If empty, return an empty string to replace the entire <details> tag
            }
        }
        
        return match; // If not empty, return the original matched content
    });

    // Then handle tables without is-init class
    output = output.replace(/<table(?![^>]*\bis-init\b)([^>]*)>([\s\S]*?)<\/table>/g, (match, attributes, content) => {
        // Add is-init class to table and wrap it in container div
        return `<div class="table-container"><table class="is-init"${attributes}>${content}</table></div>`;
    });
            
    return output;
}

export function formatName(str: any, isAnswer: boolean, props: ChatboxProps) {
    if (typeof str !== "string")  return str;

    const {
        questionNameIcon,
        answerNameIcon,
        nameFormatter
    } = props;
    
    let res = str.replace(/\{icon\}/g, `${isAnswer ? answerNameIcon : questionNameIcon}`);

    if (typeof nameFormatter === 'function') {
        const newVal = nameFormatter(res);
        return newVal;
    }
    
    return res;
}


export function typewriterEffect(messagesDiv: HTMLElement, element: HTMLElement, str: string, speed: number = 50) {
    if (!element) return;

    const originalHTML = str;
    element.innerHTML = '';

    let cursor = 0;
    let tempHTML = '';
    const tagStack: string[] = [];

    function type() {
        if (cursor >= originalHTML.length) {
            // Clear the cursor after typing is complete
            element.innerHTML = tempHTML; // Set the final content without the cursor
            return;
        }

        const currentChar = originalHTML[cursor];

        if (currentChar === '<') {
            const closeTagIndex = originalHTML.indexOf('>', cursor);
            const tagContent = originalHTML.slice(cursor, closeTagIndex + 1);
            tempHTML += tagContent;

            // Handle opening and closing tags
            if (/^<\/?\w+/.test(tagContent)) {
                if (!/^<\//.test(tagContent)) {
                    // Opening tag
                    tagStack.push(tagContent as never);
                } else {
                    // Closing tag
                    tagStack.pop();
                }
            }

            cursor = closeTagIndex + 1;
        } else {
            tempHTML += currentChar;
            cursor++;
        }

        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
        element.innerHTML = tempHTML + '<span class="cursor">|</span>'; // Show cursor
        setTimeout(type, speed);
    }

    type();
}


export function fixHtmlTags(html: string, withReasoning: boolean, reasoningSwitchLabel: string) {
    // Replace with a valid label
    return html.replace('<think>', `<details class="think" ${withReasoning ? 'open' : ''}><summary>${reasoningSwitchLabel}</summary><div class="think-content">`)
    .replace('</think>', '</div></details> ');
}

export function isStreamResponse(response: Response): boolean {
    // Method 1: Check Content-Type
    const contentType = response.headers.get('Content-Type');
    if (contentType) {
        return contentType.includes('text/event-stream') || 
               contentType.includes('application/x-ndjson') ||
               contentType.includes('application/stream+json');
    }

    // Method 2: Check Transfer-Encoding
    const transferEncoding = response.headers.get('Transfer-Encoding');
    if (transferEncoding) {
        return transferEncoding.includes('chunked');
    }

    // Method 3: Check if response.body is ReadableStream
    return response.body instanceof ReadableStream;
};


export function extractHtmlTags(html: string): { processedHtml: string; placeholders: HtmlTagPlaceholder[] } {
    const placeholders: HtmlTagPlaceholder[] = [];
    let processedHtml = html;

    // <table>
    processedHtml = processedHtml.replace(/<table[^>]*>[\s\S]*?<\/table>/g, (match) => {
        const placeholder = `[TABLE_${placeholders.length}]`;
        placeholders.push({
            original: `<div class="table-container">${match?.replace('<table', '<table class="is-init"')}</div>`,
            placeholder,
            type: 'table'
        });
        return placeholder;
    });
    
    // <img>
    processedHtml = processedHtml.replace(/<img[^>]*>/g, (match) => {
        const placeholder = `[IMG_${placeholders.length}]`;
        placeholders.push({
            original: match,
            placeholder,
            type: 'img'
        });
        return placeholder;
    });

    // <svg>
    processedHtml = processedHtml.replace(/<svg[^>]*>[\s\S]*?<\/svg>/g, (match) => {
        const placeholder = `[SVG_${placeholders.length}]`;
        placeholders.push({
            original: match,
            placeholder,
            type: 'svg'
        });
        return placeholder;
    });

    return { processedHtml, placeholders };
};


export function toBoolean(val) {
    if (typeof val === "boolean") return val;
    if (typeof val === "string") {
        return val.toLowerCase() === "true";
    }
    return Boolean(val); 
}