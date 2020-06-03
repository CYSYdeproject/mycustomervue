<template>
    <div>
      <h2>添加客户</h2>
      <div class="form-horizontal">
        <div class="form-group">
          <label  class="col-sm-2 control-label">客户名字</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  placeholder="请输入客户名字" v-model="customer.name">
          </div>
        </div>
        <div class="form-group">
          <label  class="col-sm-2 control-label">客户性别</label>
          <div class="col-sm-10">
             <input type="radio"  name="sex" value="0" v-model="customer.sex">男
             <input type="radio"  name="sex" value="1" v-model="customer.sex">女
          </div>

        </div>
        <div class="form-group">
          <label  class="col-sm-2 control-label">客户电话</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  placeholder="请输入客户电话" v-model="customer.phone">
          </div>
        </div>
        <div class="form-group">
          <label  class="col-sm-2 control-label">客户生日</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  placeholder="请输入客户生日" v-model="customer.birth">
          </div>
        </div>
        <button class="btn btn-success" @click="add" style="margin-left: 200px;">添加</button>

      </div>

    </div>
</template>
<script>
export default{
  data:function(){
    return {
      customer:{name:"",sex:0,phone:"",birth:''}
    }
  },
  methods:{
    //添加的方法
    add:function(){
      var obj = this;

        $.ajax({
          type:"post",
          url:"http://localhost:8082/springboot_customer/customerController/add",
          data:{time:new Date().getTime(),name:obj.customer.name,sex:obj.customer.sex,phone:obj.customer.phone,birth:obj.customer.birth},
          success:function(result){
             alert(result);
             obj.$router.push("/");
          },
          xhrFields: {
            withCredentials: true
          }
        });
    }
  }


}

</script>

<style scoped>
 h2{
   color:white
 }
 .but_sty{ border:0px; width:80px; height:30px; background-color:#333; font-size:12px; color:#fff;}


 .sex{
   font-size: 30px;
   color: white;
 }
</style>
