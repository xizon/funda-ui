import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
    content: string; // The content to display
    speed: number; // Speed of typing in milliseconds
    onComplete?: () => void; // Callback when typing is complete
    onUpdate?: () => void; // Callback when typing
}

interface ImagePlaceholder {
    original: string;
    placeholder: string;
    type: 'img' | 'svg';
}
const TypingEffect: React.FC<TypingEffectProps> = ({ content, speed, onComplete, onUpdate }) => {
    const [displayedContent, setDisplayedContent] = useState<string>('');
    const [index, setIndex] = useState<number>(0);
    const [imagePlaceholders, setImagePlaceholders] = useState<ImagePlaceholder[]>([]);
    const [processedContent, setProcessedContent] = useState<string>('');

    // Extract and replace image tags
    useEffect(() => {
        const extractImages = (html: string): { processedHtml: string; placeholders: ImagePlaceholder[] } => {
            const placeholders: ImagePlaceholder[] = [];
            let processedHtml = html;

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

        const { processedHtml, placeholders } = extractImages(content);
        setProcessedContent(processedHtml);
        setImagePlaceholders(placeholders);
    }, [content]);

    // Handle typing effects
    useEffect(() => {
        const timer = setInterval(() => {
            if (index < processedContent.length) {
                let newContent = processedContent.substring(0, index + 1);
                
                // Replace the completed placeholder
                imagePlaceholders.forEach(({ original, placeholder }) => {
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
    }, [processedContent, index, speed, onComplete, onUpdate, imagePlaceholders]);

    return <span dangerouslySetInnerHTML={{ __html: displayedContent }} />;
};

export default TypingEffect;