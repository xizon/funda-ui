/**
 * Stream Controller
 * 
 * @usage:

// Use in component
const streamController = useStreamController({
    onChunk: async (chunk: string, index: number) => {
        // start (Execute it only once)
        if (index === 0) {
            
        }
        
        // Streaming data is JSON split by rows
        const lines = chunk.split("\n").filter(line => line.trim() !== "");

        // Process each data chunk
        console.log('Received chunk:', chunk);
    },
    onComplete: async (lastContent: string) => {
        // Process when stream is completed
        console.log('Stream completed');
        
        // Display AI reply
        console.log('AI reply:', lastContent);

    },
    onError: (error) => {
        // Error handling
        console.error('Stream error:', error);
    },
    onAbort: () => {
        // Abort processing
        console.log('Stream aborted');
    }
});

// Start stream
const response = await fetch(url);
await streamController.start(response);

// Pause stream
streamController.pause();

// Resume stream
streamController.resume();

// Abort stream
streamController.abort();

// Check status
const isActive = streamController.isActive();
const isPaused = streamController.isPaused();

 */


import { useRef, useCallback, useEffect } from 'react';

export interface StreamControllerOptions {
    onChunk?: (chunk: string, index: number) => void;
    onComplete?: (lastContent: string) => void;
    onError?: (error: any) => void;
    onAbort?: () => void;
}

export interface StreamController {
    start: (response: Response) => Promise<void>;
    pause: () => void;
    resume: () => void;
    abort: () => void;
    isActive: () => boolean;
    isPaused: () => boolean;
}

export const useStreamController = (options: StreamControllerOptions = {}): StreamController => {
    const streamController = useRef<ReadableStreamDefaultController | null>(null);
    const reader = useRef<ReadableStreamDefaultReader | null>(null);
    const activeStream = useRef<ReadableStream | null>(null);
    const responseReader = useRef<ReadableStreamDefaultReader | null>(null);
    const paused = useRef<boolean>(false);
    const active = useRef<boolean>(false);
    const abortController = useRef<AbortController>(new AbortController());
    const textDecoder = useRef<TextDecoder>(new TextDecoder("utf-8"));  // Get the decoding of UTF8

    // To avoid the "Uncaught (in promise) TypeError: Failed to execute 'cancel' on 'ReadableStream': Cannot cancel a locked stream" error, 
    // (1) you need to safely release the reader.
    // (2) cleanup() also requires asynchronous state
    const releaseReader = useCallback(async (readerRef: React.MutableRefObject<ReadableStreamDefaultReader | null>) => {
        if (readerRef.current) {
            try {
                await readerRef.current.cancel();
            } catch (e) {
                console.warn('Error cancelling reader:', e);
            }
    
            try {
                readerRef.current.releaseLock();
            } catch (e) {
                console.warn('Error releasing reader lock:', e);
            }
            readerRef.current = null;
        }
    }, []);

    const cleanup = useCallback(async () => {
        // First release all readers
        await releaseReader(reader);
        await releaseReader(responseReader);
    
        // Then try to cancel the stream
        if (activeStream.current) {
            try {
                await activeStream.current.cancel();
            } catch (e) {
                console.warn('Error cancelling stream:', e);
            }
            activeStream.current = null;
        }
    
        streamController.current = null;
        active.current = false;
        paused.current = false;
    }, [releaseReader]);

    // Process chunks of data
    const processChunk = useCallback(async (chunk: string, index: number) => {
        try {
            options.onChunk?.(chunk, index);
        } catch (error) {
            options.onError?.(error);
        }
    }, [options]);

    // Start processing the stream
    const startProcessing = useCallback(async () => {
        if (!reader.current || !active.current) return;

        //
        let counter = 0;


        // Store the final content and bind it to loading
        let lastContent: string = '';

        while (active.current) {
            try {

                if (paused.current) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                    continue;
                }

                const { done, value } = await reader.current.read();

                if (done) {
                    options.onComplete?.(lastContent);
                    await cleanup();
                    break;
                }

                // Decode the content
                const chunkStr = textDecoder.current.decode(value as Uint8Array, { stream: true });
                lastContent += chunkStr;

                await processChunk(chunkStr, counter);
                counter++;

            } catch (error: any) {
                if (error.name === 'AbortError') {
                    options.onAbort?.();
                } else {
                    options.onError?.(error);
                }
                await cleanup();
                break;
            }
            
        }
    }, [options, cleanup, processChunk]);


    // Start streaming
    const start = useCallback(async (response: Response) => {
        await cleanup();
  
        // Get Reader
        reader.current = response.body!.getReader();

        try {

            const stream = new ReadableStream({
                start(controller) {
                    streamController.current = controller;
                },
                async pull(controller) {
                    try {
                        const { done, value } = await reader.current!.read();
                        
                        if (done) {
                            controller.close();
                            return;
                        }

                        // Decode the content
                        const chunkStr = textDecoder.current.decode(value as Uint8Array, { stream: true });

                        controller.enqueue(chunkStr);
                    } catch (error) {
                        controller.error(error);
                    }
                },
                cancel() {
                    response.body?.cancel();
                }
            });

            activeStream.current = stream;
            active.current = true;
            paused.current = false;

            // Start processing immediately
            await startProcessing();
        } catch (error) {
            options.onError?.(error);
            cleanup();
        }
        
 
    }, [options, cleanup, startProcessing]);

    

    // Pause streaming
    const pause = useCallback(() => {
        paused.current = true;
    }, []);

    // Resume streaming
    const resume = useCallback(() => {
        paused.current = false;
    }, []);

    // Abort streaming
    const abort = useCallback(async () => {
        abortController.current.abort();
        await cleanup();
    }, [cleanup]);

    // Check if stream is active
    const isActive = useCallback(() => {
        return active.current;
    }, []);

    // Check if stream is paused
    const isPaused = useCallback(() => {
        return paused.current;
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            cleanup().catch(console.error);
        };
    }, [cleanup]);

    return {
        start,
        pause,
        resume,
        abort,
        isActive,
        isPaused
    };
};

export default useStreamController;