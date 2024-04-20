var span = document.getElementsByTagName("span")[0];
// ++ -> code ajilah bolgond 1-eer nemegduuleh code
// -- -> code ajilah bolgond 1-eer bagasah code
var count=0
function nemeh(){
	count++;
	span.style.color="green";
	span.innerText=count;
}
function hasah(){
	count--;
	span.style.color="red";
	span.innerText=count;
}
function reset1(){
	count=0;
	span.innerText=0;
}