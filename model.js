/**
 * Created by Administrator on 2017/4/16.
 */
//1.引入
//2.启动数据库
//3.定义Schema
//4.定义Model
let mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1/2016crawl");
let MovieSchema=new mongoose.Schema({
    name:String,
    url:String
});
exports.Movie=mongoose.model("Movie",MovieSchema);