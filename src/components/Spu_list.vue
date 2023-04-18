<template>
	<div class="d-flex flex-wrap ">
		
			<Spu v-for="spu of data"
			:key="'spu' + spu.spu_list"
			:data='spu'
			style="width: 240px;"
			class="my-2">	</Spu>
		
		</div>
</template>

<script>
	import Spu from '@/components/Spu.vue'
	export default{
		props :['data'],
		components:{
			Spu
		}
	}
</script>

<style>
</style>