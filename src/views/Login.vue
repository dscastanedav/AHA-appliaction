<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import useAuthStore from '@/store/auth';
import useVuelidate from '@vuelidate/core';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { minLength, required, email, requiredIf, numeric, maxLength } from '@vuelidate/validators';
import { LoginCredentials } from '@/interfaces/auth';
import axios from 'axios';

const isPwd = ref(true);
const isAdmin = ref(false);
const authStore = useAuthStore();

const form = reactive<LoginCredentials>({
  identification: '',
  email: '',
  password: '',
  userType: '',
});

const options = [
  'Administrador', 'Cédula Extranjería', 'Cédula Ciudadanía',
];

const rules = computed(() => ({
  userType: {
    required, 
  },
  password: { 
    required, 
    requirments: (value: string) => {
        return String(value).match(/^(?=.*\d)(?=.*[!@#$%^&*,./])(?=.*[a-z])(?=.*[A-Z]).{6,}$/) ;
    }
  },
  email: {
    email,
    required: requiredIf(form.userType.valueOf() === 'Administrador'),
  },
  identification: {
    required: requiredIf(form.userType.valueOf() === 'Cédula Extranjería' || 'Cédula Ciudadanía'),
    numeric,
    minLength: minLength(7),
    maxLength: maxLength(10),
  },
}));

const v$ = useVuelidate(rules as any, form);

/**
 * Call login action from auth store
 */
async function login() {
  await authStore.login(form);
  // axios.post(
  //   '/profile', 
  //   {
  //     userId: () => {
  //       if(isAdmin.value){
  //         return form.identification
  //       }
  //       return form.email
  //     },
  //     password: form.password
  //   }
  // )
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
}

//This function helps the user to know if he's in the Admin or the user Login
const userTypeText = () => {
  var text: string
  if (form.userType.valueOf() === 'Administrador'){
    text = ' (Administrador)'
  }else if (form.userType.valueOf() === 'Cédula Extranjería'){
    text = ' (Cédula Extranjería)'
  } else {
    text = ' (Cédula Ciudadanía)'
  }
  return text
}
</script>

<template>
  <AuthLayout>
    <template v-slot:form>
      <form
        class=" absolute-center w-56 sm:w-90"
        @submit.prevent="login()"
        
      >
        <h3 class="subtitle text-3xl text-indigo-13  ">Inicio de sesión</h3> 
        
        <div class="text-3xl text-black mb-4">


          <q-select
            class=" text-black text-subtitle2"
            placeholder="Tipo de usuario"
            transition-show="scale"
            transition-hide="scale"
            standout="bg-grey-7 text-black"
            v-model="form.userType"
            :options="options"
            input-class="bg-grey-7 text-black"
            label-color="bg-black"
            :input-style="{ backgroundColor: '#ff0000' }"
            bg-color="bg-grey-7"
            
            
          />
        </div>

        <div v-if="form.userType === 'Administrador'">
        <q-input 
          outlined 
          v-model="form.email" 
          dense 
          placeholder="Correo" 
          class="mb-2 "
          
        >
          <template v-slot:prepend>
            <q-icon dense name="mdi-email" />
          </template>
        </q-input>
        </div>
        <div v-else-if="form.userType.valueOf() === 'Cédula Ciudadanía'">
        <q-input 
          outlined 
          v-model="form.identification" 
          dense 
          placeholder="Cédula" 
          class="mb-0 mt-4 "
          
        >
          <template v-slot:prepend>
            <q-icon dense name="mdi-card-account-details" />
          </template>
        </q-input>
        </div>

        <div v-else-if="form.userType.valueOf() === 'Cédula Extranjería'">
        <q-input 
          outlined 
          v-model="form.identification" 
          dense 
          placeholder="Cédula" 
          class="mb-0 mt-4 "
          
        >
          <template v-slot:prepend>
            <q-icon dense name="mdi-card-account-details" />
          </template>
        </q-input>
        </div>
        
        <q-input 
          class="mb-10 mt-4"
          v-model="form.password" 
          outlined 
          dense
          :type="isPwd ? 'password' : 'text'" 
          placeholder="Contraseña"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <div class="form-link">
          <router-link :to="{ name: 'PasswordRecovery' }">¿Necesitas ayuda para ingresar?</router-link>
        </div>
        <div class=" flex flex-col mt-6">
          
          
          <q-btn 
            no-caps   
            
            label="Iniciar sesión" 
            color="indigo-13"
            type="submit"
            :disabled="v$.$invalid" 
            
          >
          
          <router-link :to="{ name: 'AdminDashboard' }"></router-link> 
         
          
             <!-- <template v-slot:loading>
             
              <div>
                <q-spinner-ios
                  dense
                  color="bg-white"
                  size="1em"
                />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </div>
            </template>  -->
          </q-btn>

  
      


          <!-- <q-btn 
            no-caps 
            class="border border-indigo-13 text-indigo-13 mt-5"
            color="bg-white" 
            :label="isAdmin ? 'Soy usuario' : 'Soy Administrador'"
            @click="isAdmin = !isAdmin" 
          /> -->
        </div>
      </form>
    </template>
  </AuthLayout>
</template>

<style scoped>
</style>
