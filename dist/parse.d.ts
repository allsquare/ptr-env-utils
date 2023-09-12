export declare function MandatoryEnvInt(name: string): number;
export declare const OptionalEnvInt: (name: string) => number | null;
export declare function MandatoryEnvString(name: string): string;
export declare const OptionalEnvString: (name: string) => string | null;
export declare function MandatoryEnvBool(name: string): boolean;
export declare const OptionalEnvBool: (name: string) => boolean | null;
export declare function MandatoryEnvURL(name: string): URL;
export declare const OptionalEnvURL: (name: string) => URL | null;
export declare function MandatoryEnvStringList(name: string, opts?: {
    separator?: string;
}): Array<string>;
export declare const OptionalEnvStringList: (name: string) => string[] | null;
