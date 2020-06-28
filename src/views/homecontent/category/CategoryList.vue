<template>
  <div id="category-list">
      <el-table :data="tableData" v-loading="loading"
          border
          style="width:100%">
            <el-table-column
                fixed
                prop="name"
                label="分类名称"
                width="250px">
            </el-table-column>
            <el-table-column
                fixed
                prop="type"
                label="类型"
                width="250px">
            </el-table-column>
            <el-table-column
                fixed
                prop="rank"
                label="层级"
                width="250px">
            </el-table-column>
            <el-table-column
                fixed
                prop="parentName"
                label="上层分类"
                width="250px">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="250px">
            <div slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="middle">编辑</el-button>
                <el-button type="text" size="middle">删除</el-button>
            </div>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
    name: 'CategoryList',
    data() {
        return {
        loading : true,
        tableData: [{
          id: '',
          name: '',
          parentName: '',
          type: '',
          rank: ''
        }]
        }
    },
    created() {
        console.log("---------create------------")
        // 1. 获取所有分类
        this.$http({
            url: '/getAllCategory',
            method: 'get'
        }).then(res=>{
            console.log(res)
            this.tableData = res.data.data
            this.loading = false
        })
    },
    methods: {
        handleClick(row) {
            console.log(row)
        }
    }

}
</script>

<style scoped>

</style>