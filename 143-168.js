///////////////////////////////////////// 144 //////////////////////////////////

let arr144 = ['a', 'b', 'c', 'd', 'e'];
for (let elem144 of arr144) {
	console.log(elem144);
}

// //////////////////////////////////////145//////////////////////////////////////
let obj145 = {x: 1, y: 2, z: 3};
for (let key145 in obj145) {
	console.log(key145); 
}

// ////////////////2//////

for (let key145 in obj145) {
	console.log(obj145[key145]); 
}

/////////////////////////////////////////////////// 146 //////////////////////////////

let i146 = 1;

while (i146 <= 100) {
	console.log(i146);
	i146++;
}
//////////////2////////////
let num146 = 2;

while (num146 <= 1000) {
	num146 *= 3;
}

console.log(num146); 

// ///////////////147 ///////////////////
// /////////////////1///////////////////////
for (let i147 = 1; i147 <= 100; i147++) {
    if (i147%2==0) {
	    console.log(i147); 9
    }
}

//////// 2///////////////////////
for (let i147_2 = 1; i147_2 <= 99; i147_2++) {
    if (i147_2%2!=0) {
	    console.log(i147_2); 
    }
}

// ////////////////////////148 //////////////////////////////////////////////
///////////1/////////

let arr148 = ['a', 'b', 'c', 'd', 'e'];
for (let i148 = 1; i148 < arr148.length-1; i148++) {
	console.log(arr148[i148]);
}
////////////2////////////
let arr148_2 = ['a', 'b', 'c', 'd', 'e'];
for (let i148_2 = arr148_2.length - 1; i148_2 >= 0; i148_2--) {
	console.log(arr148_2[i148_2]);
}


//////////////////////149///////////////
/////1////////
let arr5 = [2, 5, 9, 15, 1, 4];
for (let elem1 of arr5) {
	if (elem1>3 && elem1<10) {
		console.log(elem1);
	}
}
//////////2///
/*
let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2=Object.keys(obj1)
for (let elem6 of obj2) {
	if (elem6 % 2 === 1) {
		console.log(obj1[elem6]);
	}
}*/


////////////150///////////////////////

let ios=0;
for (let it=2; it<=100; it++){
    if (it%2==0){
        ios=ios+it;
       } 
      console.log(ios);
}


///////////////152////////////////////////////
///////1////////////
let str = '';

for (let i = 1; i <= 5; i++) {
	str += "-";
}

console.log(str);


//////////2////////////

let str5 = '';

for (let i5 = 1; i5 <= 9; i5++) {
	str5 += i5;
}

console.log(str5);
/*
//////////3////////////
let str90 = '';
for (let i90 = 1; i90 <= 9; i90--) {
	str90 += i90;
}
console.log(str90);*/

///////////4//////
let str50 = '';

for (let i50 = 1; i50 <= 9; i50++) {
	str50 += i50+"-";
}

console.log(str50);



///////////////153/////////////////////////////////////////////
///////////1//////
for (let i = 10; i <= 1000; i++) {
	let str65 = String(i);
	console.log(str65[0]);
	}
//////2////////////
for (let i = 10; i <= 1000; i++) {
	let str66 = String(i);
	console.log(str66[0]+str66[1]);
	}

////////////////////154///////////////////////////////////////////

//////1/////////
let arry = [1, 2, 3, 4, 5];
for (let elem=0; elem<arry.length; elem++) {
	if (arry[elem] == 0) {
		break;                                                                                                                                                                                                                
       }console.log( arry[elem]);
}

////////2////////////
let arr9 = [1, 2, 3, 4, 5, -9, 9];
let tr;
for (let elem=0; elem<arr9.length; elem++) {
	tr+=elem;
	if (arr9[elem] < 0) {
		break;                                                                                                                                                                                                                
       }console.log( elem);
break;
}


////////3//////////
let arr134 = [1, 2, 3, 4, 5, -9, 9];
for (let elem1=0; elem1<arr134.length; elem1++) {
	if (arr134[elem1] ===3) {                                                                                                                                                                                                 
            console.log(elem1);
		break;                                                                                                                                                                                                                
       }
}

/*
////////////////////////156/////////////////////////////////////////
for (let i156 = 1; i156 <= 9; i156++) {
	for (let j156 = 1; j156 <= 3; j156++) {
		document.write(i156);
	}
}
*/

/////////////159///////////////////////////////////////////////////////
//////1///////
let arrh = [];
for (let i = 1; i <= 10; i++) {
	arrh.push(i);
}
console.log(arrh);


///////2///////
let arrj = [];
for (let i = 1; i <= 10; i++) {
	arrj.push("x");
}
console.log(arrj);

///////////////////160///////////////////////////////////////////////
////////1//////
let arrl = [1, 2, 3, 4, 5];
for (let i = 0; i < arrl.length; i++) {
	arrl[i] = arrl[i] ** 2;
}
console.log(arrl);

/////2///////////
let arrs = [1, 2, 3, 4, 5];
for (let i = 0; i < arrs.length; i++) {
	arrs[i] = arrs[i] -1;
}
console.log(arrs);

/////3///////
let arrg = [1, 2, 3, 4, 5];

for (let i = 0; i < arrg.length; i++) {
	arrg[i] = arrg[i] +10;
}

console.log(arrg);


////////////////161////////////////////////////////////////////////////////
//////1////////////
let arr1_161 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2_161 = [1, 2, 3, 4, 5, 6, 7];
let obj161 = {};

for (let i161 = 0; i161 <= 6; i161++) {
	let key161 = arr1_161[i161];
	let value161 = arr2_161[i161];
	
	obj161[key161] = value161;
}
console.log(obj161);

////////////////162///////////////////////////////////////////////////////////
let obj162 = {x: 1, y: 2, z: 3};
for (let key162 in obj162) {
	obj162[key162] = obj162[key162] ** 2;
}
console.log(obj162);
////////2/////////////////
let obj162_2 = {x: 100, y: 200, z: 300};
for (let key162_2 in obj162_2) {
	obj162_2[key162_2] = obj162_2[key162_2] + 1;
}
console.log(obj162_2);

/////////////////////////163//////////////////////////////////////////
let arr163 = ['a', 'b', 'c', 'd', 'e'];
let flag163 = false;
for (let elem163 of arr163) {
	if (elem163 == 'c') {
		flag163 = true;
		break;
	}
}
if (flag163 === true) {
	console.log('+++');
} else {
	console.log('---');
}

//////////////////164/////////////////////////////////////////////////
let arr164 = [10, 20, 30, 40, 21, 32, 51];
let sum164 = 0;
for (let elem164 of arr164) {
	if (elem164 % 10 === 1 || elem164 % 10 === 2 ) {
		sum164 += elem164;
	}
}
console.log(sum164);

////////////////////////////166/////////////////////////////////////
for (let i = 0; i <= 10; i++) {
	console.log(i);
} 
for (let i = 10; i >= 0; i--) {
	console.log(i);
}


let res=0;
for (let i = 1; i <= 10; i++) {
	res += i;
}
console.log(res);

let arrp = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arrp) {
	sum += Number(elem);
}

console.log(sum); 
let arrpo = [1, 2, 3, 4, 5];
for (let i in arrpo) {
  arrpo[i] = arrpo[i] ** 2;
}
console.log(arrpo); 

//////////////////////////////167//////////////////////////////////

////////1//////////////
for (let j=1; j<=100; j++){
	console.log(j);
}

////////2//////////////

for (let k=1; k>=100; k--){
	console.log(k);
}

////////3//////////////
for (let h=1; h<=100; h++){
	if (h%2==0){
		console.log(h);
	}
}

//////////4/////////////
let arr2 = [];
for (let i2 = 1; i2 <= 10; i2++) {
	arr2.push('x');
}
console.log(arr2); 

////////5////////////
for (let k=1; k<=10; k++){
	console.log(k);
}

//////6//////////////
let fg=[56, 86, 5435, 52, 3, 88, 6];
for (let m of fg){
	if (m>0 && m<10)
	console.log(m);
}

///////////7/////////
let w=[56, 86, 5435, 52, 5, 3, 88, 6];
for (let z of w){
	if (z==5){
	console.log("есть 5");}
}

/////8///////////////

let n=[56, 86, 5435, 52, 3, 88, 6];
let r=0;
for (let w of n){
	r+=Number(w);
}
console.log(r);

/////9//////////////

let a9 = [1, 2, 3, 4, 5];
let su = 0;
for (let i = 0; i < a9.length; i++) {
    su += a9[i] ** 2;
}

console.log("Сумма квадратов элементов массива: " + su);
////////10/////////
let arr7 = [1, 2, 3, 4, 5];
let sum7 = 0;

for (let i = 0; i < arr7.length; i++) {
    sum7 += arr7[i];
}

let average = sum7 / arr7.length;
console.log("Среднее арифметическое элементов массива: " + average);


/////////////12//////////////
let arro = [];
for (let i = 10; i >= 1; i--) {
    arro.push(i);
}
console.log(arro);

/////////////13////////////
let arri = [1, -2, 3, -4, 5];
let sum1 = 0;
for (let i = 0; i < arri.length; i++) {
    if (arri[i] > 0) {
        sum1 += arri[i];
    }
}
console.log("Сумма положительных элементов массива: " + sum1);
////////////14//////////////
/*let arr09 = [10, 20, 30, 50, 235, 3000];
for (let k = 0; k < arr09.length; k++) {
    let fd = parseInt(arr09[i].toString()[0]);
    if (fd === 1 || fd === 2 || fd === 5) {
        console.log(arr09[k]);
    }
}*/

///////////15///////////////
let ar8 = [1, 2, 3, 4, 5];
for (let i = ar8.length - 1; i >= 0; i--) {
    console.log(ar8[i]);
}
/////////////16////////////
let arr = [0, 2, 2, 3, 5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
        console.log(arr[i]);
    }
}
////////////17//////////////
/*let arr36 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr36.length; i++) {
    document.write(arr36[i] + "<br>");
}
///////////18///////////////
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    document.write("<p>" + numbers[i] + "</p>");
}
/////////////19////////////
for (let i = 0; i < daysOfWeek.length; i++) {
    if (i >= 5) {
        document.write("<b>" + daysOfWeek[i] + "</b><br>");
    } else {
        document.write(daysOfWeek[i] + "<br>");
    }
}
////////////20//////////////
let daysofweek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = new Date().getDay() - 1; // Получаем номер текущего дня (0 - понедельник, 6 - воскресенье)

for (let i = 0; i < daysofweek.length; i++) {
    if (i === day) {
        document.write("<i>" + daysofweek[i] + "</i><br>");
    } else {
        document.write(daysofweek[i] + "<br>");
    }
}*/
///////////21///////////////
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let key in obj) {
    obj[key] *= 1.1;
}
///////////22///////////////
let obj5 = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let key in obj5) {
    if (obj5[key] <= 400) {
        obj5[key] *= 1.1;
    }
}
/////////////23////////////
let arr1 = [1, 2, 3, 4, 5];
let arr3 = [6, 7, 8, 9, 10];
let newobj = {};
for (let i = 0; i < arr1.length; i++) {
    newobj[arr1[i]] = arr[i];
}

////////////24//////////////
let obj1 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let Keys = Object.keys(obj1).reduce((acc, key) => acc + parseInt(key), 0);
let summ = Object.values(obj1).reduce((acc, value) => acc + value, 0);
let result = Keys / summ;
///////////25///////////////
let obj56 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keysa = Object.keys(obj56);
let values = Object.values(obj56);
///////////26///////////////
let obj89 = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let newArray = [];
for (let key in obj89) {
    let value = obj89[key].toString();
    if (value[0] === '1' || value[0] === '2') {
        newArray.push(obj89[key]);
    }
}
/////////////27////////////
let arr76 = ['a', 'b', 'c', 'd', 'e'];
let obj76 = {};
for (let i = 0; i < arr76.length; i++) {
    obj76[i + 1] = arr76[i];
}

///////////28//////////////
let arr69 = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
let obj69 = {};
for (let i = 0; i < arr69.length; i++) {
    obj[arr69[i]] = i + 1;
}
