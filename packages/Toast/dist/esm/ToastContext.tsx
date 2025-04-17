import React, { createContext, useContext, useReducer } from 'react';
import { Toast } from './Toast';
import type { ToastOptions, ToastGlobalConfig } from './types';

interface ToastItem extends ToastOptions {
    id: string;
}

interface ToastContextState {
    toasts: ToastItem[];
    config: ToastGlobalConfig;
}

type ToastAction = 
    | { type: 'ADD_TOAST'; payload: ToastItem }
    | { type: 'REMOVE_TOAST'; payload: string }
    | { type: 'REMOVE_ALL' }
    | { type: 'UPDATE_CONFIG'; payload: ToastGlobalConfig };


const defaultConfig: ToastGlobalConfig = {
    defaultWrapperClassName: '',
    defaultOnlyShowOne: false,
    defaultDirection: 'bottom-center',
    defaultCascading: false,
    defaultReverseDisplay: false
};


const ToastContext = createContext<{
    state: ToastContextState;
    dispatch: React.Dispatch<ToastAction>;
} | undefined>(undefined);

const toastReducer = (state: ToastContextState, action: ToastAction): ToastContextState => {
    switch (action.type) {
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [...state.toasts, action.payload],
            };
        case 'REMOVE_TOAST':
            return {
                ...state,
                toasts: state.toasts.filter((toast) => toast.id !== action.payload),
            };
        case 'REMOVE_ALL':
            return {
                ...state,
                toasts: [],
            };
        case 'UPDATE_CONFIG':
            return {
                ...state,
                config: { ...state.config, ...action.payload }
            };
        default:
            return state;
    }
};

export const ToastProvider: React.FC<{ 
    children: React.ReactNode;
    config?: ToastGlobalConfig;
}> = ({ children, config = {} }) => {
    const [state, dispatch] = useReducer(toastReducer, { 
        toasts: [],
        config: { ...defaultConfig, ...config }
    });

    return (
        <ToastContext.Provider value={{ state, dispatch }}>
            {children}
            <Toast 
                data={state.toasts} 

                // default props
                defaultWrapperClassName={state.config.defaultWrapperClassName}
                defaultDirection={state.config.defaultDirection}
                defaultOnlyShowOne={state.config.defaultOnlyShowOne}
                defaultCascading={state.config.defaultCascading}
                defaultReverseDisplay={state.config.defaultReverseDisplay}

                //
                onUpdate={(updatedData) => {
                    // Iterate through the current toasts and remove the toasts that are not in the "updatedData"
                    state.toasts.forEach(toast => {
                        if (!updatedData.find(item => item.id === toast.id)) {
                            dispatch({ type: 'REMOVE_TOAST', payload: toast.id });
                        }
                    });
                }} 
            />
        </ToastContext.Provider>
    );
};

export const useToastContext = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToastContext must be used within a ToastProvider');
    }
    return context;
};