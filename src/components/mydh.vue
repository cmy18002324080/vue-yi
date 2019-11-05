<template>
  <div>
    <div class="nav">
      <div class="container nav-back">
        <li v-for="(navList,index) in navLists" :key="index"
            :style="navList.isCheck ? 'background: rgba(35,60,120,1)' :'' "
            v-on:click="change(navList.id)"
            v-on:mouseover="showToggle(index)"
            v-on:mouseout="handleHide"
            class="nav-li"
        >
          <router-link :to="{path:navList.path}">
            <a class="sidebar-link" href="navList.eTitle">
              {{navList.title}}</a>
          </router-link>
          <ul class="sub"
              v-show="index===isShow">
            <li v-for="(item,idx) in navList.child"
                :key="idx"
            >
              <a class="section-link"
                 :href="item.esubTitle"
                 v-on:click="handleHide"
              >{{item.subTitle}}</a>
            </li>
          </ul>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
    import '../common/css/mydh.css'
    export default {
        name: "mydh",
        data: function () {
            return {
                navLists: [
                    {
                        'title': '网站首页',
                        'eTitle': '/index',
                        isCheck: true,
                        id: 1,
                        pid: 0,
                        "path": '/index'
                    },
                    {
                        'title': '关于集团',
                        'eTitle': '/company',
                        isCheck: false,
                        id: 2,
                        pid: 0,
                        "path": '/company',
                        'child': [
                            {
                                id: 3,
                                pid: 2,
                                isCheck: false,
                                'subTitle': '企业简介',
                                'esubTitle': '#projectIntroduction'
                            },
                            {
                                id: 4,
                                pid: 2,
                                isCheck: false,
                                'subTitle': '发展历程',
                                'esubTitle': '#sampleInformation'
                            }, {
                                id: 5,
                                pid: 2,
                                isCheck: false,
                                'subTitle': '展望未来',
                                'esubTitle': '#sampleInformation'
                            }, {
                                id: 6,
                                pid: 2,
                                isCheck: false,
                                'subTitle': '组织架构',
                                'esubTitle': '#sampleInformation'
                            }
                        ]
                    },
                    {
                        'title': '新闻中心',
                        'eTitle': '/news',
                        isCheck: false,
                        pid: 0,
                        id: 3,
                        'child': [
                            {
                                pid: 7,
                                id: 19,
                                isCheck: false,
                                'subTitle': '交通要闻',
                                'esubTitle': '#projectIntroduction'
                            },
                            {
                                pid: 7,
                                id: 20,
                                isCheck: false,
                                'subTitle': '基层动态',
                                'esubTitle': '#sampleInformation'
                            }
                        ]
                    },
                    {
                        'title': '经营领域',
                        'eTitle': '#projectMessage',
                        isCheck: false,
                        pid: 0,
                        id: 4,
                        'child': [
                            {
                                pid: 8,
                                id: 9,
                                'subTitle': '沥青产业',
                                'esubTitle': '#projectIntroduction'
                            },
                            {
                                pid: 8,
                                id: 10,
                                'subTitle': '油料产业',
                                'esubTitle': '#sampleInformation'
                            }, {
                                pid: 8,
                                id: 11,
                                'subTitle': '多元产业',
                                'esubTitle': '#sampleInformation'
                            }
                        ]
                    },
                    {
                        'title': '党建群团',
                        'eTitle': '#projectMessage',
                        isCheck: false,
                        pid: 0,
                        id: 5,
                        'child': [
                            {
                                pid: 12,
                                id: 13,
                                'subTitle': '党建风采',
                                'esubTitle': '#projectIntroduction'
                            },
                            {
                                pid: 12,
                                id: 14,
                                'subTitle': '群团动态',
                                'esubTitle': '#sampleInformation'
                            }, {
                                pid: 12,
                                id: 15,
                                'subTitle': '十九大主题征文',
                                'esubTitle': '#sampleInformation'
                            }
                        ]
                    },
                    {
                        'title': '企业文化',
                        'eTitle': '#projectMessage',
                        isCheck: false,
                        pid: 0,
                        id: 6,
                        'child': [
                            {
                                'subTitle': '企业使命',
                                'esubTitle': '#projectIntroduction'
                            },
                            {
                                'subTitle': '企业精神',
                                'esubTitle': '#sampleInformation'
                            }, {
                                'subTitle': '交通故事',
                                'esubTitle': '#sampleInformation'
                            }
                        ]
                    },
                    {
                        'title': '资质荣誉',
                        'eTitle': '#projectMessage',
                        isCheck: false,
                        pid: 0,
                        id: 7,
                        'child': [
                            {
                                'subTitle': '交通荣誉',
                                'esubTitle': '#projectIntroduction'
                            }
                        ]
                    },
                    {
                        'title': '联系我们',
                        isCheck: false,
                        pid: 0,
                        id: 8,
                        'eTitle': '#projectMessage',
                    },
                ],
                isShow: 0,
                selected: 'in',
            }
        }, mounted: function () {
            // 避免第一个渲染的显示
            this.isShow = -1
        },
        methods: {
            showToggle: function (index) {
                this.isShow = index
            },
            handleHide: function () {
                this.isShow = !this.isShow
            },
            change(id) {
                for (let i = 0; i < this.navLists.length; i++) {
                    if (this.navLists[i].id === id) {
                        this.navLists[i].isCheck = true;
                    } else {
                        this.navLists[i].isCheck = false;
                    }
                }
            }
        },
    }
</script>

<style xml:lang="scss" scoped>
  @import '../common/css/index.css';
</style>
