
let x;
x=2;

if (x % 2 == 0) {
    function stabilo(){
        const collection = document.getElementsByClassName("teksParagraf");
        for (let i = 0; i < collection.length; i++){
        collection[i].style.backgroundColor = "yellow";
        collection[i].style.color = "red"; 
        collection[i].style.fontWeight='bold';
        x=x+1}}
}
if (x % 2 !=0) {
    function stabilo(){
        const collection = document.getElementsByClassName("teksParagraf");
        for (let i = 0; i < collection.length; i++){
        collection[i].style.backgroundColor = "white";
        collection[i].style.color = "black"; 
        x=x+1}}
}