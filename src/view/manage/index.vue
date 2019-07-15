<template>
    <div>
        <div class="header-sum-card">
            <Alert type="success" show-icon>
                欢迎您进入管理后台
                <p slot="desc">
                    <span>当前时间为：{{currentDataString}}</span>
                </p>
            </Alert>
            <h2 class="mt20">全局数据统计</h2>
            <Row :gutter="10" class="mt10">
                <Col class="mb10" :lg="6" :md="6" :sm="8" :xs="12">
                    <Card title="今日访问量" class="tc">
                        <span class="num">100,000</span>
                    </Card>
                </Col>
                <Col class="mb10" :lg="6" :md="6" :sm="8" :xs="12">
                    <Card title="今日IP数" class="tc">
                        <span class="num">56,000</span>
                    </Card>
                </Col>
                <Col class="mb10" :lg="6" :md="6" :sm="8" :xs="12">
                    <Card title="最高活跃省份" class="tc">
                        <span class="num">广东</span>
                    </Card>
                </Col>
                <Col class="mb10" :lg="6" :md="6" :sm="8" :xs="12">
                    <Card title="移动占比" class="tc">
                        <span class="num">89.77%</span>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
import commonMixins from '@/mixins/common.js'
export default {
    mixins:[commonMixins],
    data(){
        return {
            currentDataString:'Loading...',
        }
    },
    created(){
        setInterval(()=>{
            this.currentDataString = this.dateFormat(new Date())
        },1000)
    }
}
</script>
<style lang="less" scoped>
.header-sum-card{
    span.num{
        font-size: 30px;
    }
}
</style>

