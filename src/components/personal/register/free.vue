<template>
<div>
<login v-bind:name="name" v-bind:Url="Url"></login>
    <Form :model="formItem" :label-width="80" style="width:94%;margin:0 auto;">
        <Form-item label="用户名">
            <Input v-model="formItem.input" placeholder="Username"></Input>
        </Form-item>

	  <Form-item prop="password" label="设置密码">
            <Input v-model="formItem.password" placeholder="Password" type="password"></Input>
        </Form-item>

        <Form-item label="居住地">
            <Select v-model="formItem.select" placeholder="请选择">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
            </Select>
        </Form-item>
        <Form-item label="生日">
            <Row>
                <Col span="11">
                    <Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <Time-picker type="time" placeholder="选择时间" v-model="formItem.time"></Time-picker>
                </Col>
            </Row>
        </Form-item>
        <Form-item label="性别">
            <Radio-group v-model="formItem.radio">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="爱好">
            <Checkbox-group v-model="formItem.checkbox">
                <Checkbox label="吃饭"></Checkbox>
                <Checkbox label="睡觉"></Checkbox>
                <Checkbox label="跑步"></Checkbox>
                <Checkbox label="看电影"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="自我介绍">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
    </Form>
    </div>
</template>
<script>
import login from "../login/login"
    export default {
      
        data () {
            return {
                formItem: {
                    input: '',
		    password:'',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
		name:"注册",
		Url:"/personal"
            }
	    
        },
	components:{
	 login
	}
    }
</script>
<style>
 .ivu-form .ivu-form-item-label{
  text-align:left;
 }
</style>
