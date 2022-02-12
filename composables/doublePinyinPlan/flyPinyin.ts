import { IDoublePinYinType, ZeroInitialType } from "../interface";

export const flyPinyin: IDoublePinYinType = {
    keymap: {
        KeyA: [],
        KeyB: ["in"],
        KeyC: ["ao"],
        KeyD: ["ai"],
        KeyE: [],
        KeyF: ["en"],
        KeyG: ["eng"],
        KeyH: ["ang"],
        KeyI: ["ch"],
        KeyJ: ["an"],
        KeyK: ["uai"],
        KeyL: ["iang", "uang"],
        KeyM: ["ian"],
        KeyN: ["iao"],
        KeyO: ["uo"],
        KeyP: ["ie"],
        KeyQ: ["iu"],
        KeyR: ["uan"],
        KeyS: ["ong", "iong"],
        KeyT: ["ue","ve"],
        KeyU: ["sh"],
        KeyV: ["zh", "ui"],
        KeyW: ["ei"],
        KeyX: ["ia", "ua"],
        KeyY: ["un"],
        KeyZ: ["ou"],
        Semicolon: [""]
    },
    initialOptions: {
        "Type": ZeroInitialType.ThreePartDouble,
    }
}