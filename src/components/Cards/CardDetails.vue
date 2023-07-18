<template>
  <div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">ACCOUNT DETAILS</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <table class="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th class="py-3 px-6 bg-blueGray-50 font-bold uppercase text-sm text-blueGray-500 border-b border-blueGray-200">
              Account Number
            </th>
            <th class="py-3 px-6 bg-blueGray-50 font-bold uppercase text-sm text-blueGray-500 border-b border-blueGray-200">
              Account Type
            </th>
            <th class="py-3 px-6 bg-blueGray-50 font-bold uppercase text-sm text-blueGray-500 border-b border-blueGray-200">
              Date Opened
            </th>
            <th class="py-3 px-6 bg-blueGray-50 font-bold uppercase text-sm text-blueGray-500 border-b border-blueGray-200">
              Card Number
            </th>
            <th class="py-3 px-6 bg-blueGray-50 font-bold uppercase text-sm text-blueGray-500 border-b border-blueGray-200">
              Branch Opened From
            </th>
            <th class="py-3 px-6 bg-blueGray-50 font-bold uppercase text-sm text-blueGray-500 border-b border-blueGray-200">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="accountDetails.length === 0">
            <td colspan="6" class="text-center py-2 px-3">No accounts added</td>
          </tr>
          <tr v-for="(account, index) in accountDetails" :key="index">
            <td class="py-2 px-3 border-b border-blueGray-300">
              <div v-if="!account.editing">{{ account.accountNumber }}</div>
              <template v-else>
                <input type="text" v-model="account.accountNumber" class="border-0 w-full">
              </template>
            </td>
            <td class="py-2 px-3 border-b border-blueGray-300">
              <div v-if="!account.editing">{{ account.accountType }}</div>
              <template v-else>
                <input type="text" v-model="account.accountType" class="border-0 w-full">
              </template>
            </td>
            <td class="py-2 px-3 border-b border-blueGray-300">
              <div v-if="!account.editing">{{ account.dateOpened }}</div>
              <template v-else>
                <input type="date" v-model="account.dateOpened" class="border-0 w-full">
              </template>
            </td>
            <td class="py-2 px-3 border-b border-blueGray-300">
              <div v-if="!account.editing">{{ account.cardNumber }}</div>
              <template v-else>
                <input type="text" v-model="account.cardNumber" class="border-0 w-full">
              </template>
            </td>
            <td class="py-2 px-3 border-b border-blueGray-300">
              <div v-if="!account.editing">{{ account.branchOpenedFrom }}</div>
              <template v-else>
                <input type="text" v-model="account.branchOpenedFrom" class="border-0 w-full">
              </template>
            </td>
            <td class="py-2 px-3 border-b border-blueGray-300">
              <button class="text-blue-500 font-bold" type="button" @click="toggleEdit(account)">
                {{ account.editing ? 'Save' : 'Edit' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-4">
        <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" @click="addAccount" :disabled="accountDetails.length && accountDetails[accountDetails.length - 1].editing">
          Add Account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountDetails: [
        {
          accountNumber: '',
          accountType: '',
          dateOpened: '',
          cardNumber: '',
          branchOpenedFrom: '',
          editing: true,
        },
      ],
    };
  },
  methods: {
    toggleEdit(account) {
      if (account.editing) {
        // Check if any field is empty before saving
        if (
          account.accountNumber === '' ||
          account.accountType === '' ||
          account.dateOpened === '' ||
          account.cardNumber === '' ||
          account.branchOpenedFrom === ''
        ) {
          // Display an error message or handle the validation as per your requirement
          alert('Please fill in all fields');
          return;
        }
      }
      account.editing = !account.editing;
    },
    addAccount() {
      this.accountDetails.push({
        accountNumber: '',
        accountType: '',
        dateOpened: '',
        cardNumber: '',
        branchOpenedFrom: '',
        editing: true,
      });
    },
  },
};
</script>
