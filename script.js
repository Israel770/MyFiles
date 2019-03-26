alert("i am here");

document.getElementById("okBtn").click(function (params) {
   alert("ok button clicked") ;
   alert(document.getElementById("okBtn").innerText());
});

document.getElementById("cancelBtn").click(function (params) {
    alert("cancel button clicked") ;
    alert(document.getElementById("cancelBtn").innerText());
 });