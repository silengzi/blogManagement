<template>
  <div>
    <el-form inline>
        <el-form-item>
            <el-input placeholder="文章名称"></el-input>
        </el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button>清空</el-button>
    </el-form>
    <div style="margin-bottom: 20px">
        <el-button type="primary">添 加</el-button>
        <el-button type="danger">批量删除</el-button>
    </div>
    <el-table border :data="tableData">
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
            prop="create_time"
            label="创建时间"
            align="center"
        ></el-table-column>
        <el-table-column
            label="操作"
            align="center"
        >
            <el-button
                type="warning"
                icon="el-icon-edit"
                size="mini"
            ></el-button>
            <el-button
                type="primary"
                icon="el-icon-info"
                size="mini"
            ></el-button>
            <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
            ></el-button>
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
</template>

<script>
import {mockData} from '../../../public/mock'
export default {
  name: '',
  data() {
    return {
        tableData: [],
        page: 1,
        total: 0,
        limit: 3,
    };
  },
  created() {
    this.tableData = mockData.slice().concat(mockData, mockData, mockData)
  },
  methods: {
    
  }
};
</script>

<style scoped lang="">
</style>
