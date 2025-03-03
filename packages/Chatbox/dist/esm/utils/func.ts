// app.ts
import type { ChatboxProps } from '../index';


export function isValidJSON(str: string){
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

export function formatLatestDisplayContent(str: string) {
    // Regular expression to match <details> tags and their content
    const output = str.replace(/<details class="think"[^>]*>([\s\S]*?)<\/details>/g, (match, content) => {
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
            
    return output;
}

export function formatName(str: any, isAnswer: boolean, props: ChatboxProps) {
    if (typeof str !== "string")  return str;

    const {
        questionNameIcon,
        answerNameIcon,
        nameFormatter
    } = props;

    if (typeof nameFormatter === 'function') {
        return nameFormatter(str.replace(/\{icon\}/g, `${isAnswer ? answerNameIcon : questionNameIcon}`));
    } else {
        return str.replace(/\{icon\}/g, `${isAnswer ? answerNameIcon : questionNameIcon}`);
    }
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

