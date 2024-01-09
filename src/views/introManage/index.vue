<template>
    <div>
        <el-form inline>
        <el-form-item>
            <el-input placeholder="用户名"></el-input>
        </el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button>清空</el-button>
    </el-form>
    <div style="margin-bottom: 20px">
        <el-button type="primary">添 加</el-button>
        <el-button type="danger">批量删除</el-button>
    </div>
    <el-table border>
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
            label="用户名称"
            prop="name"
            align="center"
        ></el-table-column>
        <el-table-column
            label="权限列表"
            align="center"
        ></el-table-column>
        <el-table-column
            label="操作"
            align="center"
        ></el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    name:'',
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>

<style scoped lang="">

</style>
