
/////////////105//////////////////////////////////////////////////////////
let test34 = 1;
if (test34 < 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

let test2 = 1;
if (test2 < 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

let test3 = 1;
if (test3 >= 10) {
	console.log('+++');
} else {
	console.log('---');
}

let test4 = 1;
if (test4 <= 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

///////////////////////106/////////////////////////////////////////////////
let test78 = 1;
if (test78 == 10) {
	console.log('+++'); 
} else {
	console.log('---');
}



//////////////107//////////////////////////////////////////////////////////
let test5 = 1;
if (test5 != 10) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////108/////////////////////////////////////////////
let test6 = 1;
let test7 = 8;
if (test6 < test7) {
	console.log('test6<test7'); 
} else {
	console.log('test6>test7');
}


let test8 = 1;
let test9 = 8;
if (test8 == test9) {
	console.log('test8==test9'); 
} else {
	console.log('test8!=test9');
}

///////////////////////109//////////////////////////////////////////////
let test0 = 'abc';
let df= "fd"
if (test0 == df) {
	console.log('+++'); 
} else {
	console.log('---');
}




////////////////////////110//////////////////////////////////////////
let gh = '123';
let hg = 123;
if (gh == hg) {
	console.log('+++');
} else {
	console.log('---');
}

/////////////////////////////113///////////////////////////////////////
////////////1//////////////
let num=87;
if (num>0 || num<5) {
	console.log('+++'); 
} else {
	console.log('---');
}
///////////////2/////////////
let num1=87;

if (num>=10 || num<=20) {
	console.log('+++'); 
} else {
	console.log('---');
}

//////////////3/////////
let num2=87;
let num3=65;
if (num<=1 && num3>=3) {
	console.log('+++'); 
} else {
	console.log('---');
}

////////////////////////////////////117/////////////////////////////////
if (!(num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}



//////////////////////////////118///////////////////////////////////////
///////////1//////////////////
let test09 = true;
if (test09 === true) {
	console.log('+++');
} else {
	console.log('---');
}
/////////////////2/////////
let test69 = false;

if (test69 === true) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////120/////////////////////////////////////////
let test = true;
if (true) {
	console.log('+++');
} else {
	console.log('---');
}



/////////////////////////////////121//////////////////////////////////////////
////////////////////1//////////
let test56 = true;
if (!true) {
	console.log('+++');
} else {
	console.log('---');
}

//////////2//////////////////
let test23 = true;
if (!true) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////3///////////////
let test45 = true;
if (true) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////////////////123//////////////////////////////////////
///////////////1///////////////////
let test11 = true;
let test22 = true;
if (test11 && test22) {
	console.log('+++');
} else {
	console.log('---');
}

/////////////////2///////////////
let test16 = true;
let test26 = true;

if (test16 && test26) {
	console.log('+++');
} else {
	console.log('---');
}

/////////////////3/////////////////////
//////////////////////4///////////////////
////////////////////////5///////////
////////////////6///////////////////
/////////////7//////////////


//////////////////////////////124////////////////////////////////////////////
let test87 = 1;

if (test87 == 10) {
	console.log('yes');
}

//////////////////////////////125/////////////////////////////////////
////////////////1//////////
if (test > 0) console.log('+++'); else console.log('---');
///////////////////2///////////
if (test > 0) console.log('+++');


/////////////////////////////////////////127///////////////////////////////////////////
////////////1//////////
let nume4 = 9;
if (nume4 <= 10) {
	console.log('первая декада');
} else if (nume4 <= 20 && nume4>10) {
	console.log('вторая декада');
} else if (nume4 >= 20 && nume4>10 && nume4<=30) {
	console.log('третья декада');
};
////////////2//////////
let nume = 9;
if (nume <= 10) {
	console.log('первая декада');
} else if (nume <= 20 && nume>10) {
	console.log('вторая декада');
} else if (nume >= 20 && nume>10 && nume<=30) {
	console.log('третья декада');
} else {
	console.log("Ошибка");
}

///////////////////////////////128//////////////////////////////
let nu = 3;
if (nu >= 10 && nu<=99) {
	let r = String(nu);
	let s=r[0]+r[1]
	console.log(s);
	if (s<=9) {
		console.log('сумма цифр однозначна');
	} else {
	console.log('сумма цифр двухзначна');}
}


////////////////////////////////129//////////////////////////////
let lang = 'ru';
switch (lang) {
case(1): 
	console.log('рус');
	break;
 case(2):
	console.log('анг');
	break;
 case(3):  
	console.log('нем');
	break;	
 case(4):
	console.log('язык не поддерживается');
	break;
}

//////////////////////131////////////////////////////////////////
/*
let n = 1;
let res5;
if  res5=n>= 0 ? '1': '2';
console.log(res5);*/

////////////////////////////132///////////////////////////////////////
//////////////////1////////////////
let a = 2 * (3 - 1);
let b = 6 - 2;
let result23 = a == b;
console.log(result23);
//////////////////////2////////////////////////
let a1 = 5 * (7 - 4);
let b1 = 1 + 2 + 7;
let result32 = a1 > b1;
console.log(result32);
///////////////////3////////////////////
let a2 = 2 ** 4;
let b2 = 4 ** 2;
let result = a2 != b2;
console.log(result);

//////////////////////133////////////////////////////////////////////////////
let ok = confirm('Вам уже 18 лет?');

if (ok) {
	console.log('вы ответили да');
} else {
	console.log('вы ответили нет- доступ запрещен');
}


////////////////////////////134///////////////////////////////////////////////////
let age = 17;
let adult23;
if (age >= 18) {
	adult23 = true;
} else {
	adult23 = false;
}
console.log(adult23);

//////////////////////////135//////////////////////////////////////////////
//////////////////////1///////////////
let age1 = 17;
let adult1;

if (age1 >= 18) {
	adult1 = true;
} else {
	adult1 = false;
}

console.log(adult1);

///////////////2////////////////
let age2 = 17;
let adult;
if (age2 >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);
///////////////////3///////////
let age3 = 17;
let res1;
if (age3 >= 18) {
	if (age3 <= 23) {
		res1 = 'от 18 до 23';
	} else {
		res1 = 'больше 23';
	}
} else {
	res1 = 'меньше 18';
}

console.log(res1);

///////////////4/////////////
let age54 = 19;
let res2;
if (age54 >= 18) {
	if (age54 <= 23) {
		res2 = 'от 18 до 23';
	} else {
		res2 = 'больше 23';
	}
} else {
	res2 = 'меньше 18';
}

console.log(res2);

////////////////////////////136////////////////////////////////////////////////
let min = 10;

if (min >= 0 && min <= 19) {
	console.log('1 треть часа');
}

if (min >= 20 && min <= 39) {
	console.log('2 треть часа');
}

if (min >= 40 && min <= 59) {
	console.log('3 треть часа');
}

/////////////////////137///////////////////////////////////////////////////
let str1 = 12345;
let str2= String(str1)
let t=str2.length-1;
if (str2[t] == 3) {
	console.log(str2[0]+str2[1]+str2[2]);
}

//////////////////////////////////138//////////////////////////////////////
//////////////////1////////////////
let str67 = 'a12345a';
if (str67[0] == "a") {
	console.log('yes');
}
///////////////////////2///////////////
let p = '12345x';
let po;
if (p[p.length-1] == "x") {
	console.log('yes');
}
//////////////////3///////////////
let str = 'b12345a';

if (str[0] == "a" || str[0] == "b") {
	console.log('yes');
}

////////////////////////////////139/////////////////////////////////
//////////////1////////////
let f=5565766776;
let fo;
if (f[f.length-1] == "0") {
	console.log('yes');
}
///////////2///////////
let rd=90;
	if (rd%2==0){
	console.log('число четное');
}
	else{
	console.log('число нечетное');}
    
/////////////////////////////140///////////////////////////
let rd1=90;
	if (rd1%2==0){
	console.log('число четное');
}
	else{
	console.log('число нечетное');}
	
	//////////////2//////////
	let rod=809;
	if (rod%3==0){
	console.log('число делится на 3');
}
	else{
	console.log('число не делится на 3');}
	
	
/////////////////141////////////////////////////////////////////////
///////////1///////////
let num15 = 1;
let num25 = 2;
if (num15 + num25 == 3) {
	console.log('+++');
} else {
	console.log('---');
}
//////////2/////////
let num18 = '1';
let num28 = '2';
if (Number(num18) + Number(num28) == 3) {
	console.log('+++');
} else {
	console.log('---');
}
///////////3//////
let num13 = '1';
let num23 = '2';

if ((Number(num13) + Number(num23)) == 3) {
	console.log('+++');
} else {
	console.log('---');
}

///////////////////142//////////////////////////////////
//////////1///////
let month=5;
switch (month){
    case(1):
    case(2):
    case(12):
        console.log("зима")
        break;
    case(3):
    case(4):
    case(5):
        console.log("весна")
        break;
    case(6):
    case(7):
    case(9):
        console.log("лето")
        break;
    case(9):
    case(10):
    case(11):
        console.log("осень")
        break;
}
//////////////2///////////

let v="abcde";
if (v[0] == "a") {
	console.log('yes');
}
else {
	console.log('no');
}

///////////3////////////////
let q=12345;
let q1= String(q);
if (q1[0]==1 || q1[0]==2 || q1[0]==3){
	console.log('yes');
}
else {
    console.log('no');
}
	
/////////////////4///////////////
let y=123;
let y1=String(y);
console.log(Number(y1[0])+Number(y1[1])+Number(y1[2]));

//////////////5///////////////
let m=123456;
let m1=String(m);
if (Number(m1[0])+Number(m1[1])+Number(y1[2])==Number(m1[3])+Number(m1[4])+Number(m1[5])){
	console.log('yes');
}
else {
    console.log('no');
}
	
	
	