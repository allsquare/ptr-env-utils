/// <reference types="node" />
import { URL } from 'url';
export declare function MandatoryEnvInt(name: string): number;
export declare const OptionalEnvInt: (name: string) => number | null;
export declare function MandatoryEnvString(name: string): string;
export declare const OptionalEnvString: (name: string) => string | null;
export declare function MandatoryEnvBool(name: string): boolean;
export declare const OptionalEnvBool: (name: string) => boolean | null;
export declare function MandatoryEnvURL(name: string): URL;
export declare const OptionalEnvURL: (name: string) => URL | null;
