<template>
  <div class="flex flex-col min-h-screen text-gray-800 bg-gray-50" >
    <Navbar />
    <main class="flex-grow" :class="{ 'mt-[-90px]': isHomePage }">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer v-if="!isLocationPage" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const route = useRoute();
    const isHomePage = computed(() => {
      return route.path === '/';
    });
    
    const isLocationPage = computed(() => {
      return route.path === '/location';
    });
    
    return {
      isHomePage,
      isLocationPage
    };
  }
}
</script>

<style>
@import './assets/css/main.css';

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 总之就是非常可爱页面特殊样式 */
.kawaii-theme header {
  background: white;
  border-bottom: 1px solid rgba(255, 183, 197, 0.2);
}

.kawaii-theme footer {
  background: linear-gradient(to right, rgba(255, 183, 197, 0.9), rgba(216, 174, 242, 0.9));
  color: white;
}

.kawaii-theme footer h3 {
  color: white;
}

.kawaii-theme footer a,
.kawaii-theme footer .text-gray-300 {
  color: rgba(255, 255, 255, 0.9);
}

.kawaii-theme footer a:hover {
  color: white;
}

.kawaii-theme footer .social-icon {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.kawaii-theme footer .social-icon:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.kawaii-theme footer .border-gray-800 {
  border-color: rgba(255, 255, 255, 0.2);
}
</style>