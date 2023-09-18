<template>
    <div class="flex justify-center text-white h-screen">
        <div class="flex flex-col items-center text-center pt-10 w-full">
            <video class="w-[50em]" ref="video" controls muted></video>
            <div class="text-2xl">Volume: {{ Math.floor( volume * 100) }}</div>

            <div class="border-2 border-dashed w-full py-1 my-4">
                <spin-wheel-button @volume-changed="handleVolumeChange"/>
             
            </div>
            
        </div>

        <div class="flex flex-col items-center text-center text-2xl w-[50em] h-fit bg-slate-800 p-10 overflow-hidden">

            <div class="border-2 border-dashed w-full py-1 my-4">
                <location-volume @volume-changed="handleVolumeChange"/>
             
            </div>

            <div class="border-2 border-dashed w-full py-4 my-4">
                <slider-volume :volume="volume" @volume-changed="handleVolumeChange"/>
             
            </div>

            <div class="border-2 border-dashed w-full py-4 my-4">
               <random-value :volume="volume"
               @volume-changed="handleVolumeChange"
               />
            </div>

            <div class="border-2 border-dashed h-fit w-full py-4 my-4">
               <radio-buttons :volume="volume"
               @volume-changed="handleVolumeChange"
               />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'

const video = ref<HTMLVideoElement | null>(null)

const { volume } = useMediaControls(video, {
    src: "/myVd.mp4"
})

const handleVolumeChange = (value: number)=>{
    volume.value = value
}
</script>


