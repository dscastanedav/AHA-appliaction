<script setup lang="ts">
import { ref } from 'vue'
import QHeaderVue from '@/common/components/QHeader.vue';
import AdminQDrawer from '@/common/components/AdminQDrawer.vue';


const leftDrawerOpen = ref(true)
const searchModel = ref('')
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<template>
   <q-layout view="lHh Lpr lFf"  >

    <q-header class="bg-white text-grey-4  text-left ">
       <QHeaderVue
        title="Calendario"
        search-bar-text="programa, estudiante o certificado"
    /> 
     
    </q-header>


    
    <AdminQDrawer/>

    

    <!-- <q-page-container>
      
      <router-view />
    </q-page-container> -->
  </q-layout> 
  
</template>


