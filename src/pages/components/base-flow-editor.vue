<template>
    <div id="editor">
        <toolbar />
        <div :style="{height:'42px'}"/>
        <div class="bottom-container">
            <context-menu />
            <div id="itempannel">
                <img
                    draggable="false"
                    src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
                    data-type="node"
                    data-shape="flow-circle"
                    data-size="72*72"
                    data-color="#FA8C16"
                    data-label="起止节点"
                    class="getItem" >
                <img
                    draggable="false"
                    src="https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg"
                    data-type="node"
                    data-shape="flow-rect"
                    data-size="80*48"
                    data-color="#1890FF"
                    data-label="常规节点"
                    class="getItem" >
                <img
                    draggable="false"
                    src="https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg"
                    data-type="node"
                    data-shape="flow-rhombus"
                    data-size="80*72"
                    data-color="#13C2C2"
                    data-label="分叉节点"
                    class="getItem" >
                <img
                    draggable="false"
                    src="https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg"
                    data-type="node"
                    data-shape="flow-capsule"
                    data-size="80*48"
                    data-color="#722ED1"
                    data-label="模型节点"
                    class="getItem" >
            </div>
            <div id="detailpannel">
                <div
                    id="node_detailpannel"
                    data-status="node-selected"
                    class="pannel">
                    <div class="pannel-title">节点</div>
                    <div class="block-container">
                        test
                    </div>
                </div>
                <div
                    id="edge_detailpannel"
                    data-status="edge-selected"
                    class="pannel">
                    <div class="pannel-title">边</div>
                    <div class="block-container">
                        test
                    </div>
                </div>
                <div
                    id="group_detailpannel"
                    data-status="group-selected"
                    class="pannel">
                    <div class="pannel-title">组</div>
                    <div class="block-container">
                        test
                    </div>
                </div>
                <div
                    id="canvas_detailpannel"
                    data-status="canvas-selected"
                    class="pannel">
                    <div class="pannel-title">画布</div>
                    <div class="block-container">
                        test
                    </div>
                </div>
                <div
                    id="multi_detailpannel"
                    data-status="multi-selected"
                    class="pannel">
                    <div class="pannel-title">多选</div>
                    <div class="block-container">
                        test
                    </div>
                </div>
            </div>
            <navigator
                :cur-zoom="curZoom"
                :min-zoom="minZoom"
                :max-zoom="maxZoom"
                @change-zoom = "changeZoom" />
            <page />
        </div>
    </div>
</template>

<script>
import Navigator from './navigator';
import Toolbar from './toolbar';
import ContextMenu from './context-menu';
import Page from './page';
import Editor from './editor';

export default {
    components: {
        Navigator,
        Toolbar,
        ContextMenu,
        Page
    },
    extends: Editor,
    data() {
        return {
            temp: 'base-flow-editor'
        };
    },
    mounted() {

        const page = this.page;
        page.changeAddEdgeModel({
            shape: 'flow-polyline'
        });
    }
};
</script>
<style lang="scss">
#itempannel{
  height: 100%;
  position: absolute;
  left: 0px;
  z-index: 2;
  background: #F7F9FB;
  width: 200px;
  padding-top: 8px;
  border-right: 1px solid #E6E9ED;
}
#itempannel img{
  width: 92px;
  height: 96px;
  padding: 4px;
  margin-left: 4px;
  border-radius: 2px;
  border: 1px solid rgba(0,0,0,0);
}
#itempannel img:hover{
  cursor: move;
  border: 1px solid #ccc;
}
#detailpannel{
  height: 100%;
  position: absolute;
  right: 0px;
  z-index: 2;
  background: #F7F9FB;
  width: 200px;
  border-left: 1px solid #E6E9ED;
}
#detailpannel .pannel{
  display: none
}
#detailpannel .block-containe{
  padding-top: 20px;
}
#detailpannel .input{
  margin-left: 16px;
}
#detailpannel .name-input{
  width: 120px;
}
#detailpannel .width-input{
  width: 52px;
}
#detailpannel .height-input{
  width: 52px;
}
#detailpannel .block-container{
  padding: 16px 8px;
}
.bottom-container{
  position: relative;
}
.pannel-title{
  height: 32px;
  border-top: 1px solid #DCE3E8;
  border-bottom: 1px solid #DCE3E8;
  background: #EBEEF2;
  color: #000;
  line-height: 28px;
  padding-left: 12px;
}
.zoom-dropdown-btn {
  color: rgba(0,0,0,0.45);
  margin-left: 4px;
  line-height: 24px;
  font-weight: 100;
  text-decoration : none;
}
.color-picker{
  vertical-align: middle;
  margin-left: 16px;
}
.p{
  margin-bottom: 12px;
}
</style>
