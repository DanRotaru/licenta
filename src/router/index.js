import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';
import Pricing from "@/views/Pricing.vue";
import FAQ from "@/views/FAQ.vue";
import Browse from "@/views/Browse.vue";
import Project from "@/views/Project.vue";
import User from "@/views/User.vue";
import ProjectCreate from "@/views/Project-Create.vue";
import ProjectCreate2 from "@/views/Project-Create2.vue";
import Settings from "@/views/Settings.vue";

import Dashboard from '@/views/dashboard/Dashboard.vue';
import DashboardAnalytics from "@/views/dashboard/Analytics.vue";
import DashboardChat from "@/views/dashboard/Chat.vue";
import DashboardSettings from "@/views/dashboard/Settings.vue";
import DashboardUsers from "@/views/dashboard/Users.vue";
import DashboardUsersSingle from "@/views/dashboard/UsersSingle.vue";
import DashboardProjects from "@/views/dashboard/Projects.vue";
import DashboardProjectsCreate from "@/views/dashboard/ProjectsCreate.vue";
import DashboardProjectsSingle from "@/views/dashboard/ProjectsSingle.vue";
import DashboardFavorites from "@/views/dashboard/Favorites.vue";
import DashboardHelp from "@/views/dashboard/Help.vue";
import DashboardArchive from "@/views/dashboard/Archive.vue";
import DashboardSupport from "@/views/dashboard/Support.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ,
    },
    {
      path: '/browse',
      name: 'browse',
      component: Browse,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/create',
      name: 'create',
      component: ProjectCreate2,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/project/:id',
      name: 'project',
      component: Project,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/dashboard/analytics',
      name: 'dashboard-analytics',
      component: DashboardAnalytics,
    },
    {
      path: '/dashboard/chat',
      name: 'dashboard-chat',
      component: DashboardChat,
    },
    {
      path: '/dashboard/settings',
      name: 'dashboard-settings',
      component: DashboardSettings,
    },
    {
      path: '/dashboard/users',
      name: 'dashboard-users',
      component: DashboardUsers,
    },
    {
      path: '/dashboard/users/:id',
      name: 'dashboard-users-single',
      component: DashboardUsersSingle,
    },
    {
      path: '/dashboard/projects',
      name: 'dashboard-projects',
      component: DashboardProjects,
    },
    {
      path: '/dashboard/projects/create',
      name: 'dashboard-projects-create',
      component: DashboardProjectsCreate,
    },
    {
      path: '/dashboard/projects/:id',
      name: 'dashboard-projects-single',
      component: DashboardProjectsSingle,
    },
    {
      path: '/dashboard/favorites',
      name: 'dashboard-favorites',
      component: DashboardFavorites,
    },
    {
      path: '/dashboard/archive',
      name: 'dashboard-archive',
      component: DashboardArchive,
    },
    {
      path: '/dashboard/help',
      name: 'dashboard-help',
      component: DashboardHelp,
    },
    {
      path: '/dashboard/support',
      name: 'dashboard-support',
      component: DashboardSupport,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;
