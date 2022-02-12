<template>
    <div id="keyboard">
        <KeyBoardRow>
            <KeyBoardOtherKey keyname="Tab" alignitem="left" ratio="1.5" />
            <KeyBoardAlphanumeric id="KeyQ" :keymap="keySet.keymap.KeyQ"/>
            <KeyBoardAlphanumeric id="KeyW" :keymap="keySet.keymap.KeyW"/>
            <KeyBoardAlphanumeric id="KeyE" :keymap="keySet.keymap.KeyE"/>
            <KeyBoardAlphanumeric id="KeyR" :keymap="keySet.keymap.KeyR"/>
            <KeyBoardAlphanumeric id="KeyT" :keymap="keySet.keymap.KeyT"/>
            <KeyBoardAlphanumeric id="KeyY" :keymap="keySet.keymap.KeyY"/>
            <KeyBoardAlphanumeric id="KeyU" :keymap="keySet.keymap.KeyU"/>
            <KeyBoardAlphanumeric id="KeyI" :keymap="keySet.keymap.KeyI"/>
            <KeyBoardAlphanumeric id="KeyO" :keymap="keySet.keymap.KeyO"/>
            <KeyBoardAlphanumeric id="KeyP" :keymap="keySet.keymap.KeyP"/>
            <KeyBoardAlphanumeric keysymbol="{"/>
            <KeyBoardAlphanumeric keysymbol="}"/>
            <KeyBoardOtherKey keyname="\" alignitem="right" ratio="1.25" />
        </KeyBoardRow>
        <KeyBoardRow>
            <KeyBoardOtherKey keyname="CapsLock" alignitem="left" ratio="2" />
            <KeyBoardAlphanumeric id="KeyA" :keymap="keySet.keymap.KeyA"/>
            <KeyBoardAlphanumeric id="KeyS" :keymap="keySet.keymap.KeyS"/>
            <KeyBoardAlphanumeric id="KeyD" :keymap="keySet.keymap.KeyD"/>
            <KeyBoardAlphanumeric id="KeyF" :keymap="keySet.keymap.KeyF"/>
            <KeyBoardAlphanumeric id="KeyG" :keymap="keySet.keymap.KeyG"/>
            <KeyBoardAlphanumeric id="KeyH" :keymap="keySet.keymap.KeyH"/>
            <KeyBoardAlphanumeric id="KeyJ" :keymap="keySet.keymap.KeyJ"/>
            <KeyBoardAlphanumeric id="KeyK" :keymap="keySet.keymap.KeyK"/>
            <KeyBoardAlphanumeric id="KeyL" :keymap="keySet.keymap.KeyL"/>
            <KeyBoardAlphanumeric id="Semicolon" keysymbol=";"/>
            <KeyBoardAlphanumeric keysymbol="'"/>
            <KeyBoardOtherKey keyname="Enter" alignitem="right" ratio="2.2" />
        </KeyBoardRow>
        <KeyBoardRow>
            <KeyBoardOtherKey keyname="Shift" alignitem="left" ratio="2.8" />
            <KeyBoardAlphanumeric id="KeyZ" :keymap="keySet.keymap.KeyZ"/>
            <KeyBoardAlphanumeric id="KeyX" :keymap="keySet.keymap.KeyX"/>
            <KeyBoardAlphanumeric id="KeyC" :keymap="keySet.keymap.KeyC"/>
            <KeyBoardAlphanumeric id="KeyV" :keymap="keySet.keymap.KeyV"/>
            <KeyBoardAlphanumeric id="KeyB" :keymap="keySet.keymap.KeyB"/>
            <KeyBoardAlphanumeric id="KeyN" :keymap="keySet.keymap.KeyN"/>
            <KeyBoardAlphanumeric id="KeyM" :keymap="keySet.keymap.KeyM"/>
            <KeyBoardAlphanumeric keysymbol="<"/>
            <KeyBoardAlphanumeric keysymbol=">"/>
            <KeyBoardAlphanumeric keysymbol="?"/>
            <KeyBoardOtherKey keyname="Shift" alignitem="right" ratio="2.8" />
        </KeyBoardRow>
    </div>
</template>

<style>
#keyboard {
    background: white;
    display: grid;
    gap: 2px;
    max-height: 30vh;
}
</style>

<script setup>
    const { data: keySet } = await useFetch("/api/getDoublePinyinType?key=flypinyin", {method: "GET"});
</script>