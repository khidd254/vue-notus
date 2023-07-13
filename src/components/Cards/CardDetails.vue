<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">ACCOUNT DETAILS</h6>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="accountNumber"
                >
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Account Number"
                  v-model="accountNumber"
                  :readonly="isSaved"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="accountType"
                >
                  Type of Account
                </label>
                <select
                  id="accountType"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="accountType"
                  :disabled="isSaved"
                >
                  <option value="family">Family</option>
                  <option value="personal">Personal</option>
                  <option value="joint">Joint</option>
                  <option value="business">Business</option>
                  <option value="company">Company</option>
                </select>
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="openedDate"
                >
                  Date Opened
                </label>
                <input
                  type="date"
                  id="openedDate"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="openedDate"
                  :readonly="isSaved"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="cardNumber"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Card Number"
                  v-model="cardNumber"
                  :readonly="isSaved"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="openedBranch"
                >
                  Branch Opened From
                </label>
                <input
                  type="text"
                  id="openedBranch"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Opened Branch"
                  v-model="openedBranch"
                  :readonly="isSaved"
                />
              </div>

              <div class="text-center mt-6">
                <button
                  v-if="!isSaved"
                  type="button"
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  @click="saveDetails"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountNumber: "",
      accountType: "",
      openedDate: "",
      cardNumber: "",
      openedBranch: "",
      isSaved: false,
    };
  },
  methods: {
    saveDetails() {
      // Check if all fields are filled
      if (
        this.accountNumber &&
        this.accountType &&
        this.openedDate &&
        this.cardNumber &&
        this.openedBranch
      ) {
        // Disable editing of fields
        this.disableFields();

        // Alert user before saving
        if (confirm("Are you sure you want to save the details?")) {
          // Perform actions to save the details
          alert("Account details saved!");
          this.isSaved = true;
        } else {
          // Enable editing of fields
          this.enableFields();
        }
      } else {
        alert("Please fill in all fields!");
      }
    },
    disableFields() {
      // Disable editing of fields
      document.querySelectorAll("input, select").forEach((el) => {
        el.setAttribute("readonly", "readonly");
        el.classList.add("bg-blueGray-100");
        el.classList.remove("bg-white");
      });
    },
    enableFields() {
      // Enable editing of fields
      document.querySelectorAll("input, select").forEach((el) => {
        el.removeAttribute("readonly");
        el.classList.remove("bg-blueGray-100");
        el.classList.add("bg-white");
      });
    },
  },
};
</script>
