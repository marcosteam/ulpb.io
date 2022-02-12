import { IDoublePinYinType } from "./interface";
import pinyin from "pinyin";

export function GenerateCharDPCode(character: string, method: IDoublePinYinType): Array<String> {
    // 生成字符所使用的双拼编码
    const pronounce = pinyin(character, { style: pinyin.STYLE_NORMAL })[0][0]
    const initial = "bpmfdtnlghkjqxzcsryw"
    const encodedChar = []
    
    if (initial.indexOf(pronounce[0]) != -1) {
        // 如果首字母是声母
        if (pronounce[1] == 'h') {
            encodedChar.push(generateCode(`${pronounce[0]}h`, method))
            encodedChar.push(generateCode(pronounce.substring(2), method))
        } else {
            encodedChar.push(pronounce[0])
            encodedChar.push(generateCode(pronounce.substring(1), method))
        }
    } else {
        // 零声母情况处理，可参考 https://bbs.flypy.com/forum.php?mod=viewthread&tid=4&page=1
        switch (method.initialOptions.Type) {
            case 0:
                encodedChar.push(method.initialOptions.FixedInitial)
                break
            case 2:
                if (character.length == 2) {
                    return character.split('')
                }
            case 1:
                encodedChar.push(pronounce[0])
        }
        encodedChar.push(generateCode(pronounce, method))
    }
    return encodedChar
}

function generateCode(character:string, method: IDoublePinYinType): string {
    if (character.length == 1) return character
    for (let prop in method.keymap) {
        if (method.keymap[prop].includes(character)) {
            return prop == 'Semicolon' ? ';' : prop.charAt(3).toLowerCase();
        }
    }
}