<template>
  <div class="relative w-full">
    <div class="overflow-x-auto">
      <table class="w-full min-w-max">
        <thead>
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              DATE
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              TIME
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              TRANSACTION TYPE
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              AMOUNT
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              BALANCE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ transaction.date }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ transaction.time }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ transaction.type }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ transaction.amount }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ transaction.balance }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          date: '2023-07-10',
          time: '09:30 AM',
          type: 'Deposit',
          amount: '$500.00',
          balance: '$1,000.00',
        },
        {
          id: 2,
          date: '2023-07-11',
          time: '02:45 PM',
          type: 'Withdrawal',
          amount: '$200.00',
          balance: '$800.00',
        },
        {
          id: 3,
          date: '2023-07-12',
          time: '11:15 AM',
          type: 'Transfer',
          amount: '$150.00',
          balance: '$650.00',
        },
        {
          id: 4,
          date: '2023-07-13',
          time: '08:20 AM',
          type: 'Payment',
          amount: '$50.00',
          balance: '$600.00',
        },
        {
          id: 5,
          date: '2023-07-14',
          time: '03:30 PM',
          type: 'Withdrawal',
          amount: '$100.00',
          balance: '$500.00',
        },
        {
          id: 6,
          date: '2023-07-15',
          time: '10:45 AM',
          type: 'Deposit',
          amount: '$300.00',
          balance: '$800.00',
        },
      ],
    };
  },
};
</script>
