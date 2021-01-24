import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    //baseURL:'http://123.207.32.32:8000',
    //baseURL:'http://adi-v3.dev',
    baseURL: "http://192.168.2.103:8090",
    timeout:5000
  });

  // // 请求拦截器
  // instance.interceptors.request.use(config => {
  //   //拦截后需要将拦截下来的请求数据返回发送
  //   return config;
  // }, err => {
  //   console.log("请求失败：" + err)
  // })

  // 相应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    // console.log(res.data)
    // console.log("--------------------------------------------------------------------")
    // console.log("响应成功：" + typeof res.data + res.data)
    return res.data
  }, err => {
    console.log("响应失败：" + err)
  })

  return instance(config)
}
