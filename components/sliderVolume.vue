<template>
    <div
    ref="volumeControl"
    @mousedown="handleMousedown"
    @mouseup="handleMouseup"
    :style="{ transform: `rotate(${rotate}deg)` }"
    class=" flex flex-row justify-center items-center bg-lightgray lg:p-20">
        <i class="fa fa-volume-xmark" />
        <input v-model="volume" class="-webkit-appearance-none appearance-none w-full h-6 bg-slate-500 rounded-lg outline-none" disabled type="range" min="0" max="1" step="0.01">
        <i class="fa fa-volume-high" />
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    volume: number
}>()

const emit = defineEmits<{
    (e: 'volumeChanged', volume: number): void
}>()

const volume = computed({
    get(){
        return props.volume
    },
    set(value){
        return emit('volumeChanged', value)
    }
})


const rotate = ref(0)
const rotationLimit = 25;
let interval: any = null;
const gravity = 0.02;

let volumeControl = ref<HTMLVideoElement | null>(null) as Ref<HTMLElement | null>


function handleMousedown(event: MouseEvent){
    clearInterval(interval);
    const clickX = event.clientX;
    const volumeControlRect = volumeControl?.value?.getBoundingClientRect();
    if(!volumeControlRect) return;
    const centerX = volumeControlRect.left + volumeControlRect.width / 2;
    if(clickX < centerX){
        while (rotate.value > -rotationLimit) rotate.value -= 1
    } else {
        while (rotate.value < rotationLimit) rotate.value += 1
    }
}


function handleMouseup(event: MouseEvent){
    clearInterval(interval)
    rotate.value = 0
}


watch(
    () => rotate.value,
    () => {
        if(rotate.value > 0){
            interval = setInterval(()=>{
                if(volume.value < 1){
                    if(volume.value + (gravity * rotate.value) / 100 > 1){
                        volume.value = 1;
                    } else{
                    volume.value += (gravity * rotate.value) / 100
                    }
                }
            }, 5)
        }
        if(rotate.value < 0){
            interval = setInterval(()=>{
                if(volume.value > 0 && rotate.value < -1){
                    if(volume.value + (gravity * rotate.value) / 100 < 0){
                        volume.value = 0
                    } else {
                        volume.value += (gravity * rotate.value) / 100
                    }
                }
            }, 5)
        }
    }
)
</script> 