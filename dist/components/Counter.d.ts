export interface CounterProps {
    startCount: number;
}
export declare const GreenCounter: import("vue").DefineComponent<{
    startCount: {
        type: NumberConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    startCount: number;
} & {}>, {}>;
export declare const RedCounter: import("vue").DefineComponent<{
    startCount: {
        type: NumberConstructor;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    startCount: number;
} & {}>, {
    startCount: number;
}>;
