<template>
  <div id="home-content">
      <el-container class="aside-container">
          <el-aside width = "200px" height = "1000px">
              <el-menu default-active="1" class="left-menu" @open="handleOpen" @close="handleClose"
                      background-color="#F2F6FC"
                      text-color="#000"
                      active-text-color="#ffd04b">
                  <el-submenu index="1">
                        <template slot="title">
                        <i class="iconfont icon-bowenboke"></i>
                        <span>博文管理</span>
                        </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1" @click="addArticles">新建博文</el-menu-item>
                                <el-menu-item index="1-2" @click="showArticles">查看博文</el-menu-item>
                            </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                        <template slot="title">
                        <i class="iconfont icon-shuji"></i>
                        <span>读书管理</span>
                        </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1" @click="addBooks">新建读书</el-menu-item>
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
                        <i class="iconfont icon-biaoqian"></i>
                        <span>分类管理</span>
                        </template>
                            <el-menu-item-group>
                                <el-menu-item index="4-1" @click="categoryShow">查看分类</el-menu-item>
                                <el-menu-item index="4-2" @click="categoryAdd">新建类别</el-menu-item>
                            </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="5">
                        <template slot="title">
                        <i class="iconfont  icon-guanyu"></i>
                        <span>关于</span>
                        </template>
                            <el-menu-item-group>
                                <el-menu-item index="5-1">关于我</el-menu-item>
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
                <router-view/>
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
            // this.$router.push('/edit')
            this.$router.push('/home/textedit')
        },
        showArticles() {
            console.log("showArticles")
            this.$router.push('/home/aritcleslist')
        },
        addBooks() {
            console.log("newBooks")
            // this.$router.push('/edit')
            this.$router.push('/home/booklist')
        },
        // 查看分类
        categoryShow() {
            console.log("categoryShow")
            this.$router.push('/home/categorylist')
        },
        // 新建分类
        categoryAdd() {
            console.log("test")
        }
    }
}
</script>

<style scoped>
#home-content {
    height: 100%;
    background-color: #F2F6FC;
}
    .el-header {
       background-color: #91C5FB;
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
        height: 100%;
    }

    .el-aside {
        height: 100%;
        /* background-color: blue; */
    }

    .el-main {
        /* background-color: blue; */
    }

    .el-submenu i {
        position: relative;
        margin-right: 5px;
    }

</style>