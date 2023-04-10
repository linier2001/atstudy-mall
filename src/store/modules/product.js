import {getCategoryList} from '@/data/product.js'

export default {
	namespaced:true,
  state: {
	cate_list:[],
	select_big_category:undefined
  },
  mutations: {
	big_cate_hover(context,paylode){
		context.select_big_category = paylode
	}
  },
actions: {
	get_cate_list(content,paylode){
		console.log(content)
		console.log(paylode)
	getCategoryList({pid : ''}).then(response =>{
		content.state.cate_list=response.data.data
		})
	}
  },
  
}
