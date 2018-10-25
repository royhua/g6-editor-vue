<template>
    <div id="editor">
        <toolbar
            @save="saveData"
            @change-eage="changeEage"/>
        <div :style="{height:'42px'}"/>
        <div class="bottom-container">
            <context-menu />
            <div id="itempannel">
                <ul>
                    <li
                        class="getItem"
                        data-shape="k-means"
                        data-type="node"
                        data-size="170*34">
                        <span class="pannel-type-icon"/>K 均值聚类
                    </li>
                    <li
                        class="getItem"
                        data-shape="random-forest"
                        data-type="node"
                        data-size="170*34">
                        <span class="pannel-type-icon"/>随机森林
                    </li>
                    <li
                        class="getItem"
                        data-shape="PS-SMART"
                        data-type="node"
                        data-size="170*34">
                        <span class="pannel-type-icon"/>PS-SMART 分类
                    </li>
                    <li
                        class="getItem"
                        data-shape="read-data-base"
                        data-type="node"
                        data-size="170*34">
                        <span class="pannel-type-icon"/>读数据表
                    </li>
                    <li
                        class="getItem"
                        data-shape="Bayes"
                        data-type="node"
                        data-size="170*34">
                        <span class="pannel-type-icon"/>朴素贝叶斯
                    </li>
                    <li
                        class="getItem"
                        data-shape="factory-card"
                        data-type="node"
                        data-size="100*100">
                        <span class="pannel-type-icon"/>工厂图标
                    </li>
                </ul>
            </div>
            <div id="detailpannel">
                <div
                    id="node_detailpannel"
                    data-status="node-selected"
                    class="pannel">
                    <div class="pannel-title">模型详情</div>
                    <div class="block-container">
                        <div v-if="selectedModel && selectedModel.type === 'node'" >
                            <div v-if="selectedModel.shape === 'factory-card'">
                                <el-form
                                    label-width="80px"
                                    label-position="left">
                                    <el-form-item
                                        label="名称："
                                        prop="label">
                                        <el-input v-model="inputingLabel"/>
                                    </el-form-item>
                                    <el-form-item
                                        label="字体颜色："
                                        prop="color">
                                        <el-color-picker
                                            v-model="color"
                                            size="mini"/>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div v-if="selectedModel.shape === 'k-means' || selectedModel.shape === 'random-forest'">
                                <el-form label-width="60px">
                                    <el-form-item label="名称：">
                                        <el-input v-model="inputingLabel"/>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="node_detailpannel"
                    data-status="group-selected"
                    class="pannel">
                    <div class="pannel-title">群组详情</div>
                    <div class="block-container">
                        <el-input v-model="inputingLabel"/>
                    </div>
                </div>
                <div
                    id="canvas_detailpannel"
                    data-status="canvas-selected"
                    class="pannel">
                    <div class="pannel-title">画布</div>
                    <div class="block-container">
                        <el-checkbox @change="toggleGrid">网格对齐</el-checkbox>
                    </div>
                </div>
            </div>
            <navigator
                :cur-zoom="curZoom"
                :min-zoom="minZoom"
                :max-zoom="maxZoom"
                @change-zoom="changeZoom" />
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
import './register-items.js';

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
            temp: 'base-flow-editor',
            tempInputingLabel: '',
            tempColor: ''
        };
    },
    computed: {
        inputingLabel: {
            get() {
                return this.tempInputingLabel !== null ? this.tempInputingLabel : this.selectedModel.label;
            },
            set(value) {
                this.updateGraph('label', value);
                this.tempInputingLabel = null;
            }
        },
        color: {
            get() {
                return this.tempColor !== null ? this.tempColor : this.selectedModel.color;
            },
            set(value) {
                this.updateGraph('color', value);
                this.tempColor = null;
            }
        }
    },
    mounted() {
        const page = this.page;

        page.changeAddEdgeModel({
            shape: 'line'
        });

        // 输入锚点不可以连出边
        page.on('hoveranchor:beforeaddedge', ev => {
            if (ev.anchor.type === 'input') {
                ev.cancel = true;
            }
        });
        page.on('dragedge:beforeshowanchor', ev => {
        // 只允许目标锚点是输入，源锚点是输出，才能连接
            if (!(ev.targetAnchor.type === 'input' && ev.sourceAnchor.type === 'output')) {
                ev.cancel = true;
            }
            // 如果拖动的是目标方向，则取消显示目标节点中已被连过的锚点
            if (ev.dragEndPointType === 'target' && page.anchorHasBeenLinked(ev.target, ev.targetAnchor)) {
                ev.cancel = true;
            }
            // 如果拖动的是源方向，则取消显示源节点中已被连过的锚点
            if (ev.dragEndPointType === 'source' && page.anchorHasBeenLinked(ev.source, ev.sourceAnchor)) {
                ev.cancel = true;
            }
        });
    },
    methods: {
        saveData() {
            console.log(JSON.stringify(this.page.save()));
        },
        changeEage(type) {
            this.page.changeAddEdgeModel({
                shape: type
            });
        }
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
  text-align: left;
}
#itempannel ul{
  padding: 0px;
  padding-left: 16px;
}
#itempannel li{
  color: rgba(0,0,0,0.65);
  border-radius: 4px;
  width: 160px;
  height: 28px;
  line-height: 26px;
  padding-left: 8px;
  border: 1px solid rgba(0,0,0,0);
  list-style-type: none;
}
#itempannel .pannel-type-icon{
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  background: url(https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg)
}
#itempannel li:hover{
  background: white;
  border: 1px solid #CED4D9;
  cursor: move;
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
  text-align: left;
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
.color-picker{
  vertical-align: middle;
  margin-left: 16px;
}
.p{
  margin-bottom: 12px;
}
/* .model-card{
  padding: 8px 14px;
  padding-right: 8px;
  font-size: 12px;
}
.left-bar{
  position: absolute;
  width: 4px;
  height: 100%;
  top: 0px;
  left: 0px;
  border-radius: 4px 0px 0px 4px;
}
.type-icon {
  width: 20px;
  height: 16px;
  margin-top: -8px;
  display: inline-block;
  position: absolute;
  top: 50%;
}
.state-icon {
  width: 16px;
  height: 16px;
  margin-top: -8px;
  margin-left: 4px;
  position: absolute;
  top: 50%;
  right: 8px;
  display: inline-block;
}
.content-list {
  display: inline-block;
  min-width: 128px;
  margin: 0;
  margin-left: 20px;
  padding-left: 12px;
  list-style: none;
  color: rgba(0,0,0,0.45);
}
.model-card .title{
  color: #000000;
} */
</style>
