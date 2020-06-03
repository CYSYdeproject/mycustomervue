<template>
  <div id="app">
        <div class="left">
           <router-link to="/">客户管理</router-link> <br /><br /><br />
           <router-link to="/user">用户管理</router-link>  <br /><br /><br />
           <router-link to="/vip">会员管理</router-link>  <br /><br /><br />
        </div>
        <div class="right">
          <router-view />
        </div>
    </div>
</template>

<script>

</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  #app{
    width: 1170px;
    overflow: hidden;
    margin: 0 auto;
  }
  .left{
    width: 300px;
    overflow: auto;
    text-align: center;
    float: left;
  }
  .right{
    width: 870px;
    float: left;
  }
</style>
