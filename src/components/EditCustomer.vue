<template>
  <div>
    <h2>修改客户 {{id}}</h2>
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
        <button class="btn btn-success" @click="update" style="margin-left: 200px;">修改</button>

      </div>

    </div>

  </div>
</template>

<script>
  export default{
    data:function(){
      return {
        id:this.$route.query.id,
        customer:{}
      }
    },
    mounted:function(){
      this.getById();
    },
    methods:{
      update:function(){
        var obj = this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/springboot_customer/customerController/update",
          data:{time:new Date().getTime(),id:obj.customer.id,name:obj.customer.name,sex:obj.customer.sex,phone:obj.customer.phone,birth:obj.customer.birth},
          success:function(result){
             alert(result);
             obj.$router.push("/");
          },
          xhrFields: {
            withCredentials: true
          }
        });
      },
      //通过id查询客户
      getById:function(){
        var obj = this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/springboot_customer/customerController/edit/"+obj.id,
          data:{time:new Date().getTime()},
          success:function(result){
            obj.customer=result;
          },
          xhrFields: {
            withCredentials: true
          }
        });
      }
    }





  }
</script>

<style>
	div{
		background: url(../assets/bg.jpg);
	}
</style>
