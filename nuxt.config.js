
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '泛员网-HCM-人事外包-薪酬服务-弹性福利-大中型企业人力资源管理数字化服务平台',
    meta: [
      { charset: 'utf-8' },
      { name: "baidu-site-verification", content: "code-8Fexuosj7x" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '泛员网是国内领先的人力资源管理数字化服务平台，为大中型企业和快速成长型企业提供HCM SaaS、人力资源服务外包、员工福利、HR SSC、全国社保外包、薪资核算代发，福利积分、人事外包、人事服务、补充医疗保险、eHR、HR共享服务、代缴社保、社保代理等数字化解决方案。' },
      { hid: 'keywords', name: 'keywords', content: '人力资源服务外包，员工福利，全国社保外包，在线入职，社保管理，薪酬管理，薪资核算，工资代发，考勤管理系统，员工体检，节日福利，福利积分，HCM SaaS，HR SSC，人力资源管理，企业数字化转型，人事外包，人事服务，补充医疗保险，HCM，eHR，HR共享服务，代缴社保，社保代理, 员工福利, 弹性福利, 年度体检, 春节福利, 新年福利, 端午福利, 中秋福利, 生日福利，人力资源系统，HR系统' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
    ],
    script: [
      {
        src: 'https://hm.baidu.com/hm.js?897a20d7a932771ab434b310d20655e7'
      },
      {
        src: '//assets-cdn.kf5.com/supportbox/main.js?' + new Date().getDay(), id: 'kf5-provide-supportBox', charset: 'utf-8', 'kf5-domain': 'fairhr.kf5.com'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css',
    '~/assets/font.css',
    '~/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/iview',
    { src: '~/plugins/animate.js' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://120.25.151.145:8899', // 目标接口
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true // 表示是否跨域
      }
    },
    '/pc': {
      target: 'http://fanyuanwang.cn',
      pathRewrite: {
        '^/pc': '/',
        changeOrigin: true // 表示是否跨域
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue|scss)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  router: {
    middleware: 'device'
  }
}
