/**
 * 网站配置文件
 * 在这里集中管理网站的所有配置信息，修改此文件即可自定义网站内容
 */

// 导入图片资源
import logoImage from '../assets/svg/logo.svg'

const siteConfig = {
  // 基本信息
  site: {
    title: '', // 网站标题
    logo: logoImage, // Logo路径
    favicon: logoImage, // 网站图标
    language: 'ja-JP', // 网站默认语言
  },

  // 导航菜单
  navItems: [
    { name: 'サービス', path: '/#services' },
    { name: 'お問い合わせ', path: '/#contact' },
  ],

  // 主题配置
  theme: {
    enableDarkMode: true, // 是否启用暗色模式
    defaultTheme: 'light', // 默认主题模式：light或dark
  },

  // 国际化配置
  i18n: {
    enabled: false, // 是否启用多语言
    supportedLocales: ['ja-JP', 'en-US'], // 支持的语言列表
    defaultLocale: 'ja-JP', // 默认语言
  },
}

export default siteConfig
