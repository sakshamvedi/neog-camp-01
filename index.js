var readlineSync = require("readline-sync");
var score = 0;

function welcome()
  {
    var name = readlineSync.question("hey what's your name ?    :");
    console.log("Hiii " +name)
  }

var arr= [{que : "How many Infinity Stones are there ?"
  , ans : "SIX" },{que : "Where is Captain America from?"
  , ans : "Brooklyn" }, {que : "Sharon Carter is whose great-niece?"
  , ans : "Peggy Carter" } , {que : " Who is Tony Stark’s father" , ans : "Howard Stark"} ]

function quecall(que , ans)
  {
    console.log(que)
     var usrans = readlineSync.question("enter answer here   :");
    if(ans.toUpperCase() === usrans.toUpperCase())
    {
      console.log("YAYYY ! YOU ARE RIGHT ")
      score = score+1;
    }
    else{
      console.log("YOU ARE WRONG ")
    }
    
  }

function scores()
  {
    console.log( "congo you scored ---------------"+score )
  }


welcome()
arr.map((data)=>{
  quecall(data.que , data.ans)
  
})
scores()
