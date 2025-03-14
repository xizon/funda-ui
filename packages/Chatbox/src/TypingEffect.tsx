import React, { useEffect, useState } from 'react';

// extract
import { extractHtmlTags } from './utils/func';
import type { HtmlTagPlaceholder } from './utils/func';

export interface TypingEffectProps {
    content: string; // The content to display
    speed: number; // Speed of typing in milliseconds
    onComplete?: () => void; // Callback when typing is complete
    onUpdate?: () => void; // Callback when typing
}


const TypingEffect: React.FC<TypingEffectProps> = ({ content, speed, onComplete, onUpdate }) => {
    const [displayedContent, setDisplayedContent] = useState<string>('');
    const [index, setIndex] = useState<number>(0);
    const [htmlTagPlaceholder, setHtmlTagPlaceholders] = useState<HtmlTagPlaceholder[]>([]);
    const [processedContent, setProcessedContent] = useState<string>('');

    // Extract and replace image tags
    useEffect(() => {
        const { processedHtml, placeholders } = extractHtmlTags(content);
        setProcessedContent(processedHtml);
        setHtmlTagPlaceholders(placeholders);
    }, [content]);

    // Handle typing effects
    useEffect(() => {
        const timer = setInterval(() => {
            if (index < processedContent.length) {
                let newContent = processedContent.substring(0, index + 1);
                
                // Replace the completed placeholder
                htmlTagPlaceholder.forEach(({ original, placeholder }) => {
                    if (newContent.includes(placeholder)) {
                        newContent = newContent.replace(placeholder, original);
                    }
                });

                setDisplayedContent(newContent);
                setIndex((prev) => prev + 1);
                onUpdate?.();
            } else {
                clearInterval(timer);
                onComplete?.();
            }
        }, speed);

        return () => clearInterval(timer);
    }, [processedContent, index, speed, onComplete, onUpdate, htmlTagPlaceholder]);

    return <div dangerouslySetInnerHTML={{ __html: displayedContent }} />;
};

export default TypingEffect;