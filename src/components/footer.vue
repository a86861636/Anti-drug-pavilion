<template>
    <div class="footer">
        <div class="box">
            <div class="text1">特别提醒</div>
            <img class="logo" src="@/assets/warning.png">
        </div>
        <div class="text2">毒贩是凶残的，从我市历年来查获的重特大毒品案件中发现，大多数都具有明显的枪毒同源现象，希望大家在平时的生活、工作、学习中要时刻保持警惕，在发现涉毒非法活动时，一定要在保证自身安全的前提下，及时报警，报警电话：110。</div>
    </div>
</template>

<script>
    export default {
        name: "c-footer",
        props: {
            dataType: {
                type: String,
                default: '1'
            }
        }
    }
</script>

<style scoped lang="less">
    .footer{
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 280px;
        box-sizing: border-box;
        justify-content: center;
    }

    .box{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .text1{
         color: #020A17;
         font-size: 38px;
     }

    .logo{
        margin-left: 22px;
        width: 34px;
        height: 30px;
    }

    .text2{
        margin-top: 20px;
        color:rgba(0,0,0,1);
        font-size:21px;
        width: 877px;
     }
</style>
