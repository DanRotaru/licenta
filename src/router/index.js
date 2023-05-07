import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import Pricing from "@/views/Pricing.vue";
import FAQ from "@/views/FAQ.vue";
import Browse from "@/views/Browse.vue";
import Project from "@/views/Project.vue";
import User from "@/views/User.vue";

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

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: DashboardAnalytics,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/chat',
    name: 'dashboard-chat',
    component: DashboardChat,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/settings',
    name: 'dashboard-settings',
    component: DashboardSettings,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/users',
    name: 'dashboard-users',
    component: DashboardUsers,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/users/:id',
    name: 'dashboard-users-single',
    component: DashboardUsersSingle,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/projects',
    name: 'dashboard-projects',
    component: DashboardProjects,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/projects/create',
    name: 'dashboard-projects-create',
    component: DashboardProjectsCreate,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/projects/:id',
    name: 'dashboard-projects-single',
    component: DashboardProjectsSingle,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/favorites',
    name: 'dashboard-favorites',
    component: DashboardFavorites,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/archive',
    name: 'dashboard-archive',
    component: DashboardArchive,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/help',
    name: 'dashboard-help',
    component: DashboardHelp,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/support',
    name: 'dashboard-support',
    component: DashboardSupport,
    meta: {
      requiresAuth: true
    }
  },
];

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
      path: '/project/:id',
      name: 'project',
      component: Project,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
    },

    ...dashboardRoutes,

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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    const existCookies = document.cookie.indexOf("Codeazone=") > -1

    if (!existCookies) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router;
