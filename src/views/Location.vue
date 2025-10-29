<template>
  <div class="overflow-hidden relative min-h-screen max-md:pb-[160px] md:min-h-[calc(100vh-92px)] bg-black">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-center bg-cover"
      style="background-image: url('/src/assets/images/news-bg.png')"
    ></div>

    <!-- Content Container -->
    <div class="container flex relative z-10 justify-center items-center px-4 py-12 h-[calc(100vh-92px)] mx-auto max-w-6xl md:py-20 lg:py-24">
      <div class="flex flex-col gap-8 lg:flex-row lg:gap-8 xl:gap-12 lg:items-start">
        <!-- Left Card - Contact Form -->
        <div
          class="w-full lg:w-[380px] xl:w-[460px] bg-white rounded-2xl shadow-2xl p-6 md:p-8"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h2 class="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            次へ
          </h2>
          <p class="mb-6 text-sm leading-relaxed text-gray-600 md:text-base">
            複数拠点への接続をご希望の場合はこちらからお問い合わせください。Coltの担当者より詳細をお伺いいたします。
          </p>

          <div class="space-y-4">
            <div class="relative">
              <input
                type="text"
                v-model="locationInput"
                placeholder="例：「EC2A 3EH」または「20 Great Eastern Street」"
                class="px-4 py-3 pr-12 w-full text-sm rounded-lg border border-gray-300 transition-all outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                class="flex absolute right-2 top-1/2 justify-center items-center w-8 h-8 text-white bg-black rounded-full transition-colors -translate-y-1/2 hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <button
              @click="handleNext"
              class="px-6 py-3 w-full text-base font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg transition-all hover:from-blue-600 hover:to-blue-700 md:text-lg"
            >
              次へ
            </button>
          </div>
        </div>

        <!-- Right Stats Cards -->
        <div
          class="grid flex-1 grid-cols-10 auto-rows-auto gap-3 max-w-2xl md:gap-4"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <!-- Card 1: Data Centers (大卡片 - 左上) -->
          <div
            class="flex flex-col col-span-4 row-span-1 justify-center p-3 text-white rounded-2xl border-2 transition-all border-blue-400/50 md:p-5 lg:p-6 hover:border-blue-400"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
              {{ formatNumber(dataCenter)
              }}<span class="text-2xl md:text-3xl lg:text-4xl">+</span>
            </div>
            <div class="mt-2 text-xs opacity-90 md:text-sm lg:text-base">
              データセンター
            </div>
          </div>

          <!-- Card 2: Countries (小卡片 - 右上) -->
          <div
            class="flex flex-col col-span-6 row-span-1 justify-center p-2.5 text-white rounded-2xl border-2 transition-all border-blue-400/50 md:p-3.5 hover:border-blue-400"
            style="background-color: rgba(87, 141, 255, 0.30)"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="text-2xl font-bold md:text-3xl lg:text-4xl">
              {{ formatNumber(countries) }}
            </div>
            <div class="mt-1.5 text-xs opacity-90 md:text-sm">
              国
            </div>
          </div>

          <!-- Card 3: Cities (小卡片 - 右中) -->
          <div
            class="flex flex-col col-span-3 row-span-1 justify-center p-2.5 text-white rounded-2xl border-2 transition-all border-blue-400/50 md:p-3.5 hover:border-blue-400"
            style="background-color: rgba(87, 141, 255, 0.30)"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div class="text-2xl font-bold md:text-3xl lg:text-4xl">
              {{ formatNumber(cities) }}
            </div>
            <div class="mt-1.5 text-xs opacity-90 md:text-sm">
              都市
            </div>
          </div>

          <!-- Card 4: Buildings (大卡片 - 右下) -->
          <div
            class="flex flex-col col-span-7 row-span-1 justify-center p-3 text-white rounded-2xl border-2 transition-all border-blue-400/50 md:p-5 lg:p-6 hover:border-blue-400"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div class="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
              {{ formatNumber(buildings)
              }}<span class="text-2xl md:text-3xl lg:text-4xl">+</span>
            </div>
            <div class="mt-2 text-xs opacity-90 md:text-sm lg:text-base">
              接続拠点とご建物
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="absolute right-0 bottom-0 left-0 z-20">
      <div
        class="container px-4 pt-[55px] border-t-[4px] border-[#578DFF] flex flex-col pb-[35px] mx-auto"
      >
        <router-link to="/" class="flex items-center space-x-2">
          <div class="h-8 title">
            <img
              src="@/assets/svg/logo-inner.svg"
              alt="title"
              class="object-cover w-full h-full"
            />
          </div>
        </router-link>
        <div class="self-end text-sm text-white/40">© 2024 TWO SHEEP</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  data() {
    return {
      locationInput: '',
      dataCenter: 0,
      countries: 0,
      cities: 0,
      buildings: 0,
    }
  },
  mounted() {
    // 页面加载时启动数字动画
    this.animateNumber('dataCenter', 1100, 2000)
    this.animateNumber('countries', 38, 2000)
    this.animateNumber('cities', 230, 2000)
    this.animateNumber('buildings', 32000, 2000)
  },
  methods: {
    handleNext() {
      console.log('Location:', this.locationInput)
      // 处理下一步逻辑
      if (this.locationInput.trim()) {
        alert('接続拠点を確認しています...')
      } else {
        alert('接続拠点を入力してください。')
      }
    },
    animateNumber(key, targetValue, duration) {
      const startTime = Date.now()
      const startValue = 0

      const updateValue = () => {
        const currentTime = Date.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // 使用 easeOutQuart 缓动函数
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        this[key] = Math.floor(easeOutQuart * targetValue)

        if (progress < 1) {
          requestAnimationFrame(updateValue)
        } else {
          this[key] = targetValue
        }
      }

      requestAnimationFrame(updateValue)
    },
    formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
}
</script>

<style scoped>
/* Stars animation */
@keyframes twinkle {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

/* Stats cards hover effect */
.border-blue-400\/50:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
}

/* Input focus glow */
input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Number animation */
@keyframes countUp {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
