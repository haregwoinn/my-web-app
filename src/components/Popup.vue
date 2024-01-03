<script setup>
const emit = defineEmits(['someEvent'])
const handelevent = (event) => {
    
    if (event.target.className === 'popupbox') {
        console.log('true')
        emit('someEvent');
    }
}
</script>
<template>
    <div @click.prevent="handelevent" class="popupbox">
        <div class="w-96 text-center bg-white rounded-3xl h-72 my-48  mx-auto">
            <h1 class="font-bold text-purple text-2xl py-4">your application install succefully</h1>
            <button @click="$emit('someEvent')" class="p-2 w-28   rounded-xl shadow-xl bg-blue my-10 text-white text-2xl font-bold ">Ok</button>           
        </div>
    </div>
</template>
<style scoped>
.popupbox{
    background-color: rgba(0, 0, 0, 0.5);
}
</style>