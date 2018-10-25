<template>
    <displayer :flow-data="data"/>
</template>

<script>
import Displayer from './components/displayer';
export default {
    components: {Displayer},
    data() {
        return {
            data: {'nodes': [{'shape': 'factory-card', 'type': 'node', 'size': '100*100', 'x': 317, 'y': 233.5, 'id': '2efd998c', 'index': 1, 'label': '一工厂', 'color': '#2E6CE0'}, {'shape': 'factory-card', 'type': 'node', 'size': '100*100', 'x': 513, 'y': 235.5, 'id': 'f6833a1a', 'index': 2, 'label': '二工厂'}, {'shape': 'factory-card', 'type': 'node', 'size': '100*100', 'x': 713.5, 'y': 66, 'id': '3fb77272', 'index': 5, 'label': '三工厂', 'color': '#CC2B2B'}, {'shape': 'factory-card', 'type': 'node', 'size': '100*100', 'x': 1041, 'y': 225, 'id': 'faba0da7', 'index': 6, 'label': '四工厂'}], 'edges': [{'shape': 'line', 'source': '2efd998c', 'sourceAnchor': 0, 'target': 'f6833a1a', 'targetAnchor': 1, 'id': '95cdcc2f', 'index': 0}, {'shape': 'flow-smooth', 'source': 'f6833a1a', 'sourceAnchor': 0, 'target': '3fb77272', 'targetAnchor': 1, 'id': '4fb36ccf', 'index': 3}, {'shape': 'flow-polyline-round', 'source': '3fb77272', 'sourceAnchor': 0, 'target': 'faba0da7', 'targetAnchor': 1, 'id': 'ef485a02', 'index': 4}]}
        };
    }
};
</script>
<style lang="scss">

</style>
