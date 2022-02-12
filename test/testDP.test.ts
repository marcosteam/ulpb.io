import { GenerateCharDPCode } from "../composables/generateCharDP";
import { flyPinyin } from "../composables/doublePinyinPlan/flyPinyin"



describe('双拼码转换测试', () => {
    test('测试转换”波“', () => {
        expect(GenerateCharDPCode('波', flyPinyin)).toStrictEqual(['b','o'])
    })
    test('测试转换“双”', () => {
        expect(GenerateCharDPCode('双', flyPinyin)).toStrictEqual(['u','l'])
    })
    test('测试转换”昂”', () => {
        expect(GenerateCharDPCode('昂', flyPinyin)).toStrictEqual(['a','h'])
    })
    test('测试转换"啊"', () => {
        expect(GenerateCharDPCode('啊', flyPinyin)).toStrictEqual(['a','a'])
    })
    test('测试转换"高"', () => {
        expect(GenerateCharDPCode('高', flyPinyin)).toStrictEqual(['g','c'])
    })
    test('测试转换"鳌"', () => {
        expect(GenerateCharDPCode('鳌', flyPinyin)).toStrictEqual(['a','o'])
    })
})