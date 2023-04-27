<template>
<div class="container box-shadow rounded px-4 py-2 border-box">
	
	<div class="d-flex text-muted text-xs mx-2"
	v-if="product.selected_category == undefined">
		<div class="w-15 text-right mr-2 ">分类:  </div>
		<div class="w-7 ml-1 hand"
		@click="category_clicked(undefined)"
		:class="{'text-red' : product.selected_category==undefined}">全部分类</div>
		<div class="mx-2 hand"
		v-for="cate of product.category_list"
		:key="'cate'+cate.cate_id"
		@click="category_clicked(cate)"
		:class="{'text-red' : product.selected_category== cate}">{{cate.cate_name}}</div>
	
	</div>
	<div class="d-flex text-muted text-xs mt-2"
	v-for="(attr,index) of product.attr_list"
	:key=" 'attr' + attr.key_id">
		<div class="text-right w-13 mx-2 p-1">{{attr.key_name}}:</div>
		<div class = 'mx-2 p-1 w-5 hand'
		:class="{'text-red' : product.select_attr_list[index]==undefined}"
				@click="attr_clicked({'index' :index ,'attr' :undefined})">全部</div>
		<div class="d-flex flex-wrap">
			<div class = 'mx-2 p-1 hand'
			v-for="key_value of attr.spuAttrValueList"
			:key="'value' + key_value.id"
			@click="attr_clicked({'index' : index ,'attr' : key_value})"
			:class="{'text-red' : product.select_attr_list[index] == key_value}"
			>{{key_value.value_name}}</div>
		</div>
	</div>
</div>


<div class="container mt-5">
<Spu-list :data="product.spu_list"></Spu-list>
</div>

</template>

<script>
		import {mapActions, mapState,mapMutations} from 'vuex'
	import Spu_list from '@/components/Spu_list.vue'
		export default{
			computed :{
				...mapState(['product'])
			},
			methods:{
			
				
				...mapActions({
					'getAttrList' : 'product/get_attr_list',
					'getSpuList' : 'product/get_spu_list',
					}),
					
				...mapMutations({
						'attr_clicked' : 'product/attr_clicked',
						'category_clicked':'product/spu_category_clicked'
					})
				
			},
			mounted() {
				this.getAttrList()
				if (this.product.selected_category != undefined){
					this.getSpuList()
				}
				
			},
			components:{
			'Spu-list':Spu_list
			},
			
			unmounted() {
				this.product.selected_category=undefined 
				this.product.category_list=[]
			}
			
			
		}
</script>

<style>
</style>