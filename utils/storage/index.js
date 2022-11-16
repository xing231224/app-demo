// 本地存储 存 取 删
export const getItem = name => {
	const data = uni.getStorageSync(name)
	try {
		return JSON.parse(data)
	} catch (err) {
		return data;
	}
}

export const getStringItem = name => {
	const data = uni.getStorageSync(name)
	return data;
}

export const setItem = (name, value) => {
	//如果是对象，我们需要转换成字符串
	if (typeof value == 'object') {
		value = JSON.stringify(value)
	}
	uni.setStorageSync(name, value)
}

export const removeItem = name => {
	uni.removeStorageSync(name)
}

//清除所有的本地存储
export const remove = () => {
	uni.clearStorage()
}
