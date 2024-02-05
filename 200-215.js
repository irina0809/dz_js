
/////////////////////////200//////////////////////////////////////////
/////////////1///////////
function func() {
	console.log('Irine');
}
func(); 

///////////////2///////////
function umma(){
    let summ=0;
    for (let i=0; i<=100; i++){
        summ+=i;
    }
    console.log(summ)
}
umma();

////////////////////201//////////////////////////////////////
//////////1///////////
function cub(o){
    o=o*o*o;
    console.log(o)
}
let h=6;
cub(h);

////////2//////////////
function plus(g){
    if (g>0){
        console.log("+++");
    }
    else {
        console.log("---")
    }
}

let g = 94;
plus(g);

////////////////////202//////////////////////////////////////
function func(num1, num2, num3) {
	console.log(num1 + num2+num3);
}
func(5, 5, 8)

//////////////////////////203////////////////////////////////
function func(a, b, c) {
	console.log(a + b+c);
}
func(5, 5, 8)
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3)

///////////////////////////205//////////////////////////////////
//////////////1////////////
function cub3(l){
    return (l*l*l);
}
let h1=3;
let res3=cub3(h1);
console.log(res3);
///////////2/////////////
function r(n, b){
    console.log ((Math. sqrt (n)+Math. sqrt (b)));
}
let n=3;
let b=4;
r(n, b);

//////////////////////////206/////////////////////////////////
////////////1////////////////
function sqrt(num) {
	return Math.sqrt(num);
}
function round(num) {
	return num.toFixed(3);
}
let y=round(sqrt(2));
console.log(y);
//////////////2//////////////
function sqrt(num) {
	return Math.sqrt(num);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let fes=sum(sqrt(2), sqrt(4), sqrt(3));
console.log(fes);
//////////////3//////////////
function round(num) {
	return num.toFixed(3);
}
function sqrt(num) {
	return Math.sqrt(num);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let fes1=round(sum(sqrt(2), sqrt(4), sqrt(3)));
console.log(fes1);

////////////////////208///////////////////////////////////
function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		
	}return sum;
}
console.log( func(5) );

///////////////////////209////////////////////////////////
function lk(w){
    let i=0;
    while (w>10){
        w=w/2;
        i++;
    }
    return(i);
}
let w =90;
console.log(lk(w));

///////////////////////210/////////////////////////////////
function func(num1, num2) {
	let res;
	if (num1 > 0 && num2 > 0) {
		res = num1 * num2;
	} else {
		res = num1 - num2;
	}
	return res;
}
console.log(func(3, 4));

///////////////////////////211////////////////////////////
//////////1////////////
function isPositive(arr) {
	let flag =false ;
	for (let elem of arr) {
		if (elem %2==0) {
			flag = true;
		}
	}
	return flag;
}
let arr=[8, 590];
console.log(isPositive(arr))
//////////////////2/////////////
function isPositive(arr11) {
	let flag1 = true;
	for (let elem1 of arr11) {
		if (elem1 %2==0) {
			flag1 = false;
		}
	}
	return flag1;
}
let arr11=[9, 50];
console.log(isPositive(arr11))

/////////////////////212///////////////////////////
////////////////1////////
function func(a, b) {
		return a == b;
}
///////////2///////////
function func(a, b) {
	return a != b;
}

//////////////3//////////////
function func(a, b) {
	return (a + b >= 10);
}

///////////4////////////
function func(num) {
		return num >= 0;
}


///////////////////214/////////////////////////////////////
/////////1//////////////
function func1() {
	console.log(3);
}
function func2() {
	console.log(5);
}
console.log( func1(3) + func2(5) );

///////////////2///////////////
function sum1(arr1) {
	let res = 0;
	for (let elem of arr1) {
		res += elem;
	}
    return res;
}
console.log(sum1([1, 2, 3, 4, 5]));

//////////////3///////////////////
let arr99 = [1, 2, 3, 4, 5];
function func1(arr99) {
	let res99 = 0;
	for (let elem of arr99) {
		res99 += elem;
	}
	console.log(res99);
}

///////////4////////////////
function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log( func1() + func2() );

///////////////5///////////////
function sum1(arra) {
let result = 0;
for (let elem of arra) {
result += elem;
}
    return result;
}
let arraySum = sum1([1, 2, 3, 4, 5]);
console.log(arraySum);

//////////////6////////////////
function sum66(arr66) {
	let sum666 = 0;
	
	for (let elem66 of arr66) {
		sum666 += elem66;
	}
    return sum666;
}
let res66 = sum66([1, 2, 3, 4, 5]);
console.log(res66);

//////////////7////////////////////////////
function add(num) {
	if (num <= 9) {
		return '0' + num;
	}
    else return num;
}

////////////8/////////////////////////////////
function sum5(arr55) {
	let res55 = 0;
	for (let elem55 of arr55) {
		res55 += elem55;
	}
	
	return res55;
}
let arr55 = [1, 2, 3, 4, 5];
let sum55 = sum5(arr55);
console.log(sum55);

//////////////////////9//////////////
let num = 12345;
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
    let arr = num.toString().split('');
    let sum = 0;

    for (let elem of arr) {
        sum += parseInt(elem);
    }

    return sum;
}

////////////////////////////10///////////////////
console.log(isPrime(13)); 
function isPrime(num) {
for (let i = 2; i < num; i++) {
if (num % i === 0) {
return false;
}
}
return true;
}

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


function mass(d){
	let mas=[];
	for (let i=1; i<=d; i++){
		mas.push([i]);
	}
	return mas;
}
let hj=7;
console.log(mass(hj))


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
