
/////////////////////////184//////////////////////////////////////////
/////////////1///////////
let a=2;
console.log(a**10)

/////2///////////
console.log(Math.sqrt(245));
/////////3////////
let rr=[4, 2, 5, 19, 13, 0, 10];
let d=0;
for (let ele of rr){
	ele**=3;
	d+=ele;
}
console.log(Math.sqrt(d));

/////////////////////////////185///////////////////////////////////////////
console.log(Math.round(Math.sqrt(379)));
console.log((Math.round(Math.sqrt(379))).toFixed(2));
console.log((Math.round(Math.sqrt(379))).toFixed(1));

///////////////////////////////186///////////////////////////////////////////////
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

/////////////////////////////////187/////////////////////////////////////////////////

//////////1////////////////
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

//////////////////////188/////////////////////////////////////////////////////
let dpo=98, j=76;
console.log(Math.abs(dpo-j));

///////////////////////189///////////////////////////////////////////
//////1/////////////////
let str='js';
console.log(str.toUpperCase());

////////2//////////////
let str2='JS';
console.log(str2.toLowerCase());

//////////////////////////190/////////////////////////////////////////////
let f='я учу javascript!';
let q= f.substr(2);
console.log(q)

///////////////////////////////191///////////////////////////////
///////////1///////////////
let str22 = 'abcde';
let res = str22.startsWith('http://');
console.log(res);
//////////////2/////////
let str222 = 'abcde';
let res2 = str222.endsWith('.html');
console.log(res2);

///////////////////////////////192//////////////////////////////////
/*let h='1-2-3-4-5';
let de='-';
while (h.includes(de)) {
	let newStr = h.replace(de, '.');}
	console.log(newStr);*/
////////////////////////////194/////////////////////////////////////
//////////1//////////
let fff=[1, 2, 3];
console.log(fff[0]);

/////////2//////////
let fff1=[1, 2, 3];
console.log(fff1[fff1.length-1]);

/////////3/////////
let fff23=[1, 2, 3];
fff23.push(4, 5, 6)
console.log(fff23);

//////4///////////
let ff23=[1, 2, 3];
ff23.unshift(4, 5, 6)
console.log(ff23);


/////////////////////////195/////////////////////////////////
///////1///////
let y=[1, 2, 3, 4, 5];
y.pop()
y.pop()
console.log(y);

////////////////196/////////////////////////////////////
//////1//////////
let lp=[1, 2, 3, 4, 5];
lp.splice(1,2)
console.log(lp);
//////////2///////
let gh=[1, 2, 3, 4, 5];
gh.splice(3, 0, 'a', 'b', 'c')
console.log(gh);

/////////////////////197/////////////////////////////////
let u=[1, 2, 3, 4, 5];
ref=u.includes(3);
console.log(ref);

/////////////////////////198/////////////////////////////////////
let obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj));


//////////////////////////199////////////////////////////////////
///////////1///////
let num = '12345';
let arr = num.split('');
let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}
console.log(sum);
///////////2//////
let num9 = 12345;
let arr9 = String(num9).split('');
let sum9 = 0;
for (let digit of arr9) {
	sum9 += Number(digit);
}

console.log(sum9);
///////////3///////////
let num2 = 12345;
let arr2 = String(num).split('');
let prod = 1;
for (let digit of arr2) {
	prod *= digit;
}
console.log(prod);




