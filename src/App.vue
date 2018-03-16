<template>

  <div class="footer-list">
  <div class="router">
     <router-view></router-view>
  </div>
    <div class="footer">

     <router-link to="/header">
         <i class="iconfont icon-wdsy"></i>
         <span>首页</span>
     </router-link>

     <router-link to="/goods">
     
         <i class="iconfont icon-distribute"></i>
         <span>我要分销</span>
      </router-link>

     <router-link to="/cart">  
         <i class="iconfont icon-gouwuche2"></i>
         <span>购物车</span>
      </router-link>

     <router-link to="/personal">  
        <i class="iconfont icon-gerenzhongxin"></i>
         <span>个人中心</span>
      </router-link>

     </div>
  </div>
</template>
<script>

   export default{}
</script>

<style scoped>
  i{
    font-style:normal;
    display:block;
  }
 .router{
    width:100%;
    height:100%;
    padding-bottom:52px;
 }

  .footer {
     
      width:100%;
      height:52px;
      padding:5px 0px;
      position:fixed;
      left:0px;
      bottom:0px; 
      display:-webkit-flex;
      background:rgb(166,35,29);
   
    z-index:999;
  }
  .footer a {
     flex:1;
     text-align:center;
     color:#fff;

  }
  .footer a.active{
   color:#fded40
  }
</style>
