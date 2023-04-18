<template>
	<div>
		<img :src="'http://localhost:8001/img/'+select_img" style="width: 200px;">
			<div class="mt-2">
		<img v-for="img of data.attrKeyList[0].attrValueList"
		:key="'img' + img.value_id"
		:src="'http://localhost:8001/img/'+img.value_images[0]"
		class = ' mx-1 ' 
		:class="{'border-red':img.value_images[0] == select_img}"
		@click="img_click(img.value_images[0])"
		style='width:30px'>
				
			</div>
			<div class="text-bolder text-red text-lg mt-2">$1999	</div>
			<div class="text-secondary textsm mt-2">{{data.spu_name}}	</div>
	</div>
</template>

<script>
	export default{
		props :['data'],
		data() {
			return{
				select_img:this.data.attrKeyList[0].attrValueList[0].value_images[0]
			}
		},
		methods:{
			img_click(x){
				this.select_img=x
			}
		}
		
		}
</script>

<style>
</style>