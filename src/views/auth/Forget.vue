<template>
    <div>
      <h2>Forgot Password</h2>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div v-else>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <form @submit.prevent="submitForm">
          <label>Email:</label>
          <input type="email" v-model="email" required />
  
          <label>Password You Can Remember:</label>
          <input type="password" v-model="password" required />
  
          <button type="submit" :disabled="isSubmitting">Reset Password</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
        successMessage: '',
        isSubmitting: false,
      };
    },
    methods: {
      submitForm() {
        setTimeout(() => {
          this.successMessage = 'Password reset instructions sent to your email.';
          this.isSubmitting = false;
        }, 2000);
      },
    },
  };
  </script>
  
  <style>
  .error-message {
    color: red;
    margin-bottom: 10px;
  }
  
  .success-message {
    color: green;
    margin-bottom: 10px;
  }
  </style>
  