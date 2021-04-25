<template>
  <div class="home viewer">
    <vc-viewer @ready="onViewerReady">
      <vc-entity
        ref="entity"
        :billboard="billboard"
        :position="{ lng: 108, lat: 32 }"
        :point="point"
        :label="label"
        @click="onEntityEvt"
        @mouseover="onEntityEvt"
        @mouseout="onEntityEvt"
      >
        <vc-graphics-rectangle
          :coordinates="[130, 20, 80, 25]"
          material="green"
        ></vc-graphics-rectangle>
      </vc-entity>
      <vc-layer-imagery>
        <vc-provider-imagery-osm></vc-provider-imagery-osm>
      </vc-layer-imagery>
      <vc-navigation></vc-navigation>
    </vc-viewer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      point: {
        pixelSize: 28,
        color: 'red'
      },
      label: {
        text: 'Hello VueCesium',
        pixelOffset: [0, 80],
        fillColor: 'red'
      },
      billboard: {
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        scale: 0.5
      }
    }
  },
  methods: {
    onViewerReady () {
      console.log('onViewerReady')
    },
    onEntityEvt (e) {
      console.log(e)
      if (e.type === 'onmouseover') {
        this.billboard = {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.6
        }
      } else if (e.type === 'onmouseout') {
        this.billboard = {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.5
        }
      }
    }
  }
}
</script>
<style>
.viewer {
  height: 100vh;
}
</style>
