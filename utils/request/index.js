import {
	getItem,
	removeItem
} from "../storage/index.js"
const base_url = '' // api地址
export const apiResquest = (param) => { //prams 为我们需要调用的接口API的参数 下面会贴具体代码
	let headerData = param.headers || {}
	// 判断请求类型
	// if (getItem("memberId")) {
	// 	headerData = Object.assign({
	// 		'content-type': 'application/json',
	// 		"memberId": getItem("memberId"),
	// 	}, headerData)
	// }
	let dataObj = null
	//因为我们的GET和POST请求结构不同这里我们做处理，大家根据自己后台接口所需结构灵活做调整吧
	if (param.method === "GET") {
		headerData['content-type'] = 'application/json'
		if (typeof(param.param) != "undefined" && null != param.param) {
			let params = "";
			for (let key in param.param) {
				if (param.param.hasOwnProperty(key)) {
					params += "&" + key + "=" + param.param[key]
					console.log(key)
				}
			}
			if (param.url.indexOf("?") == -1) {
				params = "?" + params.substring(1)
			}
			param.url = param.url + params
		}
	} else {
		dataObj = param.param
	}
	return new Promise((resolve, reject) => {
		// let url = config.base_url + prams.url; //请求的网络地址和局地的api地址组合
		let url = base_url + param.url; //请求的网络地址和局地的api地址组合
		if (typeof param.loading == 'undefined') {
			param.loading = true
		}
		if (param.loading) {
			uni.showLoading({
				title: '加载中',
				mask: true
			})
		}
		return uni.request({
			url: url,
			data: dataObj,
			method: param.method,
			header: headerData,
			success: (res) => {
				resolve(res);
				uni.hideLoading()
				//这里是成功的返回码，大家根据自己的实际情况调整
				// if (res.data.code !== 200) {
				// 	uni.showToast({
				// 		title: '获取数据失败:' + res.data.msg,
				// 		duration: 1000,
				// 		icon: "none"
				// 	})
				// 	return;
				// }
			},
			fail: (err) => {
				reject(err);
				uni.hideLoading()
			},
			complete: () => {
				//console.log('请求完成')
				uni.hideLoading()
			}
		});
	})
}
