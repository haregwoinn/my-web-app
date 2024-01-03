<script setup>
import Appicon from './Appicon.vue';
import { getall } from '../getlinks';
import { ref } from 'vue';


const apps = ref([]);
apps.value = getall();

console.log(apps.value);

</script>
<template>
    <div>
      <h1 class="font-bold text-2xl text-black p-5">Application List</h1>
        <div   class="text-center  flex flex-wrap ">
          <Appicon v-for="app in apps" :key="app" :app="app" />
        </div>
    </div>
</template>