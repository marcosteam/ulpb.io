<template>
    <div style="display: grid;grid-template-columns: repeat(15, 1fr);margin: 0 10%;">
        <PharaseCharacter />
    </div>
</template>

<script>
    export default {
        props: ['text']
    }
</script>