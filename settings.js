// eslint-disable-next-line no-unused-expressions
({
    'listen_host':'127.0.0.1',
    'listen_port':'8083',
    'listen_https_port':'8084',
    'listen_config_port':'8085',
    'max_connections':1000,
    //只有在这个数组里的域名，https下才会被解码，其它https流量直接被透传
    'delegate_https_hosts':[
        'm.baidu.com',
        //'ss1.bdstatic.com',
    ],
    'hosts':[
//        ['www.baidu.com','127.0.0.1'],
    ],
    'auto_responder':[
        ['http://s1.bdstatic.com/r/www/cache/static/global/js/all_async_popstate1_4c0af2db.js','http://m1-ps-wwwui0-j10.m1.baidu.com:8090/cache/static/global/js/all_async_popstate1.js'],
        ['http://cq01-vrp-a05-009-bbtocq.cq01.baidu.com:8012/cache/static/global/js/all_async_search_d239f683.js','http://m1-ps-wwwui0-j10.m1.baidu.com:8090/cache/static/global/js/all_async_search.js'],
        [/^http:\/\/cq01-vrp-a05-009-bbtocq\.cq01\.baidu\.com\:8012\/s\?(.*)/,'http://www.baidu.com/s?{1}'],
        ['https://m.baidu.com/','/Users/wp/Projects/baidu/wise/index.html'],
        ['https://m.baidu.com/','/Users/wp/Projects/baidu/wise/index_lsv.html'],
        ['http://cdn.iknow.bdimg.com/static/common/lib/mod_96dd55b.js','a.js'],
        ['https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/js/all_async_popstate1_6f2673c8.js','tmp/all_instant_search1_2c505131.js'],
        ['http://s1.bdstatic.com/r/www/cache/static/global/js/all_instant_search1_3a6acbb0.js','tmp/all_instant_search1_8c644990.js'],
        ['https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/voice/js/voice_7851a312.js','tmp/voice.js'],
        [/aaaa/,'tmp/voice.js'],
        //['http://www.baidu.com/','http://127.0.0.1/'],
        //[/^http:\/\/www\.baidu\.com\/s/,'testresult.html'],
        //[/^http:\/\/www\.baidu\.com\/s/,'testresult.html'],
        //替换成和query同名的文件
        //[/^http:\/\/www\.baidu\.com\/s?.*wd=(\w+)/,'file:{1}.html'],
        //替换目录
        //[/^http:\/\/m1-ps-wwwui0-j10\.m1\.baidu\.com:8090\/cache/(.*)/,'file:{pwd}/cache/{1}'],
        //全部替换成wd=qq
        //[/^http:\/\/www\.baidu\.com\/s/,'{_}?wd=qq'],

        //高级功能，走回调
            return code;
    ],
})

