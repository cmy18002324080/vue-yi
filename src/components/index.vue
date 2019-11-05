<template>
  <div>
    <myHead></myHead>
    <!-----------导航条--------------->
    <mydh></mydh>
    <!-----------轮播图-------------------->
    <lunbo></lunbo>
    <!-------------经营领域------------------------>
    <div class="scope">
      <div class="container scope-back">
        <div class="scope-title">
          <div class="scope-img"><img src="../common/img/title-banner.png" alt=""></div>
          <div class="scope-span"><img src="../common/img/field-title.png" alt=""></div>
        </div>
        <div class="scope-details">
          <li class="scope-li">
            <div class="scope-li-img">
              <img src="../common/img/field-img1.png" alt="">
            </div>
            <div class="scope-li-span">
              <div class="scope-icon">
                <img src="../common/img/field-img1-1.png" alt="">
              </div>
              <div class="scope-deta">
                <img src="../common/img/field-img1-2.png" alt="">
              </div>
            </div>
          </li>
          <li class="scope-li">
            <div class="scope-li-img">
              <img src="../common/img/field-img2.png" alt="">
            </div>
            <div class="scope-li-span">
              <div class="scope-li-img">
                <img src="../common/img/field-img2.png" alt="">
              </div>
              <div class="scope-li-span">
                <div class="scope-icon">
                  <img src="../common/img/field-img2-1.png" alt="">
                </div>
                <div class="scope-deta">
                  <img src="../common/img/field-img2-2.png" alt="">
                </div>
              </div>
            </div>
          </li>
          <li class="scope-li">
            <div class="scope-li-img">
              <img src="../common/img/field-img3.png" alt="">
            </div>
            <div class="scope-li-span">
              <div class="scope-li-img">
                <img src="../common/img/field-img3.png" alt="">
              </div>
              <div class="scope-li-span">
                <div class="scope-icon">
                  <img src="../common/img/field-img3-1.png" alt="">
                </div>
                <div class="scope-deta">
                  <img src="../common/img/field-img3-2.png" alt="">
                </div>
              </div>
            </div>
          </li>
          <li class="scope-li">
            <div class="scope-li-img">
              <img src="../common/img/field-img1.png" alt="">
            </div>
            <div class="scope-li-span">
              <div class="scope-li-img">
                <img src="../common/img/field-img1.png" alt="">
              </div>
              <div class="scope-li-span">
                <div class="scope-icon">
                  <img src="../common/img/field-img4-1.png" alt="">
                </div>
                <div class="scope-deta">
                  <img src="../common/img/field-img4-2.png" alt="">
                </div>
              </div>
            </div>
          </li>
          <li class="scope-li">
            <div class="scope-li-img">
              <img src="../common/img/field-img5.png" alt="">
            </div>
            <div class="scope-li-span">
              <div class="scope-li-img">
                <img src="../common/img/field-img5.png" alt="">
              </div>
              <div class="scope-li-span">
                <div class="scope-icon">
                  <img src="../common/img/field-img5-1.png" alt="">
                </div>
                <div class="scope-deta">
                  <img src="../common/img/field-img5-2.png" alt="">
                </div>
              </div>
            </div>
          </li>
          <li class="scope-li">
            <div class="scope-li-img">
              <img src="../common/img/field-img6.png" alt="">
            </div>
            <div class="scope-li-span">
              <div class="scope-li-img">
                <img src="../common/img/field-img6.png" alt="">
              </div>
              <div class="scope-li-span">
                <div class="scope-icon">
                  <img src="../common/img/field-img6-1.png" alt="">
                </div>
                <div class="scope-deta">
                  <img src="../common/img/field-img6-2.png" alt="">
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import '../common/css/defalut.css'
    import myHead from "./myHead";
    import mydh from './mydh';
    import lunbo from './lunbo'

    export default {
        name: "index",
        data: function () {
            return {}
        },
        components: {
            myHead,
            mydh,
            lunbo
        }, methods: {}
    }
</script>

<style xml:lang="scss">
  @import "../common/css/index.css";
</style>
