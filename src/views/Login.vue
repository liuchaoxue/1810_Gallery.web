<template>
    <div>
        <el-container>
            <el-main>
                <div class="loginMain">

                    <div class="loginTitleText">玉泉寺多媒体信息管理系统</div>

                    <div class="loginInfoText">微信扫一扫登录</div>

                    <img @click="toAddUserInfo" class="loginQRCode"/>

                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {}
        },
        mounted(){},
        methods:{
            toAddUserInfo(){
                this.$router.push('/addUserInfo');
            },
        }
    }
</script>

<style scoped>
    .loginMain {
        width: 400px;
        height: 428px;
        border: 1px solid #979797;
        margin: 153px auto;
    }

    .loginTitleText {
        margin-top: 72px;
        font-size: 20px;
        line-height: 28px;
        color: #303313;
        text-align: center;
    }

    .loginInfoText {
        font-size: 14px;
        line-height: 20px;
        margin-top: 74px;
        text-align: center;
        color: #606266;
    }

    .loginQRCode {
        margin: 19px auto 0;
        width: 128px;
        height: 128px;
        background: aquamarine;
    }
</style>