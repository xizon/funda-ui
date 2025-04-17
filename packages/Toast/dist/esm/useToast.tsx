import { useCallback } from 'react';
import { useToastContext } from './ToastContext';
import type { ToastOptions, ToastGlobalConfig } from './types';


export interface ToastItem extends ToastOptions {
    id: string;
}


export const useToast = () => {
    const { state, dispatch } = useToastContext();

    const show = useCallback((options: ToastOptions): ToastItem => {
        const id = Math.random().toString(36).substring(2, 9);
        const toast: ToastItem = {
            id,

            // Configure the interface globally, but overrides are allowed to be overridden by the instance configuration.
            wrapperClassName: state.config.defaultWrapperClassName,
            direction: state.config.defaultDirection,
            onlyShowOne: state.config.defaultOnlyShowOne,
            cascading: state.config.defaultCascading,
            reverseDisplay: state.config.defaultReverseDisplay,

            
            ...options,
        };
        dispatch({
            type: 'ADD_TOAST',
            payload: toast,
        });
        return toast;  // Returns the full toast object
    }, [dispatch, state.config]);

    const updateConfig = useCallback((config: Partial<ToastGlobalConfig>) => {
        dispatch({
            type: 'UPDATE_CONFIG',
            payload: config
        });
    }, [dispatch]);


    const close = useCallback((id: string) => {
        dispatch({ type: 'REMOVE_TOAST', payload: id });
    }, [dispatch]);

    const closeByIndex = useCallback((index: number) => {
        const toast = state.toasts[index];
        if (toast) {
            dispatch({ type: 'REMOVE_TOAST', payload: toast.id });
        }
    }, [state.toasts, dispatch]);

    const closeAll = useCallback(() => {
        dispatch({ type: 'REMOVE_ALL' });
    }, [dispatch]);

    // Get all current toasts
    const getToasts = useCallback((): ToastItem[] => {
        return state.toasts;
    }, [state.toasts]);

    return {
        show,
        close,
        closeByIndex,
        closeAll,
        getToasts,
        updateConfig
    };
};