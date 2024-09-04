/**
 * Drag & Drop Element
 *
 * @usage:


const App = () => {
    const {
        dragContentHandle,
        dragHandle,
        resetPosition
    }: any = useDraggable({
        enabled: true,   // if `false`, drag and drop is disabled
        preventOutsideScreen: {
            xAxis: true,
            yAxis: true
        },
        onStart: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
            
        },
        onDrag: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
            console.log(coordinates); // {dx: -164, dy: -37}

        },
        onStop: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {

        }
    });

    const resetModal = () => {
        resetPosition?.();
    };

    return (
        <div className="container" ref={dragContentHandle}>
            <div ref={dragHandle} className="handle">Drag me</div>
            <div className="content">
                content...
            </div>
        </div>
    );
};


 */
export interface PreventOutsideScreenProps {
    xAxis: boolean;
    yAxis: boolean;
}
export interface UseDraggableProps {
    enabled?: boolean;
    preventOutsideScreen?: PreventOutsideScreenProps;
    onStart?: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => void;
    onStop?: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => void;
    onDrag?: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => void;
}
declare const useDraggable: ({ enabled, preventOutsideScreen, onStart, onStop, onDrag, }: UseDraggableProps) => {
    dragContentHandle: (nodeEle: any) => void;
    dragHandle: (nodeEle: any) => void;
    resetPosition: () => void;
};
export default useDraggable;
