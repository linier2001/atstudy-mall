<template>
<div class="d-flex container position-relative">
	<div class="w-17 box-shadow mr-2 ml-1 border-box rounded p-3 text-xs text-secondary">
		<div class="my-2">
			<div class="text-hover-red text-secondary my-1 text-sm"
			v-for="big of product.cate_list"
			:key="'big'+big.cate_id"
			@mouseover="big_hover(big)">{{big.cate_name}}
			
			<div style=" width: 810px; height: 490px;" 
			class="px-3 border-box text-secondary px-3 py-2 position-absolute cate bg-white box-shadow"
			v-show="big ==product.select_big_category">
				<div class="d-flex align-items-start"
				v-for="mid of big.children"
				:key="'mid' + mid.cate_id">
					<div class="mr-3 my-2 d-flex  w-10">{{mid.cate_name}}></div>
						<div class="d-flex flex-wrap w-90">
						<div class="mx-1 my-2 text-hover-red "
						v-for="mind of mid.children"
						:key="'mind' + mind.cate_id">{{mind.cate_name}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		
	<div class="w-66 mr-2 ml-1 overflow-hidden position-relative mr-2">
	<div class="d-flex " :style="{'margin-left': -792 * website.carousel_index +'px'}">
		<img :src="require('@/assets/' + 'carousel01.jpg')" class = 'w-100 w-min-792' style="height: 490px;">
		<img :src="require('@/assets/' + 'carousel02.jpg')" class = 'w-100 w-min-792' style="height: 490px;">
		<img :src="require('@/assets/' + 'carousel03.jpg')" class = 'w-100 w-min-792' style="height: 490px;">
		<img :src="require('@/assets/' + 'carousel04.jpg')" class = 'w-100 w-min-792' style="height: 490px;">
		<img :src="require('@/assets/' + 'carousel05.jpg')" class = 'w-100 w-min-792' style="height: 490px;">
	</div>
	<div class="d-flex position-absolute Carousel-control">
		<div class="circle  mx-1" style="width: 15px; height: 15px;"
		:class="{'bg-white':website.carousel_index == 0,'bg-white-opacity':website.carousel_index != 0}"
		@click="carousel_clicked(0)"></div>
		<div class="circle  mx-1" style="width: 15px; height: 15px;"
		:class="{'bg-white':website.carousel_index == 1,'bg-white-opacity':website.carousel_index != 1}"
		@click="carousel_clicked(1)"></div>
		<div class="circle  mx-1" style="width: 15px; height: 15px;"
		:class="{'bg-white':website.carousel_index == 2,'bg-white-opacity':website.carousel_index != 2}"
		@click="carousel_clicked(2)"></div>
		<div class="circle  mx-1" style="width: 15px; height: 15px;"
		:class="{'bg-white':website.carousel_index == 3,'bg-white-opacity':website.carousel_index != 3}"
		@click="carousel_clicked(3)"></div>
		<div class="circle  mx-1" style="width: 15px; height: 15px;"
		:class="{'bg-white':website.carousel_index == 4,'bg-white-opacity':website.carousel_index != 4}"
		@click="carousel_clicked(4)"></div>
	</div>
		</div>
	<div class="w-15 d-flex flex-column justify-content-between">
		<img :src="require('@/assets/' + 'carousel-right01.jpg')" class = 'w-100 '>
		<img :src="require('@/assets/' + 'carousel-right02.jpg')" class = 'w-100 '>
		<img :src="require('@/assets/' + 'carousel-right03.jpg')" class = 'w-100 '>
	</div>
	
</div>
</template>

<script>
	import {mapState,mapActions,mapMutations} from 'vuex'
	export default{
		computed :{
			...mapState(['website','product'])
		},
		methods:{
			...mapActions({
				"getCategoryList" : 'product/get_cate_list'
			}),
			...mapMutations({
				"big_hover" : 'product/big_cate_hover'
			}),
			carousel_clicked(x){
				this.website.carousel_index = x
			}
		},
		mounted() {
		this.getCategoryList(' ')
		}
		
		
	}
</script>

<style scoped>
	.Carousel-control{
		right: 20px;
		bottom: 20px;
	}
	.cate{
		top:0px;
		left:200px;
		z-index: 99;
	}
</style>