<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex">
      <sidebar />
      <div class="relative md:ml-64 bg-blueGray-100 flex-1">
        <div class="px-4 md:px-10 mx-auto pt-24">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
export default {
  name: "admin-layout",
  components: {
    Sidebar,
  },
};
</script>
