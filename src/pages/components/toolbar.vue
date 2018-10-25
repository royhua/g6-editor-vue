<template>
    <div id="toolbar">
        <i
            data-command="undo"
            class="command iconfont icon-undo"
            title="撤销"/>
        <i
            data-command="redo"
            class="command iconfont icon-redo"
            title="重做"/>
        <span class="separator"/>
        <i
            data-command="copy"
            class="command iconfont icon-copy-o"
            title="复制"/>
        <i
            data-command="paste"
            class="command iconfont icon-paster-o"
            title="粘贴"/>
        <i
            data-command="delete"
            class="command iconfont icon-delete-o"
            title="删除"/>
        <span class="separator"/>
        <i
            data-command="zoomIn"
            class="command iconfont icon-zoom-in-o"
            title="放大"/>
        <i
            data-command="zoomOut"
            class="command iconfont icon-zoom-out-o"
            title="缩小"/>
        <i
            data-command="autoZoom"
            class="command iconfont icon-fit"
            title="适应画布"/>
        <i
            data-command="resetZoom"
            class="command iconfont icon-actual-size-o"
            title="实际尺寸"/>
        <span class="separator"/>
        <i
            data-command="toBack"
            class="command iconfont icon-to-back"
            title="层级后置"/>
        <i
            data-command="toFront"
            class="command iconfont icon-to-front"
            title="层级前置"/>
        <span class="separator"/>
        <i
            data-command="multiSelect"
            class="command iconfont icon-select"
            title="多选"/>
        <i
            data-command="addGroup"
            class="command iconfont icon-group"
            title="成组"/>
        <i
            data-command="unGroup"
            class="command iconfont icon-ungroup"
            title="解组"/>
        <span class="separator"/>
        <el-radio-group
            v-model="lineType"
            size="mini">
            <el-radio-button label="line">虚线线</el-radio-button>
            <el-radio-button label="flow-smooth">圆线</el-radio-button>
            <el-radio-button label="flow-polyline-round">折线</el-radio-button>
        </el-radio-group>
        <span class="separator"/>
        <el-button @click="$emit('save')">保存</el-button>
        <span class="separator"/>
        <a href="https://www.yuque.com/antv/g6-editor"> G6-Editor 文档</a>
    </div>
</template>

<script>

export default {
    data() {
        return {
            name: 'toolbar',
            lineType: 'line'
        };
    },
    watch: {
        lineType(value) {
            this.$emit('change-eage', value);
        }
    }
};
</script>
<style lang="scss">
#toolbar{
  padding: 8px 0px;
  width: 100%;
  border: 1px solid #E9E9E9;
  height: 42px;
  z-index: 3;
  box-shadow: 0px 8px 12px 0px rgba(0, 52, 107, 0.04);
  position: absolute;
  text-align: left;
}
#toolbar *::before{
  font-size: 16px !important;
}
#toolbar .disable{
  color: rgba(0,0,0,0.25);
}
#toolbar .icon-select.disable{
  background: #EEEEEE;
}
#toolbar .separator{
  margin: 4px;
  border-left: 1px solid #E9E9E9;
}
#toolbar .command{
  width: 27px;
  height: 27px;
  margin: 0px 6px;
  border-radius: 2px;
  padding-left: 4px;
  display: inline-block;
  border: 1px solid rgba(2,2,2,0);
}
#toolbar .command:nth-of-type(1){
  margin-left: 24px;
}
#toolbar .command:hover{
  cursor: pointer;
  border: 1px solid #E9E9E9;
}
#toolbar .disable:hover{
  cursor: default;
  border: 1px solid rgba(2,2,2,0);
}
#toolbar {
    .el-radio-group{
        font-size: 0 !important;
    }
}
</style>
