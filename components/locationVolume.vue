<template>
    <div>
        Initial volume is based of your location:
        {{ Math.floor(volume * 100) }} latitude: {{ coords.latitude }}
    </div>
</template>

<script setup lang="ts">
import { useGeolocation } from '@vueuse/core'

const emit = defineEmits<{ (e: 'volumeChanged', value: number ): void }>()

const { coords } = useGeolocation()

const volume = ref(0)

watch(() => coords.value, ()=>{
    volume.value = Math.round(coords.value.latitude) / 100
    emit('volumeChanged', volume.value)
})
</script>
