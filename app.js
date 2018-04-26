var path=require('path');
var express=require('express');
var app=express();
var bodyparser=require('body-parser');


app.route('/api/whoami/')
    .get(function(req, res) {
// res.sendFile(process.cwd() + '/views/index.html');

       let header=(req.headers);
       let useragent=header['user-agent'];
       let software=useragent.slice(useragent.indexOf('(')+1,useragent.indexOf(')'));
      
       let acceptlanguage=header['accept-language']
       let language=acceptlanguage.slice(0,acceptlanguage.indexOf(','));

       let ipaddress=req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        res.send({
          "ipaddress":ipaddress,
          "language":language,
          "software":software
        })
 })
     
    var listener=app.listen(process.env.PORT || 8083,()=>{
    	console.log("server is listening",listener.address().port)
    })