/**
 * Created by Administrator on 2017/4/16.
 */
/*
* 在这个模块读取URL的数据并且返回电影数组
*
* */
let request=require("request");
let iconv=require("iconv-lite");
let cheerio=require("cheerio");
let debug=require("debug")("crawl:read");
module.exports=function (url,callback) {
    request({url,encoding:null},function (err,response,body){
      body=iconv.decode(body,"gbk");
        let $=cheerio.load(body);
        let movies=[];
        $(".keyword a.list-title").each(function (index,item) {
            let $this=$(item);
            let movie={
                name:$this.text(),
                url:$this.attr("href")
            };
            debug(`读到电影：${movie.name}`);
            movies.push(movie);
        });
        callback(err,movies)
    })

};
//测试驱动开发 TDD Test Driven Development
/*
let url="http://top.baidu.com/buzz?b=26";
module.exports(url,function (err,movies) {
    console.log(movies);
});*/
