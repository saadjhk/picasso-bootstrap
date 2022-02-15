declare const _default: {
    rpc: {
        balanceOf: {
            description: string;
            params: ({
                name: string;
                type: string;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
    };
    types: {
        CurrencyId: string;
        AssetsBalance: string;
    };
};
export default _default;
