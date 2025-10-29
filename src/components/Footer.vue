<template>
  <footer class="bg-white">
    <div
      class="container px-4 pt-[55px] border-t-[4px] border-[#578DFF] flex flex-col pb-[35px] mx-auto"
    >
      <router-link to="/" class="flex items-center space-x-2">
        <div class="overflow-hidden w-[40px] h-[24px]">
          <img
            :src="siteConfig.site.logo"
            :alt="siteConfig.site.title"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="title w-[114px] h-[14px]">
          <img
            src="@/assets/svg/main-title.svg"
            alt="title"
            class="object-cover w-full h-full"
          />
        </div>
      </router-link>
      <div class="text-[#00000066] text-sm self-end">© 2024 TWO SHEEP</div>
    </div>
  </footer>
</template>

<script>
// ... (script 部分保持不变) ...
import siteConfig from '../config/site.js'

export default {
  name: 'Footer',
  setup() {
    return {
      siteConfig,
    }
  },
}
</script>

<style scoped>
.footer-glass {
  background-color: rgba(255, 255, 255, 0.7); /* 半透明白色背景 */
  backdrop-filter: blur(12px); /* 毛玻璃模糊效果 */
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.2); /* 顶部细线，增加层次感 */
}

.social-icon {
  @apply w-9 h-9 rounded-full flex items-center justify-center text-gray-600 bg-gray-100/50 hover:bg-gray-200/70 hover:text-primary-500 transition-all duration-300;
}
</style>
