<template>
    <div class="trainzone">
        <div class="pronounce">
            {{ pronounce }}
        </div>
        <div class="answer">
            <input v-for="item in dpCode" type="text" maxlength="1" :value="item">
        </div>
        <div>
            <p class="character">{{ character }}</p>
        </div>
    </div>
</template>

<style>
    .trainzone {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .pronounce {
        font-family: 'Noto Serif SC', serif;
        font-size: 1em;
        font-weight: bold;
        color: #000a12;
        margin: 0;
    }
    .answer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex: 0 0 auto;
        align-content: space-around;
    }
    .answer input[type=text] {
        min-width: 0;
    }
    .character {
        font-size: 3rem;
        font-family: 'Noto Serif SC', serif;
        margin: 0;
    }
</style>

<script>
    import pinyin  from 'pinyin'
import { flyPinyin } from '~~/composables/doublePinyinPlan/flyPinyin'
    import { GenerateCharDPCode } from '~~/composables/generateCharDP'
    export default {
        data() {
            return {
                pronounce: pinyin(this.character)[0][0],
                dpCode: GenerateCharDPCode(this.character, flyPinyin)
            }
        },
        props: ['character']
    }
</script>