//产品服务模块

//从 utils/request。js 导入封装好的get请求
import {get} from '@/utils/request.js'

//资源路径
//品牌的资源路径
const RESOURCE_BRAND ='brand'
//产品分类的资源路径
const RESOURCE_CATEGORY ='category'
//产品参数的资源路径
const RESOURCE_ATTR ='attr'
//产品的spu的资源路径
const RESOURCE_SPU ='spu'
//导出产品中的每一个api接口方法

//查村品牌的方法
export const getBrand = data =>get(RESOURCE_BRAND,data)

//擦汗寻单个分类的的方法
export const getCategory = id =>get(RESOURCE_CATEGORY,id)
//擦汗寻分类的的方法
export const getCategoryList = data =>get(RESOURCE_CATEGORY,data)

//擦汗寻商品参数的方法
export const getAttrList = data =>get(RESOURCE_ATTR,data)

//查询单个商品spu
export const getSpu = id =>get(RESOURCE_SPU,id)
//查询商品列表
export const getSpuList = data =>get(RESOURCE_SPU,data)