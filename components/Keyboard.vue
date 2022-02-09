<template>
    <div id="keyboard">
        <Keyrows>
            <KeyOther keyname="Tab" alignitem="left" ratio="1.5" />
            <Alphanumeric id="KeyQ" :keymap="keySet.keymap.KeyQ"/>
            <Alphanumeric id="KeyW" :keymap="keySet.keymap.KeyW"/>
            <Alphanumeric id="KeyE" :keymap="keySet.keymap.KeyE"/>
            <Alphanumeric id="KeyR" :keymap="keySet.keymap.KeyR"/>
            <Alphanumeric id="KeyT" :keymap="keySet.keymap.KeyT"/>
            <Alphanumeric id="KeyY" :keymap="keySet.keymap.KeyY"/>
            <Alphanumeric id="KeyU" :keymap="keySet.keymap.KeyU"/>
            <Alphanumeric id="KeyI" :keymap="keySet.keymap.KeyI"/>
            <Alphanumeric id="KeyO" :keymap="keySet.keymap.KeyO"/>
            <Alphanumeric id="KeyP" :keymap="keySet.keymap.KeyP"/>
            <Alphanumeric keysymbol="{"/>
            <Alphanumeric keysymbol="}"/>
            <KeyOther keyname="\" alignitem="right" ratio="1.25" />
        </Keyrows>
        <Keyrows>
            <KeyOther keyname="CapsLock" alignitem="left" ratio="2" />
            <Alphanumeric id="KeyA" :keymap="keySet.keymap.KeyA"/>
            <Alphanumeric id="KeyS" :keymap="keySet.keymap.KeyS"/>
            <Alphanumeric id="KeyD" :keymap="keySet.keymap.KeyD"/>
            <Alphanumeric id="KeyF" :keymap="keySet.keymap.KeyF"/>
            <Alphanumeric id="KeyG" :keymap="keySet.keymap.KeyG"/>
            <Alphanumeric id="KeyH" :keymap="keySet.keymap.KeyH"/>
            <Alphanumeric id="KeyJ" :keymap="keySet.keymap.KeyJ"/>
            <Alphanumeric id="KeyK" :keymap="keySet.keymap.KeyK"/>
            <Alphanumeric id="KeyL" :keymap="keySet.keymap.KeyL"/>
            <Alphanumeric id="Semicolon" keysymbol=";"/>
            <Alphanumeric keysymbol="'"/>
            <KeyOther keyname="Enter" alignitem="right" ratio="2.2" />
        </Keyrows>
        <Keyrows>
            <KeyOther keyname="Shift" alignitem="left" ratio="2.8" />
            <Alphanumeric id="KeyZ" :keymap="keySet.keymap.KeyZ"/>
            <Alphanumeric id="KeyX" :keymap="keySet.keymap.KeyX"/>
            <Alphanumeric id="KeyC" :keymap="keySet.keymap.KeyC"/>
            <Alphanumeric id="KeyV" :keymap="keySet.keymap.KeyV"/>
            <Alphanumeric id="KeyB" :keymap="keySet.keymap.KeyB"/>
            <Alphanumeric id="KeyN" :keymap="keySet.keymap.KeyN"/>
            <Alphanumeric id="KeyM" :keymap="keySet.keymap.KeyM"/>
            <Alphanumeric keysymbol="<"/>
            <Alphanumeric keysymbol=">"/>
            <Alphanumeric keysymbol="?"/>
            <KeyOther keyname="Shift" alignitem="right" ratio="2.8" />
        </Keyrows>
        <Keyrows>
            
        </Keyrows>
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