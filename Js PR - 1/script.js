function home_page_btn(){
    let btn = document.querySelector(".main-img-btn ");
    btn.addEventListener("mouseenter", function(){
        btn.style.border = "1px solid #EC4573";
        btn.style.color = "#EC4573";
    });
    btn.addEventListener("mouseleave", function(){
        btn.style.border = "2px solid #000";
        btn.style.color = "#fff";
    });
}
home_page_btn();

function slider(){
    let img = document.getElementsByClassName("imgs");
    let index = 0;

    function slides(index){
        for(let i = 0; i < img.length; i++){
            img[i].style.display = "none";
        }
        img[index].style.display = "block";
    }
    slides(index); 

    function show(){
        setInterval(() => {
            index++;
            if (index === img.length) {
                index = 0;
            }
            slides(index); // Update the displayed image
        }, 3500);
    }
    show();
}
slider();
