///////////////////////////////////215////////////////////////////////

function sum1(arra) {
let result = 0;
for (let elem of arra) {
    result += elem;
}
    return result;
}
let arraySum3 = sum1([1, 2, 3, 4, 5]);
console.log(arraySum3);


function divide(number) {
    let del = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        del.push(i);
      }
    }
    return del;
  }
  console.log(divide(10)); 


function per(stre){
    let stra = stre.toString().split('');
    return stra;
}
let stre="uhiiii";
console.log(per(stre));


function per2(stre1){
    let stra1 = stre1.toString().split('');
   for(let i=stra1.length-1; i>=0; i--){
    console.log(stra1[i]);
}return stra1.join('');
}
let stre1="uhiiii22";
console.log(per2(stre1));


function perd(stred){
	let strid = stred.slice(0, 1).toUpperCase() + stred.slice(1);
    return strid;
}
let stryd="uhiiii";
console.log(perd(stryd));



function mass(d){
	let mas=[];
	for (let i=1; i<=d; i++){
		mas.push([i]);
	}
	return mas;
}
let hj=7;
console.log(mass(hj))



function chislo(nu){
	let strah = nu.toString().split('');
	let yl=0;
	for (let i=0; i<=strah.length-1; i++){
		yl+=Number(strah[i]);
	}
	return yl;
}
let nu=232;
console.log(chislo(nu));


let year = 2024;
function god(year){
if (year % 4 != 0){
    console.log('Год не високосный.')
}
else if(year % 100 == 0)
    if (year % 400 == 0){
        console.log('Год високосный.')}
    else{
        console.log('Год не високосн')}
	
else {
    console.log('Год високосный.')}
}
console.log(god(year))


let sec = 120000;
let sutki;
function sut(sec){
	sutki=(((sec/60)/60)/24);
    console.log(sutki);
}
console.log(sut(sec));


function po(arrr){
	random=Math.floor(Math.random()*arrr.length);
	return arrr[random];
}
 let arrr=[3,21,3,75];
 let rande=po(arrr);
 console.log(rande);


 function pr(h){
    if (h <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(h); i++) {
        if (h % i === 0) {
          return false;
        }
      }
      return true;
 }
 console.log(pr(7))