import type {IncomingMessage, ServerResponse} from 'http';
import { useBody, useCookies, useQuery, sendError, H3Error } from 'h3'

export interface IDoublePinYinType {
    keymap: IKeymap;
    initialOptions: IZeroInitialOptions;// 零声母相关设置
}
interface IKeymap {
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
interface IZeroInitialOptions {
    Enable: boolean;
    ZeroInitial?: string;
}

export const flyPinYin: IDoublePinYinType = {
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
        "Enable": false,
    }
}

export default async (req:IncomingMessage, res:ServerResponse) => {
    const query = await useQuery(req);
    const err:H3Error = {
        name: "H3Error",
        message: "UserBadRequest",
        statusCode: 400,
        statusMessage: "Bad Request",
    }
    if (query.key === "flypinyin") {
        return flyPinYin;
    }
    else {
        sendError(res, err);
    }
}
