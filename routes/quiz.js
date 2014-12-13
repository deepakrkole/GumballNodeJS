var async = require("async") ;


var f1=function(args){
	
	console.log("one  "+args);
	
}
var f2=function(args){
	
	console.log("two  "+args);
	
}

var f3=function(args){
	
	console.log("three  "+args);
	
}







/*async.series([function(callback){
            	  
            	  setTimeout(function(){
            		  
            		  f1();
            		 
            	  },3000);
            	  callback(null,1);
            	  
},
            	    
            	    function(callback){
           
            	  setTimeout(function(){
            		  
            		  f2();
            		 
            	  },2000);
            	  
            	  callback(null,2);
            	  //callback(null,2);
            	  
              },function(callback){
            	  
            	
            	  setTimeout(function(){
            		  
            		  f3();
            		 // callback(null,3);
            	  },1000);
            	  
            	  
            	  
            	 callback(null,3)
              }
              ],function(err,results){
	
	console.log(results);
})*/


async.waterfall([
                 function(callback){
                	 
                	 setTimeout(function(){
                		 f1("1");
                	 })
                	 callback(null,"1");
                 },
                 function(args,callback){
                	 setTimeout(function(){
                		 f2(args);
                	 })
                	 callback(null,"2","3");
                 },
                 function(args1,args2,callback){
                	 
                	 setTimeout(function(){
                		 f3(args2);
                	 })
                	 console.log(args1);
                	 callback(null,"done");
                 }
                 
                 
                 
                 ],function(err,results){
	console.log(results);
}

)





