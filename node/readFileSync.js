let fs = require('fs');

let result = fs.readFileSync('./index.js', 'utf-8');
let dirs = fs.readdirSync('../node');
dirs.forEach((hkitName)=>{
    let stat = fs.statSync(hkitName);
    console.log(stat.isDirectory());
});


let content = '{{#extend "layout" title="积分换鸡蛋"}}\n' +
    '    {{#content "head"}}\n' +
    '        <link rel="stylesheet" href="{{__SSI_DOMAIN}}/nfamilydoctor/ssi/egg/prd/style/release/erweima@version.css">\n' +
    '    {{/content}}\n' +
    '    {{#content "body"}}\n' +
    '        <section class="title">\n' +
    '            请到{{address}}<br/>{{doctorName}}医生扫码后领取鸡蛋\n' +
    '        </section>\n' +
    '        <section class="erweima">\n' +
    '            <div class="e-content">\n' +
    '                <div class="e-c-title">\n' +
    '                    领取鸡蛋二维码\n' +
    '                </div>\n' +
    '                <div class="e-c-content">\n' +
    '                    <img class="js-img e-c-c-img" src="{{url}}" alt="">\n' +
    '                    <div class="e-c-c-count">{{eggNum}}枚鸡蛋</div>\n' +
    '                    <div class="e-c-c-pep">\n' +
    '                        <span class="e-c-c-p-ca">家庭医生：</span><span class="e-c-c-p-name">{{doctorName}}</span>\n' +
    '                        <span class="e-c-c-p-ca">居民：</span><span class="e-c-c-p-name">{{userName}}</span>\n' +
    '                    </div> \n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </section>\n' +
    '        <script>\n' +
    '            window.pageData = {\n' +
    '                cdUserRefId:\'{{cdUserRefId}}\',\n' +
    '                expireTime:\'{{time}}\',\n' +
    '                doctorName:\'{{doctorName}}\'\n' +
    '            }\n' +
    '        </script>\n' +
    '        <script src="{{__SSI_DOMAIN}}/nfamilydoctor/ssi/egg/prd/script/release/erweima@version.js"></script>\n' +
    '    {{/content}}\n' +
    '{{/extend}}'
let reg = /(http:|https:)?(\/\/)?(.*?)prd(.*?)@version(.*?)\.(css|js)/g;
let urlList = content.match(reg);
let temp = urlList[0].split('/ssi/');
let key = temp[1].replace('@version', '');
// let version = versions[key];
console.log(key);
