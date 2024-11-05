var score = 98;
score > 90
  ? console.log("excellent")
  : score > 60 && score < 89
  ? console.log("good")
  : score < 60
  ? console.log("need to improve")
  : console.log("invaild");//excellent

var day = "monday";
day == ("sunday" || "saturday")
  ? console.log("weekend")
  : console.log("weekday");//weekday

var a = "sdjij";
var b = "";
for (i = a.length - 1; i >= 0; i--) {
  b = b + a[i];
}
if (a == b) {
  console.log("is a palindroma");
} else {
  console.log("not a palindroma");
}//not a palindroma
var ip = "hello";
var op = "";
for (i = 0; i <= ip.length - 1; i++) {
  op = op + ip[i];
  console.log(op);
}//h
// he
// hel
// hell
// hello
