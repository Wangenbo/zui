import WeexLogger from 'alife-logger/weex';
const fetch = weex.requireModule('stream').fetch;

const wxLogger = WeexLogger.singleton({
    pid: 'l8hwk@95cdcdcb2863f22',
    uid: "xxx", // Login uid, for UV report
    page: "xxx", // Initial page name, if passed, SDK will send a PV log after Initialization completed
    region: "cn",
    sendRequest: (data, imgUrl) => {
        data = data || {};
        var arr = [],
            urlData = '';
        for (var k in data) {
            if (Object.prototype.hasOwnProperty.call(data, k) && data[k] !== undefined) {
                arr.push(k + '=' + encodeURIComponent(data[k]));
            }
        }
        urlData = arr.join('&');
        const url = imgUrl + urlData;
        fetch({
            method: 'GET',
            url
        }, function(ret) {
            // console.log('ret----', ret);
        }, function(response) {
            // console.log('response----', response);
        });
    },
    postRequest: (data, imgUrl) => {
        fetch({
            method: 'POST',
            type: 'json',
            url: imgUrl,
            body: JSON.stringify(data)
        }, function(ret) {
            // console.log('ret1----', ret);
        }, function(response) {
            // console.log('response1----', response);
        })
    }
});

export default wxLogger;
