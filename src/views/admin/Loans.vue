<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-loans color="dark" />
    </div>
  </div>
</template>
<script>
import CardLoans from "@/components/Cards/CardLoans.vue";

export default {
  components: {
    CardLoans,
  },
};
</script>
