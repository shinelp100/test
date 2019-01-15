import '../../lib/polyfill.js';

const Vue = require("../../lib/vue.js");
const iVew = require("../../lib/iview.js");
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
                key: 'villagename'
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
            data: [
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
                {
                    'usermainid': '5962421460',

                    'communityhospitalid': '6279732845',

                    'communityhospitalname': '闽宁镇原隆村卫生室',

                    'rundate': '2018-12-20',

                    'provincename': '宁夏回族自治区',

                    'cityname': '银川市',

                    'countyname': '永宁县',

                    'townname': '闽宁镇',

                    'villagename': '原隆村委会',

                    'signnum': '1850',

                    'children': '0',

                    'oldman': '98',

                    'pregnant': '4',

                    'highblood': '65',

                    'tangniaobing': '4',

                    'jiehebing': '0',

                    'mentaldisease': '5',

                    'disable': '18',

                    'birthcontrol': '0',

                    'jiandanglika': '87',

                    'dibaowubao': '3',
                },
            ]
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

            if (PAGE_DATA && PAGE_DATA.length > 0) {
                this.tableData.data = PAGE_DATA;
            }
            this.$nextTick().then(() => {
                // 添加自定义标签头
                let ivuTableTbodyELe = document.querySelectorAll('.ivu-table-tbody');
                let TrEles = document.querySelectorAll('.ivu-table-tbody tr');
                let totalHeight = 0;
                Array.prototype.map.call(TrEles, function (item, index) {
                    if (index < 1) return;
                    totalHeight += parseFloat(window.getComputedStyle(item).height);
                    if (totalHeight >= 800) {
                        totalHeight = 0;
                        let DivEle = document.createElement('tr');
                        let TMP = `<th class=""><div class="ivu-table-cell"><span class="">市</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">县</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">镇</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">村/社区</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">签约数</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">0-6岁儿童签约数（人）</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">65岁及以上常住居民签</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">孕产妇签约数（人）</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">血管高血压患者家庭医生签约人数（人）</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">糖尿病患者签约数（人）</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">肺结核患者签约数（人）</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">严重精神障碍患者签约数（人）</span> </div></th><th class=""><div class="ivu-table-cell"><span class="">残疾人签约数（人）</span></div></th><th class=""><div class="ivu-table-cell"><span class="">计划生育特殊家庭自愿签约数（人）</span></div></th><th class=""><div class="ivu-table-cell"><span class="">农村建档立卡贫困人口签约数（人）</span></div></th><th class=""><div class="ivu-table-cell"><span class="">城乡低保五保人口签约数（人）</span></div></th>`;
                        DivEle.innerHTML = TMP;
                        DivEle.classList.add('break-line');
                        ivuTableTbodyELe[0].insertBefore(DivEle, item);
                    }
                })
                // window.print();
            });
        },
    }
});