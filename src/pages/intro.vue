<template>
    <div class="intro">
        <c-header></c-header>
        <video class="video" :poster="mediaURL + 'drug_introduction_video/20200110180001.png'" :src="videoURL + '/drug_introduction_video/OpenCeremony.mp4/'" controls/>
        <div class="main">
            <div class="address">
                黄埔禁毒展馆1号，设于黄埔区青少年宫萝岗宫，萝岗宫位于黄埔区香雪七路1号。萝岗宫成立于2009年2月，2010年12月正式揭牌运行。占地面积20870平方米，总建筑面积25870平方米（其中区科技馆占用面积约4000平方米），主体建筑分A、B两栋，有金点点剧院、科技馆、天象馆、艺术展厅、莫奈花园、梦里水乡、陶瓷艺术创客空间等活动场所。
            </div>
            <div class="photoList">
                <div class="photoBox" v-for="(item,index) in areaList" :key="'img-'+index" @click="changeSwiper(index)">
                    <img v-if="index==activeIndex" class="active" src="@/assets/moma/active.png">
                    <div v-if="index!=activeIndex" class="inactive"></div>
                    <img class="photo" :src="mediaURL + item.image">
                </div>
            </div>
            <div style="position: relative">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div v-for="(item,index) in areaList" :key="'area-'+index" class="swiper-slide">
                            <img class="areaImg" :src="mediaURL + item.image">
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
            </div>
            <div v-if="areaList[activeIndex]" class="intro">
                {{areaList[activeIndex].introduction}}
            </div>
        </div>
    </div>
</template>

<script>
var _self;
import header from '@/components/header';
import Swiper from 'swiper';
export default {
    name: "people",
    components: {
        "c-header": header,
    },
    data(){
        return {
            areaList: [],
            activeIndex: 0,
            swiper: null
        }
    },
    computed: {
        videoURL() {
            return this.$store.state.videoURL
        },
        mediaURL() {
            return this.$store.state.mediaURL
        }
    },
    mounted() {
        _self = this;
        this.getData();
        this.swiper = new Swiper ('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            speed: 500,//切换速度
            autoplay: true,//可选选项，自动滑动
            loop: true, // 循环模式选项
            on: {
                slideChange: function(){
                    _self.activeIndex = this.activeIndex;
                }
            }
        });
    },
    methods: {
        changeSwiper(index){
            this.swiper.slideTo(index);
        },
        getData(){
            let data = {
                url: 'ExhibitionHall/areas/',
            };
            this.$store.dispatch( 'get', data ).then( res => {
                this.areaList = res.data;
            })
        },
    }
}
</script>

<style scoped lang="less">

    .intro{
        background: #F9ECCD;
        position: relative;
        font-size: 25px;
        color: #413F45;
    }

    .video{
        width: 100%;
        height: calc(100vh - 80px);
        background: black;
        margin-bottom: 100px;
    }

    .main{
        width: 1400px;
        margin: auto;

        .address{
            width: 1000px;
            margin: auto;
            text-align: justify;
            margin-bottom: 100px;
        }

        .photoList{
            margin-bottom: 50px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .photoBox{
                position: relative;
            }

            .active,.inactive{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
            }

            .inactive{
                border: 1px solid white;
                border-radius: 6px;
            }

            .photo{
                position: relative;
                width: 239px;
                z-index: 2;
                padding: 10px;
                display: block;
            }
        }
        
        .areaImg{
            width: 100%;
        }

        .intro{
            width: 60%;
            margin: auto;
            padding: 60px 0; 
        }
    }
</style>
<style>
.swiper-button-prev{
    transform: translate(-400%,0);
}
.swiper-button-next{
    transform: translate(400%,0);
}
.swiper-button-prev:after,.swiper-button-next:after{
    font-size: 100px !important;
    color: #E2CB96;
}
</style>
