<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
  
      <CardProfile />
  </div>
</template>
<script>
import CardProfile from "@/components/Cards/CardProfile.vue";


export default {
  components: {
    CardProfile,
   
  },
};
</script>
