<template>

    <div class="product">
      <div class="prouct_rel" v-show="index==-1">
       <div class="product_top">
       <div class="top">
          <router-link to="/header"><i class="iconfont icon-fanhui left"></i></router-link>
	  <span>{{name}}</span>
	  <i class="iconfont icon-sousuo_sousuo right"></i>
       </div>
         <list></list>
	</div>

<div class="product_date">

<div class="product_list" v-for="(item,index) in rows">
      
	       <div class="left" v-on:click="datecompute(index)">
	         <img :src="[Src+rows[index].picture]">
	       </div>
   
	       <div class="right">
	          <p>{{rows[index].showname}}</p>
		  <p>
		    <span>${{rows[index].danjia}}</span>
		    <span>销售量{{rows[index].comid}}</span>
		    <i class="iconfont" v-bind:class="[rows[index].inMall ? 'iconheartcopycopycopy' :'icontaoxin']" v-on:click="collection(index)"></i>
		  </p>
	       </div>
	 
 </div>

 
 </div>
</div>

<detailsv v-bind:index="index" v-show="index>-1" v-bind:rows="rows" v-on:showI="showI"></detailsv>

    </div>
</template>
<script>
 import list from '../list/list'
 import detailsv from './details'
  const ERR_OK = 0;
  export default{
      data(){
        return{
	    rows:{},
	    name:"所有产品",
	   Src:"http://image.sonhoo.com/",
	   index:-1
	}
      },
      components:{
       list,
       detailsv
      },
      methods:{
          collection:function(index){
	   
	     if(!this.rows[index].inMall){
	       this.rows[index].inMall = true
	       
	     }else{
	       this.rows[index].inMall = false
	     }
	    
	  },
	  datecompute:function(index){
	    this.index = index
	    },
           showI:function(_index){
	     this.index=_index;
	   }
      },
       created(){
        this.$http.get("http://192.168.100.228:8080/api/rows").then(response => {
	  response = response.body;
	  if (response.errno === ERR_OK) {
         this.rows = response.data;
         console.log(this.rows);
 };
	})
      }
      

  }
</script>

<style scoped>
  a{color:#fff;
    
  }
  .product{
  
    width:100%;
    height:100%;
    overflow:hidden;
    background:#fff;
   }

  .prouct_rel{
    width:100%;
    position:relative;
    overflow:hidden;
    background:#fff;
  }
  .product_top{
    width:100%;
    position:fixed;
    height:94px;
    background:#fff;
    z-index:20;
  }
  .product_top .top{
    width:100%;
    display:-webkit-flex;
    background:rgb(166,35,29);
    color:#fff;
    padding:10px 4px;
  }
   .product_top .top span {
     flex:1;
     text-align:center;
      font-size:16px;
   }
  .product_top .top i {
    width:20px;
    flex:0 0 20px;
    text-align:center;
    font-size:16px;
  }

  .product_date{
    width:100%;
    height: 100%;
    margin-top:100px;
  }
  .product_list{
  
     width:100%;
     overflow:hidden;
     padding:20px 0;
     border-bottom:1px solid #666;
     height:135px;
  }
 
  .product_list .left {
    width:24%;
    margin-left:20px;
    float:left;
  }
  .product_list  .left img{
    width:70px;
    height:90px;
  }
 .product_list  .right{
  width:64%;
   height:92px;
   float:left;
   position:relative;

  }
  .product_list .right p{
   text-align:center;
   color:#657180
  }
  .product_list .right p:last-child{
  width:100%;
   position:absolute;
   bottom:0px;
   display:-webkit-flex;
  }
  .product_list .right p:last-child span{
    flex:1;
  }
  .product_list .right p:last-child i{
    flex:0 0 20px;
    width:20px;
    font-size:14px
  }
  .product_list .right p:last-child span:first-child{
     color:#ff0101
  }
  .iconheartcopycopycopy{
  color:red;
  }
</style>
