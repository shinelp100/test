import '../../lib/polyfill.js';
const Vue = require("../../lib/vue.js");
const iVew = require("../../lib/iview.js");
const hdfAjax = require('@hb/hb-hdfajax/index.js');
const toast = require('@hb/hb-toast/index.js');
const getUrlParam = require('@hb/hb-geturlparam/index.js');
const tableDataTmp = require("../../module/table-data-tmp.es");

//需要在vue上挂在iview
Vue.use(iVew);
//创建vue实例
new Vue({
    el: '#app',
    components: {'table-data-tmp': tableDataTmp},
    data: {
        title: '',
        nowPage:1,
        pageSize:5000,
        columns0: [
            {
                title: '市',
                key: 'cityname'
            },
            {
                title: '县',
                key: 'countyname'
            },
            {
                title: '镇',
                key: 'townname'
            },
            {
                title: '村/社区',
                key: 'communityhospitalname'
            },
            {
                title: '签约数',
                key: 'signnum'
            },
            {
                title: '0-6岁儿童签约数（人）',
                key: 'children'
            },
            {
                title: '65岁及以上常住居民签',
                key: 'oldman'
            },
            {
                title: '孕产妇签约数（人）',
                key: 'pregnant'
            },
            {
                title: '血管高血压患者家庭医生签约人数（人）',
                key: 'highblood'
            },
            {
                title: '糖尿病患者签约数（人）',
                key: 'tangniaobing'
            },
            {
                title: '肺结核患者签约数（人）',
                key: 'jiehebing'
            },
            {
                title: '严重精神障碍患者签约数（人）',
                key: 'mentaldisease'
            },
            {
                title: '残疾人签约数（人）',
                key: 'disable'
            },
            {
                title: '计划生育特殊家庭自愿签约数（人）',
                key: 'birthcontrol'
            },
            {
                title: '农村建档立卡贫困人口签约数（人）',
                key: 'jiandanglika'
            },
            {
                title: '城乡低保五保人口签约数（人）',
                key: 'dibaowubao'
            },
        ],//签约明细表头数据格式
        columns1: [
            {
                title: '签约时间',
                key: 'signtime'
            },
            {
                title: '户主',
                key: 'huzhurealname'
            },
            {
                title: '居民',
                key: 'userrealname'
            },
            {
                title: '联系电话',
                key: 'userphone'
            },
            {
                title: '身份证号',
                key: 'useridcard'
            },
            {
                title: '家庭住址',
                key: 'useraddress'
            },
            {
                title: '人群标记',
                key: 'usertag'
            },
            {
                title: '签约服务包',
                key: 'servicepackage'
            },
            {
                title: '签约医生',
                key: 'communitydoctorname'
            },
            {
                title: '签约机构',
                key: 'communityhospital'
            },
            {
                title: '乡镇/街道',
                key: 'town'
            },
            {
                title: '区县',
                key: 'county'
            },
        ],//签约人群统计表头数据格式
        tableData: {
            columns: [],
            data: []
        },
    },
    mounted: function () {
        // 判断来自哪个页面来渲染不同的数据
        const dataType = getUrlParam('dataType');
        this.initPage(dataType);
        window.onafterprint = function () {
            window.parent.document.getElementById('app').style.display = 'block';
            window.parent.document.body.removeChild(window.parent.document.querySelector('.iframe-print'));
        }
    },
    methods: {
        // 获取打印页面所有数据
        initPage: function (pageFrom) {
            if (pageFrom == 'SignDetailList') {
                this.tableData.columns = this.columns1;
                this.title = '签约明细';
            } else if (pageFrom == 'SignCrowdList') {
                this.tableData.columns = this.columns0;
                this.title = '签约人群统计';
            }

            this.getTableListData();
            // if (PAGE_DATA && PAGE_DATA.length > 0) {
            //     this.tableData.data = PAGE_DATA;
            // }
            // this.$nextTick().then(()=>{
            //     window.print();
            // });
        },
        // 获取列表数据接口公共方法
        getTableListData: function () {
            // table 数据请求参数
            let _this = this;
            let data = {
                userMainId: getUrlParam('userMainId'),
                userType: getUrlParam('userType'),
                startTime: getUrlParam('startTime'),
                endTime: getUrlParam('endTime'),
                nowPage: _this.nowPage,
                pageSize: _this.pageSize
            };
            hdfAjax({
                url: "/index/ajaxgetsigndetaillist", //请求地址
                type: 'get',   //请求方式
                data: data, //请求参数
                isNotShowErrorAlert: false,    //error时是否弹出默认alert报错(默认false弹出);
                success: function (res) {
                    let data = {};
                    try {
                        data = JSON.parse(res);
                    } catch (error) {
                        toast.inform("接口出错，请刷新重试", 800);
                        return;
                    }
                    let dataList = data.list;
                    if (data.errcode == 0 && dataList) {
                        _this.tableData.data = [];
                        dataList.forEach(function (item) {
                            if(typeof item == 'object'){
                                _this.tableData.data.push(item);
                            }
                        });
                        let pageInfo = data.pageInfo;
                        // if(pageInfo.pages>_this.nowPage){
                        //     _this.nowPage++;
                        //     _this.getTableListData();
                        // }
                        return;
                    }
                    toast.inform(data.msg, 800);
                },
                error: function (status) {
                    console.log('错误状态码为' + status);   // 此处为执行成功后的代码
                }
            });
        },
    }
});