let url = ""
if(process.env.NODE_ENV === 'production')
{
  url = "http://49.232.105.82:9090"
}else if(process.env.NODE_ENV === 'development')
{
  url = "http://127.0.0.1:9090"
}else{
  url = ""
}
module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          assets: '@/assets',
          common: '@/common',
          network: '@/network',
          components: '@/components',
          views: '@/views'
        }
      }
    },
    devServer: {
      proxy: {
          "/api": {
              target: url,
              changOrigin: true, // 可以跨域
              pathRewrite: {
                '^/api': '/'
              }
          }
        }
      }
  //   devServe:{
  //       "/api":{
  //           target: url,
  //           changeOrigin:true,
  //           pathRewrite:{
  //                '^/api':''
  //           }
  //       }
  //  }
}
  