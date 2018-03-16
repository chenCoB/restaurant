<template>

  <div class="register">
        <div class="ordin">
	  <div>普通登录</div>
	  <div>短信登录</div>
	</div>
        
      <div class="text_pass">
          <div class="password">
	   <Form ref="formInline" :model="formInline" :rules="ruleInline" style="width:80%;margin:0 auto;">
        <Form-item prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </Form-item>
    </Form>
	  </div>
      </div>
         

  
     <div class="tered">
          <div>
	  <router-link to="/free">免费注册</router-link>
	  </div>
	  <div>忘记密码</div>
     
     </div>
    
      <div class="party">
         <div class="party_top">
	   <div></div>
	   <span>使用第三方登录</span>
	   <div></div>
	 </div>

	 <div class="party_login">
	    <div>
	    <a href="https://wx.qq.com/">
	     <i class="iconfont icon-weixin" style="color:rgb(62,177,53)"></i>
	     <span>微信登录</span></a>
	    </div>
	    <div>
	    <a href="http://web2.qq.com/">
	      <i class="iconfont icon-qq" style="color:rgb(77,175,234)"></i>
	     <span>QQ登录</span></a>
	    </div>
	    <div>
	    <a href="http://weibo.com/">
	      <i class="iconfont icon-unie61d" style="color:rgb(223,77,105)"></i>
	     <span>微博登录</span></a>
	    </div>
	    <div>
	    <a href="https://exmail.qq.com/login">
	       <i class="iconfont icon-youxiang" style="color:rgb(2,187,215)"></i>
	     <span>邮箱登录</span></a>
	    </div>
	 </div>
      </div>

<router-view></router-view>
    </div>
 

</template>
<script>
 export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('登录成功!');
                    } else {
                        this.$Message.error('登录失败!');
                    }
                })
            }
        }
    }
</script>

<style scoped>
a{color:#B02D38}
.password{
 padding:0 10px;
}

.ordin{
   width:100%;
   display:-webkit-flex;
}
.ordin div{
   height:40px;
   line-height:40px;
   flex:1;
   text-align:center;
}
.tered{
   width:80%;
   margin:0 auto;
   display:-webkit-flex;
}
.tered div{
  flex:1;
 color:#B02D38
}
.tered div:last-child{
  text-align:right;
}

.party{
 width:80%;
   margin:20px auto;
}
 .party_top{

  display:-webkit-flex;
  height:20px;
   vertical-align:top;
   position:relative;
 }
.party_top span,
.party_top div{
  flex:1;
   height:0px;
}
.party_top span {
 text-align:center;
}
.party_top div {
 position:relative;
 top:10px;
 border-top:1px solid #666;
}

.party_login{
  display:-webkit-flex;
  margin-top:20px;
}

.party_login div{
 flex:1;
}
.party_login div span,
.party_login div i {
 display:block;
 text-align:center;
}
.party_login div a i{
 font-size:24px;
}

.party_login div a span{
 font-size:14px;
 color:#657180
 
}
</style>
