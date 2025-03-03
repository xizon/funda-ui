import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
    messagesDiv: any;
    content: string; // The content to display
    speed: number; // Speed of typing in milliseconds
    onComplete?: () => void; // Callback when typing is complete
}

const TypingEffect: React.FC<TypingEffectProps> = ({ messagesDiv, content, speed, onComplete }) => {
    const [displayedContent, setDisplayedContent] = useState<string>('');
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (index < content.length) {
                setDisplayedContent((prev) => prev + content[index]);
                setIndex((prev) => prev + 1);
                if (messagesDiv !== null) messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
            } else {
                clearInterval(timer);
                onComplete?.(); // Call the onComplete callback if provided
            }
        }, speed);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [content, index, speed, onComplete]);

    return <span dangerouslySetInnerHTML={{ __html: displayedContent }} />;
};

export default TypingEffect;