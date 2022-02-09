<template>
    <div class="alphakey" :id="id">
        <div class="alphabet">
            <h1>{{ keysymbol ? keysymbol : id.charAt(3) }}</h1>
        </div>
        <div class="pronun">
            <p v-for="item in keymap">
            {{ item }}
            </p>
        </div>
    </div>
</template>

<style>
    .alphakey {
        aspect-ratio: 1;
        background-color: #f5f5f5;
        border: 1px solid #000a12;
        border-radius: 3px;
        display: flex;
        flex-direction: row;
        flex: flex-grow;
        justify-content: space-around;
        padding: 0.5rem;
    }
    .alphabet {
        align-self: start;
        display: flexbox;
    }
    .alphabet h1 {
        font-size: 1em;
        font-weight: bold;
        color: #000a12;
        margin: 0;
    }
    .pronun {
        align-self: end;
        display: flexbox;
        padding: 0;
    }
    .pronun p {
        margin: 0.1em 0 0;
        font-size: 0.75em;
    }
</style>

<script>
    export default {
        methods: {
            handleKeydown(event) {
                try {
                    document.getElementById(event.code).style.backgroundColor = '#ff0000';
                } catch (error) {
                    console.log(error);
                }
            },
            handleKeyup(event) {
                try {
                    document.getElementById(event.code).style.backgroundColor = '#f5f5f5';
                } catch (error) {
                    console.log(error);
                }
            }
        },
        mounted() {
            document.addEventListener('keydown', this.handleKeydown);
            document.addEventListener('keyup', this.handleKeyup);
        },
        props: ['keymap','id',"keysymbol"]
    }
</script>