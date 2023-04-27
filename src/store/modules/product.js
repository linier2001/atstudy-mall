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
	spu_list: [],
	start:0,
	lenght:10,
	keyWord:'',
	category_list:[],
	cate_id_list:[130,30,19,219],
	special_spu_list:[]
  },
  
  mutations: {
	spu_category_clicked(context,payload){
		context.selected_category = payload
		this.dispatch('product/get_spu_list')
		this.dispatch('product/get_attr_list')
		
	},
	big_cate_hover(context,payload){
		context.select_big_category = payload
	},
	category_clicked(context,payload){
		context.selected_category = payload
		
	},
	attr_clicked(context,payload){
		context.select_attr_str_list=''
		context.select_attr_list[payload.index] =  payload.attr
	
		for(let attr of context.select_attr_list){
			if (attr != undefined){
				context.select_attr_str_list += attr.id +','
			}
		}
	context.select_attr_str_list= context.select_attr_str_list.substring(0,context.select_attr_str_list.length-1)
		this.dispatch('product/get_spu_list')
	},
	
  },
actions: {
	
	get_cate_list(context){
	
	getCategoryList({pid : ''}).then(response =>{
		context.state.cate_list=response.data.data
		})
	},
	get_attr_list(context){

		getAttrList({
		cate_id : context.state.selected_category==undefined ? null:context.state.selected_category.cate_id,
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
				spu_name: context.state.keyWord == '' ? '' :context.state.keyWord,
				spu_title:'',
				spu_status: 1,
				cate_id : context.state.selected_category==undefined ? null:context.state.selected_category.cate_id,
				valueList : context.state.select_attr_str_list,
				start:context.state.start,
				lenght:context.state.lenght
			
		}).then(response => {
			context.state.spu_list = response.data.data
			if(context.state.category_list.length==0 ){
				context.state.category_list = response.data.categoryList
			}
			
			console.log(context.state.spu_list);
		})
	},
get_special_list(context){
		for( let id of context.state.cate_id_list){
		getSpuList({	spu_name: '',
					spu_title:'',
					spu_status: 1,
					cate_id : id,
					valueList :[],
					start:0,
					lenght:5,
					})
					.then(response => {
					console.log(response)
					})
		}
	
	
	
  },
 
	
  },
 
 
  
}
