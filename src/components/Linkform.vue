<script setup>
import store from "../Storelink"
import { ref } from "vue";

const emit = defineEmits(['someEvent'])
const getlink = ref('');
const newstore = ()=>{
    store(getlink.value);
    emit('someEvent', store(getlink.value));
}

</script>
<template>
    <div class="text-center ">
        <p class="p-5 text-lg font-bold text-purple"> here is to install any web application by copy and past the URl on fild properly</p>
         <input id="getlink" v-model="getlink" class="w-96 mx-auto pl-5 text-purple border-2 p-2 font-bold text-2xl rounded-3xl border-blue shadow-lg my-5 " type="text">
        <button @click="newstore" class="p-3 w-64   rounded-2xl shadow-xl bg-blue text-white text-2xl font-bold ">Add New</button>
    </div>
</template>