<template>
    <div id="page"/>
</template>

<script>
import './register-items.js';

export default {
    props: {
        flowData: {
            type: Object
        }
    },
    mounted() {
        const page = new G6Editor.Flow({
            graph: {
                container: 'page',
                height: window.innerHeight,
                mode: 'read'
            },
            align: {
                grid: true
            }
            // noEndEdge: false,
            // edgeResizeable: false
        });
        page.read(this.flowData);
    }
};
</script>
<style lang="scss">

</style>
