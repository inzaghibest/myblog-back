<template>
    <div id="text-show">
        <div v-html="TextContent">
            <img :src="imgsrc">
        </div>
    </div>
</template>

<script>
import marked from 'marked'
export default {
    name: 'TextShow',
    data() {
        return {
            TextContent: marked('## hello world人们在干什么呢？![1b19bcc6c5a643d5bec593bc473beed0.png](M:\\temp-rainy\\44d9bc63-8143-4e1b-8e03-8d094c7d8101.png)'),
            imgsrc: 'M:\\temp-rainy\\44d9bc63-8143-4e1b-8e03-8d094c7d8101.png'
        }
    },
    created() {
        this.$http({
            url: this.$http.adornUrl('/articles/detail'),
            method: 'get'
        }).then(res=> {
            console.log(res)
            this.TextContent = marked(res.data.data.content)
            // this.imgsrc = res.data.data
        })
    }
}
</script>

<style scoped>

</style>