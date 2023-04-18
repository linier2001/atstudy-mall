<template>
<div class="container box-shadow rounded px-4 py-2 border-box">
	<div class="d-flex text-muted text-sm mt-2"
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
					})
				
			},
			mounted() {
				this.getAttrList()
				this.getSpuList()
			},
			components:{
			'Spu-list':Spu_list
			}
			
			
		}
</script>

<style>
</style>