//订单服务

import{
	get,post,put patch,del
}
from "@/utils/request"

const RESOURCE_CART ='customer/cart'
const RESOURCE_ORDER ='customer/order'



export const addCart = data => post (RESOURCE_CART,data)
export const updateCart = data => put (RESOURCE_CART,data)
export const deleteCart = id => del (RESOURCE_CART,id)
export const clearCart = () => del (RESOURCE_CART)
export const getCart = () => get (RESOURCE_CART)
export const addOrder = data => post (RESOURCE_CART,data)
export const updateOrder = data => patch (RESOURCE_CART,data)
export const getOrder = id => get (RESOURCE_CART,id)
export const getOrderList = data => get (RESOURCE_CART,data)




