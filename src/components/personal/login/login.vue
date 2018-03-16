<template>

  <div class="perspmal">
      <div class="top">
         
	  <i class="iconfont icon-fanhui left"></i>
	  <span>{{name}}</span>
	  <i class="iconfont icon-wdsy right"></i>
       </div>
     
	



    </div>
</template>
<script>
 export default{
   props:["name","Url"]
   

    
 }
</script>

<style scoped>
a{color:#666;;}
  .perspmal{
  
    width:100%;
    height:100%;
    overflow:hidden;
   
   }



.top{
    width:96%;
    margin:0 auto;
    display:-webkit-flex;
    background:#fff;
    color:#666;
    padding:10px 4px;
    
  }
   .top span {
     flex:1;
     text-align:center;
      font-size:16px;
   }
  .top i {
    width:20px;
    flex:0 0 20px;
    text-align:center;
    font-size:16px;
  }

</style>
