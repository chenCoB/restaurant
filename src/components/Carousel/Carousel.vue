<template>
    <Carousel autoplay v-model="value2">
        <Carousel-item>
            <div class="demo-carousel">
	       <img src="./img/1.jpg" style="width:100%;height:200px;">
	    </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel" style="width:100%;height:200px;">
	    <img src="./img/2.jpg">
	    </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel" style="width:100%;height:200px;">
	     <img src="./img/3.jpg">
	    </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel" style="width:100%;height:200px;">
	     <img src="./img/4.jpg">
	    </div>
        </Carousel-item>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>
