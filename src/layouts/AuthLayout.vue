<template>
    <div class="w-80 sm:w-110 h-screen overflow-hidden border rounded-md border-zinc-100 bg-white shadow-xl">
      <section class="auth bg-white auth bg-no-repeat bg-cover ">
    <div class="">
      

      <div class="auth-form  p-14 text-center">
         <slot name="form">
          Auth form
        </slot> 

        <div class="app-credits mt-10 text-sm">

          <p class="absolute-bottom text-black text-base">Desarrollado por <a href="https://slabcode.com/" target="_blank" class="form-link">Slabcode</a></p>
        </div>
      </div>
    </div>
  </section>



    </div>

  
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
