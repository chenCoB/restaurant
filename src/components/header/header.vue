<template>

  <div class="Small">
  
  <div class="Small_add">
      <Carousel></Carousel>
       <div class="Small_list">
          <div v-for="(item,index) in 4" class="Small-flex">
	   <div class="Img"><img v-bind:src="[Src+rows[index].picture]"></div>
	   <span>{{rows[index].bigclassname}}</span>
	  </div>
       </div>

     <div class="Small_Reco">
       <div class="Reco">
         <div class="left"><i class="iconfont icon-tuijian"></i><span>本周推荐</span></div>
	 <div class="right"><router-link to="/product">查看全部</router-link></div>
       
       </div>
      
      <div class="Reco-list">
         <ul>
	    <li v-for="(item,index) in rows">
	    <div class="Reco_name">
	       <img v-bind:src="[Src+rows[index].picture]">
	       <span>{{rows[index].showname}}</span>
	       </div>

	       <div class="Reco_Price">
	          <p class="Price">
		  <span>零售价${{rows[index].ydanjia}}元</span>
<i class="iconfont " v-bind:class="[rows[index].inMall ? 'iconheartcopycopycopy' :'icontaoxin']" @click="collection(index)"></i>
		  </p>
		  <p class="Price_ruling">现价:${{rows[index].danjia}}元</p>
	       </div>
	     </li>
	 </ul>
      </div>

     </div>
 </div>
  
  

  </div>
  
</template>
<script>
  import Carousel from '../Carousel/Carousel'
  import product from './product/product'
 
 const ERR_OK = 0;
  export default{
    data(){
      return {
        rows:[],
	isActive:true,
        hasError:false,

	Src:"http://image.sonhoo.com/",
	
      }
      },
       methods:{
         collection:function(index){
	  
	     if(!this.rows[index].inMall){
	       this.rows[index].inMall = true
	       
	     }else{
	       this.rows[index].inMall = false
	     }
	    
	  }
       },
     components:{
      Carousel,
      product
     },
     created(){
        this.$http.get("http://192.168.100.228:8080/api/rows").then(response => {
	  response = response.body;
	  if (response.errno === ERR_OK) {
         this.rows = response.data;
        console.log(this.rows)
 };
	})
      }
     
  }
</script>

<style scoped>
a{color:#fff;}
.Small{
 position:relative;
 width:100%;
}
 .Small_add{
   width:100%;
   height:100%;
 }
  .Small_list{
    display:-webkit-flex;
    display:flex;
    width:100%;
    
    position:absolute;
    top:160px;
    background:#fff;
    padding-top:40px;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    z-index:22;
    border-radius:22%;
   box-shadow:0px 8px 20px 12px rgba(255,255,255,0.5)
  }
  .Small-flex{
     flex:1;
     text-align:center;
  }
  .Img{
  width:70px;
   height:70px;
   display:block;
    margin:0 auto;
  }
  .Img img{
    width:100%;
    height:100%;
    border-radius:50%;
  }
  .Small-flex span{
   display:block;
  }

  .Small_Reco {
  position:relative;
    z-index:30;
     width:100%;
     margin-top:90px;
  

  }
   .Reco{
     width:100%;
     padding:10px 6px;
     margin-top:90px;
     background:rgb(166,35,29);
     overflow:hidden;
    
   }
   .right,
  .left {
   height:20px;
   color:#fff;
   font-size:12px;
   line-height:20px;
  }
  .left{
   float:left;
     vertical-align:top;
  }
 .left span{
  padding-left:4px;
 }
  .right{
   float:right;
  }
.Reco-list {
  width:100%;
}
.Reco-list ul {
  width:100%;
   overflow:hidden;
  
}
.Reco-list ul li{
  width:50%;
  float:left;
  text-align:center;
  box-sizing:border-box;
  padding:4px 0;
  background:#fff;
  margin-top:10px;
  
}

 .Reco_name img {
   width:80%;
 }

 .Reco_name span {
 width:100%;
  display:block;
  overflow:hidden;
  white-space:nowrap;
  -webkit-text-overflow:ellipsis;
  text-overflow:ellipsis;
 }
  .Reco_Price span {
   text-decoration:line-through;
  }
  .Price{
    width:80%;
    overflow:hidden;
    display:-webkit-flex;
    margin:0 auto;
  }
  .Price span{
   flex:1;
   text-align:left;
  }
  .Price  i{
   
   width:20px;
   flex:0 0 20px;
   color:#f90331;
   font-size:14px;
  }
  .Price_ruling{
    width:80%;
    margin:0 auto;
    color:#f90331;
    text-align:left;
  }
</style>
