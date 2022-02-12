export interface IDoublePinYinType {
    keymap: IKeymap;
    initialOptions: IZeroInitialOptions;// 零声母相关设置
}
export interface IKeymap {
    KeyA: Array<string>;
    KeyB: Array<string>;
    KeyC: Array<string>;
    KeyD: Array<string>;
    KeyE: Array<string>;
    KeyF: Array<string>;
    KeyG: Array<string>;
    KeyH: Array<string>;
    KeyI: Array<string>;
    KeyJ: Array<string>;
    KeyK: Array<string>;
    KeyL: Array<string>;
    KeyM: Array<string>;
    KeyN: Array<string>;
    KeyO: Array<string>;
    KeyP: Array<string>;
    KeyQ: Array<string>;
    KeyR: Array<string>;
    KeyS: Array<string>;
    KeyT: Array<string>;
    KeyU: Array<string>;
    KeyV: Array<string>;
    KeyW: Array<string>;
    KeyX: Array<string>;
    KeyY: Array<string>;
    KeyZ: Array<string>;
    Semicolon: Array<string>;
}
export interface IZeroInitialOptions {
    /**
     * 双拼零声母相关设置。
     * @Type  零声母类型，Fixed：固定零声母，ThreePart：三分零声母，ThreePartDouble：三分零声母（双字母音节全拼）
     * @FixelInitial 固定零声母，仅在 ZeroInitialType 为 Fixed 的情况下可用
     */
    Type: ZeroInitialType; 
    FixedInitial?: string;
}
export enum ZeroInitialType {
    Fixed = 0,
    ThreePart = 1,
    ThreePartDouble = 2
}