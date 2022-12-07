<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import useAuthStore from '@/store/auth';
import { useVuelidate } from '@vuelidate/core';
import { minLength, required, sameAs, email, requiredIf, numeric, maxLength } from '@vuelidate/validators';
import AuthLayout from '@/layouts/AuthLayout.vue';
import axios from 'axios';

const submitting = ref(false)
const store = useAuthStore();
const isAdmin = ref(false);

const form = reactive({
  identification: '',
  identificationConfirm: ''
});

const rules = computed(() => ({
  identification: {
    required,
    minLength: minLength(8),
    email: (value: string) => {
      if (!isAdmin.value) return String(value).match(/\S+@\S+\.\S+/);
      return !isNaN(+value);
    },
    // email: {
    //   email,
    //   required: requiredIf(!isAdmin.value),
    // },
    // numeric: {
    //   required: requiredIf(isAdmin.value),
    //   numeric,
    //   minLength: minLength(7),
    //   maxLength: maxLength(10),
    // },
  },
  identificationConfirm: { sameAsId: sameAs(form.identification) },
}));

const v$ = useVuelidate(rules as any, form);

function sendPasswordRequest() {
  submitting.value = true
  // Simulating a delay here.
  // When we are done, we reset "submitting"
  // Boolean to false to restore the
  // initial state.
   setTimeout(() => {
  // delay simulated, we are done,
  // now restoring submit to its initial state
    submitting.value = false
   }, 1000)


  axios.post(
    '/recoverPassword', 
    {
      userId: () => {
        
          return form.identification
        
       
      },
      
    }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

//This function helps the user to know if he's in the Admin or the user Page
const isAdminText = () => {
  var text: string
  if (!isAdmin.value){
    text = ' (Usuario)'
  }else {
    text = ' (Administrador)'
  }
  return text
}
</script>

<template>
  <AuthLayout>
    <template v-slot:form>
      <form
        class="absolute-center w-56 sm:w-90"
        @submit.prevent="sendPasswordRequest()"
      >
        <h3 class="subtitle text-3xl text-indigo-13">Recuperar contraseña</h3>
        
        <!-- <div v-if="form.userType.valueOf() === 'Cédula Extranjería'">
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
         -->
        <q-input 
          outlined 
          v-model="form.identification" 
          dense 
          :placeholder="isAdmin ? 'Cédula' : 'Correo electrónico'"
          class="mb-0 "
          
        >
          <template v-slot:prepend>
            <q-icon dense :name="isAdmin ? 'mdi-card-account-details' : 'mdi-email'" />
          </template>
        </q-input>

        <q-input 
          outlined 
          v-model="form.identificationConfirm" 
          dense 
          :placeholder="`Confirmar ${isAdmin ? 'Cédula' : 'Correo electrónico'}`"
          class="mt-4 mb-5"
         
        >
          <template v-slot:prepend>
            <q-icon dense :name="isAdmin ? 'mdi-card-account-details' : 'mdi-email'" />
          </template>
        </q-input>
        <div class="form-link">
          <router-link :to="{ name: 'Login' }">¿Ya tienes cuenta? Inicia sesión aquí</router-link>
        </div>
        <div class="submit-actions flex flex-col mt-6">
          <q-btn 
            no-caps   
            :loading="submitting"
            
            label="Enviar al correo" 
            color="indigo-13"
            type="submit"
            :disabled="v$.$invalid"          
          >
            <template v-slot:loading>
              <div>
                <q-spinner-ios
                  dense
                  color="bg-white"
                  size="1em"
                />
                <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
              </div>
            </template>
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
