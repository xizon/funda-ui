/**
 * SSE
 *
 * @usage:
 *
const App = () => {
    const { connected, messages, disconnect, reconnect } = useSSE('http://localhost:3000/sse');

    return (
    <div>
        <p>Status: {connected ? '✅ Connected' : '❌ Disconnected'}</p>
        <button onClick={disconnect}>Disconnect</button>
        <button onClick={reconnect}>Reconnect</button>
        {messages.map((m, i) => <div key={i}>{m}</div>)}
    </div>
    );
};

 * It is recommended to use it in conjunction with usePageVisibility, because in HTTP mode,
 * browsers allow a maximum of 6 connections; otherwise, other normal interfaces will be suspended and inaccessible.

 import usePageVisibility from 'funda-ui/Utils/usePageVisibility';

const App = () => {
    const { connected, messages, disconnect, reconnect } = useSSE('http://localhost:3000/sse');

    // add new
    usePageVisibility(
        () => {
            reconnect();
        },
        () => {
            disconnect();
        },
        () => console.log("🎬 Page initialized while visible.")
    );

    return '';
};

 */
declare const useSSE: (url: string | null | undefined, retryDelay?: number) => {
    readonly connected: boolean;
    readonly messages: string[];
    readonly disconnect: () => void;
    readonly reconnect: () => void;
    readonly resetMessages: () => void;
};
export default useSSE;
export { useSSE };
