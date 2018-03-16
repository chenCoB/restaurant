<template>

<div class="add">
       <span class="iconfont icon-jian" v-on:click="red"></span>
       <i>{{Numbers}}</i>
       <span class="iconfont icon-54" v-on:click="add"></span>
</div>
</template>
<script>
 
  export default{
      props:{
         index:""
      },
      data(){
         return{
	   Numbers:0
	 }
      },
      methods:{
         add(){
	    this.Numbers++
	  },
	 red(){
	    if(this.Numbers==0){
	      return
	    }else{
	      this.Numbers--;
	    }
	 }
      }

  }
</script>

<style scoped>

.add{
  display:-webkit-flex;
}
.add span{
flex:1;
  color:#657180;
  text-align:center;
  font-size:16px;
}
.add i{
 flex:1;
 text-align:center;
 line-height:24px;
}
</style>
