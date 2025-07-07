
const arrManufacturerHash = [

{ id: 'carparts' 				, title: 'Автозапчастини' 		, },
{ id: 'car' 					, title: 'Автомобілі' 			, },
{ id: 'electronic' 				, title: 'Електроніка' 			, }, 
{ id: 'eltech' 					, title: 'Електротехніка' 		, }, 
{ id: 'tools' 					, title: 'Інструмент' 			, }, 
{ id: 'pc' 						, title: 'Комп\'ютери' 			, }, 
{ id: 'hhtech' 					, title: 'Побутова техніка' 	, }, 	// household
{ id: 'spectech' 				, title: 'Спец.техніка' 		, }, 
{ id: 'food' 					, title: 'Харчі' 				, }, 






];



let objManufacturerHash = {};
arrManufacturerHash.forEach( k => {
	objManufacturerHash[ k.id ] = k;
});













const arrManufacturer = [





// https://avto.pro/makers/







/*


title 		: 'Aiwa' 		, wiki: { ru: 'Aiwa', },
title 		: 'Akai' 		, wiki: { ru: 'Akai', },
title 		: 'Bosch' 		, wiki: { ru: 'Robert_Bosch_GmbH', },
title 		: 'Casio' 		, wiki: { ru: 'Casio', },
title 		: 'Citizen' 	, wiki: { ru: 'Citizen', },
title 		: 'Dell' 		, wiki: { ru: 'Dell', },
title 		: 'Fujitsu' 	, wiki: { ru: 'Fujitsu', },
title 		: 'Funai' 		, wiki: { ru: 'Funai', },
title 		: 'Hitachi' 	, wiki: { ru: 'Hitachi', },
title 		: 'Huawei' 		, wiki: { ru: 'Huawei', },
title 		: 'Kenwood' 	, wiki: { ru: 'Kenwood_Corporation', },
title 		: 'LG' 			, wiki: { ru: 'LG_Electronics', },
title 		: 'Lenovo' 		, wiki: { ru: 'Lenovo', },
title 		: 'Olivetti' 	, wiki: { ru: 'Olivetti', },
title 		: 'Panasonic' 	, wiki: { ru: 'Panasonic', },
title 		: 'Pioneer' 	, wiki: { ru: 'Pioneer_Corporation', },
title 		: 'Samsung' 	, wiki: { ru: 'Samsung', },
title 		: 'Sharp' 		, wiki: { ru: 'Sharp', },
title 		: 'Siemens' 	, wiki: { ru: 'Siemens', },
title 		: 'Sony' 		, wiki: { ru: 'Sony', },
title 		: 'Toshiba' 	, wiki: { ru: 'Toshiba', },
title 		: '', wiki: { ru: '', },
title 		: '', wiki: { ru: '', },
title 		: '', wiki: { ru: '', },
title 		: '', wiki: { ru: '', },
title 		: '', wiki: { ru: '', },
title 		: '', wiki: { ru: '', },
title 		: '', wiki: { ru: '', },
title 		: '', wiki: { ru: '', },
title 		: '', wiki: { ru: '', },
title 		: '', wiki: { ru: '', },




*/



/*


{
	id 			: '',
	title 		: '',
	year 		: 19, 	// рік заснування
	year_d 		: 19, 	// рік розформування
	country 	: '', 	// країна
	descr 		: '', 	// опис
	parent 		: '', 	// батьківська організація
	site 		: [ 	// сайти
		{ title: '' 			, href: '' 	, },
		{ title: 'wiki.ru' 		, href: '' 	, },
		{ title: 'avto.pro' 	, href: '' 	, },
	],

	models: [], // якщо є декілька моделей ( наприклад для авто )

	hash: {

		agricultural: 1, 	// сільгосп
		air: 1, 			// повітряний
		army: 1, 			// армія
		bicycle: 1, 		// велосипед
		buldozer: 1, 		// бульдозер
		bus: 1, 			// автобус
		car: 1, 			// автомобілі легкові
		combine: 1, 		// комбайн
		electronics: 1, 	// електроніка
		everyday_life: 1, 	// побут
		excavator: 1, 		// экскаватор
		furniture: 1, 		// меблі
		ground: 1, 			// наземний
		helicopter: 1, 		// гелікоптер
		freight: 1, 		// вантажний
		moto: 1, 			// мотоцикли
		oil: 1, 			// масло
		parts: 1, 			// запчастини
		passenger: 1, 		// пасажирський
		pc: 1, 				// компьютерний
		phone: 1, 			// телефони
		plane: 1, 			// літак
		plumbing: 1, 		// сантехніка
		space: 1, 			// космос	
		technics: 1, 		// техніка
		tractor: 1, 		// трактор
		transport: 1, 		// транспорт
		trolleybus: 1, 		// троллейбус
		tires: 1, 			// шины
		underground: {}, 	// підземний
		water: {}, 			// вода
		weapon: {}, 		// зброя

	},

	note 		: '', 	// заметка
},




*/









{
	id: '555', title: '555', country: { jpn: 1, }, year: 1960, parent: 'sankei_industry',
	hash: { carparts: 1, },
	internet: { avtopro: '555/', }, 					//	https://avtopro.ua/makers/febi/
},
{
	id: 'abs', title: 'ABS', country: { nld: 1, }, year: 1978,
	hash: { carparts: 1, },
	internet: { avtopro: 'abs/', },
},
{
	id: 'adriauto', title: 'Adriauto', country: { ita: 1, }, year: 1984,
	hash: { carparts: 1, },
	internet: { avtopro: 'adriauto/', },
},
{
	id: 'alfa_romeo', title: 'Alfa Romeo', country: { ita: 1, }, year: 1910,
	hash: { car: 1, },
	internet: { wiki_ua: 'Alfa_Romeo', },     				 // https://uk.wikipedia.org/wiki/
},
{
	id: 'arcelik', title: 'Arcelik A.S.', country: { tur: 1, }, year: 1954,
	hash: { hhtech: 1, }, 
	internet: { wiki_ua: 'Ar%C3%A7elik', },
},
{
	id: 'aston_martin', title: 'Aston Martin', country: { gbr: 1, }, year: 1913,
	hash: { car: 1, },
	internet: { wiki_ua: 'Aston_Martinatti', },
},
{
	id: 'audi', title: 'Audi', country: { deu: 1, }, year: 1909,
	parent: 'vag',	
	hash: { car: 1, },
	internet: { wiki_ua: 'Audi', },
},
{
	id: 'beko', title: 'Beko', country: { tur: 1, }, year: 1954, parent: 'arcelik',
	hash: { hhtech: 1, }, 
	internet: { wiki_ua: 'BEKO', },
},
{
	id: 'beru', title: 'Beru', country: { deu: 1, }, year: 1912, parent: 'arcelik', parent: 'borg_warrner',
	hash: { carparts: 1, }, 
	internet: { avtopro: 'beru/', },
},
{
	id: 'bilstein', title: 'Bilstein', country: { deu: 1, }, year : 1873,
	hash: { carparts: 1, },
	internet: { avtopro: 'bilstein/', },
},
{
	id: 'blue_print', title: 'Blue Print', country: { gbr: 1, }, year: 1983, parent: 'ferdinand_bilstein',
	hash: { carparts: 1, },
	internet 	: { avtopro: 'blue-print/',  },
},
{
	id: 'bmw', title: 'BMW', country: { deu: 1, }, year: 1916,
	hash: { car: 1, },
	internet: { wiki_ua: 'BMW', },
},
{
	id: 'borg_warrner', title: 'BorgWarner Inc', country: { usa: 1, }, year: 1880, 
	hash: { carparts: 1, },
	internet: { wiki_ua: 'BorgWarner', avtopro: 'borg-warner/', },
},
{
	id: 'bosch', title: 'Bosch', country: { deu: 1, }, year: 1886, 
	hash: { eltech: 1, hhtech: 1, carparts: 1, tools: 1, }, 			// phone: 1, 
	internet: { wiki_ua: 'Robert_Bosch_GmbH', avtopro: 'bosch/', },
},
{
	id: 'bentley', title: 'Bentley', country: { gbr: 1, }, year: 1919,
	hash: { car: 1, },
	internet: { wiki_ua: 'Bentley', },
},
{
	id: 'bugatti', title: 'Bugatti', country: { fra: 1, }, year: 1909,
	hash: { car: 1, },
	internet: { wiki_ua: 'Bugatti', },
},
{
	id: 'buick', title: 'Buick', country: { usa: 1, }, year: 1899,
	hash: { car: 1, },
	internet: { wiki_ua: 'Buick', },
},
{
	id: 'byd', title: 'BYD', country: { chn: 1, }, year: 2003,
	hash: { car: 1, },
	internet: { wiki_ua: 'BYD_Auto', },
},
{
	id: 'cadillac', title: 'Cadillac', country: { usa: 1, }, year: 1902,
	parent: 'gm',
	hash: { car: 1, },
	internet: { wiki_ua: 'Cadillac', },
},
{
	id: 'candy', title: 'Candy', country: { ita: 1, }, year: 1945,
	hash: { hhtech: 1, },
	internet: { wiki_ua: 'Candy', },
},
{
	id: 'chery', title: 'Chery', country: { chn: 1, }, year: 1997,
	hash: { car: 1, },
	internet: { wiki_ua: 'Chery_Automobile', },
},
{
	id: 'chevrolet', title: 'Chevrolet', country: { usa: 1, }, year: 1911,
	parent: 'gm',
	hash: { car: 1, },
	internet: { wiki_ua: 'Chevrolet', },
},
{
	id: 'citroen', title: 'Citroen', country: { fra: 1, }, year: 1919,
	hash: { car: 1, },
	internet: { wiki_ua: 'Citro%C3%ABn', },
},
{
	id: 'chrysler', title: 'Chrysler', country: { usa: 1, }, year: 1925,
	hash: { car: 1, },
	internet: { wiki_ua: 'Chrysler', },
},
{
	id: 'dacia', title: 'Dacia', country: { rou: 1, }, year: 1966,
	hash: { car: 1, },
	internet: { wiki_ua: 'Dacia', },
},
{
	id: 'daewoo', title: 'Daewoo', country: { kor: 1, }, year: 1967,
	hash: { car: 1, },
	internet: { wiki_ua: 'Daewoo', },
},
{
	id: 'daihatsu', title: 'Daihatsu', country: { jpn: 1, }, year: 1951,
	hash: { car: 1, },
	internet: { wiki_ua: 'Daihatsu', },
},
{
	id: 'dodge', title: 'Dodge', country: { usa: 1, }, year: 1900,
	parent: 'chrysler',
	hash: { car: 1, },
	internet: { wiki_ua: 'Dodge', },
},
{
	id: 'electrolux', title: 'Electrolux', country: { swe: 1, }, year: 1919, 
	hash: { hhtech: 1, }, 
	internet: { wiki_ua: 'Electrolux', },
},
{
	id: 'febi', title: 'Febi', country: { deu: 1, }, year: 1923, parent: 'ferdinand_bilstein',
	hash: { carparts: 1, },
	internet: { avtopro: 'febi/', },
},
{
	id: 'ferdinand_bilstein', title: 'Ferdinand Bilstein GmbH', country: { deu: 1, }, year : 1844,
	hash: { carparts: 1, },
	internet: { 
		official: 'https://bilsteingroup.com/ua/pro-kompaniju/istorija/',  						// рік реєстрації Febi 1923
		wiki_ua: 'Ferdinand_Bilstein_(%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D1%96%D1%8F)', 
	},
},
{
	id: 'ferrari', title: 'Ferrari', country: { ita: 1, }, year: 1928,
	hash: { car: 1, },
	internet: { wiki_ua: 'Ferrari', },
},
{
	id: 'fiat', title: 'Fiat', country: { ita: 1, }, year: 1899,
	hash: { car: 1, },
	internet: { wiki_ua: 'Fiat', },
},
{
	id: 'ford', title: 'Ford', country: { usa: 1, }, year: 1903,
	hash: { car: 1, },
	internet: { wiki_ua: 'Ford_Motor_Company', },
},
{
	id: 'geely', title: 'Geely', country: { chn: 1, }, year: 1998,
	hash: { car: 1, },
	internet: { wiki_ua: 'Geely_Auto', },
},
{
	id: 'gm', title: 'General Motors', country: { usa: 1, }, year: 1908,
	hash: { car: 1, },
	internet: { wiki_ua: 'General_Motors', },
},
{
	id: 'gmc', title: 'GMC', country: { usa: 1, }, year: 1911,
	parent: 'gm',
	hash: { car: 1, },
	internet: { wiki_ua: 'GMC', },
},
{
	id: 'gorenje', title: 'Gorenje', country: { svn: 1, }, year: 1950, 
	hash: { hhtech: 1, }, 
	internet: { wiki_ua: 'Gorenje', },
},
{
	id: 'hitachi', title: 'Hitachi', country: { jpn: 1, }, year: 1910, 
	hash: { electronic: 1, eltech: 1, hhtech: 1, tools: 1, spectech: 1, },
	internet: { wiki_ua: 'Hitachi', },
},
{
	id: 'honda', title: 'Honda', country: { jpn: 1, }, year: 1948,
	hash: { car: 1, },
	internet: { wiki_ua: 'Honda', },
},
{
	id: 'hummer', title: 'Hummer', country: { usa: 1, }, year: 1992,
	parent: 'gm',
	hash: { car: 1, },
	internet: { wiki_ua: 'Hummer', },
},
{
	id: 'hyundai', title: 'Hyundai', country: { kor: 1, }, year: 1967,
	hash: { car: 1, },
	internet: { wiki_ua: 'Hyundai_Motor_Company', },
},
{
	id: 'indesit', title: 'Indesit', country: { ita: 1, }, year: 1975, 
	hash: { hhtech: 1, }, 
	internet: { wiki_ua: 'Indesit', },
},
{
	id: 'infiniti', title: 'Infiniti', country: { jpn: 1, }, year: 1989,
	parent: 'nissan',
	hash: { car: 1, },
	internet: { wiki_ua: 'Infiniti', },
},
{
	id: 'isuzu', title: 'Isuzu', country: { jpn: 1, }, year: 1916,
	hash: { car: 1, },
	internet: { wiki_ua: 'Isuzu', },
},
{
	id: 'jaguar', title: 'Jaguar', country: { gbr: 1, }, year: 1922,
	hash: { car: 1, },
	internet: { wiki_ua: 'Jaguar_Cars', },
},
{
	id: 'jeep', title: 'Jeep', country: { usa: 1, }, year: 1941,
	hash: { car: 1, },
	internet: { wiki_ua: 'Jeep', },
},
{
	id: 'kia', title: 'Kia', country: { kor: 1, }, year: 1944,
	hash: { car: 1, },
	internet: { wiki_ua: 'Kia', },
},
{
	id: 'lamborghini', title: 'Lamborghini', country: { ita: 1, }, year: 1900,
	hash: { car: 1, },
	internet: { wiki_ua: 'Lamborghini', },
},
{
	id: 'lancia', title: 'Lancia', country: { ita: 1, }, year: 1906,
	hash: { car: 1, },
	internet: { wiki_ua: 'Lancia', },
},
{
	id: 'lg', title: 'LG', country: { kor: 1, }, year: 1958, 
	hash: { electronic: 1, hhtech: 1, },
	internet: { wiki_ua: 'LG_Electronics', },
},
{
	id: 'lexus', title: 'Lexus', country: { jpn: 1, }, year: 1989,
	parent: 'toyota',
	hash: { car: 1, },
	internet: { wiki_ua: 'Lexus', },
},
{
	id: 'liebherr', title: 'Liebherr', country: { deu: 1, }, year: 1949, 
	hash: { hhtech: 1, spectech: 1, },
	internet: { wiki_ua: 'Liebherr', },
},
{
	id: 'lincoln', title: 'Lincoln', country: { usa: 1, }, year: 1917,
	parent: 'ford',
	hash: { car: 1, },
	internet: { wiki_ua: 'Lincoln_Motor_Company', },
},
{
	id: 'maserati', title: 'Maserati', country: { ita: 1, }, year: 1914,
	hash: { car: 1, },
	internet: { wiki_ua: 'Maserati', },
},
{
	id: 'maybach', title: 'Maybach', country: { deu: 1, }, year: 1909, year_d: 2012,
	hash: { car: 1, },
	internet: { wiki_ua: 'Maybach', },
},
{
	id: 'mazda', title: 'Mazda', country: { jpn: 1, }, year: 1920,
	hash: { car: 1, },
	internet: { wiki_ua: 'Mazda', },
},
{
	id: 'mercedes', title: 'Mercedes', country: { deu: 1, }, year: 1926,
	hash: { car: 1, },
	internet: { wiki_ua: 'Mercedes-Benz', },
},
{
	id: 'mini', title: 'Mini', country: { gbr: 1, }, year: 1959,
	hash: { car: 1, },
	internet: { wiki_ua: 'Mini', },
},
{
	id: 'mitsubishi', title: 'Mitsubishi', country: { jpn: 1, }, year: 1870,
	hash: { car: 1, },
	internet: { wiki_ua: 'Mitsubishi', },
},
{
	id: 'nissan', title: 'Nissan', country: { jpn: 1, }, year: 1933,
	hash: { car: 1, },
	internet: { wiki_ua: 'Nissan', },
},
{
	id: 'opel', title: 'Opel', country: { deu: 1, }, year: 1862,
	hash: { car: 1, },
	internet: { wiki_ua: 'Opel', },
},
{
	id: 'peugeot', title: 'Peugeot', country: { fra: 1, }, year: 1810,
	hash: { car: 1, },
	internet: { wiki_ua: 'Peugeot', },
},
{
	id: 'pontiac', title: 'Pontiac', country: { usa: 1, }, year: 1926, year_d: 2010,
	parent: 'gm',
	hash: { car: 1, },
	internet: { wiki_ua: 'Pontiac', },
},
{
	id: 'porsche', title: 'Porsche', country: { deu: 1, }, year: 1931,
	hash: { car: 1, },
	internet: { wiki_ua: 'Porsche', },
},
{
	id: 'renault', title: 'Renault', country: { fra: 1, }, year: 1898,
	hash: { car: 1, },
	internet: { wiki_ua: 'Renault', },
},
{
	id: 'rolls_royce', title: 'Rolls-Royce', country: { gbr: 1, }, year: 1906,
	hash: { car: 1, },
	internet: { wiki_ua: 'Rolls-Royce_Limited', },
},
{
	id: 'rover', title: 'Rover', country: { gbr: 1, }, year: 1896, year_d: 2005,
	hash: { car: 1, },
	internet: { wiki_ua: 'Rolls-Royce_Limited', },
},
{
	id: 'saab', title: 'Saab', country: { swe: 1, }, year: 1937,
	hash: { car: 1, },
	internet: { wiki_ua: 'Saab_Automobile', },
},
{
	id: 'samsung', title: 'Samsung', country: { kor: 1, }, year: 1938,
	hash: { electronic: 1, hhtech: 1, car: 1, },
	internet: { wiki_ru: 'Samsung', avtopro: 'samsung/', },
},
{
	id: 'sankei_industry', title: 'Sankei Industry Co.Ltd', country: { jpn: 1, }, year: 1960,
	hash: { carparts: 1, },
	internet: { official: 'http://www.sankei-555.com/', },
},
{
	id: 'seat', title: 'Seat', country: { esp: 1, }, year: 1950,
	parent: 'vag',
	hash: { car: 1, },
	internet: { wiki_ua: 'SEAT', },
},
{
	id: 'sharp', title: 'Sharp', country: { jpn: 1, }, year: 1912, 
	hash: { hhtech: 1, }, 
	internet: { wiki_ua: 'Sharp', },
},
{
	id: 'siemens', title: 'Siemens', country: { deu: 1, }, year: 1847, 
	hash: { hhtech: 1, }, 
	internet: { wiki_ua: 'Siemens', },
},
{
	id: 'skoda', title: 'Skoda', country: { cze: 1, }, year: 1895,
	hash: { car: 1, },
	internet: { wiki_ua: '%C5%A0koda_Auto', },
},
{
	id: 'subaru', title: 'Subaru', country: { jpn: 1, }, year: 1954,
	hash: { car: 1, },
	internet: { wiki_ua: 'Subaru', },
},
{
	id: 'suzuki', title: 'Suzuki', country: { jpn: 1, }, year: 1909,
	hash: { car: 1, },
	internet: { wiki_ua: 'Suzuki_Motor_Corporation', },
},
{
	id: 'swag', title: 'Swag', country: { deu: 1, }, year: 1954, parent: 'ferdinand_bilstein',
	hash: { carparts: 1, },
	internet: { avtopro: 'swag/', },
},
{
	id: 'toyota', title: 'Toyota', country: { jpn: 1, }, year: 1937,
	hash: { car: 1, },
	internet: { wiki_ua: 'Toyota', },
},
{
	id: 'vag', title: 'VAG', country: { deu: 1, }, year: 1937,
	hash: { car: 1, },
	internet: { wiki_ua: 'Volkswagen_AG', },
},
{
	id: 'vestfrost', title: 'Vestfrost', country: { dnk: 1, }, year: 1963, 
	hash: { hhtech: 1, }, 
	internet: { wiki_ru: 'Vestfrost', },
},
{
	id: 'volkswagen', title: 'Volkswagen', country: { deu: 1, }, year: 1937,
	parent: 'vag',
	hash: { car: 1, },
	internet: { wiki_ua: 'Volkswagen', },
},
{
	id: 'volvo', title: 'Volvo', country: { swe: 1, }, year: 1927,
	hash: { car: 1, },
	internet: { wiki_ua: 'Volvo', },
},
{
	id: 'whirlpool', title: 'Whirlpool', country: { usa: 1, }, year: 1911, 
	hash: { hhtech: 1, }, 
	internet: { wiki_ua: 'Whirlpool_Corporation', },
},












/*









{
	id 			: 'al_ko',
	title 		: 'Al-Ko',
	year 		: 1961,
	country 	: 'aut',
	site 		: [
		{ title: 'al-ko-vdr.com.ua' 	, href: 'https://www.al-ko-vdr.com.ua/spage/about.html' 	, },
	], 
	hash: { water_supply: 1, hydraulic_accumulator: 1, },
},












{
	id 			: 'alutec',
	title 		: 'Alutec',
	year 		: 1996,
	country 	: 'deu',
	internet 	: { },
	hash: { transport: 1, parts: 1, wheel_disc: 1, },
},
{
	id 			: 'aquapress',
	title 		: 'Aquapress',
	year 		: 1980,
	country 	: 'ita',
	internet 	: { official: 'http://ru.aquapress.it/', },
	hash: { water_supply: 1, hydraulic_accumulator: 1, },
},
{
	id 			: 'aquasystem',
	title 		: 'Aquasystem',
	year 		: 1965,
	country 	: 'ita',
	site 		: [
		{ title: 'aquasystem.in.ua' 	, href: 'https://aquasystem.in.ua/' 	, },
	], 
	hash: { water_supply: 1, hydraulic_accumulator: 1, },
},
{
	id 			: 'aral',
	title 		: 'Aral',
	year 		: 1920,
	country 	: 'deu',
	internet 	: { avtopro: 'aral/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'audi',
	title 		: 'Audi',
	year 		: 1909,
	country 	: 'deu',
	internet 	: { wiki_ua: 'Audi', },
	hash: { transport: 1, car: 1, },
	models: [ 
		{ id: 'audi_80' 		, 'title': '80' 		, },
		{ id: 'audi_100' 		, 'title': '100' 		, },
		{ id: 'audi_a3' 		, 'title': 'A3' 		, },
		{ id: 'audi_a4' 		, 'title': 'A4' 		, },
		{ id: 'audi_a5' 		, 'title': 'A5' 		, },
		{ id: 'audi_a6' 		, 'title': 'A6' 		, },
		{ id: 'audi_a7' 		, 'title': 'A7' 		, },
		{ id: 'audi_a8' 		, 'title': 'A8' 		, },
		{ id: 'audi_q5' 		, 'title': 'Q5' 		, },
		{ id: 'audi_q7' 		, 'title': 'Q7' 		, },
		{ id: 'audi_allroad' 	, 'title': 'Allroad' 	, },
		{ id: 'audi_tt' 		, 'title': 'TT' 		, },
	],
},
{
	id 			: 'automega',
	title 		: 'Automega',
	year 		: 1898,
	country 	: 'deu',
	parent 		: 'Dello',
	internet 	: { avtopro: 'dello/', official: 'https://dello-gruppe.de/', },
	hash: { transport: 1, parts: 1, },
	note 		: 'Упаковщик китайскийх запчастей',
},
{
	id 			: 'bardahl',
	title 		: 'Bardahl',
	year 		: 1939,
	country 	: 'usa',
	internet 	: { avtopro: 'bardahl/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},







{
	id 			: 'blic',
	title 		: 'Blic',
	year 		: 2011,
	country 	: 'pol',
	parent 		: 'Inter Cars SA',
	descr 		: 'Поставщик',
	hash: { transport: 1, parts: 1, },
},




{
	id 			: 'bremi',
	title 		: 'Bremi',
	year 		: 1927,
	country 	: 'deu',
	internet 	: { avtopro: 'bremi/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'bridgestone',
	title 		: 'Bridgestone',
	year 		: 1931,
	country 	: 'jpn',
	internet 	: { wiki_ru: 'Bridgestone', avtopro: 'bridgestone/', },
	hash: { transport: 1, parts: 1, tires: 1, },	
},
{
	id 			: 'brisk',
	title 		: 'Brisk',
	year 		: 1935,
	country 	: 'cze',
	internet 	: { avtopro: 'brisk/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'castrol',
	title 		: 'Castrol',
	year 		: 1899,
	country 	: 'gbr',
	internet 	: { wiki_ru: 'Castrol', avtopro: 'castrol/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'champion',
	title 		: 'Champion',
	year 		: 1908,
	country 	: 'usa',
	internet 	: { avtopro: 'champion/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'comma',
	title 		: 'Comma',
	year 		: 1965,
	country 	: 'gbr',
	internet 	: { avtopro: 'comma/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'continental',
	title 		: 'Continental',
	year 		: 1871,
	country 	: 'deu',
	internet 	: { wiki_ru: 'Continental_AG', avtopro: 'continental/', },
	hash: { transport: 1, parts: 1, tires: 1, },
},
{
	id 			: 'contitech',
	title 		: 'Contitech',
	year 		: 1991,
	country 	: 'deu',
	internet 	: { avtopro: 'contitech/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'cooper',
	title 		: 'Cooper',
	year 		: 1914,
	country 	: 'usa',
	internet 	: { wiki_ru: 'Cooper_Tire_%26_Rubber_Company', avtopro: 'cooper/', },
	hash: { transport: 1, parts: 1, tires: 1, },
},
{
	id 			: 'corteco',
	title 		: 'Corteco',
	year 		: 1932,
	country 	: 'deu',
	internet 	: { avtopro: 'corteco/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'daihatsu',
	title 		: 'Daihatsu',
	year 		: 1907,
	country 	: 'jpn',
	internet 	: { wiki_ru: 'Daihatsu', avtopro: 'daihatsu/', },
	hash: { transport: 1, car: 1, },
	model: [
		{ id: 'daihatsu_applause' 		, 'title': 'Applause' 	, },
		{ id: 'daihatsu_charade' 		, 'title': 'Charade' 	, },
		{ id: 'daihatsu_cuore' 			, 'title': 'Cuore' 		, },
		{ id: 'daihatsu_sirion' 		, 'title': 'Sirion' 	, },
		{ id: 'daihatsu_terios' 		, 'title': 'Terios' 	, },
	],
},
{
	id 			: 'dayco',
	title 		: 'Dayco',
	year 		: 1905,
	country 	: 'usa',
	internet 	: { avtopro: 'dayco/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'dello',
	title 		: 'Dello',
	year 		: 1898,
	country 	: 'deu',
	internet 	: { avtopro: 'dello/', },
	hash: { transport: 1, parts: 1, },
	note 		: 'Упаковщик китайскийх запчастей',
},
{
	id 			: 'delphi',
	title 		: 'Delphi',
	year 		: 1999,
	country 	: 'usa',
	internet 	: { avtopro: 'delphi/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'denckermann',
	title 		: 'Denckermann',
	year 		: 1996,
	country 	: 'pol',
	internet 	: { avtopro: 'denckermann/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'denso',
	title 		: 'Denso',
	year 		: 1949,
	country 	: 'jpn',
	internet 	: { wiki_ru: 'Denso', avtopro: 'denso/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'dolz',
	title 		: 'Dolz',
	year 		: 1934,
	country 	: 'esp',
	internet 	: { official: 'https://www.idolz.com/', avtopro: 'dolz/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'dunlop',
	title 		: 'Dunlop',
	year 		: 1891,
	parent 		: 'goodyear',
	country 	: 'deu',
	internet 	: { wiki_ru: 'Dunlop_Tires', avtopro: 'dunlop/', },
	hash: { transport: 1, parts: 1, tires: 1, },
	note 		: 'Упразднена в 1985 г.',
},
{
	id 			: 'elbi',
	title 		: 'Elbi Spa',
	year 		: 1965,
	country 	: 'ita',
	internet 	: { official: 'https://elbi.org.ua/o-kompanii/', },
	ps 			: { water_supply: { hydraulic_accumulator: {}, }, },
},
{
	id 			: 'elf',
	title 		: 'ELF',
	year 		: 1967,
	country 	: 'fra',
	internet 	: { avtopro: 'elf/', },
	hash: { transport: 1, parts: 1, oil: 1, },
	note 		: 'Об\'єднана з Total у 2000 р.',
},
{
	id 			: 'elring',
	title 		: 'Elring',
	year 		: 1879,
	country 	: 'deu',
	internet 	: { avtopro: 'elring/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'eneos',
	title 		: 'Eneos',
	year 		: 2001,
	country 	: 'jpn',
	internet 	: { avtopro: 'eneos/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'era',
	title 		: 'ERA',
	year 		: 1983,
	country 	: 'ita',
	internet 	: { avtopro: 'era/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'facet',
	title 		: 'Facet',
	year 		: 1946,
	country 	: 'ita',
	internet 	: { avtopro: 'facet/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'filtron',
	title 		: 'Filtron',
	year 		: 1982,
	country 	: 'pol',
	internet 	: { avtopro: 'filtron/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'gates',
	title 		: 'Gates',
	year 		: 1917,
	country 	: 'usa',
	internet 	: { avtopro: 'gates/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'general_motors',
	title 		: 'General Motors',
	year 		: 1892,
	country 	: 'usa',
	internet 	: { avtopro: 'gm/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'gislaved',
	title 		: 'Gislaved',
	year 		: 1893,
	parent 		: 'continental',
	country 	: 'swe',
	internet 	: { wiki_ru: 'Continental_AG', avtopro: 'gislaved/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'goodyear',
	title 		: 'Goodyear',
	year 		: 1898,
	country 	: 'usa',
	internet 	: { wiki_ru: 'Goodyear_Tire_and_Rubber_Company', avtopro: 'goodyear/', },
	hash: { transport: 1, parts: 1, tires: 1, },
},
{
	id 			: 'gp',
	title 		: 'GP',
	year 		: 1972,
	country 	: 'deu',
	internet 	: { avtopro: 'gp/', official: 'http://gp-gparts.com/index.php?sl=EN', },
	hash: { transport: 1, parts: 1, },
},



{
	id 			: 'flennor',
	title 		: 'Flennor',
	year 		: 1935,
	country 	: 'deu',
	internet 	: { avtopro: 'flennor/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'hankook',
	title 		: 'Hankook',
	year 		: 1941,
	country 	: 'kor',
	internet 	: { wiki_ru: 'Hankook_Tire', avtopro: 'hankook/', },
	hash: { transport: 1, parts: 1, tires: 1, },	
},
{
	id 			: 'hans_pries',
	title 		: 'Hans Pries',
	year 		: 1954,
	country 	: 'deu',
	internet 	: { avtopro: 'hans-pries/', },
	hash: { transport: 1, parts: 1, },
	note 		: 'Упаковщик',
},
{
	id 			: 'hella',
	title 		: 'Hella',
	year 		: 1899,
	country 	: 'deu',
	internet 	: { avtopro: 'hella/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'hepu',
	title 		: 'Hepu',
	year 		: 1975,
	country 	: 'deu',
	parent 		: 'IPD GmbH',
	internet 	: { official: 'http://www.hepu.de/', avtopro: 'hepu/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'hitachi',
	title 		: 'Hitachi',
	year 		: 1950,
	country 	: 'jpn',
	internet 	: { avtopro: 'hitachi/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'hutchinson',
	title 		: 'Hutchinson',
	year 		: 1853,
	country 	: 'fra',
	internet 	: { avtopro: 'hutchinson/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'idemitsu',
	title 		: 'Idemitsu',
	year 		: 1911,
	country 	: 'jpn',
	internet 	: { avtopro: 'idemitsu/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'ika',
	title 		: 'IKA',
	year 		: 1982,
	country 	: 'deu',
	internet 	: { avtopro: 'ika/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'imera',
	title 		: 'Imera',
	year 		: 1972 ,
	country 	: 'ita',
	internet 	: { official: 'https://imera.com.ua/', },
	ps 			: { water_supply: { hydraulic_accumulator: {}, }, },
},
{
	id 			: 'ina',
	title 		: 'INA',
	year 		: 1946,
	country 	: 'deu',
	parent 		: 'Schaeffler Technologies',
	internet 	: { avtopro: 'ina/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'jp_group',
	title 		: 'JP Group',
	year 		: 1976,
	country 	: 'dnk',
	internet 	: { avtopro: 'jp-group/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'k_plus_f',
	title 		: 'K+F',
	year 		: 1887,
	country 	: 'deu',
	parent 		: 'ThyssenKrupp',
	internet 	: { avtopro: 'k-f/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'kayaba',
	title 		: 'Kayaba',
	year 		: 1947,
	country 	: 'jpn',
	parent 		: 'KYB',
	internet 	: { avtopro: 'kayaba/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'knecht',
	title 		: 'Knecht',
	year 		: 1929,
	country 	: 'deu',
	parent 		: 'mahle',
	internet 	: { avtopro: 'knecht/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'kolbenschmidt',
	title 		: 'Kolbenschmidt',
	year 		: 1998,
	country 	: 'deu',
	internet 	: { avtopro: 'kolbenschmidt/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'kroon_oil',
	title 		: 'Kroon Oil',
	year 		: 1906,
	country 	: 'nld',
	internet 	: { avtopro: 'kroon-oil/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'kumho',
	title 		: 'Kumho',
	year 		: 1960,
	country 	: 'kor',
	internet 	: { wiki_ru: 'Kumho_Tire', avtopro: 'kumho/', },
	hash: { transport: 1, parts: 1, tires: 1, },
},
{
	id 			: 'lemforder',
	title 		: 'Lemforder',
	year 		: 1937,
	country 	: 'deu',
	internet 	: { avtopro: 'lemfoerder/', },
	hash: { transport: 1, parts: 1, },
	hash 		: '#подвескa #тормоза #рулевое',
},
{
	id 			: 'lesjofors',
	title 		: 'Lesjofors',
	year 		: 1852,
	country 	: 'swe',
	internet 	: { avtopro: 'lesjofors/', },
	hash: { transport: 1, parts: 1, },

},
{
	id 			: 'liqui_moly',
	title 		: 'Liqui Moly',
	year 		: 1957,
	country 	: 'deu',
	internet 	: { avtopro: 'liqui-moly/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'magneti_marelli',
	title 		: 'Magneti Marelli',
	year 		: 1919,
	country 	: 'ita',
	internet 	: { wiki_ru: 'Magneti_Marelli', avtopro: 'magneti-marelli/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'magnum_technology',
	title 		: 'Magnum Technology',
	year 		: 1900,
	country 	: 'pol',
	internet 	: { avtopro: 'magnum-technology/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'mahle',
	title 		: 'Mahle',
	year 		: 1920,
	country 	: 'deu',
	internet 	: { avtopro: 'mahle/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'mann_filter',
	title 		: 'Mann-Filter',
	year 		: 1941,
	country 	: 'deu',
	internet 	: { avtopro: 'mann/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'mannol',
	title 		: 'Mannol',
	year 		: 1993,
	country 	: 'deu',
	internet 	: { avtopro: 'mannol/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'maxgear',
	title 		: 'Maxgear',
	year 		: 2006,
	country 	: 'pol',
	internet 	: { avtopro: 'maxgear/', },
	hash: { transport: 1, parts: 1, },
	note 		: 'Упаковщик',
},
{
	id 			: 'maxxis',
	title 		: 'Maxxis',
	year 		: 1967,
	country 	: 'twn',
	internet 	: { wiki_ru: 'Maxxis', avtopro: 'maxxis/', },
	hash: { transport: 1, parts: 1, tires: 1, },
	note 		: 'Cheng Shin',
},
{
	id 			: 'meat_doria',
	title 		: 'Meat & Doria',
	year 		: 1945,
	country 	: 'ita',
	internet 	: { avtopro: 'meat-doria/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'metzger',
	title 		: 'Metzger',
	year 		: 1980,
	country 	: 'deu',
	internet 	: { avtopro: 'metzger/', },
	hash: { transport: 1, parts: 1, },
	note 		: 'Упаковщик',
},
{
	id 			: 'meyle',
	title 		: 'Meyle',
	year 		: 1958,
	country 	: 'deu',
	parent 		: 'Wulf Gaertner Autoparts AG',
	internet 	: { wiki_ru: 'Wulf_Gaertner_Autoparts_AG', avtopro: 'meyle/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'michelin',
	title 		: 'Michelin',
	year 		: 1889,
	country 	: 'fra',
	internet 	: { wiki_ru: 'Michelin', avtopro: 'michelin/', },
	hash: { transport: 1, parts: 1, tires: 1, },	
},
{
	id 			: 'mobil',
	title 		: 'Mobil',
	year 		: 1999,
	country 	: 'usa',
	internet 	: { avtopro: 'mobil/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'mobiletron',
	title 		: 'Mobiletron',
	year 		: 1982,
	country 	: 'twn',
	internet 	: { avtopro: 'mobiletron/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'monroe',
	title 		: 'Monroe',
	year 		: 1916,
	country 	: 'usa',
	internet 	: { avtopro: 'monroe/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'motul',
	title 		: 'Motul',
	year 		: 1853,
	country 	: 'fra',
	internet 	: { avtopro: 'motul/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'neste',
	title 		: 'Neste',
	year 		: 1948,
	country 	: 'fin',
	internet 	: { avtopro: 'neste/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'nissens',
	title 		: 'Nissens',
	year 		: 1921,
	country 	: 'dnk',
	internet 	: { avtopro: 'nissens/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'ngk',
	title 		: 'NGK',
	year 		: 1936,
	country 	: 'jpn',
	internet 	: { wiki_ru: 'NGK', avtopro: 'ngk/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'nipparts',
	title 		: 'Nipparts',
	year 		: 1981,
	country 	: 'nld',
	internet 	: { avtopro: 'nipparts/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'nk',
	title 		: 'NK',
	country 	: 'dnk',
	year 		: 1934,
	internet 	: { avtopro: 'nk/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'nokian',
	title 		: 'Nokian',
	year 		: 1898,
	country 	: 'fin',
	internet 	: { wiki_ru: 'Nokian_Tyres', avtopro: 'nokian/', },
	hash: { transport: 1, parts: 1, tires: 1, },	
},
{
	id 			: 'nrf',
	title 		: 'NRF',
	year 		: 1927,
	country 	: 'nld',
	internet 	: { avtopro: 'nrf/', },
	hash: { transport: 1, parts: 1, },
	hash 		: '#теплообменники',
},
{
	id 			: 'osram',
	title 		: 'Osram',
	year 		: 1906,
	country 	: 'deu',
	internet 	: { avtopro: 'osram/', },
	hash: { transport: 1, parts: 1, },
	hash 		: '#светотехника',
},
{
	id 			: 'ossca',
	title 		: 'Ossca',
	year 		: 1995,
	country 	: 'chn',
	internet 	: { avtopro: 'ossca/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'optibelt',
	title 		: 'Optibelt',
	year 		: 1872,
	country 	: 'deu',
	internet 	: { avtopro: 'optibelt/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'philips',
	title 		: 'Philips',
	year 		: 1891,
	country 	: 'nld',
	internet 	: { wiki_ru: 'Philips', avtopro: 'philips/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'pierburg',
	title 		: 'Pierburg',
	year 		: 1928,
	country 	: 'deu',
	internet 	: { avtopro: 'pierburg/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'pirelli',
	title 		: 'Pirelli',
	year 		: 1872,
	country 	: 'ita',
	internet 	: { wiki_ru: 'Pirelli', avtopro: 'pirelli/', },
	hash: { transport: 1, parts: 1, tires: 1, },	
},
{
	id 			: 'profit',
	title 		: 'Profit',
	year 		: 1993,
	country 	: 'cze',
	internet 	: { avtopro: 'profit/', },
	hash: { transport: 1, parts: 1, },
	note 		: 'Упаковщик',
},
{
	id 			: 'ravenol',
	title 		: 'Ravenol',
	year 		: 1946,
	country 	: 'deu',
	internet 	: { avtopro: 'ravenol/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'reinz',
	title 		: 'Reinz', 	// Viktor Reinz
	year 		: 1920,
	country 	: 'deu',
	internet 	: { avtopro: 'victor-reinz/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'ruville',
	title 		: 'Ruville',
	year 		: 1922,
	country 	: 'deu',
	internet 	: { avtopro: 'ruville/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'sachs',
	title 		: 'Sachs',
	year 		: 1895,
	country 	: 'deu',
	internet 	: { avtopro: 'sachs/', },
	hash: { transport: 1, parts: 1, },
},

{
	id 			: 'sasic',
	title 		: 'Sasic',
	year 		: 1971,
	country 	: 'fra',
	internet 	: { avtopro: 'sasic/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'shafer',
	title 		: 'Shafer',
	year 		: 1947,
	country 	: 'aut',
	internet 	: { avtopro: 'shafer/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'shell',
	title 		: 'Shell',
	year 		: 1907,
	country 	: 'nld',
	internet 	: { avtopro: 'shell/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'siemens',
	title 		: 'Siemens',
	year 		: 1847,
	country 	: 'deu',
	internet 	: { wiki_ru: 'Siemens', avtopro: 'siemens/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'skf',
	title 		: 'SKF',
	year 		: 1907,
	country 	: 'swe',
	internet 	: { avtopro: 'skf/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'speroni',
	title 		: 'Speroni',
	year 		: 1946,
	country 	: 'ita',
	site 		: [
		{ title: 'speroni.com.ua' 	, href: 'http://www.speroni.com.ua/' 	, },
	],
	ps 			: { water_supply: { hydraulic_accumulator: {}, }, },
},
{
	id 			: 'stellox',
	title 		: 'Stellox',
	country 	: 'deu',
	year 		: 2005,
	internet 	: { official: 'http://www.stellox.com/', avtopro: 'stellox/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'sumitomo',
	title 		: 'Sumitomo',
	year 		: 1909,
	country 	: 'jpn',
	internet 	: { wiki_ru: 'Sumitomo_Rubber_Industries', avtopro: 'sumitomo/', },
	hash: { transport: 1, parts: 1, tires: 1, },
},



{
	id 			: 'telefunken',
	title 		: 'Telefunken',
	year 		: 1903,	
	country 	: 'deu',
	internet 	: { },
	hash: { electronics: 1, },
},
{
	id 			: 'topran',
	title 		: 'Topran',
	year 		: 1954,
	country 	: 'deu',
	internet 	: { avtopro: 'hans-pries/', },
	hash: { transport: 1, parts: 1, },
	note 		: 'Упаковщик',
},
{
	id 			: 'tokico',
	title 		: 'Tokico',
	year 		: 1937,
	country 	: 'jpn',
	internet 	: { avtopro: 'tokico/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'total',
	title 		: 'Total',
	year 		: 1924,
	country 	: 'fra',
	internet 	: { avtopro: 'total/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'toyo',
	title 		: 'Toyo',
	year 		: 1945,
	country 	: 'jpn',
	internet 	: { wiki_ru: 'Toyo_Tire_%26_Rubber', avtopro: 'toyo/', },
	hash: { transport: 1, parts: 1, tires: 1, },	
},
{
	id 			: 'vag',
	title 		: 'VAG',
	year 		: 1937,
	country 	: 'deu',
	internet 	: { wiki_ru: 'Volkswagen_(%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D1%80%D0%BD)', avtopro: 'vag/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'valeo',
	title 		: 'Valeo',
	year 		: 1923,
	country 	: 'fra',
	internet 	: { avtopro: 'valeo/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'valvoline',
	title 		: 'Valvoline',
	year 		: 1866,
	country 	: 'usa',
	internet 	: { avtopro: 'valvoline/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'varta',
	title 		: 'Varta',
	year 		: 1897,
	country 	: 'deu',
	internet 	: { wiki_ru: 'VARTA', avtopro: 'varta/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'wagner',
	title 		: 'Wagner',
	year 		: 1891,
	country 	: 'deu',
	internet 	: { avtopro: 'wagner/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'walker',
	title 		: 'Walker',
	year 		: 1888,
	country 	: 'usa',
	internet 	: { avtopro: 'walker/', },
	hash: { transport: 1, parts: 1, },
},
{
	id 			: 'wilo',
	title 		: 'Wilo',
	year 		: 1872,
	country 	: 'deu',
	site 		: [
		{ title: 'wiki.ru'  		, href: 'WILO_SE' 	, },
	], 
	ps 			: { water_supply: { pump : {}, }, },
},





{
	id 			: 'xado',
	title 		: 'Xado',
	year 		: 1991,
	country 	: 'ukr',
	internet 	: { avtopro: 'xado/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},






{
	id 			: 'yokohama',
	title 		: 'Yokohama',
	year 		: 1917,
	country 	: 'jpn',
	internet 	: { wiki_ru: 'Yokohama_Rubber_Company', avtopro: 'yokohama/', },
	hash: { transport: 1, parts: 1, tires: 1, },	
},
{
	id 			: 'zic',
	title 		: 'ZIC',
	year 		: 1995,
	country 	: 'kor',
	internet 	: { avtopro: 'zic/', },
	hash: { transport: 1, parts: 1, oil: 1, },
},
{
	id 			: 'zilmet',
	title 		: 'Zilmet',
	year 		: 1960,
	country 	: 'ita',
	site 		: [
		{ title: 'zilmet.in.ua' 	, href: 'http://www.zilmet.in.ua/' 	, },
		{ title: 'zilmet.ru' 		, href: 'https://zilmet.ru/' 		, },
	], 
	ps 			: { water_supply: { hydraulic_accumulator: {}, }, },
},






*/



];


let objManufacturer = {};
arrManufacturer.forEach( k => {
	objManufacturer[ k.id ] = k;
});






