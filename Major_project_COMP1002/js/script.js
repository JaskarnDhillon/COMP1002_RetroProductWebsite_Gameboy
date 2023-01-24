$(document).ready(function(){
    //calling in header.html, meta.html and footer.html
    $(function(){
        $("#head").load("meta.html");
        //global header call
        $("#header").load("header.html");
        //global footer call
        $("#footer").load("footer.html");
    })
    // two functions below made to cycle through different game images under products.html
    var index=0;
    var index1=0;
    show();
    show1();
    function show(){
        var i;
        var slides=document.getElementsByClassName("slide");
        for(i=0;i<slides.length;i++){
            slides[i].style.display=" none";
        }
        index=index+1;
        if(index>slides.length){
            index=1;
        }
        slides[index-1].style.display=" block";
        setTimeout(show,1500);
    }
    function show1(){
        var j;
        var slides1=document.getElementsByClassName("slide1");
        for(j=0;j<slides1.length;j++){
            slides1[j].style.display=" none";
        }
        index1=index1+1;
        if(index1>slides1.length){
            index1=1;
        }
        slides1[index1-1].style.display=" block";
        setTimeout(show1,1500);
    }
});


