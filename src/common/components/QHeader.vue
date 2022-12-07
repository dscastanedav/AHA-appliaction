<script setup lang="ts">
import { ref } from 'vue'


const  model= ref('')
const searchModel= ref('')



const props = defineProps({ 
  searchBarText: { 
    type: String, 
    required: false,
  },
  title: { 
    type: String, 
    required: false,
  },
});
      
  

</script>

<template>
  <div class="q-pa-md">
    
    <div class="q-gutter-md " >
      <div v-if="title" class="mb-[48px] ">
        <p class="h4 text-h4 text-weight-medium">
          {{ title }}
        </p>
      </div>
      <q-input 
          v-if="searchBarText"
          class="mb-10  mt-10 text-black text-body1 "
          v-model="searchModel" 
          standout="bg-grey-7 text-white" 
          rounded
          :placeholder="'Buscar ' + searchBarText"
          style="width: 800px height: 50;"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-magnify" />
          </template>
         
        </q-input>
      
    </div>
  </div>
</template>






