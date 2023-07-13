<template>
  <div class="customer-details">
    <h2>Customer Details</h2>
    <form @submit.prevent="saveCustomer">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="customer.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="customer.email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="customer.phone" required>
      </div>
      <button type="submit">Save</button>
    </form>
    <div v-if="savedCustomer" class="saved-customer">
      <h3>Saved Customer</h3>
      <p><strong>Name:</strong> {{ savedCustomer.name }}</p>
      <p><strong>Email:</strong> {{ savedCustomer.email }}</p>
      <p><strong>Phone:</strong> {{ savedCustomer.phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {
        name: '',
        email: '',
        phone: ''
      },
      savedCustomer: null
    };
  },
  methods: {
    saveCustomer() {
      // Perform any validation or data processing before saving the customer
      // For simplicity, we'll just simulate a save by assigning the customer to savedCustomer
      this.savedCustomer = { ...this.customer };
    }
  }
};
</script>

<style scoped>
.customer-details {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.saved-customer {
  margin-top: 20px;
  padding: 10px;
  background-color: #e6f7ec;
  border-radius: 5px;
}
</style>
