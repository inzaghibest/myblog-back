<template>
  <div id="text-edit">
      <h2>新增博文</h2>
      <el-form :inline="true" :rules="rules" ref="editForm" :model="editForm">
        <el-form-item label="文章标题" prop="title">
            <el-input v-model="editForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章作者" prop="author">
            <el-input v-model="editForm.author"></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="classify">
            <!-- <el-select v-model="editForm.classify" placeholder="请选择分类">
                <el-option v-for=" (item,index) in articlesClassify" 
                :label="item.label" :value="item.lable" :key="index.id">
                </el-option>
            </el-select> -->
                <el-cascader
                v-model="editForm.classify"
                :options="categoryOptions"
                @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item label="是否推荐">
            <el-switch v-model="editForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item>
            <mavon-editor ref="md" v-model="value" 
            @change="change" 
            @imgAdd="imgAdd"
            @imgDel="imgDel"/>
        </el-form-item>
          <el-form-item>
                <el-button type="primary" @click="submitForm('editForm')">创建博文</el-button>
                <el-button @click="resetForm('editForm')">重置</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
    name: 'TextEdit',
    data () {
        return {
            value: '',
            editForm: {
                title: '',
                author: '',
                delivery: false,
                classify: []
            },
            // 上传的图片,临时记录,等发布时才提交到服务器.
            img_files: {}, // {1: file, 2: file2}
            categoryOptions:[{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                    value: 'yizhi',
                    label: '一致'
                }, {
                    value: 'fankui',
                    label: '反馈'
                }]    
            }
            ],
            rules: {
                title: [{required: true, message: '请输入文章标题!', trigger: 'blur' }],
                author: [{required: true, message: '请输入文章作者!', trigger: 'blur' }],
                classify: [{required: true, message: '请选择文章分类!', trigger: 'blur' }]
            }
        }
    },
    methods: {
        handleChange (value) {
            console.log(value);
            console.log(this.editForm.classify)
        },
        change() {
            console.log('---------change-----------')
            console.log(this.value)
        },
        imgAdd(pos, file) {
            this.img_files[pos] = file
            console.log("pos: " + pos)
            console.log("file: " + file)
            console.log(this.img_files)
        },
        // 上传图片,并更新对应的url
        postImg() {
            let formdata = new FormData()
            for(var _img in this.img_files) {
                formdata.append("files", this.img_files[_img])
            }
            this.$http({
                url: this.$http.adornUrl('/articles/add/imgUpLoad'),
                method: 'post',
                data: formdata,
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then((result) => {
                console.log(result)
                const resData = result.data;
                console.log(resData)
                if(resData.code === 200)
                {
                    for (var i = 0; i < resData.data.length; i++) {              
                    this.$refs.md.$img2Url(i+1, resData.data[i]);
                    }
                }
            }).catch((err) => {
                console.log(err)
            });
        },

        imgDel(pos) {
            delete this.img_files[pos]
        },
        // 重置表单
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        // 提交表单
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
          if (valid) {
              this.postImg()
              this.$http({
                url: this.$http.adornUrl('/articles/add'),
                method: 'post',
                data: {
                    title: this.editForm.title,
                    author: this.editForm.author,
                    top: this.editForm.delivery ? 1 : 0,
                    content: this.value
                }
            }).then((result) => {
                    if(result.data.code === 200)
                    {
                        this.$notify({
                            title: 'success',
                            message: result.data.msg,
                            type: 'success',
                            position: 'top-center'
                        })
                        this.$router.push('/home/textshow')
                    }
                }
            ).catch((err) => {
                console.log(err)
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>

<style scoped>
    #text-edit {
        margin: 15px 20px 0;
    }
    #text-edit h2{
        text-align: center;
    }
</style>