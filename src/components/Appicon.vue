<script setup>
import { geturlTitle } from "../GeturlTitle"
import { extractFavicon } from "../ExtractatFavicon"
import {remove} from "../RemoveLink"
import { ref } from "vue";


const props = defineProps({
    app:''
});

const title = geturlTitle(props.app)
const imageicon = extractFavicon(props.app)
</script>

<template>
    <div class="">
        <div @click.alt="remove()" class=" w-40 h-36 text-center">
             <a target="_blank" :href="app">
            <img class="w-20 bg-slate place-items-end rounded-full mx-auto mt-4 shadow-sm h-20 p-4" :src="imageicon" alt="">
                 <h4 class="font-bold p-2">{{ title }}</h4>
            </a>
        </div>            
    </div>
</template>