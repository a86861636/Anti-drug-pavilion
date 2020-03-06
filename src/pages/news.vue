<template>
    <div class="news">
        <c-header class="header"></c-header>
        <div class="main">
            <div style="color: #403461">
                黄埔公安牢固树立“借力、嵌入、融合”社会治理理念，建设与黄埔区、广州开发区“四区四中心”相适应的社会治安防控体系，强化控发案、少发案；建立完善合成作战、外线侦查等刑侦机制，成功侦破了“1903”“726”等一批大要案件，受到了省市领导的肯定。<br/> <br/>
                黄埔公安局在全市率先举办迎春花市警营开放日活动，成功举办全国规模最大、最震撼人心、最有影响力禁毒主题宣传活动之一的2019广州黄埔国际禁毒日宣传活动，全面推动禁毒示范区创建工作。<br/><br/>
                黄埔公安积极顺应大数据、人工智能发展趋势，在全市各区分局率先建立数据侦查实验室，铸就黄埔公安“数据大脑”。<br/><br/>
                加快推进南海神庙等重点区域智感安防区建设，“加庄村智感安防区”被确定为全国公安大数据智能化建设应用推进会现场考察项目；深入推进看守所智慧新监管建设，“黄埔模式”在全省公安系统推广。
            </div>
            <div class="tt">
                黄浦区禁毒办宣传
            </div>
            <div class="text1">
                黄埔区为传播新声音，引导社会公众尤其是青少年积极参与全民禁毒工程，共建平安、无毒黄埔。给黄埔禁毒宣传玩出“新花样”
            </div>
            <img src="@/assets/news/ship.png">
            <div class="text1">
                听起来像轮船的名字<br>
                <span class="color1">其实是一个移动禁毒展馆</span><br>
                <span class="color1">参观体验的同时还能涨知识</span>
            </div>
            <div class="text1">
                馆内设置了禁毒历史浏览区、模拟游戏区、真人剧场区、微电影播放区、互动竞猜区、涂鸦墙等多个区域。市民群众可以通过参与3D模拟体验、畅玩互动游戏、观看禁毒真人剧，在全新体验中学习和掌握禁毒知识。
            </div>
            <img src="@/assets/news/bird.png">
            <div class="tt1">禁毒+IP</div>
            <div class="color1">这是我们黄埔的禁毒IP“鹰英侠”</div>
            <div class="text1">“鹰英侠”由禁毒、木棉花、凤凰来埔等元素融合而成，具有鲜明的黄埔文化特色，展现了黄埔人民共同抵制毒品、积极参与禁毒的坚定决心。</div>
            <img src="@/assets/news/competition.png">
            <div class="tt1">禁毒+知识竞赛</div>
            <div class="text1">通过知识竞赛，普及禁毒历史、禁毒形势、毒品知识、禁毒政策法律、毒品预防教育、拒毒技巧等基础知识，提高广大青少年的禁毒意识，增强青少年参与禁毒斗争的主动性和积极性</div>
        </div>
    </div>
</template>

<script>
    import header from '@/components/header';
    export default {
        name: "people",
        components: {
            "c-header": header
        },
        mounted(){
        },
        computed:{
            mediaUrl(){
                return this.$store.state.mediaURL;
            }
        },
        methods:{
        },
        data(){
            return {
            }
        }
    }
</script>

<style scoped lang="less">
    .news{
        background: #F9ECCD;
    }

    .main{
        width: 1400px;
        padding: 60px;
        margin: 0 auto;
        background: rgba(255,255,255,0.6);
        font-size: 25px;
        color: #08001F;
        display: flex;
        flex-direction: column;
        align-items: center;

        .tt{
            font-size: 48px;
            color: rgba(8,0,31,1);
            margin-top: 130px;
        }

        .tt1{
            margin-top: 40px;
        }

        .text1{
            width: 1000px;
            text-align: center;
            margin-top: 60px;
        }
        
        img{
            width: 900px;
            margin-top: 100px;
        }

        .color1{
            color: #413F45;
        }
    }
</style>
