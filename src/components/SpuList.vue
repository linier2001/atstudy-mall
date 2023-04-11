<template>
<div class="container box-shadow rounded px-4 py-2">
	<div class="d-flex text-muted text-sm mt-2"
	v-for="attr of product.attr_list"
	:key=" 'attr' + attr.key_id">
		<div class="text-right w-13 mx-2 p-1">{{attr.key_name}}:</div>
		<div class = 'mx-2 p-1'>全部</div>
		<div class="d-flex flex-wrap">
			<div class = 'mx-2 p-1'
			v-for="key_value of attr.spuAttrValueList"
			:key="'value' + key_value.id">{{key_value.value_name}}</div>
		</div>
	</div>
</div>
</template>

<script>
		import {mapActions, mapState} from 'vuex'
		export default{
			computed :{
				...mapState(['product'])
			},
			methods:{
				
				...mapActions({
					'getAttrList' : 'product/get_attr_list'
				})
			},
			mounted() {
				this.getAttrList()
			}
			
			
		}
</script>

<style>
</style>