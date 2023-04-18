import {getCategoryList,getAttrList,getSpuList} from '@/data/product.js'

export default {
	namespaced:true,
  state: {
	cate_list:[],
	select_big_category:undefined,
	selected_category : undefined,
	attr_list : [],
	select_attr_list : [],
	select_attr_str_list : '',
	spu_list: []
  },
  
  mutations: {
	big_cate_hover(context,payload){
		context.select_big_category = payload
	},
	category_clicked(context,payload){
		context.selected_category = payload
		
	},
	attr_clicked(context,payload){
		context.select_attr_list[payload.index] =  payload.attr
		console.log(context.select_attr_list[payload.index])
		
	}
  },
actions: {
	get_cate_list(context){
	
	getCategoryList({pid : ''}).then(response =>{
		context.state.cate_list=response.data.data
		})
	},
	get_attr_list(context){

		getAttrList({
		cate_id : context.state.selected_category.cate_id,
		key_issku : 0,
		key_ishigh: 0	
		}
		).then(response => {
			context.state.attr_list = response.data.data
			
			context.state.select_attr_list = []
			for(let i =0; i<= context.state.attr_list.length-1;i++){
				context.state.select_attr_list.push(undefined)
			}
			console.log(context.state.select_attr_list)
		})
	},
	get_spu_list(context){
		getSpuList({
				spu_name: '',
				spu_title:'',
				spu_status: 1,
				cate_id : context.state.selected_category.cate_id,
				vauleList:context.state.select_attr_str_list,
				start:0,
				lenght:10
			
		}).then(response => {
			context.state.spu_list = response.data.data
			console.log(context.state.spu_list);
		})
	},
	
  },
 
 
  
}
