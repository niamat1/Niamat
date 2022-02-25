window.addEventListener("scroll", function(){
    if(window.pageYOffset >300){
        this.document.querySelector(".def").classList.remove("hide");
    }
    else{
        this.document.querySelector(".def").classList.add("hide");
    }
});