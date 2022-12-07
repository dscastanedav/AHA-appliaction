import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/views/Login.vue';
import PasswordRecovery from '@/views/PasswordRecovery.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';
import AdminCalendar from '@/views/AdminCalendar.vue';
import AdminPrograms from '@/views/AdminPrograms.vue';
import AdminCertificates from '@/views/AdminCertificates.vue';
import AdminStudents from '@/views/AdminStudents.vue';
import AdminGroups from '@/views/AdminGroups.vue';
import AdminRequests from '@/views/AdminRequests.vue';
import AdminSettings from '@/views/AdminSettings.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'AdminDashboard',
    component: AdminDashboard,
    // meta: { requiresAuth: true },
    children: [
      {
        path: '/calendar',
        name: 'AdminCalendar',
        component: AdminCalendar,
      },
      {
        path: '/programs',
        name: 'AdminPrograms',
        component: AdminPrograms,
      },
      {
        path: '/certificates',
        name: 'AdminCertificates',
        component: AdminCertificates,
      },
      {
        path: '/students',
        name: 'AdminStudents',
        component: AdminStudents,
      },
      {
        path: '/groups',
        name: 'AdminGroups',
        component: AdminGroups,
      },
      {
        path: '/groups',
        name: 'AdminRequests',
        component: AdminRequests,
      },
      {
        path: '/requests',
        name: 'AdminSettings',
        component: AdminSettings,
      },
      
    ],
  },
  {
    path: '/recuperar-contrasena',
    name: 'PasswordRecovery',
    component: PasswordRecovery,
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// TODO => Implement routing guards

export default router;
