<template>
  <div>
    <blogManageTopNav></blogManageTopNav>
    <div style="margin-bottom: 20px">
      <el-button type="primary">添 加</el-button>
      <el-button type="danger">批量删除</el-button>
    </div>
    <el-table border :data="imageList">
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
        label="图片名称"
        prop="name"
        align="center"
      ></el-table-column>
      <el-table-column
        label="默认图片"
        align="center"
      >
        <template slot-scope="{row, $index}">
            <img :src="row.defaultImg" alt="" style="width: 70px; height: 70px; object-fit: cover;">
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="{row}">
            <el-button
                type="primary"
                icon="el-icon-info"
                size="mini"
                title="图片详情"
            ></el-button>
            <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                title="删除"
            ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        :current-page="page"
        :total="total"
        :page-size="limit"
        :page-sizes="[3, 10, 20]"
        layout="prev, pager, next, jumper, ->, sizes, total"
        style="padding: 20px 0"
    ></el-pagination>
    
  </div>
</template>

<script>
import blogManageTopNav from '@/components/blogManageTopNav/index.vue'
export default {
  name: '',
  components: {
    blogManageTopNav
  },
  data() {
    return {
        imageList: [],
        page: 1,
        total: 0,
        limit: 3,
        dialogUserVisible: false
    };
  },
  mounted() {
    this.imageList = [
        {
            name: '头像',
            defaultImg: require('@/assets/imgs/head.jpg')
        },
        {
            name: '登录',
            defaultImg: require('@/assets/imgs/login.jpg')
        },
    ]
  },
  methods: {
    
  }
};
</script>

<style scoped lang="">
</style>
