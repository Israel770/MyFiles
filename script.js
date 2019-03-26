alert("i am here");

document.getElementById("okBtn").click(function () {
   alert("ok button clicked") ;
   alert(document.getElementById("okBtn").innerText());
}); 

document.getElementById("cancelBtn").click(function () {
    alert("cancel button clicked") ;
    alert(document.getElementById("cancelBtn").innerText());
 });