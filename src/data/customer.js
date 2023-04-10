//客户服务 ，业务模块
import{
	get,post,put patch,del
}
from "@/utils/request"

const RESOURCE_CHINA = 'china'
const RESOURCE_REGIST = 'regist'
const RESOURCE_LOGIN = 'login'
const RESOURCE_CUSTOMER_USER = 'customer/user'
const RESOURCE_CUSTOMER_USERADARESS = 'customer/useraddress'

//给一个服务创建一个相对应的方法

export const getChain = data => get(RESOURCE_CHINA,data)
export const regist = data => post(RESOURCE__REDIST,data)
export const login = data => post(RESOURCE_LOGIN,data)
export const getUserInfo = () => get(RESOURCE_CUSTOMER_USER)
export const addUserAddress = data => post(RESOURCE_CUSTOMER_USERADDRESS,data)
export const updateUserAddress = data => get(RESOURCE_CUSTOMER_USERADDRESS,data)
export const deleteUserAddress = id => del(RESOURCE_CUSTOMER_USERADDRESS,id)
export const getUserAddressList = data => get(RESOURCE_CUSTOMER_USERADDRESS,data)
