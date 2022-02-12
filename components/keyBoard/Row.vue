<template>
    <div id="keyboard-row">
        <slot></slot>
    </div>
</template>

<style>
#keyboard-row {
    display: grid;
    gap: 2px;
    grid-template-rows: 4em;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
}
</style>