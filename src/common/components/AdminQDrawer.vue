<script setup lang="ts">
import { ref } from 'vue'


const leftDrawerOpen = ref(true)

</script>

<template>
 

    <q-drawer 
      show-if-above 
      
      v-model="leftDrawerOpen" 
      side="left" 
      bordered
      :breakpoint="600"
      :width="252"
      
      
    >
   

    <div class="text-grey-7 h-40   ">
      <div class="absolute-top bg-transparent mt-11 ">
        <router-link 
          :to="{ name: 'AdminDashboard' }"
        >  
        <q-avatar size="91px" class="mb-1.5 text-grey-7">
          <q-icon name="mdi-account-circle" size="91px"  />  
        </q-avatar>
        <div class="text-weight-bold text-body1 text-grey-7">Administrador</div>
      </router-link>
      </div>
    </div> 
        
        <div class="mt-[53px]  ">
          <q-list >
            

            <q-item 
              :to="{ name: 'AdminPrograms' }"
              exact
              clickable v-ripple
              class="text-weight-bold"
            >
              <q-item-section avatar >
                <q-icon 
                  name="mdi-book-open-outline" 
                  class="ml-[28.5px] text-grey-7 text-body1" 
                />
              </q-item-section>
              <q-item-section 
                class="text-grey-7 text-body1 ml-[19px] text-weight-bold text-left" 
                :size="21"
              >
                Programas
              </q-item-section>
            </q-item>

            

            <q-item :to="{ name: 'AdminCertificates' }"
              exact
              clickable v-ripple
              class="text-weight-bold"
            >
              <q-item-section avatar  >
                <q-icon 
                  name="mdi-certificate" 
                  class="ml-[28.5px] text-grey-7 text-body1" 
                />
              </q-item-section>
              <q-item-section 
                class=" text-grey-7 text-body1 ml-[19px] text-weight-bold text-left" 
                :size="21"
              >
                Certificaciones
              </q-item-section>
            </q-item>

            <q-item :to="{ name: 'AdminStudents' }"
              exact
              clickable v-ripple
              class="text-weight-bold"
            >
              <q-item-section avatar  >
                <q-icon 
                  name="mdi-account-school" 
                  class="ml-[28.5px] text-grey-7 text-body1" 
                />
              </q-item-section>
              <q-item-section 
                class=" text-grey-7 text-body1 ml-[19px] text-weight-bold text-left" 
                :size="21"
              >
                Estudiantes  
              </q-item-section>
            </q-item>
            
            <q-item :to="{ name: 'AdminGroups' }"
              exact
              clickable v-ripple
              class="text-weight-bold"
            >
              <q-item-section avatar  >
                <q-icon 
                  name="mdi-account-group-outline" 
                  class="ml-[28.5px] text-grey-7 text-body1" 
                />
              </q-item-section>
              <q-item-section 
                class=" text-grey-7 text-body1 ml-[19px] text-weight-bold text-left" 
                :size="21"
              >
                Grupos  
              </q-item-section>
            </q-item>
            
            <q-item :to="{ name: 'AdminRequests' }"
              exact
              clickable v-ripple
              class="text-weight-bold"
            >
              <q-item-section avatar  >
                <q-icon 
                  name="mdi-clipboard-list-outline" 
                  class="ml-[28.5px] text-grey-7 text-body1" 
                />
              </q-item-section>
              <q-item-section 
                class=" text-grey-7 text-body1 ml-[19px] text-weight-bold text-left" 
                :size="21"
              >
                Solicitudes  
              </q-item-section>
            </q-item>

        </q-list>
        </div>

      <div class="text-grey-7 h-40   ">
        <div class="absolute-bottom bg-transparent mt-11 text-black mb-[43px]">
          <q-list >
            <q-item :to="{ name: 'AdminSettings' }"
              exact
              clickable v-ripple
              class="text-weight-bold"
            >
              <q-item-section avatar  >
                <q-icon 
                  name="mdi-cog" 
                  class="ml-[28.5px] text-grey-7 text-body1" 
                />
              </q-item-section>
              <q-item-section 
                class=" text-grey-7 text-body1 ml-[19px] text-weight-bold text-left" 
                :size="21"
              >
                Configuración
              </q-item-section>
            </q-item>

            <q-item :to="{ name: 'Login' }"
              exact
              clickable v-ripple
              class="text-weight-bold"
            >
              <q-item-section avatar >
                <q-icon 
                  name="mdi-logout" 
                  class="ml-[28.5px] text-grey-7 text-body1" 
                />
              </q-item-section>
              <q-item-section 
                class="text-grey-7 text-body1 ml-[19px] text-weight-bold text-left" 
                :size="21"
              >
                Cerrar sesión
              </q-item-section>
            </q-item>

        </q-list>

        </div>
      </div>

    </q-drawer>


    


 <q-page-container>
   <router-view />
 </q-page-container>




</template>


