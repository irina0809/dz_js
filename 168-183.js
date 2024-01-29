/////////////////////////168/////////////////////////////
///////1///////////
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2]); 
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

////////2///////////
let arr8 = [[1, 2], [3, 4], [5, 6]];
console.log(arr8[0][0]+arr8[0][1]+arr8[1][0]+arr8[1][1]+arr8[2][1]+arr8[2][0]);

//////////////////////169//////////////////////////////////////////////////
let arr9 = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];

console.log(arr9[0][0][0]+arr9[0][0][1]+arr9[0][1][0]+arr9[0][1][1]+arr9[1][0][0]+arr9[1][0][1]+arr9[1][1][0]+arr9[1][1][1]);
///////////////////171////////////////////////////////////////////////////
////////////////1//////////////
let arr6 = [[1, 2, 3], [4, 5], [6]];
let r=0;
for (let subArr6 of arr6) {
	for (let elem6 of subArr6) {
			r+=elem6;
		}
	}
console.log(r);

////////////2///////////////
let arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let r3=0;
for (let subArr3 of arr3) {
	for (let elem3 of subArr3) {
		for (let elem7 of elem3)
			r3+=elem7;
		}
	}
console.log(r3);

//////////////////////////172/////////////////////////////////////
let arr63 = [[1, 2, 3], [4, 5], [6]];
let r63=0;
for (let i = 0; i < arr63.length; i++) {
	for (let j = 0; j < arr63[i].length; j++) {
			r63=r63+arr63[i][j];
		}
	}
console.log(r63);

////////////2///////////////
let arr36 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let r36=0;
for (let i = 0; i < arr36.length; i++) {
	for (let j = 0; j < arr36[i].length; j++) {
		for (let k = 0; k < arr36[i][j].length; k++) {
			r36=r36+arr36[i][j][k];
		}
		}
	}
console.log(r36);

/////////////////////173/////////////////////////////////////////////
/////////////1//////////
let yy=[];
for (let i=0; i<3; i++){
	yy[i]=[];
	for (let j=0; j<5; j++){
		yy[i].push(j + 1);
	}
}
console.log(yy);
/////////////2///////////
let bb=[];
for (let i=0; i<3; i++){
	bb[i]=[];
	for (let j=0; j<4; j++){
		bb[i].push("x");
	}
}
console.log(bb);

//////////////3////////////
let yy1=[];
for (let i=0; i<1; i++){
	yy1[i]=[];
	for (let j=0; j<3; j++){
		yy1[i][j]=[];
	for (let k=0; k<5; k++){
		yy1[i][j].push(k + 1);
		}
	}
}
console.log(yy1);

////////////////////////////////174////////////////////////////////////////
////////1/////////////
let arr1 = [];

for (let i = 0; i < 3; i++) {
	arr1[i]=[];
	for (let j = 1; j <= 5; j++) {
		arr1[i].push(j);
	}
}

console.log(arr1);

///////////2/////////
let arr66 = [];
for (let i = 0; i < 3; i++) {
	arr66[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr66[i].push(j);
	}
}
console.log(arr66);

////////3//////
let arr89 = [];
for (let i = 0; i < 3; i++) {
	arr89[i]=[];
	for (let j = 1; j <= 5; j++) {
		arr89[i].push(j);
	}
}
console.log(arr89);

////////4/////
let arr5 = [];
for (let i = 0; i < 3; i++) {
	arr5[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr5[i].push(j);
	}
}
console.log(arr5);

//////////////////////////173////////////////////////////////////////
/////////////1/////////
let arr14 = [];
let k14 = 1;
for (let i = 0; i < 4; i++) {
	arr14[i] = [];
	
	for (let j = 0; j < 2; j++) {
		arr14[i].push(k14); 
		k14++; 
	}
}
for (let i=0; i<arr14.length; i++) {
		console.log(arr14[i]);
}

/////////////2///////
let arr4 = [];
let k4 = 2;
for (let i = 0; i < 4; i++) {
	arr4[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr4[i].push(k4); 
		k4+=2; 
	}
}
for (let i=0; i<arr4.length; i++) {
		console.log(arr4[i]);
}

////////3////////////
let arr2 = [];
let k2 = 1;
for (let i = 0; i < 1; i++) {
	arr2[i] = [];
	for (let j = 0; j < 4; j++) {
		arr2[i][j] = [];
		for (let k =0; k<2; k++){
			arr2[i][j].push(k2); 
			k2++;
		}
	}
}
for (let i=0; i<arr2.length; i++) {
	for (let j=0; j<arr2[i].length; j++)
		console.log(arr2[i][j]);
}

////////4/////////////
let arr98 = [];
let k3=1;
for (let i = 0; i < 3; i++) {
	arr98[i] = [];
	for (let j = 0; j < 3; j++) {
		arr98[i][j] = k3;
		k3++;
	}
}
for (let i=0; i<arr98.length; i++) {
	console.log(arr98[i]);
}

////////////5/////////////////
let arr52 = [];
let k52 = 1;
for (let i = 0; i < 3; i++) {
	arr52[i] = [];
	for (let j = 0; j < 3; j++) {
		arr52[i][j] = k52;
		k52++;
	}
}
for (let i=0; i<arr52.length; i++) {
	console.log(arr52[i]);
}

//////////////6///////////////
let arr25 = [];
let k25 = 1;

for (let i = 0; i < 3; i++) {
	arr25[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr25[i][j] = k25;
		k25++;
	}
}

for (let i=0; i<arr25.length; i++) {
	console.log(arr25[i]);
}

/////////7////////////
let arr69 = [];
let k69=1;

for (let i = 0; i < 3; i++) {
	arr69[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr69[i][j] = k69;
		k69++;
	}
}
for (let i=0; i<arr69.length; i++) {
	console.log(arr69[i]);
}


//////////8/////////////
let arr39 = [];
let k39=1;
for (let i = 0, k = 1; i < 3; i++) {
	arr39[i] = [];
	for (let j = 0; j < 3; j++) {
		arr39[i][j] = k39;
		k39++;
	}
}
for (let i=0; i<arr39.length; i++) {
	console.log(arr39[i]);
}

///////////////9/////////
let arr67 = [];
let k67=1;
for (let i = 0, k = 1; i < 3; i++) {
	arr67[i] = [];
	for (let j = 0; j < 3; j++) {
		arr67[i][j] = k67;
		k67++;
	}
}
for (let i=0; i<arr67.length; i++) {
	console.log(arr67[i]);
}

///////////10/////////////
let arr76 = [];
let k76=1;
for (let i = 0, k = 1; i < 3; i++) {
	arr76[i] = [];
	for (let j = 0; j < 3; j++) {
		arr76[i][j] = k76;
		k76++;
	}
}
for (let i=0; i<arr76.length; i++) {
	console.log(arr76[i]);
}

/////////11////////////////
let arr33 = [];
for (let i = 0, k33 = 1; i < 3; i++) {
	arr33[i] = [];
	for (let j = 0; j < 3; j++) {
		arr33[i][j] = k33;
		k33++;
	}
}
for (let i=0; i<arr33.length; i++) {
	console.log(arr33[i]);
}

/////////////////176///////////////////////////////////////////////////////
/////////////1/////////
let obj6 = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
console.log(obj6['key1'].key1+obj6['key1'].key2+obj6['key1'].key3+obj6['key2'].key1+obj6['key2'].key2+obj6['key2'].key3+obj6['key3'].key1+obj6['key3'].key2+obj6['key3'].key3);

/////////2////////
let obj7 = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}

console.log(obj7[2][2], " ", obj7[3][1]);

//////////////////////////////177/////////////////////////////////////////////////
///////1//////////////
let obj3 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let f=0;
for (let key in obj3) {
	let subObj = obj3[key];
	
	for (let subKey in subObj) {
		f+=subObj[subKey];
	}
}
console.log (f);
/////////////2/////
let obj77 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
/*
let f1=0;
for (let key in obj77) {
	let subObj = obj77[key];
	for (let subKey in subObj) {
		let subObj = obj77[key][subKey];
		for (let subkey in subObj) {
			f1+=subObj[key][subKey][subkey];
		}
	}
}
console.log (f1);*/

/////////////178////////////////////////////////////////////////
let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][0]);

///////////179//////////////////////////////////////////////////
//////1//////////
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
for (let group in data) {
	for (let name of data[group]) {
		console.log(name);
	}
}

//////2///////////
let data1 = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];
for (let group1 of data1) {
		console.log(group1);
}

///////////////////////////180/////////////////////////////////////////////
/////////1////////
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let user of employees) {
	console.log(user.name + '-' + user.salary);
}
////////2/////////
let employees2 = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let g=0;
for (let user of employees2) {
	g+=user.salary;
	
}
console.log(g);
/////////3////////
let employees3 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let re=0;
for ( let one of employees3){
	if (one.age>=30){
		re+=one.salary;
	}
}
console.log(re);

/////////////////////////181/////////////////////////////////////
////////////1/////////
let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11
console.log (months[lang][month])
/////////////2//////
let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
let year = '2018'; // может быть или 'ru' или 'en'
let month1 = 11   // число от 0 до 11
let delo=1;
let day=29;
console.log(affairs[year][month1][day][delo]);
//////////3/////////
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

/////////////4/////////
let obj2 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key3 = 'key2';
let key4 = 'key4';
console.log(obj2.key2.key4);
/////////////////5////////
let obj9 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key5 = 'key2';
let key6 = 'key4';
console.log(obj9.key2.key4);
/////////6////////////
let obj12 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key12 = 'key2';
console.log(obj12['key2']['key4']);

////////////////////182/////////////////////////////////////////////
/////////1//////////
let employees78 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];
employees78.push({
	name: 'name4',
	salary: '900',
	age: 60,
});
console.log(employees78);

////////////////////////////////////183/////////////////////////////////
////////////1-3///////////
/*let affairs1 = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}
affairs1.2019-12-29.push('data45');
affairs1.2019-12-31=[]
affairs1.2019-12-31.push('data490');

*/
////////////4-6//////////////
let studentss = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

studentss.group1.subgroup11.push("student555")
studentss.group1.subgroup13=[];
studentss.group4=[];
studentss.group4.subgroup41=[];
studentss.group4.subgroup41.push("student809")
studentss.group4.subgroup41.push("student589")
