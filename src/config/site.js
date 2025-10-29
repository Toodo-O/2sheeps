/**
 * 网站配置文件
 * 在这里集中管理网站的所有配置信息，修改此文件即可自定义网站内容
 */

// 导入图片资源
import logoImage from '../assets/svg/logo.svg';
import faviconImage from '../assets/images/home/logo.png';

const siteConfig = {
  // 基本信息
  site: {
    title: "", // 网站标题
    logo: logoImage, // Logo路径
    favicon: faviconImage, // 网站图标
    language: "zh-CN", // 网站默认语言
  },



  // 导航菜单
  navItems: [
    { name: "製品・ソリューション", path: "/products" },
    { name: "導入事例", path: "/cases" },
    { name: "ニュース＆資料", path: "/news" },
    { name: "Coltについて", path: "/about" },
    { name: "採用情報", path: "/careers" },
    { name: "ログイン", path: "/login" },
    { name: "アクセシビリティ", path: "/accessibility" },
  ],

 





  // 主题配置
  theme: {
    enableDarkMode: true, // 是否启用暗色模式
    defaultTheme: "light", // 默认主题模式：light或dark
  },

  // 国际化配置
  i18n: {
    enabled: false, // 是否启用多语言
    supportedLocales: ["zh-CN", "en-US"], // 支持的语言列表
    defaultLocale: "zh-CN", // 默认语言
  },
};

export default siteConfig;