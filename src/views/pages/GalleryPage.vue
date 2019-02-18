<template>
  <section class="page-module">
    <hero-image title="Galerie"></hero-image>
    <div class="module-content">
      <el-row class="mb2">
        <el-col :span="20" :offset="2" class="mt2 mb2">
            <h1 class="mb4">Galerie video</h1>
            <el-row type="flex" class="row-bg mb1" justify="center">
                <youtube :video-id="heroVideoId" />
            </el-row>
            <el-row type="flex" class="row-bg mb2" justify="center">
                <el-button type="danger" class="w-25" @click="window.location = 'https://www.youtube.com/channel/UCIvhY1CPTr7C4vhEcGvOImw?sub_confirmation=1'">Subscribe</el-button>
            </el-row>
            <el-row :gutter="20" type="flex" class="row-bg mb1" justify="center" v-for="(v, index) in videos" :key="v[index]">
              <el-col :gutter="2" :sm="24" :md="12" :lg="12" :xl="8">
                <youtube :video-id="v" />                
              </el-col>
              <el-col :gutter="2" :sm="24" :md="12" :lg="12" :xl="8">
                <youtube :video-id="v" />
              </el-col>
            </el-row>
        </el-col>
        <el-col :span="20" :offset="2" class="mt4 mb2">
            <h1 class="mb4">Galerie foto</h1>
            <el-row type="flex" class="row-bg mb1" justify="center">
              <Vuelightbox id="gallery-lightbox"
                :images="images"
                :image_class=" 'img-responsive img-rounded' "
                :options="options">
              </Vuelightbox>  
            </el-row>
        </el-col>
      </el-row>
    </div>
    <balkanfun-footer></balkanfun-footer>
  </section>
</template>

<script>
import RoutesMapConfig from "@router/routes";
import Divider from "../partials/Divider"
import HeroImage from "../partials/HeroImage"
import BalkanfunFooter from "../partials/BalkanfunFooter";
import Vuelightbox from 'vue-simple-lightbox'

import gallery from "../../data/gallery";

export default {
  name: "GalleryPage",
  props: {},
  data() {
    return {
      heroVideoId: "VAkJamLbPfY",
      videos: gallery.videos,
      images: gallery.images,
      options: {
        closeText : 'X'
      }
    };
  },
  components: {
    Divider,
    HeroImage,
    BalkanfunFooter,
    Vuelightbox
  }
};
</script>

<style lang="scss">
iframe {
    max-width: 100%;
}
</style>
