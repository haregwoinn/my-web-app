<script setup>
import { ref } from 'vue';
import Popup from './components/Popup.vue';


const popups = ref('');
const shoewpopup = (boolean)=>{
  popups.value = boolean;
}

const switchpopup = ()=>{
  popups.value = '';
}
</script>

<template>
  <div class="w-screen font-roboto mb-0  h-screen bg-white">
    <popup class="absolute w-screen h-screen" @some-event="switchpopup" v-if="popups"/>
    <div class="bg-blue">
      <router-link to="/aboutme" class="material-symbols-outlined p-1 text-white font-bold text-5xl">
        menu
      </router-link>
      <div class="h-24 text-white ">
        <h1 class="font-bold text-4xl py-10  text-center">Web Apps</h1>
      </div>

      <div class="rounded-t-3xl p-2 pl-5 flex  flex-wrap gap-4 text-left bg-white">
        <div class="gap-4  flex flex-wrap ml-20">
          <router-link to="/" class="material-symbols-outlined bg-slate rounded-full p-3 text-blueblack font-bold text-4xl">
                    apps
                  </router-link>
                  <router-link to="/addlink" class="material-symbols-outlined bg-slate rounded-full p-3 text-blueblack font-bold text-4xl">
        add_link
        </router-link>
        </div>
      </div>
    </div>

    <router-view/>

  </div>
</template>

