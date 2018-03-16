<template>
<div class="details">
   <div class="details_icon">
     <i class="iconfont icon-fanhui" v-on:click="Show"></i>
     <div>商品详情</div>
     <span>
       <i class="iconfont icontaoxin deataNumber"></i>
        <i class="iconfont icon-gouwuche2"></i>
     </span>
   </div>

   <div class="pict">
      <img  :src="[Src+rows[index].picture]"/>
    </div>
   <div class="deta">
     <h1>{{rows[index].showname}}</h1>
     <div class="price">
     
     <div>
       <span style="text-decoration:line-through">${{rows[index].ydanjia}}</span>
       <span class="Colr">${{rows[index].danjia}}</span>
       </div>
  <div class="add">
       <span class="iconfont icon-jian" v-on:click="red"></span>
       <i>{{rows[index].row}}</i>
       <span class="iconfont icon-54" v-on:click="add"></span>
     </div>

       <i>销量{{rows[index].comid}}笔</i>
      </div>
   </div>
 <div class="goods">
   <div v-on:click="active">商品详情</div>
   <div>累计评价</div>
 </div>
 
</div>
    
</template>
<script>
 
  export default{
    props:{
    rows:{},
    index:""
   
     },
     data(){
       return{
        Src:"http://image.sonhoo.com/"
	
	 
          }
     },
   methods:{
          add:function(){
	  
	    this.rows[this.index].row++;
	  },
	  red:function(){
	  if(this.rows[this.index].row===0){
	    return;
	  }else{
	   this.rows[this.index].row--
	  }
	  },
	  Show:function(){
	     this.$emit("showI",-1)
	  }
      }
  }
</script>

<style scoped>
 .details{
  width:100%;
 
 }
 .pict{
width:100%;

 }

 .pict img {
   height:200px;
   display:block;
   margin:0 auto;
 }

   .details_icon{
     width:96%;
     margin:0 auto;
     display:-webkit-flex;
    padding:10px 4px; 
   
   
   }
   .details_icon > i {
     width:80px;
     flex:0 0 80px;
     text-align:left;
     font-size:16px;
      height:24px;
   line-height:24px;
   }
   .details_icon div{
     flex:1;
     text-align:center;
       height:24px;
        line-height:24px;
   }
   .details_icon span{
      width:80px;
      flex:0 0 80px;
      text-align:right;
      vertical-align:top;
   }
   .details_icon span i {
   vertical-align:text-top;
   font-size:16px;
   height:24px;
   line-height:24px;
   }
   .details_icon span i:last-child{
      padding-left:8px;
   }
.deta{
 width:100%;
  padding:4px 10px;
}
.price{
  display:-webkit-flex;
   margin-top:10px;
  }
.price div{
   flex:1;
}
.price i {
 flex:1;
 text-align:right
}
.price div span:first-child{
   color:#a29f9f
}
.price div .Colr{
   color:red;
   margin-left:6px;
}
.goods{
  display:-webkit-flex;
}
.goods div{
 flex:1;
 text-align:center;
 padding:10px 4px;
 

}
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
