/**
 * Created by Administrator on 2017/4/16.
 */
let express=require("express");
let Movie=require("./model").Movie;
let path=require("path");
let app=express();
app.set("view engine","html");
app.engine("html",require("ejs").__express);
app.use(express.static(path.resolve("bootstrap-3.3.7-dist")));
app.get("/",function (req,res) {
   Movie.find({},function (err,movies) {
       res.render("index",{movies});
   })
});
app.listen(8080);