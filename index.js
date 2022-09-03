var myIndex = 0;
accountOffice();

function accountOffice() {
var i;
var x = document.getElementsByClassName("myslide");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}
x[myIndex-1].style.display = "block";
setTimeout(accountOffice, 30000);
}