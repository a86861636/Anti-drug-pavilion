<template>
    <div class="header">
        <img src="@/assets/home/logo.svg" class="logo">
        <div v-for="(item,index) in navs" :key="'navs'+index" :class="{nav: true,active: path==item.path}" @click="toPath(item.path)">
            {{item.meta.title}}
        </div>
        <div class="face-box">
            <img class="face03" src="@/assets/home/face03.png">
            <img class="face02" src="@/assets/home/face02.png">
            <img class="face01" src="@/assets/home/face01.png">
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-header',
    data() {
        return {
        }
    },
    computed: {
        path(){
            return this.$route.path;
        },
        navs(){
            let arr = [];
            let routes = this.$router.options.routes;
            for(let item of routes){
                if(item.meta){
                    if(item.meta.title){
                        arr.push(item);
                    }
                }
            }
            return arr;
        }
    },
    watch: {

    },
    methods: {
        toPath(path){
            this.$router.push({ path: path })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header{
        font-weight: 600;
        z-index: 10;
        font-size: 18px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: white;
        height: 80px;
        position: relative;
        background: #13B6F6;
    }

    .nav{
        margin: 0 30px;
        cursor: pointer;
        line-height: 70px;
        position: relative;
        z-index: 2;
    }

    .active{
        color:rgba(255,255,255,0.6);
    }

    .logo{
        position: absolute;
        width: 63px;
        height: 63px;
        left: 30px;
        top: 50%;
        transform: translate(0,-50%);
    }

    .face-box{
        position: absolute;
        right: 30px;
        top: 0;
        height: 80px;
        display: flex;
        flex-direction: row;
    }

    .face01,.face02,.face03{
        width: 97px;
        height: 72px;
    }

    .face01{
        align-self: flex-end;
        margin-left: 48px;
    }

    .face03{
        align-self: flex-end;
        margin-right: 42px;
    }
</style>
