<template>
    <div :id="keyname" :style="keyStyle">
        <h1 :style="keyText">{{ keyname }}</h1>
    </div>
</template>

<style>

</style>

<script>
    export default {
        data() {
            return {
                keyStyle: {
                    aspectRatio: this.ratio,
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #000a12",
                    borderRadius: "3px",
                    padding: "0.5rem",
                },
                keyText: {
                    fontSize: "1em",
                    fontWeight: "bold",
                    color: "#000a12",
                    margin: 0,
                    textAlign: this.alignitem,
                }
            }
        },
        props: ['keyname','alignitem','ratio']
    }
</script>