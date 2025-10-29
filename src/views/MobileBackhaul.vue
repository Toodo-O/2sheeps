<template>
  <div>
    <!-- Hero Section -->
    <section
      class="h-[424px] bg-cover bg-center relative"
      style="background-image: url('/src/assets/images/contact/bg_top.png')"
    >
      <div
        class="container flex relative z-10 justify-start items-center px-4 h-full md:px-6 lg:px-8"
      >
        <div data-aos="fade-right">
          <h1
            class="text-[28px] md:text-[38px] lg:text-[48px] font-bold text-black text-left"
          >
            モバイル・バックホール
          </h1>
        </div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="py-12 bg-white md:py-16 lg:py-20">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <!-- Left Content -->
          <div class="w-full lg:w-3/5" data-aos="fade-right">
            <div class="space-y-6">
              <p
                class="text-sm font-bold leading-relaxed text-gray-700 md:text-base"
              >
                Coltが保有しているファイバー・ネットワークは、公共の場所や建物にあるホットスポット（WiFi/4G/4G+）や複雑な5Gソリューションといった、幅広いソリューションを提供するあらゆるワイヤレスサービスプロバイダーをサポートしています。
              </p>

              <p class="text-sm leading-relaxed text-gray-700 md:text-base">
                Wi-Fiサービスの提供には、Coltワイヤレス・バックホールを自分のビジネスに適するソリューションとして使用できます。都市は流動性があり、ワイヤレス・ネットワークのトラフィックを常に予測することは不可能です。Coltのソフトウェア定義ネットワーク（SDN）テクノロジーを活用すれば、柔軟かつ機敏性のあるネットワーク環境を構築することが可能です。
              </p>

              <p class="text-sm leading-relaxed text-gray-700 md:text-base">
                Colt
                SDNサービスは、トラフィック・ルーティングの最適化、高速化、遅延値の短縮を実現します。さらに、超高速ネットワーク・プロビジョニングを可能にし、スマート・シティの急速な拡大にも対応します。
              </p>

              <p class="text-sm leading-relaxed text-gray-700 md:text-base">
                Coltは、遠隔医療アプリケーションやシームレスな公共サービスを提供するスマート・シティに至るまで、5Gを活用したビジネスを支援します。
              </p>

              <div class="pt-6">
                <h3 class="text-lg md:text-xl font-bold text-[#578DFF] mb-4">
                  Coltのポートフォリオ:
                </h3>
                <ul class="space-y-3">
                  <li class="flex gap-3 items-start">
                    <span class="text-[#578DFF] mt-1">•</span>
                    <span class="text-sm text-gray-700 md:text-base"
                      >お客様のニーズに合わせたダーク・ファイバー</span
                    >
                  </li>
                  <li class="flex gap-3 items-start">
                    <span class="text-[#578DFF] mt-1">•</span>
                    <span class="text-sm text-gray-700 md:text-base"
                      >Colt Wave</span
                    >
                  </li>
                  <li class="flex gap-3 items-start">
                    <span class="text-[#578DFF] mt-1">•</span>
                    <span class="text-sm text-gray-700 md:text-base"
                      >オンデマンド・サービス</span
                    >
                  </li>
                </ul>
              </div>

              <p class="pt-4 text-base text-gray-500 md:text-sm">
                *日本国内では提供していないサービスも含まれます。
              </p>
            </div>
          </div>

          <!-- Right Sidebar - Contact Form -->
          <div class="w-full lg:w-2/5" data-aos="fade-left">
            <div class="sticky top-24">
              <div
                class="bg-gradient-to-br from-[#F8FBFF] to-[#EFF6FF] rounded-xl p-6 md:p-8 shadow-lg border border-blue-100"
              >
                <div class="mb-6">
                  <h3 class="mb-2 text-lg font-bold text-gray-800 md:text-xl">
                    担当者とのチャット
                  </h3>
                  <div class="flex justify-between items-center w-full">
                    <div class="flex flex-col justify-between h-full">
                      <p class="text-xs text-gray-600 md:text-sm">
                        ご購入に関するお問合せ
                      </p>
                      <p class="text-xs font-bold text-gray-600 md:text-sm">
                        平日9:00〜17:00
                      </p>
                    </div>
                    <button
                      class="w-[164px] px-4 py-3 bg-[#578DFF] text-white rounded-lg font-bold hover:bg-[#4678E6] transition-colors text-sm md:text-base"
                    >
                      Chat with us
                    </button>
                  </div>
                </div>

                <div class="pt-6 border-t border-gray-300">
                  <h3 class="mb-4 text-lg font-bold text-gray-800 md:text-xl">
                    【お問い合わせ】
                  </h3>
                  <form @submit.prevent="handleSubmit" class="space-y-4">
                    <!-- 会社名 - 单独一行 -->
                    <input
                      type="text"
                      v-model="form.companyName"
                      placeholder="会社名"
                      class="px-4 py-2.5 w-full text-sm rounded-lg border border-gray-300 transition-all outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    
                    <!-- 姓和名 - 同一行 -->
                    <div class="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        v-model="form.lastName"
                        placeholder="姓"
                        class="px-4 py-2.5 w-full text-sm rounded-lg border border-gray-300 transition-all outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="text"
                        v-model="form.firstName"
                        placeholder="名"
                        class="px-4 py-2.5 w-full text-sm rounded-lg border border-gray-300 transition-all outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <input
                      type="email"
                      v-model="form.email"
                      placeholder="メール"
                      class="px-4 py-2.5 w-full text-sm rounded-lg border border-gray-300 transition-all outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />

                    <input
                      type="tel"
                      v-model="form.phone"
                      placeholder="連絡番号"
                      class="px-4 py-2.5 w-full text-sm rounded-lg border border-gray-300 transition-all outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <textarea
                      v-model="form.message"
                      placeholder="プロジェクト助けする"
                      rows="4"
                      class="px-4 py-2.5 w-full text-sm rounded-lg border border-gray-300 transition-all outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>

                    <div class="space-y-3">
                      <p class="text-xs font-semibold text-gray-700 md:text-sm">
                        ご希望の連絡方法をお選びください:
                      </p>
                      <div class="space-y-2">
                        <label class="flex gap-2 items-center cursor-pointer">
                          <input
                            type="radio"
                            name="contact"
                            value="電話"
                            v-model="form.contactMethod"
                            class="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span class="text-sm text-gray-700">電話</span>
                        </label>
                        <label class="flex gap-2 items-center cursor-pointer">
                          <input
                            type="radio"
                            name="contact"
                            value="Email"
                            v-model="form.contactMethod"
                            class="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span class="text-sm text-gray-700">Email</span>
                        </label>
                        <label class="flex gap-2 items-center cursor-pointer">
                          <input
                            type="radio"
                            name="contact"
                            value="どちらでも良い"
                            v-model="form.contactMethod"
                            class="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span class="text-sm text-gray-700"
                            >どちらでも良い</span
                          >
                        </label>
                      </div>
                    </div>

                    <p class="text-xs leading-relaxed text-gray-500">
                      データプライバシーポリシーに記載されており、フォームよりご登録をお願いします。
                    </p>

                    <button
                      type="submit"
                      class="w-full px-4 py-3 bg-[#578DFF] text-white rounded-lg font-bold hover:bg-[#4678E6] transition-colors text-sm md:text-base"
                    >
                      提出します
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MobileBackhaul',
  data() {
    return {
      form: {
        companyName: '',
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        message: '',
        contactMethod: 'どちらでも良い',
      },
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form)
      // 这里添加表单提交逻辑
      alert('お問い合わせありがとうございます。')
    },
  },
}
</script>

<style scoped>
/* Custom scrollbar for form */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

textarea::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
