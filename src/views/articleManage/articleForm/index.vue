<template>
    <el-form>
        <el-form-item>
            <v-md-editor v-model="text" height="700px"></v-md-editor>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">保存</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name:'',
    data() {
        return {
            text: '',
        };
    },
    methods: {
        cancel() {
            this.$emit("changeScene", {scene: 0})
        }
    }
};
</script>

<style scoped lang="">

</style>
