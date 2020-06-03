<template>
    <div>
     <button class="btn btn-primary" @click="toAddCustomer()"><i class="glyphicon glyphicon-plus"></i>&nbsp;添加客户</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" placeholder="请输入查询客户的名字" style="border: 1px gray solid; width: 200px; height: 30px;" v-model="searchName">
    <button class="btn btn-primary" @click="currentPage=1;getAll();"><i class="glyphicon glyphicon-search"></i>&nbsp;搜索</button>


    <br />


     <table class="table table-hover">
           <thead>
             <tr>
               <th>客户id</th>
               <th>客户名字</th>
               <th>客户性别</th>
               <th>客户电话</th>
               <th>客户生日</th>
               <th>相关操作</th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="c in customers">
               <td>{{c.id}}</td>
               <td>{{c.name}}</td>
               <td>{{c.sex==0?"男":"女"}}</td>
               <td>{{c.phone}}</td>
               <td>{{c.birth}}</td>
               <td>
                 <button class="btn btn-success" @click="toEdit(c.id)"><i class="glyphicon glyphicon-wrench" ></i>&nbsp;修改</button>
                 <button class="btn btn-danger" @click="del(c.id)"><i class="glyphicon glyphicon-trash"></i>&nbsp;删除</button>
               </td>
             </tr>
           </tbody>
         </table>
         <!--分页-->
         <nav>
           <ul class="pagination">
             <li >
               <a href="javascript:void(0);" @click="toPage(--currentPage <= 1 ? 1: currentPage)">
                 <span >&laquo;</span>
               </a>
             </li>
             <li v-for="index in indexs"><a href="javascript:void(0);" @click="toPage(index)">{{index}}</a></li>
             <li >
               <a href="javascript:void(0);" @click="toPage(++currentPage >= countPage?countPage:currentPage)">
                 <span>&raquo;</span>
               </a>
             </li>
             <li> <a>共{{countPage}}页,当前第{{currentPage}}页</a></li>
           </ul>
         </nav>
    </div>
</template>
<script>
  export default{
    data:function(){
      return {
        //页面上显示的数据(接收)
        customers:[],
        //默认的当前页
        currentPage:1,
        //当前每页显示的数据
        pageSize:5,
        //总页数（接收）
        countPage:0,
        //搜索的名字
        searchName:""

      }
    },
    computed:{
      indexs:function(){
          var arr = [];
          for(var i = 1;i<=this.countPage;i++){
            arr[i - 1] = i;
          }
        return arr;
      }
    },
    mounted:function(){
      this.getAll();
    },

    methods:{
      toEdit:function(id){
          this.$router.push({name:"EditCustomer",query:{'id':id}});
      }
      ,
      toAddCustomer:function(){
        this.$router.push("/addCustomer");
      },
      //根据id删除记录
      del:function(id){
        var obj = this;
        if(confirm("你确定删除吗")){

          $.ajax({
            type:"post",
            url:"http://localhost:8082/springboot_customer/customerController/delete/"+id,
            data:{time:new Date().getTime()},
            success:function(result){
               alert(result);
               //重新查询
               obj.getAll();
            },
            xhrFields: {
              withCredentials: true
            }
          });


        }


      },

      //查询所有数据
      getAll:function(){
        var obj = this;
        $.ajax({
          type:"post",
          url:"http://localhost:8082/springboot_customer/customerController/getCustomer",
          data:{time:new Date().getTime(),currentPage:obj.currentPage,pageSize:obj.pageSize,searchName:obj.searchName},
          success:function(result){
           obj.customers = result.list;
           obj.countPage = result.countPage;
          },
          xhrFields: {
            withCredentials: true
          }
        });
      },
      //查询所有数据
      toPage:function(index){
        var obj = this;
        obj.currentPage = index;
        obj.getAll();

      }

    }


  }
</script>

<style>
</style>
