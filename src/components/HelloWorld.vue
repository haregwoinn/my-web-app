<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

<div>
        <button class="p-3 w-64  rounded-2xl shadow-xl bg-blue text-white text-2xl font-bold ">Add New</button>
  <Linkform @some-event="shoewpopup"/>
        <div class="">
        
          <h1 class="font-bold"><span class="material-symbols-outlined  text-blueblack font-bold text-4xl">
              apps
            </span></h1>
        </div>

        <div class="">
        
          <h1 class="font-bold">
            <span class="material-symbols-outlined text-blueblack font-bold text-4xl">
    add_link
    </span>
          </h1>
        </div>
            <div class="absolute text-purple h-24  bottom-0 p-4 text-center  w-screen ">
        <span class="material-symbols-outlined text-sm">
    radio_button_checked
    </span>
    <span class="material-symbols-outlined text-sm">
    radio_button_unchecked
    </span>
    <span class="material-symbols-outlined text-sm">
    radio_button_unchecked
    </span>
      </div>
</div>




</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
