<template>
    <div class="layout">
        <div class="leftNav">
            <div>
                <el-icon class="el-icon-s-order"></el-icon>
                <div class="articleManage manageTitle" @click="toArticleManage">文章管理</div>
            </div>
            <div>
                <el-icon class="el-icon-picture"></el-icon>
                <div class="imageManage manageTitle" @click="toImageManage">图片管理</div>
            </div>
            <div>
                <el-icon class="el-icon-user-solid"></el-icon>
                <div class="introManage manageTitle" @click="toIntroManage">个人介绍</div>
            </div>
        </div>
        <div class="main">
            <div class="topNav">
                <div class="left-menu">
                    <el-icon class="el-icon-s-fold"></el-icon>
                    <breadcrumb></breadcrumb>
                </div>
                <div class="right-menu">
                    <el-dropdown class="headContainer" trigger="click">
                        <div class="head">
                            <img src="@/assets/imgs/head.jpg" alt="">
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <router-link to="/" class="dashboard">
                                <el-dropdown-item>
                                    首页
                                </el-dropdown-item>
                            </router-link>
                            <el-dropdown-item>
                                <span style="display: block" @click="toLogin">退出</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="mainPage">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import breadcrumb from '@/components/breadcrumb'
export default {
    name:'',
    components: {breadcrumb},
    methods: {
        toArticleManage() {
            this.$router.push({
                name: 'articleManage'
            })
        },
        toImageManage() {
            this.$router.push({
                name: 'imageManage'
            })
        },
        toIntroManage() {
            this.$router.push({
                name: 'introManage'
            })
        },
        toLogin() {
            this.$router.push({
                name: 'login'
            })
        }
    }
};
</script>

<style scoped lang="less">
    .layout {
        .leftNav {
            width: 210px;
            height: 100%;
            background-color: #304156;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            color: #fff;
            padding-left: 20px;
            box-sizing: border-box;

            .manageTitle {
                margin: 20px 0 0 5px;
                font-size: 14px;
                display: inline-block;
                cursor: pointer;
            }
        }
        .main {
            margin-left: 210px;

            .topNav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                // padding: 10px 0;
                box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
                .el-icon-s-fold {
                    padding: 0 10px;
                    font-size: 25px;
                }
                .right-menu {
                    margin-right: 25px;
                    .headContainer {
                        .head {
                            margin-top: 5px;
                            img {
                                width: 45px;
                                height: 45px;
                                cursor: pointer;
                                border-radius: 10px;
                            }
    
                            .el-icon-caret-bottom {
                                cursor: pointer;
                                font-size: 12px;
                            }
                        }
                    }
                }
            }

            .mainPage {
                margin: 20px;
            }
        }
    }
</style>
