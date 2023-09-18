<template>
    <div>
        <button
        @click="volume = Math.random()"
        class="rounded px-4 py-2 border border-slate-200 hover:bg-slate-300"
        >
            Change Volume
        </button>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{ volume: number}>()

const emit = defineEmits<{
    (e: 'volumeChanged', volume: number): void
}>()

const volume = computed({
    get(){
        return props.volume
    },
    set(value){
        emit('volumeChanged', value)
    }
})
</script>