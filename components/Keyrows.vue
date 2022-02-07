<template>
    <div id="keyboard-row">
        <slot></slot>
    </div>
</template>

<style>
#keyboard-row {
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(14, 1fr);
}
</style>