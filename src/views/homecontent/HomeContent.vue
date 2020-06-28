<template>
  <div id="home-content">
      <el-container class="aside-container">
          <el-aside width = "200px">
              <el-menu default-active="1" class="left-menu" @open="handleOpen" @close="handleClose"
                      background-color="#545c64"
                      text-color="#fff"
                      active-text-color="#ffd04b">
                  <el-submenu index="1">
                        <template slot="title">
                        <i class="iconfont icon-bowenboke"></i>
                        <span>博文管理</span>
                        </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1" @click="addArticles">新建博文</el-menu-item>
                                <el-menu-item index="1-2">查看博文</el-menu-item>
                            </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                        <template slot="title">
                        <i class="iconfont icon-shuji"></i>
                        <span>读书管理</span>
                        </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1">新建读书</el-menu-item>
                                <el-menu-item index="2-2">查看书籍</el-menu-item>
                            </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="3">
                        <template slot="title">
                        <i class="iconfont icon-biaoqian"></i>
                        <span>标签管理</span>
                        </template>
                            <el-menu-item-group>
                                <el-menu-item index="3-1">新建标签</el-menu-item>
                                <el-menu-item index="3-2">查看标签</el-menu-item>
                            </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4">
                        <template slot="title">
                        <i class="iconfont  icon-guanyu"></i>
                        <span>关于</span>
                        </template>
                            <el-menu-item-group>
                                <el-menu-item index="4-1">关于我</el-menu-item>
                            </el-menu-item-group>
                  </el-submenu>
              </el-menu>
          </el-aside>
          <el-container>
          <el-header class="home-header">
                <el-dropdown>
                    <span class="title">
                        个人博客管理平台                    
                        <i>  
                        <img src="~assets/img/header/manage.png" alt="">                    
                        </i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>作者简介</el-dropdown-item>
                    <el-dropdown-item>联系我们</el-dropdown-item>
                    <el-dropdown-item>打赏</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>{{ author }}</span>
            </el-header>
            <el-main>
                main
              </el-main>
          </el-container>
      </el-container>
  </div>
</template>

<script>
export default {
    name: "HomeContent",
    data() {
        return {
            author: '张晓平'
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
        addArticles() {
            console.log("newAritics")
            this.$router.push('/edit')
        }
    }
}
</script>

<style scoped>
    .el-header {
       background-color: #B3C0D1;
       color: #333;
       font-size: 18px;
       height: 60px;
       text-align: center;
       line-height: 60px;
       /* vertical-align: center; */
    }

    .el-header .title {
        font-size: 18px;
        margin-right: 25px;
    }

    .el-header .title img {
        position: relative;
        left: 15px;
        width: 25px;
        height: 25px;
        top: 5px;
    }

    .aside-container {
        
    }
    .el-aside {
        
    }

    .el-main {
        background-color: blue;
    }

    .el-submenu i {
        position: relative;
        margin-right: 5px;
    }

</style>