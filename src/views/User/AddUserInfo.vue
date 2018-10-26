<template>
    <el-container>
        <el-main>
            <div class="addUserInfoMain">

                <div class="addUserInfoTitleText">补充身份信息</div>

                <el-form :model="userInfo" :rules="rules" ref="userInfo" class="addUserInfoForm">
                    <el-form-item prop="name">
                        <el-input v-model="userInfo.name" placeholder="用户命"></el-input>
                    </el-form-item>

                    <el-form-item prop="phone">
                        <el-input v-model="userInfo.phone" placeholder="手机号"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="setUserInfo('userInfo')" class="addUserInfoButton">完成</el-button>
                    </el-form-item>
                </el-form>

            </div>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "add-user-info",
        data() {
            return {
                userInfo: {},
                rules:{
                    name: [
                        {required: true, message: '请填写用户名', trigger: 'click' },
                    ],
                    phone:[
                        {required: true,message: '请填写手机号', trigger: 'click' }
                    ]
                }
            }
        },
        methods:{
            setUserInfo(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .addUserInfoMain {
        width: 400px;
        height: 426px;
        border: 1px solid #979797;
        margin: 153px auto;
    }

    .addUserInfoTitleText {
        line-height: 28px;
        font-size: 20px;
        text-align: center;
        color: #303133;
        margin-top: 72px;
    }

    .addUserInfoForm{
        margin: 32px auto 0;
        width: 210px;
    }

    .addUserInfoForm input{
        margin-bottom: 8px;
    }

    .addUserInfoButton{
        margin-top: 27px;
    }
</style>