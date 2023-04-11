import {getCategoryList,getAttrList} from '@/data/product.js'

export default {
	namespaced:true,
  state: {
	cate_list:[],
	select_big_category:undefined,
	selected_category : undefined,
	attr_list : []
  },
  
  mutations: {
	big_cate_hover(context,payload){
		context.select_big_category = payload
	},
	category_clicked(context,payload){
		context.selected_category = payload
		
	}
  },
actions: {
	get_cate_list(context,payload){
		console.log(context)
		console.log(payload)
	getCategoryList({pid : ''}).then(response =>{
		context.state.cate_list=response.data.data
		})
	},
	get_attr_list(context){
		console.log(context.state.selected_category.cate_id)
		getAttrList({
		cate_id : context.state.selected_category.cate_id,
		key_issku : 0,
		key_ishigh: 0	
		}
		).then(response => {
			context.state.attr_list = response.data.data
			console.log(context.state.attr_list)
			
		})
	}
	
  },
  
}
