<template>

  <div class="perspmal">
      <login v-bind:name='name' v-bind:Url='Url'></login>
      <register></register>
    </div>
</template>
<script>
import login from './login/login'
import register from './register/register'

 export default{
 data(){
   return{
    name:"登录",
    Url:"/header"
   }
 },
  components:{
   login,
   register
  }
 }
</script>

<style scoped>
</style>
