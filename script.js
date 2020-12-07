function printPage(el) {
    let page=document.body.innerHTML;
    // page.style.backgroundImage= "none";
    let print=document.getElementById(el).innerHTML;
    document.body.innerHTML=print;
    window.print();
    document.body.innerHTML=page;

}