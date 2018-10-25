<template>
    <div id="navigator">
        <div class="pannel-title">导航器</div>
        <div id="minimap"/>
        <div id="zoom-slider">
            <el-slider
                v-model="curZoomValue"
                :min="minZoom"
                :max="maxZoom"
                :step="0.01"
                :format-tooltip="formatTooltip"
            />
        </div>
    </div>
</template>

<script>

export default {
    props: {
        curZoom: {
            type: Number
        },
        minZoom: {
            type: Number
        },
        maxZoom: {
            type: Number
        }
    },
    data() {
        return {
            curZoomValue: this.curZoom
        };
    },
    watch: {
        curZoomValue: _.throttle(function(value) {
            this.$emit('change-zoom', value);
        }, 100)
    },
    methods: {
        formatTooltip(value) {
            return `${(value * 100).toFixed(0)}%`;
        }
    }
};
</script>
<style lang="scss">
#navigator{
  width: 200px;
  height: 182px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 3;
}
#navigator .slider{
  margin: 7px 10px 10px;
  float: left;
  width: 120px;
}
#navigator #minimap{
  width: 200px;
  height: 120px;
}
#zoom-slider{
    padding: 0 20px;
    .el-slider__runway{
        margin-top: 10px;
        margin-bottom: 10px;
    }
}
</style>
