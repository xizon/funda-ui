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
export declare const useStreamController: (options?: StreamControllerOptions) => StreamController;
export default useStreamController;
