<template>
    <el-form>
        <el-form-item>
            <div class="title">
                <el-input type="text" v-model="articleEdit.title"></el-input>
            </div>
            <div class="summary">
                <el-input type="text" v-model="articleEdit.summary"></el-input>
            </div>
            <v-md-editor v-model="articleEdit.content" min-height="700px"></v-md-editor>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="updateArticle">保存</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import {reqArticleById, reqUpdateArticle} from '@/api/index'
export default {
    name:'',
    data() {
        return {
            articleEdit: {
                id: null,
                title: '',
                summary: '',
                content: '',
            }
        };
    },
    mounted() {
        // getArticleDetail()
    },  
    methods: {
        async getArticleDetail(id) {
            let result = await reqArticleById(id)
            let res = result.data
            if(res.status == 1) {
                let data = res.data
                this.articleEdit.id = id
                this.articleEdit.title = data.title
                this.articleEdit.summary = data.summary
                this.articleEdit.content = data.content
            }
        },
        async updateArticle() {
            let result = await reqUpdateArticle(this.articleEdit)
            let res = result.data
            if(res.status == 1) {
                this.$message.success(res.message)
            }
            this.$emit("changeScene", {scene: 0})
        },
        cancel() {
            this.$emit("changeScene", {scene: 0})
        }
    }
};
</script>

<style scoped lang="less">
.title {
    margin-bottom: 10px;
  ::v-deep .el-input__inner {
    height: 60px !important;
    font-size: 25px;
  }
}
</style>
