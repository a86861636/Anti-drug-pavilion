<template>
    <div class="discern">
        <c-header></c-header>
        <div class="main">
            <img class="img3" src="@/assets/discern/p3.svg">
            <img class="img1" src="@/assets/discern/p1.png">
            <img class="img2" src="@/assets/discern/p2.png">
            <div class="tt">一、毒品的基本知识</div>
            <div class="content content1" style="text-indent: 2em;z-index: 2;position: relative">       
                毒品是指鸦片、海洛因、甲基苯丙胺（冰毒）、吗啡、大麻、可卡因，以及国家规定管制的其他能够使人形成瘾癖的麻醉药品和精神药品。 （《禁毒法》第二条）根据2007年10月11日国家食品药品监督管理局、公安部、卫生部发布的《麻醉药品品种目（2013年版）》和《精神药品品种目录（2013年版）》的规定，目前我国被管制的能使人形成瘾癖的麻醉药品121种，精神药品149种，共270种。        
                <div style="text-indent: 2em;margin-top: 10px;">
                    毒品一般是指使人形成瘾癖的药物，这里的药物一词是个广义的概念，主要指吸毒者滥用的鸦片、海洛因、冰毒等，还包括具有依赖性的天然植物、烟、酒和溶剂等，与医疗用药物是不同的概念。 制毒物品是指用于制造麻醉药品和精神药品的物品。毒品，有些是可以天然获得的，如鸦片就是通过切割未成熟的罂粟果而直接提取的一种天然制品，但绝大部分毒品只能通过化学合成的方法取得。这些加工毒品必不可少的医药和化工生产用的原料就是我们所说的制毒物品。因此，制毒物品既是医药或化工原料，又是制造毒品的配剂。
                </div>
            </div>
            <div class="tt">二、毒品的特性</div>
            <div class="content">
                1、毒害性 <br>
                2、依赖性（成瘾性）<br>
                3、滥用性<br>
                4、被管制性<br>
                这四个属性缺一不可，缺一而不能成为毒品，而毒品的依赖性是基础，它决定了毒品的其它三个属性。
            </div>
            <div class="tt">三、毒品的分类</div>
            <div class="content">
                毒品的分类方法有很多，可从不同的角度进行不同的分类：<br>
                （1）根据国际公约的有关规定，可将毒品分为麻醉药品（如海洛因）和精神药品（如氯胺酮）。<br>
                （2）根据毒品来源和生产方法不同，可分为天然毒品（如鸦片）、半合成毒品（如海洛因）和合成毒品（如冰毒、k粉、摇头丸及各类“开心水”等）。<br>
                （3）根据毒品对人体的作用,可分为抑制剂（如鸦片）、兴奋剂（如冰毒）和致幻剂（如麦司卡林）。<br>
                （4）根据毒品流行的时间顺序，可分为传统毒品（如海洛因）和新型毒品（如冰毒），是目前最常见的分类法。 <br>
                1、常见传统毒品种类：<br>
                鸦片、吗啡、海洛因、大麻、杜冷丁（盐酸哌替啶）、古柯、可卡因、恰特草、可待因、那可汀、盐酸二氢埃托啡等。<br>
                2、常见新型毒品种类：<br>
                冰毒、摇头丸、K粉（氯胺酮）、咖啡因、三唑仑、安纳咖、氟硝安定、麦角乙二胺（LSD）、安眠酮、丁丙诺啡、地西泮及有机溶剂和鼻吸剂等。
            </div>
            <img src="@/assets/discern/line.svg" class="line">
            <div class="drugList">
                <div class="drugItem" v-for="(item,index) in drugList" :key="index">
                    <img class="photo" :src="mediaURL + item.picture" :alt="item.name">
                    <div class="info">
                        <div class="name">{{item.name}}</div>
                        <div class="name_en">英文名：{{item.name_en}}</div>
                        <div class="alias">别名：{{item.alias}}</div>
                        <div class="introduction">{{item.introduction}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import header from '@/components/header';
    export default {
        name: "discern",
        components:{
            'c-header': header
        },
        data(){
            return {
                drugList: [
                    {
                        img: require('@/assets/discern/p1.png'),
                        name: '摇头丸',
                        name_en: 'Ecstasy',
                    }
                ]
            }
        },
        computed: {
            mediaURL(){
                return this.$store.state.mediaURL;
            }
        },
        mounted() {
            this.getDrug();
        },
        methods: {
            getDrug(){
                let data = {
                    url: 'drugs/all/',
                }
                this.$store.dispatch( 'get', data ).then( res => {
                    // eslint-disable-next-line no-console
                    this.drugList = res.data;
                    console.log(this.drugList);
                })
            },
        }
    }
</script>

<style scoped lang="less">
    .discern{
        background: #F9ECCD;
    }
    
    .main{
        width: 1400px;
        margin: auto;
        padding-top: 90px;
        position: relative;
        
        .tt{
            height:44px;
            font-size:30px;
            color:rgba(74,144,226,1);
            margin-bottom: 30px;
        }

        .img1{
            position: absolute;
            right: 0;
            top: 90px;
            width: 550px;
            z-index: 2;
        }

        .img2{
            position: absolute;
            right: 0;
            top: 920px;
            width: 440px;
        }

        .img3{
            position: absolute;
            right: 0;
            top: 90px;
            width: 1000px;
            z-index: 1;
        }
        
        .content{
            width:828px;
            padding-left: 75px;
            font-size:21px;
            color:rgba(64,52,97,1);
            margin-bottom: 50px;
            text-align: justify;
        }
        
        .content1{
            width:720px;
        }

        .line{
            width: 100%;
        }

        .drugList{
            color: #403461;
            padding: 0 90px;
            font-size: 21px;

            .drugItem{
                display: flex;
                flex-direction: row;
                padding-bottom: 50px;
            }

            .info{
                margin-left: 100px;
                min-height: 290px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .photo{
                width: 290px;
                height: 290px;
                border-radius: 50%;
                display: block;
            }

            .name{
                font-size:48px;
            }

            .name_en{
                margin-top: 20px;
            }

            .alias{
                margin-top: 5px;
            }

            .introduction{
                margin-top: 20px;
            }
        }
    }
</style>
