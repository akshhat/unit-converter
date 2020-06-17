let userSI = document.querySelector('#SI');
let mUnits = document.querySelectorAll('.m-units');
let lUnits = document.querySelectorAll('.l-units');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let unit1 = document.querySelector('#unit1');
let unit2 = document.querySelector('#unit2');

Array.from(mUnits).forEach((option) => {
	option.style.display = 'none';
});

Array.from(lUnits).forEach((option) => {
	option.style.display = 'block';
});

userSI.addEventListener('input', unitSelector);
input1.addEventListener('input', display1);
input2.addEventListener('input', display2);
unit1.addEventListener('input', displayUnit1);
unit2.addEventListener('input', displayUnit2);

function unitSelector(e) {
	if(e.target.value === 'Length') {
		Array.from(mUnits).forEach((option) => {
			option.style.display = 'none';
		});

		Array.from(lUnits).forEach((option) => {
			option.style.display = 'block';
		});

		document.getElementById('unit1').selectedIndex = '1';
		document.getElementById('unit2').selectedIndex = '1';
	} else {
		Array.from(mUnits).forEach((option) => {
			option.style.display = 'block';
		});

		Array.from(lUnits).forEach((option) => {
			option.style.display = 'none';
		});

		document.getElementById('unit1').selectedIndex = '13';
		document.getElementById('unit2').selectedIndex = '13';
	}
}

function display1(e) {
	let inputValue = e.target.value;
	let unit1 = document.querySelector('#unit1').value;
	let unit2 = document.querySelector('#unit2').value;
	let result = unitChange(unit1, unit2, inputValue);
	document.querySelector('#input2').value = result;
}

function display2(e) {
	let inputValue = e.target.value;
	let unit1 = document.querySelector('#unit2').value;
	let unit2 = document.querySelector('#unit1').value;
	let result = unitChange(unit1, unit2, inputValue);
	document.querySelector('#input1').value = result;
}

function displayUnit1(e) {
	let unit1 = document.querySelector('#unit2').value; 
	let unit2 = e.target.value;
	let inputValue = document.querySelector('#input2').value;
	let result = unitChange(unit1, unit2, inputValue);
	document.querySelector('#input1').value = result;
}

function displayUnit2(e) {
	let unit1 = document.querySelector('#unit1').value;
	let unit2 = e.target.value;
	let inputValue = document.querySelector('#input1').value;
	let result = unitChange(unit1, unit2, inputValue);
	document.querySelector('#input2').value = result;
}

function unitChange(unit1, unit2, inputValue) {
	let measure = {
		kilometre: {
			kilometre: (x) => x * 1,
			metres: (x) => x * 1000,
			centimetres: (x) => x * 100000,
			Millimetre: (x) => x * 1000000,
			micrometre: (x) => x * Math.pow(10, 9),
			Nanometre: (x) => x * Math.pow(10, 12),
			Mile: (x) => x / 1.609,
			Yard: (x) => x * 1094,
			Foot: (x) => x * 3281,
			Inch: (x) => x * 39370,
			'Nautical mile': (x) => x / 1.852
		},
		metres: {
			kilometre: (x) => x / 1000,
			metres: (x) => x * 1,
			centimetres: (x) => x * 100,
			Millimetre: (x) => x * 1000,
			micrometre: (x) => x * Math.pow(10, 6),
			Nanometre: (x) => x * Math.pow(10, 9),
			Mile: (x) => x / 1609,
			Yard: (x) => x * 1.094,
			Foot: (x) => x * 3.281,
			Inch: (x) => x * 39.37,
			'Nautical mile': (x) => x / 1852
		},
		centimetres: {
			kilometre: (x) => x / Math.pow(10, 5),
			metres: (x) => x / 100,
			centimetres: (x) => x * 1,
			Millimetre: (x) => x * 10,
			micrometre: (x) => x * Math.pow(10, 4),
			Nanometre: (x) => x * Math.pow(10, 7),
			Mile: (x) => x / 160934,
			Yard: (x) => x / 91.44,
			Foot: (x) => x / 30.48,
			Inch: (x) => x / 2.54,
			'Nautical mile': (x) => x / 185200
		},
		Millimetre: {
			kilometre: (x) => x / Math.pow(10, 6),
			metres: (x) => x / 1000,
			centimetres: (x) => x / 10,
			Millimetre: (x) => x * 1,
			micrometre: (x) => x * Math.pow(10, 3),
			Nanometre: (x) => x * Math.pow(10, 6),
			Mile: (x) => x / Math.pow(1.609, 6),
			Yard: (x) => x / 914,
			Foot: (x) => x / 305,
			Inch: (x) => x / 25.4,
			'Nautical mile': (x) => x / Math.pow(1.852, 6)
		},
		micrometre: {
			kilometre: (x) => x / Math.pow(10, 9),
			metres: (x) => x / Math.pow(10, 6),
			centimetres: (x) => x / 10000,
			Millimetre: (x) => x * 1000,
			micrometre: (x) => x * 1,
			Nanometre: (x) => x * Math.pow(10, 3),
			Mile: (x) => x / Math.pow(1.609, 9),
			Yard: (x) => x / 914400,
			Foot: (x) => x / 304800,
			Inch: (x) => x / 25400,
			'Nautical mile': (x) => x / Math.pow(1.852, 9)
		},
		Nanometre: {
			kilometre: (x) => x / Math.pow(10, 12),
			metres: (x) => x / Math.pow(10, 9),
			centimetres: (x) => x / Math.pow(10, 7),
			Millimetre: (x) => x * Math.pow(10, 6),
			micrometre: (x) => x / 1000,
			Nanometre: (x) => x * 1,
			Mile: (x) => x / Math.pow(1.609, 12),
			Yard: (x) => x / Math.pow(9.144, 8),
			Foot: (x) => x / Math.pow(3.048, 8),
			Inch: (x) => x / Math.pow(2.54, 7),
			'Nautical mile': (x) => x / Math.pow(1.852, 12)
		},
		Mile: {
			kilometre: (x) => x * 1.609,
			metres: (x) => x * 1609,
			centimetres: (x) => x * 160934,
			Millimetre: (x) => x * Math.pow(1.609, 6),
			micrometre: (x) => x * Math.pow(1.609, 9),
			Nanometre: (x) => x * Math.pow(1.609, 12),
			Mile: (x) => x / 1,
			Yard: (x) => x * 1760,
			Foot: (x) => x * 5280,
			Inch: (x) => x * 63360,
			'Nautical mile': (x) => x / 1.151
		},
		Yard: {
			kilometre: (x) => x / 1094,
			metres: (x) => x / 1.094,
			centimetres: (x) => x * 91.44,
			Millimetre: (x) => x * 914,
			micrometre: (x) => x * 914400,
			Nanometre: (x) => x * Math.pow(9.144, 8),
			Mile: (x) => x / 1760,
			Yard: (x) => x * 1,
			Foot: (x) => x * 3,
			Inch: (x) => x * 36,
			'Nautical mile': (x) => x / 2025
		},
		Foot: {
			kilometre: (x) => x / 3281,
			metres: (x) => x / 3.281,
			centimetres: (x) => x * 30.48,
			Millimetre: (x) => x * 305,
			micrometre: (x) => x * 304800,
			Nanometre: (x) => x * Math.pow(3.048, 8),
			Mile: (x) => x / 5280,
			Yard: (x) => x / 3,
			Foot: (x) => x,
			Inch: (x) => x * 12,
			'Nautical mile': (x) => x / 6076
		},
		Inch: {
			kilometre: (x) => x / 39370,
			metres: (x) => x / 39.37,
			centimetres: (x) => x * 2.54,
			Millimetre: (x) => x * 25.4,
			micrometre: (x) => x * 25400,
			Nanometre: (x) => x * Math.pow(2.54, 7),
			Mile: (x) => x / 63360,
			Yard: (x) => x / 36,
			Foot: (x) => x / 12,
			Inch: (x) => x,
			'Nautical mile': (x) => x / 72913
		},
		'Nautical mile': {
			kilometre: (x) => x * 1.852,
			metres: (x) => x * 1852,
			centimetres: (x) => x * 185200,
			Millimetre: (x) => x * Math.pow(1.852, 6),
			micrometre: (x) => x * Math.pow(1.852, 9),
			Nanometre: (x) => x * 1.852 * Math.pow(10, 12),
			Mile: (x) => x * 1.151,
			Yard: (x) => x * 2025,
			Foot: (x) => x * 6076,
			Inch: (x) => x * 72913,
			'Nautical mile': (x) => x
		},
		tonnes: {
			tonnes: (x) => x,
			Kilogram: (x) => x * 1000,
			Gram: (x) => x * Math.pow(10, 6),
			Milligram: (x) => x * Math.pow(10, 9),
			Microgram: (x) => x * Math.pow(10, 12),
			'Imperial ton': (x) => x / 1.016,
			'US ton': (x) => x * 1.102,
			stone: (x) => x * 157,
			Pound: (x) => x * 2205,
			Ounce: (x) => x * 35274
		},
		Kilogram: {
			tonnes: (x) => x / 1000,
			Kilogram: (x) => x,
			Gram: (x) => x * Math.pow(10, 3),
			Milligram: (x) => x * Math.pow(10, 6),
			Microgram: (x) => x * Math.pow(10, 9),
			'Imperial ton': (x) => x / 1016,
			'US ton': (x) => x / 907,
			stone: (x) => x / 6.35,
			Pound: (x) => x * 2.205,
			Ounce: (x) => x * 35.274
		},
		Gram: {
			tonnes: (x) => x / Math.pow(10, 6),
			Kilogram: (x) => x / 1000,
			Gram: (x) => x,
			Milligram: (x) => x * Math.pow(10, 3),
			Microgram: (x) => x * Math.pow(10, 6),
			'Imperial ton': (x) => x / Math.pow(1.016, 6),
			'US ton': (x) => x / 907185,
			stone: (x) => x / 6350,
			Pound: (x) => x / 454,
			Ounce: (x) => x / 28.35
		},
		Milligram: {
			tonnes: (x) => x / Math.pow(10, 9),
			Kilogram: (x) => x / Math.pow(10, 6),
			Gram: (x) => x / 1000,
			Milligram: (x) => x,
			Microgram: (x) => x * Math.pow(10, 3),
			'Imperial ton': (x) => x / Math.pow(1.016, 9),
			'US ton': (x) => x / Math.pow(9.072, 8),
			stone: (x) => x / Math.pow(6.35, 6),
			Pound: (x) => x / 453592,
			Ounce: (x) => x / 28350
		},
		Microgram: {
			tonnes: (x) => x / Math.pow(10, 12),
			Kilogram: (x) => x / Math.pow(10, 9),
			Gram: (x) => x / Math.pow(10, 6),
			Milligram: (x) => x / 1000,
			Microgram: (x) => x,
			'Imperial ton': (x) => x / Math.pow(1.016, 12),
			'US ton': (x) => x / Math.pow(9.072, 11),
			stone: (x) => x / Math.pow(6.35, 9),
			Pound: (x) => x / Math.pow(4.536, 8),
			Ounce: (x) => x / Math.pow(2.835, 7)
		},
		'Imperial ton': {
			tonnes: (x) => x * 1.016,
			Kilogram: (x) => x * 1016,
			Gram: (x) => x * Math.pow(1.016, 6),
			Milligram: (x) => x * Math.pow(1.016, 9),
			Microgram: (x) => x,
			'Imperial ton': (x) => x / Math.pow(1.016, 12),
			'US ton': (x) => x / Math.pow(9.072, 11),
			stone: (x) => x / Math.pow(6.35, 9),
			Pound: (x) => x / Math.pow(4.536, 8),
			Ounce: (x) => x / Math.pow(2.835, 7)
		},
		// 'US ton'
		// stone
		// Pound
		// Ounce
	}

	return measure[unit1][unit2](inputValue);
}