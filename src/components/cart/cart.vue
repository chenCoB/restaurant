<template>

  <div class="footer-list">
   <login v-bind:name="name"></login>

  <div class="list_label">
  <div class="listChec">
    <input type="checkbox" v-model="checkeName">
    </div>
    <div class="listDate">

     <div class="DateImg">
       <img v-bind:src="[Src+rows[1].picture]">
     </div>

     <div class="DateText">
       <div><span>{{rows[1].showname}}</span> <i class="iconfont icon-shanchu"></i></div>
       <span style="color:red">${{rows[1].danjia}}/瓶</span>
       <addfir></addfir>
     </div>

    </div>
</div>


<div class="list_label">
  <div class="listChec">
    <input type="checkbox" v-model="checkeNames">
    </div>
    <div class="listDate">

     <div class="DateImg">
       <img v-bind:src="[Src+rows[0].picture]">
     </div>

     <div class="DateText">
       <div><span>{{rows[0].showname}}</span> <i class="iconfont icon-shanchu"></i></div>
       <span style="color:red">${{rows[0].danjia}}/瓶</span>
       <addfir></addfir>
     </div>

    </div>
</div>

<computes></computes>
  </div>
</template>
<script>
import addfir from "../header/product/addfir"
import login from "../personal/login/login"
import computes from "./content/cartConent"
var ERR_OK = 0;
 export default{
   props:{
      list_date:""
   },
    data(){
      return {
        checkeName:[],
	checkeNames:[],
	name:"购物车",
	rows:[],
	Src:"http://image.sonhoo.com/"
      }
    },
    components:{
    login,
    addfir,
    computes
    },
    created(){
       this.$http.get("http://192.168.100.228:8080/api/rows").then(res => {
         res = res.body;
          if(res.errno===ERR_OK){
	    this.rows= res.data
	    console.log(this.rows)
	   }
       })
    
    }
 }
</script>

<style scoped>
.list_label{
 display:-webkit-flex;
  padding:0 10px;
  
}
.list_label + .list_label{
 margin-top:10px;

}
.listChec{
  display: flex;
  justify-content: center;
  align-items: center;
 }

  .listDate{
   
    display:-webkit-flex;
    margin-left:14px;
  }
  .DateImg{
    flex:0 0 80px;
  }
.DateImg img{
  width:100%;
}
.DateText{
 flex:1;
 margin-left:14px;
}
</style>
