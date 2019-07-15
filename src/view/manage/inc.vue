<template>
    <div>
        <div>
            <header id="nav-header">
                <div class="header-box">
                    <Row>
                        <Col :md="24" :sm="20" :xs="20">
                            <a href="/manage/index" class="nav-header-logo" :title="$name">
                                <span>
                                    <img src="../../assets/images/logo.png"/>
                                </span>
                            </a>
                        </Col>
                        <Col :md="0" :sm="4" :xs="4">
                            <div class="tr">
                                <Icon @click="toggleMobileMenu" type="ios-menu" size="34" style="margin-top:8px" color="#000"/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
            <div id="main">
                <div id="menu">
                    <Row>
                        <Col :lg="24" :md="24" :sm="0" :xs="0">
                            <Menu mode="horizontal" @on-select="goPage" :active-name="currentRouterName">
                                <template v-for="(item,index) in menus">
                                    <MenuItem v-if="!item.children" :name="item.name">
                                        <Icon :type="item.meta.icon"/>
                                        {{item.meta.title}}
                                    </MenuItem>
                                    <Submenu :name="item.name" v-else>
                                        <template slot="title">
                                            <Icon :type="item.meta.icon"/>
                                            {{item.meta.title}}
                                        </template>
                                        <template v-for="(citem,cindex) in item.children">
                                            <MenuItem :name="citem.name">{{citem.meta.title}}</MenuItem>
                                        </template>
                                    </Submenu>
                                </template>
                            </Menu>
                        </Col>
                        <Col :lg="0" :md="0" :sm="24" :xs="24">
                            <Drawer :title="$name" placement="left" :closable="false" v-model="showMobileMenu">
                                <Menu @on-select="goPage" :active-name="currentRouterName">
                                    <template v-for="(item,index) in menus">
                                        <MenuItem v-if="!item.children" :name="item.name">
                                            <Icon :type="item.meta.icon"/>
                                            {{item.meta.title}}
                                        </MenuItem>
                                        <Submenu :name="item.name" v-else>
                                            <template slot="title">
                                                <Icon :type="item.meta.icon"/>
                                                {{item.meta.title}}
                                            </template>
                                            <template v-for="(citem,cindex) in item.children">
                                                <MenuItem :name="citem.name">{{citem.meta.title}}</MenuItem>
                                            </template>
                                        </Submenu>
                                    </template>
                                </Menu>
                            </Drawer>
                        </Col>
                    </Row>
                </div>
                <div id="content">
                    <Alert type="info" show-icon>
                        演示提示
                        <p slot="desc">
                            <span>此系统内容均为模板演示，无实际操作效果</span>
                        </p>
                    </Alert>
                    <router-view/>
                </div>
                <div id="footer">
                    <p><a target="_blank" href="https://github.com/Licoy/visamt">Visamt ©️ 2019</a></p>
                    <p>技术讨论群：<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=6986b33edd8419ae1132e23d98d5f421a06b22d218794b89038f20cfa62a39ce">30261540</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import commonMixins from '@/mixins/common.js'
import {manageRouter} from '@/router/routers.js'
export default {
    mixins:[commonMixins],
    data(){
        return {
            menus:[],
            currentRouterName:'',
            showMobileMenu:false
        }
    },
    created(){
        this.menus = manageRouter[0].children
        this.currentRouterName = this.$route.name
    },
    mounted(){
        window.onresize = ()=>{
            if(window.innerWidth>=768){
                this.showMobileMenu = false
            }
        }
    },
    watch:{
        '$route' (newRoute) {
            this.currentRouterName = newRoute.name
        }
    },
    methods:{
        goPage(name){
            this.$router.push({name:name})
            this.showMobileMenu = false
        },
        toggleMobileMenu(){
            this.showMobileMenu = !this.showMobileMenu
        }
    }
}
</script>
<style lang="less">
#nav-header{
    width: 100%;
    height: 50px;
    padding: 0 40px;
    box-sizing: border-box;
    z-index: 1000;
    position: fixed;
    top: 0;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    font-size: 14px;
    .header-box{
        max-width: 1400px;
        margin:0 auto;
    }
    .nav-header-logo{
        img{
            height: 46px;
            vertical-align: middle;
        }
    }
}
#main{
   max-width: 1400px;
   margin:60px auto 20px auto;
}
#content{
    padding:20px;
}
#footer{
    padding:10px;
}
</style>

