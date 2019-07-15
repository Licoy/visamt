<template>
    <div>
        <div>
            <div>
               <Row>
                   <Col :lg="8" :md="12" :sm="24" :xs="24">
                        <Input clearable v-model.trim="page.value" placeholder="键入关键字回车搜索">
                            <Select v-model="page.key" slot="prepend" style="min-width: 80px">
                                <Option value="city">城市名称</Option>
                            </Select>
                        </Input>
                   </Col>
                </Row> 
            </div>
            <Table class="mt20" border :columns="orders.columns" :data="orders.data"></Table>
            <div class="tr mt10">
                <Page :total="1" show-total show-sizer />
            </div>
        </div>
    </div>
</template>
<script>
import commonMixins from '@/mixins/common.js'
export default {
    data(){
        return {
            page:{
                key:'city',
                value:'',
                page:1,
                pageSize:10
            },
            orders:{
                columns:[
                    {
                        title: 'ID',
                        key: 'id',
                        minWidth:100
                    },
                    {
                        title: '城市名称',
                        key: 'city',
                        minWidth:100
                    },
                    {
                        title: 'IP数量',
                        key: 'ip',
                        minWidth:100
                    },
                    {
                        title: 'PV数量',
                        key: 'pv',
                        minWidth:100
                    },
                    {
                        title: '创建时间',
                        render:(h,params)=>{
                            return h('span',this.dateFormat(params.row.created))
                        },
                        minWidth:200
                    },
                ],
                data:[{
                    created:new Date(),
                    id:'12929883883',
                    pv:'123,000',
                    ip:'89,000',
                    city:'武汉'
                }]
            }
        }
    },
    mixins:[commonMixins],
    created(){
    },
    methods:{
    }
}
</script>
<style lang="less">
.pay-method-icon{
    font-size: 20px;
    position: relative;
    top: 3px;
}
</style>

