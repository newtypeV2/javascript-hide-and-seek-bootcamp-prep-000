function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
for(var i = 0 ; i<document.querySelectorAll("ul.ranked-list li").length;i++){
   document.querySelectorAll("ul.ranked-list li")[i].innerHTML=parseInt(document.querySelectorAll("ul.ranked-list li")[i].innerHTML)+n
}
return null

//for(var i = 0;i<document.querySelectorAll("ul.ranked-list").length;i++){
//  for(var o = 0;o<document.querySelectorAll("ul.ranked-list")[i].children.length;o++){
//    document.querySelectorAll("ul.ranked-list")[i].children[o].innerText=parseInt(document.querySelectorAll("ul.ranked-list")[i].children[o//.innerText)+n;
//    }
//  }

}

function deepestChild(){
  return document.querySelectorAll("#grand-node div")[document.querySelectorAll("#grand-node div").length-1]
}