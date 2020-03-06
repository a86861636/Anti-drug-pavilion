<template>
<div class="home">
    <div class="section1">
        <c-header style="width: 100%;"></c-header>
        <img src="@/assets/home/star.svg" class="star">
        <img src="@/assets/home/life.png" class="life">
        <img src="@/assets/home/day.svg" class="day">
        <router-link to="/discern">
            <div class="more">了解更多</div>
        </router-link>
        <img src="@/assets/home/point.svg" class="point">
        <img src="@/assets/home/box.svg" class="box">
    </div>
    <div class="section2">
        <img class="bg2" src="@/assets/home/bg2.png">
        <img class="gate" src="@/assets/home/gate.svg">
        <img class="pyramid" src="@/assets/home/pyramid.svg">
        <img class="face04" src="@/assets/home/face04.svg">
        <div class="content">
            <div class="tt1">Drug Introduced</div>
            <img>
            <div class="videos">
                <div v-for="(item,index) in videos" :key="index" class="videoItem" @click="playVideo(item.video)">
                    <div class="box">
                        <img class="playIcon" src="@/assets/home/play.svg">
                        <img class="cover" :src="mediaURL+item.video_picture_url">
                    </div>
                    <div class="tt2">{{item.title}}</div>
                    <div class="info">{{item.content}}</div>
                </div>
            </div>
            <router-link to="/intro">
                <div class="more">了解更多</div>
            </router-link>
        </div>
    </div>
    <div v-if="show" class="videoBox">
        <div class="mesh" @click="close"></div>
        <video class="video" :src="videoURL+currentVideo" controls/>
    </div>
</div>
</template>

<script>
import header from '@/components/header';
export default {
    components:{
        'c-header': header
    },
    mounted() {
        let data = {
            url: 'index/drugIntroduction/'
        }
        this.$store.dispatch( 'get', data ).then( res => {
            this.videos = res.data;
            console.log(res);
        })
    },
    computed: {
        videoURL() {
            return this.$store.state.videoURL
        },
        mediaURL() {
            return this.$store.state.mediaURL
        }
    },
    methods: {
        close(){
            this.show = false;
        },
        playVideo(url) {
            this.show = true;
            this.currentVideo = url;
        }
    },
    data(){
        return {
            videos: [],
            currentVideo: '',
            show: false
        }
    }
}
</script>

<style scoped lang="less">
.section1{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F5C9DD;
    position: relative;
    overflow: hidden;

    .star{
        width: 1285px;
        height: 454px;
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%,-50%);
        z-index: 1;
    }

    .life{
        height: 139px;
        width: 1147px;
        z-index: 2;
        position: relative;
        margin-top: 168px;
    }

    .day{
        width: 1285px;
        margin-top: 30px;
        z-index: 2;
    }

    .more{
        width:214px;
        line-height:61px;
        background:linear-gradient(90deg,rgba(216,101,152,1) 0%,rgba(255,194,221,1) 100%);
        border-radius:32px;
        font-size:25px;
        color: rgba(255,255,255,1);
        text-align: center;
        box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
        z-index: 2;
        position: absolute;
        left: 50%;
        margin-top: 160px;
        bottom: 370px;
        transform: translate(-50%,0);
    }
    
    .box{
        position: absolute;
        left: 50%;
        margin-left: 70px;
        bottom: 32px;
        width:477px;
        height:560px;
    }

    .point{
        position: absolute;
        width: 100%;
        left: 50%;
        height: auto;
        top: 50vh;
        transform: translate(-50%,0);
    }
}
.section2{

    height: 100vh;
    position: relative;
    overflow: hidden;

    .bg2{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
    }

    .gate{
        position: absolute;
        width: 478px;
        height: 569px;
        right: 0px;
        top: 0;
    }

    .pyramid{
        position: absolute;
        width: 844px;
        height: 537px;
        left: 236px;
        top: -70px;
    }

    .face04{
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 220px;
        transform: translate(-50%,0);
    }

    .tt1{
        color:rgba(0,0,0,0.34);
        text-align: center;
        font-size:30px;
    }

    .content{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    .videos{
        display: flex;
        flex-direction: row;
    }

    .videoItem{
        margin: 0 80px;
    }

    .box{
        position: relative;
        cursor: pointer;
    }

    .playIcon{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .cover{
        width:465px;
        height:333px;
        background:rgba(216,216,216,1);
    }

    .tt2{
        color: #403461;
        font-size:25px;
        line-height:28px;
        text-align: center;
        margin-top: 27px;
        font-weight: 600;
    }

    .info{
        color: #403461;
        line-height:25px;
        font-size:20px;
        text-align: center;
        margin-top: 15px;
    }

    .more{
        width:214px;
        line-height:61px;
        background:linear-gradient(90deg,rgba(117,193,226,1) 0%,rgba(186,186,250,1) 100%);
        border-radius:32px;
        font-size:25px;
        color: rgba(255,255,255,1);
        text-align: center;
        box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
        z-index: 2;
        cursor: pointer;
        margin: 120px auto 0 auto;
    }

    
}
.videoBox{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    .mesh{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 10;
    }

    .video{
        width: 1200px;
        background: black;
        z-index: 11;
    }
}


</style>