<template>
  <div id="articles-list">
    <el-table
    :data = "tableData"
    border=""
    style="width: 100%">
      <el-table-column
      fixed
      prop="title"
      label="标题"
      width="200">
      </el-table-column>
      <el-table-column
      prop="description"
      label="描述"
      width="200">
      </el-table-column>
      <el-table-column
      prop="author"
      label="作者"
      width="200">
      </el-table-column>
      <el-table-column
      prop="createTime"
      label="创建时间"
      width="200">
      </el-table-column>
      <el-table-column
      prop="likeNum"
      label="喜欢"
      width="200">
      </el-table-column>
      <el-table-column
      prop="readNum"
      label="阅读数"
      width="200">
      </el-table-column>
            <el-table-column
      prop="publish"
      label="是否发布"
      width="200">
      </el-table-column>
                 <el-table-column
      prop="top"
      label="是否置顶"
      width="200">
      </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
    <!-- <h2>{{tableData}}</h2> -->
  </div>
</template>

<script>
export default {
    name: 'ArticlesList',
    data() {
      return {
        tableData: []
      }
    },
    created() {
      this.$http({
        url: this.$http.adornUrl("/articles/getAllArticles"),
        method: 'get'
      }).then(res=> {
        console.log(res)
        this.tableData = res.data.data;
      })
      
    }
}
</script>

<style scoped>

</style>