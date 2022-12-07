import router from '@/router';
import { defineStore } from 'pinia';
import requests from '@/common/plugins/axios';
import { LoginCredentials, LoginResponse, ResetPassword } from '@/interfaces/auth';

const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || '',
    refreshToken: localStorage.getItem('refreshToken') || '',
    isActiveUser: false,
  }),

  actions: {
    /**
     * Make POST request to authenticate a user in the app.
     * Redirect to PasswordChange if is necessary.
     * @param credentials => LoginCredentials data
     */
    async login(credentials: LoginCredentials) {
      await requests.post('/auth/login', credentials)
        .then((result: LoginResponse) => {
          this.setTokens(result.accessToken, result.refreshToken);
          // Redirect to Dashboard
          router.push({ name: 'AdminDashboard' });
        });
    },

    /**
     * Set accessToken and refreshToken values to state
     * and redirect to Dashboard route.
     * @param accessToken => AccessToken value
     * @param refreshToken => RefreshToken value
     */
    async setTokens(accessToken: string, refreshToken: string) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      localStorage.setItem('accessToken', this.accessToken);
      localStorage.setItem('refreshToken', this.refreshToken);
    },

    /**
     * Make POST request to reset password from a user.
     * @param password => New password
     */
    async resetPassword(data: ResetPassword) {
      console.log('Password reseted')
      // await requests.post('/users/forgot', data);
      // this.isActiveUser = true;
    },
  }
});

export default useAuthStore;
