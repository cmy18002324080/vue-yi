<template>
  <div>
    <div class="picture">
      <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="4000">
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="../common/img/banner-img3-1.jpg" alt="First slide">
            <div class="item-one">
              <div class="one-img1 one-animation ">
                <img src="../common/img/car-banner.png" alt="">
              </div>
              <div class="one-img2 one-second">
                <img src="../common/img/picture-imgspan1.png" alt="">
              </div>
            </div>
          </div>
          <div class="item">
            <img src="../common/img/banner-img-4-4.jpg" alt="Second slide">
            <div class="item-one">
              <div class="two-one two-one-animation">
                <img src="../common/img/servce-1.png" alt="">
              </div>
              <div class="two-second two-second-animation">
                <img src="../common/img/service-2.png" alt="">
              </div>
              <div class="two-third two-third-animation">
                <img src="../common/img/servce-3.png" alt="">
              </div>
            </div>
          </div>
          <div class="item">
            <img src="../common/img/banner-img-2.jpg" alt="Third slide">
            <div class="item-one">
              <div class="three-one three-one-animation"><img src="../common/img/1.png" alt=""></div>
              <div class="three-second three-second-animation"><img src="../common/img/company-1-2.png" alt=""></div>
              <div class="three-third three-third-animation">
                <div class="orcle-one">
                  <img src="../common/img/banner-orcle-1.jpg" alt="">
                </div>
                <div class="orcle-one"><img src="../common/img/banner-orcle-2.jpg" alt=""></div>
                <div class="orcle-one"><img src="../common/img/banner-orcle-3.jpg" alt=""></div>
                <div class="orcle-one"><img src="../common/img/banner-orcle-4.jpg" alt=""></div>
                <div class="orcle-one"><img src="../common/img/banner-orcle-5.jpg" alt=""></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 轮播（Carousel）导航 -->
        <div class="lunbo">
          <a class="left " href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon icon iconfont icon-zuojiantou-tianchong" aria-hidden="true"></span>
          </a>
        </div>
        <div class="lunbo right">
          <a class="right" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon icon iconfont icon-youjiantou-tianchong" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import '../common/css/lunbo.css';
    export default {
        name: "lunbo"
    }
</script>

<style scoped type="text/css">

</style>
