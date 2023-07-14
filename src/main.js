import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Customerprofile from "@/views/admin/Customerprofile.vue";
import Accountdetails from "@/views/admin/Accountdetails.vue";
import Loans from "@/views/admin/Loans.vue";
import Transaction from "@/views/admin/Transaction.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import Forget from "@/views/auth/Forget.vue";


// views without layouts
import Index from "@/views/Index.vue";

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/customerprofile",
        component: Customerprofile,
      },
      {
        path: "/admin/Accountdetails",
        component: Accountdetails,
      },
      {
        path: "/admin/loans",
        component: Loans,
      },
      {
        path: "/admin/transaction",
        component: Transaction,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
      {
        path: "/auth/forget",
        component: Forget ,
      },
    ],
  },
  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
