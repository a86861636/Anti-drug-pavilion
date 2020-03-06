<template>
    <div class="people">
        <c-header class="header">
        </c-header>
        <div class="list">
            <div v-for="(item,index) in people" :key="'people-'+index" class="item">
                <img class="face" :src="mediaUrl+item.image"/>
                <div class="text">
                    <div class="title">
                        广州市首届“最美禁毒人”候选人：{{item.name}}
                        <img @click="playVideo(mediaUrl+item.video)" class="video" src="@/assets/people/video.png">
                    </div>
                    <div class="intro">{{item.content}}</div>
                </div>
            </div>
        </div>
        <img class="bg" src="@/assets/people/bg.png">
        <img class="bg1" src="@/assets/people/bg.png">
        <c-footer class="footer"></c-footer>

        <div v-if="play" class="play">
            <div class="close" @click="closeVideo">
                <img src="@/assets/close.png">
            </div>
            <video autoplay controls :src="currentVideo" style="background: black;width: 100%"></video>
        </div>
        <div v-if="play" class="mesh"></div>
    </div>
</template>

<script>
    import header from '@/components/header';
    import footer from "@/components/footer";
    export default {
        name: "people",
        components: {
            "c-header": header,
            "c-footer": footer,
        },
        mounted(){
            this.getPeople();
        },
        computed:{
            mediaUrl(){
                return this.$store.state.mediaURL;
            }
        },
        methods:{
            getPeople(){
                let data = {
                    url: 'BeautifulPeople/getPersonalProfile/',
                }
                this.$store.dispatch( 'get', data ).then( res => {
                    this.people = res.data;
                })
            },
            playVideo(src){
                this.play = true;
                this.currentVideo = src;
            },
            closeVideo(){
                this.play = false;
            }
        },
        data(){
            return {
                play: false,
                currentVideo: "",
                people: [
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .people{
        min-width: 1400px;
        min-height: 100vh;
        background: #1F2631;
        padding-bottom: 280px;
        position: relative;
        box-sizing: border-box;
    }

    .bg{
        width: 50%;
        left: 0;
        top: 50px;
        position: absolute;
        z-index: 1;
    }

    .bg1{
        width: 50%;
        right: 0;
        bottom: 270px;
        position: absolute;
        z-index: 1;
    }

    .list{
        position: relative;
        margin: auto;
        width: 1400px;
        z-index: 2;

        .item{
            margin-top: 100px;
            display: flex;
            flex-direction: row;
            align-items: center;

            .text{
                flex: 1;
            }
            .face{
                width: 276px;
                margin-right: 30px;
            }

            .title{
                color: #4A90E2;
                font-size: 30px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                .video{
                    width: 45px;
                    margin-left: 20px;
                    cursor: pointer;
                }
            }

            .intro{
                color: white;
                font-size: 21px;
                margin-top: 40px;
            }
        }

        .item:last-child{
            margin-bottom: 100px;
        }
    }
    .footer{
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 2;
    }

    .mesh{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.2);
        z-index: 14;
    }

    .play{
        position: fixed;
        max-height: 80vh;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 15;

        .close{
            position: absolute;
            right: 0;
            top: 0;
            transform: translate(0,-100%);
            background: white;
            cursor: pointer;
            padding: 5px;

            img{
                width: 50px;
                height: 50px;
                display: block;
            }
        }

        video{
            height: 100%;
        }
    }
</style>
