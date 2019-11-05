<template>
  <div>
    <!-----------头部--------------->
    <div class="header">
      <div class="head-back">
        <div class="container">
          <div class="head-left">
            <div class="head-logo">
              <img src="../common/img/index-icon.png" alt="">
            </div>
            <div class="head-name">
              <img src="../common/img/name.png" alt="">
            </div>
            <div class="menu" @click="open">
              <i class="icon iconfont menu-icon">&#xe61f;</i>
            </div>
          </div>
          <div class="head-right">
            <div class="head-lianxi">
              <img src="../common/img/dianhua1.png" alt="">
              <img src="../common/img/dianhua.png" alt="">
              <img src="../common/img/dianhua2.png" alt="">
              <img src="../common/img/weixin.png" alt="">
            </div>
            <div class="head-serch" @click="serch">
              <i class="iconfont serch">&#xe651;</i>
              <input class="input-span" type="text" placeholder="请输入搜索关键字">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-small">
      <div class="nav-titile">
        <div class="nav-close" @click="close">
          <span class="iconfont icon icon-del2"></span>
        </div>
      </div>
      <div class="nav-details">
        <li class="nav-small-li" v-for="(Item,Itemindex) in Items" :key="Itemindex">
          <div class="small-li-span">
            <span>{{Item.title}}</span>
          </div>
          <div class="small-li-icon" @click="openNav()">
            <span class="icon iconfont icon-jiantouyou"></span>
          </div>
          <div class="nav-sub" v-show="Itemindex===isopen">
            <div class="nav-sub-title">
              <span class="icon iconfont icon-zuojiantou" @click="closeNav()"></span>
            </div>
            <div class="nav-sub-details">
              <div class="nav-sub-li" v-for="(item,idx) in Item.child"
                   :key="idx">{{item.subTitle}}
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
    import "../common/css/defalut.css";

    export default {
        name: 'myHead',
        data: function () {
            return {
                isopen:0,
                Items: [
                    {title: '首页',},
                    {
                        title: '关于集团',
                        isopen:false,
                        "child": [
                            {subTitle: "公司简介",},
                            {subTitle: "组织架构"},
                            {subTitle: "发展历程"},
                            {subTitle: "展望未来"},
                        ]
                    },
                    {
                        title: '新闻中心',
                        isopen:false,
                        "child": [
                            {subTitle: "新闻要闻",},
                            {subTitle: "基层动态"},
                        ]
                    },
                    {
                        title: '经营领域',
                        isopen:false,
                        "child": [
                            {subTitle: "沥青产业",},
                            {subTitle: "油料产业"},
                            {subTitle: "多元产业"},
                        ]
                    },
                    {
                        title: '党建群团',
                        isopen:false,
                        "child": [
                            {subTitle: "党建动态",},
                            {subTitle: "群团动态"},
                            {subTitle: "十九大主题征文"},
                        ]
                    },
                    {
                        title: '企业文化',
                        isopen:false,
                        "child": [
                            {subTitle: "企业文化",},
                            {subTitle: "企业精神"},
                            {subTitle: "交通故事"},
                        ]
                    },
                    {
                        title: '资质荣誉',
                        isopen:false,
                        "child": [
                            {subTitle: "交通荣誉",},
                        ]
                    },
                    {title:'联系我们'},

                ]
            }
        },
        mounted:function(){
            this.isopen = -1
        },
        methods: {//事件执行方法
            serch() {//搜索框搜索
                $('.input-span').slideToggle();
            }, open() {
                $('.nav-small').fadeIn();
            }, close() {
                console.log(12);
                $('.nav-small').fadeToggle();
                console.log(55);
            }, openNav(Itemindex) {
                $('.nav-sub').animate({
                    "left":'0%'
                },500)
                this.isopen=Itemindex
            }, closeNav() {
                $('.nav-sub').animate({
                    "left":'200%'
                },500)
                this.isopen=!this.isopen
            }
        }
    }
</script>

<style xml:lang="scss" scoped>
  @import '../common/css/myHead.css';
</style>
