<template>
  <div>
    <blogManageTopNav v-show="scene==0"></blogManageTopNav>
    <div v-show="scene==0">
      <div style="margin-bottom: 20px">
        <el-button type="primary">添 加</el-button>
        <el-button type="danger">批量删除</el-button>
      </div>
      <el-table
        border
        :data="$store.state.allArticle"
      >
        <el-table-column
          type="selection"
          align="center"
        ></el-table-column>
        <el-table-column
          type="index"
          label="序号"
          width="90"
          align="center"
        ></el-table-column>
        <el-table-column
          label="文章名称"
          prop="title"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="summary"
          label="文章概述"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          align="center"
        ></el-table-column>
        <el-table-column
          label="操作"
          align="center"
          class="operate"
        >
          <template slot-scope="{row, $index}">
            <el-button
              type="warning"
              icon="el-icon-edit"
              size="mini"
              title="编辑"
              @click="editArticle(row)"
            ></el-button>
            <el-button
              type="primary"
              icon="el-icon-info"
              size="mini"
              title="详情"
              @click="handleDetail(row)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              title="删除"
              @click="deleteArticle(row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="page"
        :total="total"
        :page-size="limit"
        :page-sizes="[3, 10, 20]"
        style="padding: 20px 0"
        layout="prev, pager, next, jumper, ->, sizes, total"
      ></el-pagination>
    </div>
    <articleForm
      v-show="scene==1"
      @changeScene="changeScene"
    ></articleForm>
    <articleDetail v-show="scene==2" @changeScenes="changeScenes"></articleDetail>
  </div>
</template>

<script>
// import { mockData } from '../../../public/mock'
import articleForm from './articleForm'
import articleDetail from './articleDetail'
import blogManageTopNav from '@/components/blogManageTopNav/index.vue'
import {reqDeleteArticle} from '@/api/index'
export default {
  name: '',
  components: {
    blogManageTopNav,
    articleForm,
    articleDetail,
  },
  data() {
    return {
      tableData: [],
      page: 1,
      total: 0,
      limit: 3,
      scene: 0,
    };
  },
  created() {
    // this.tableData = mockData.slice().concat(mockData, mockData, mockData)
  },
  mounted() {
    this.getAllArticleData()
  },
  methods: {
    editArticle(row) {
      this.scene = 1
    },
    handleDetail(row) {
      this.scene = 2
    },
    changeScene({scene}) {
      this.scene = scene
    },
    changeScenes(scene) {
      this.scene = scene
    },
    getAllArticleData() {
      this.$store.dispatch("getAllArticle")
    },
    deleteArticle() {
      this.$confirm('确定删除?', '提示', {
        type: 'warning'
      }).then(async () => {
        let result = await reqDeleteArticle()
        console.log(result)
      })
    }
  }
};
</script>

<style scoped lang="less">
</style>
