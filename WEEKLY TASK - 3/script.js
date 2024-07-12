function cookies_accept() {
    let alow_btn = document.querySelector("#alow").value
    let alow_div = document.querySelector(".cookies").value
    
    document.getElementById("alow").addEventListener("click",function(){
        alow_div.style = "dicplay", "none"
    })
}
cookies_accept