const arrCity = [

//{ id: '' , title: { ua: '' , en: '' , }, country: '', site: { wiki: { ua: '', }, }, },








{ 
	id: 'kyiv', 
	title: { ua: 'Київ', en: 'Kyiv', }, country: 'ukr', phone: '044',
	population: { n: 2952301, date: '2022-01-01', },
	site: { wiki_ua: '%D0%9A%D0%B8%D1%97%D0%B2', },
},
{ 
	id: 'kharkiv', 
	title: { ua: 'Харків', en: 'Kharkiv', }, country: 'ukr', phone: '057',
	population: { n: 1421125, date: '2022-01-01', },
	site: { wiki_ua: '%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2', }, 
},
{ 
	id: 'vysoky', 
	title: { ua: 'Високий', en: 'Vysoky', }, country: 'ukr', region: 'kharkiv', phone: '',
	population: { n: 0, date: '', },
	site: { wiki_ua: '', }, 
},
{ 
	id: 'vinnytsia', 
	title: { ua: 'Вінниця', en: 'Vinnytsia', }, country: 'ukr', phone: '043',
	population: { n: 369740, date: '2022-01-01', },
	site: { wiki_ua: '%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F', }, 
},
{ 
	id: 'dnipro', 
	title: { ua: 'Дніпро', en: 'Dnipro', }, country: 'ukr', phone: '056',
	population: { n: 968502, date: '2022-01-19', }, 
	site: { wiki_ua: '%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, 
},
{ 
	id: 'donetsk', 
	title: { ua: 'Донецьк', en: 'Donetsk', }, country: 'ukr', phone: '062',
	population: { n: 905364, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D1%8C%D0%BA', }, 
},
{ 
	id: 'zhytomyr', 
	title: { ua: 'Житомир', en: 'Zhytomyr', }, country: 'ukr', phone: '041',
	population: { n: 261624, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80', }, 
},
{ 
	id: 'zaporizhzhia', 
	title: { ua: 'Запоріжжя', en: 'Zaporizhzhia', }, country: 'ukr', phone: '061',
	population: { n: 710052, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F', }, 
},
{ 
	id: 'ivano_frankivsk', 
	title: { ua: 'Івано-Франківськ', en: 'Ivano-Frankivsk', }, country: 'ukr', phone: '034',
	population: { n: 238196, date: '2022-12-01', }, 
	site: { wiki_ua: '%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA', }, 
},
{ 
	id: 'karachivka', 
	title: { ua: 'Карачівка', en: 'Karachivka', }, country: 'ukr', region: 'kharkiv', phone: '',
	population: { n: 0, date: '', },
	site: { wiki_ua: '', }, 
},
{ 
	id: 'kropyvnytsky', 
	title: { ua: 'Кропивницький', en: 'Kropyvnytskyi', }, country: 'ukr', phone: '052',
	population: { n: 219675, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%9A%D1%80%D0%BE%D0%BF%D0%B8%D0%B2%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9', }, 
},
{ 
	id: 'kryvyi_rih', 
	title: { ua: 'Кривий Ріг', en: 'Kryvyi Rih', }, country: 'ukr', region: 'dnipro', 
	population: { n: 603904, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%9A%D1%80%D0%B8%D0%B2%D0%B8%D0%B9_%D0%A0%D1%96%D0%B3', }, 
},
{ 
	id: 'luhansk', 
	title: { ua: 'Луганськ', en: 'Luhansk', }, country: 'ukr', phone: '064',
	population: { n: 397677, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%9B%D1%83%D0%B3%D0%B0%D0%BD%D1%81%D1%8C%D0%BA', }, 
},
{ 
	id: 'lutsk', 
	title: { ua: 'Луцьк', en: 'Lutsk', }, country: 'ukr', phone: '033',
	population: { n: 217999, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%9B%D1%83%D1%86%D1%8C%D0%BA', }, 
},
{ 
	id: 'lviv', 
	title: { ua: 'Львів', en: 'Lviv', }, country: 'ukr', phone: '032',
	population: { n: 717273, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%9B%D1%8C%D0%B2%D1%96%D0%B2', }, 
},
{ 
	id: 'merefa', 
	title: { ua: 'Мерефа', en: 'Merefa', }, country: 'ukr', region: 'kharkiv', phone: '',
	population: { n: 0, date: '', }, 
	site: { wiki_ua: '%D0%9C%D0%B5%D1%80%D0%B5%D1%84%D0%B0', }, 
},
{ 
	id: 'mykolaiv', 
	title: { ua: 'Миколаїв', en: 'Mykolayiv', }, country: 'ukr', phone: '051',
	population: { n: 470011, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2', }, 
},
{ 
	id: 'nikopol', 
	title: { ua: 'Нікополь', en: 'Nikopol', }, country: 'ukr', region: 'dnipro', 
	population: { n: 110669, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%9D%D1%96%D0%BA%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C', }, 
},
{ 
	id: 'odesa', 
	title: { ua: 'Одеса', en: 'Odesa', }, country: 'ukr', phone: '048',
	population: { n: 1010537, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%9E%D0%B4%D0%B5%D1%81%D0%B0', }, 
},
{ 
	id: 'pavlograd', 
	title: { ua: 'Павлоград', en: 'Pavlograd', }, country: 'ukr', region: 'dnipro', 
	population: { n: 117200, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B3%D1%80%D0%B0%D0%B4', }, 
},
{ 
	id: 'poltava', 
	title: { ua: 'Полтава', en: 'Poltava', }, country: 'ukr', phone: '053',
	population: { n: 279593, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0', }, 
},
{ 
	id: 'rivne', 
	title: { ua: 'Рівне', en: 'Rivne', }, country: 'ukr', phone: '036',
	population: { n: 242318, date: '', }, 
	site: { wiki_ua: '%D0%A0%D1%96%D0%B2%D0%BD%D0%B5', }, 
},
{ 
	id: 'sevastopol', 
	title: { ua: 'Севастополь', en: 'Sevastopol', }, country: 'ukr', region: 'krym', phone: '069',
	population: { n: 344853, date: '2014-01-01', }, 
	site: { wiki_ua: '%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C', }, 
},
{ 
	id: 'simferopol', 
	title: { ua: 'Сімферополь', en: 'Simferopol', }, country: 'ukr', region: 'krym', phone: '065',
	population: { n: 338319, date: '2014-01-01', }, 
	site: { wiki_ua: '%D0%A1%D1%96%D0%BC%D1%84%D0%B5%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C', }, 
},
{ 
	id: 'sumy', 
	title: { ua: 'Суми', en: 'Sumy', }, country: 'ukr', phone: '054',
	population: { n: 256474, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%A1%D1%83%D0%BC%D0%B8', }, 
},
{ 
	id: 'ternopil', 
	title: { ua: 'Тернопіль', en: 'Ternopil', }, country: 'ukr', phone: '035',
	population: { n: 225004, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C', }, 
},
{ 
	id: 'uzhhorod', 
	title: { ua: 'Ужгород', en: 'Uzhhorod', }, country: 'ukr', phone: '031',
	population: { n: 115542, date: '2021-01-01', }, 
	site: { wiki_ua: '%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4', }, 
},
{ 
	id: 'kherson', 
	title: { ua: 'Херсон', en: 'Kherson', }, country: 'ukr', phone: '055',
	population: { n: 279131, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%A5%D0%B5%D1%80%D1%81%D0%BE%D0%BD', }, 
},
{ 
	id: 'khmelnytsky', 
	title: { ua: 'Хмельницький', en: 'Khmelnytskyi', }, country: 'ukr', phone: '038',
	population: { n: 274452, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9', }, 
},
{ 
	id: 'cherkasy', 
	title: { ua: 'Черкаси', en: 'Cherkasy', }, country: 'ukr', phone: '047',
	population: { n: 269836, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%A7%D0%B5%D1%80%D0%BA%D0%B0%D1%81%D0%B8', }, 
},
{ 
	id: 'chernivtsi', 
	title: { ua: 'Чернівці', en: 'Chernivtsi', }, country: 'ukr', phone: '037',
	population: { n: 264298, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96', }, 
},
{ 
	id: 'chernihiv', 
	title: { ua: 'Чернігів', en: 'Chernihiv', }, country: 'ukr', phone: '046',
	population: { n: 282747, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B3%D1%96%D0%B2', }, 
},
{ 
	id: 'yalta', 
	title: { ua: 'Ялта', en: 'Yalta', }, country: 'ukr', region: 'krym', phone: '065',
	population: { n: 78200, date: '2022-01-01', }, 
	site: { wiki_ua: '%D0%AF%D0%BB%D1%82%D0%B0', }, 
},









{ 
	id: 'abu_dhabi', 
	title: { ua: 'Абу-Дабі', en: 'Abu Dhabi', }, 
	country: 'are', 
	population: { n: 945268, date: 2008, }, 
	site: { wiki_ua: '%D0%90%D0%B1%D1%83-%D0%94%D0%B0%D0%B1%D1%96', }, 
},
{ 
	id: 'abuja', 
	title: { ua: 'Абуджа', en: 'Abuja', }, 
	country: 'nga', 
	population: { n: 778567, date: 2006, }, 
	site: { wiki_ua: '%D0%90%D0%B1%D1%83%D0%B4%D0%B6%D0%B0', }, 
},
{ 
	id: 'addis_ababa', 
	title: { ua: 'Аддис-Абеба', en: 'Addis Ababa' , }, 
	country: 'eth', 
	population: { n: 3041002, date: 2012, }, 
	site: { wiki_ua: '%D0%90%D0%B4%D0%B4%D0%B8%D1%81-%D0%90%D0%B1%D0%B5%D0%B1%D0%B0', }, 
},
{ 
	id: 'adelaide', 
	title: { ua: 'Аделаїда', en: 'Adelaide', }, 
	country: 'aus', 
	population: { n: 1225235, date: 0, }, 
	site: { wiki_ua: '%D0%90%D0%B4%D0%B5%D0%BB%D0%B0%D1%97%D0%B4%D0%B0', }, 
},








/*



{ id: 'accra' 						, title: { ua: 'Аккра' 						, en: 'Accra' 						, }, country: 'gha', site: { wiki: { ua: '%D0%90%D0%BA%D0%BA%D1%80%D0%B0', }, }, },
{ id: 'algeria' 					, title: { ua: 'Алжир' 	 					, en: 'Algeria' 					, }, country: 'dza', site: { wiki: { ua: '%D0%90%D0%BB%D0%B6%D0%B8%D1%80_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
{ id: 'alma_ata' 					, title: { ua: 'Алма-Ата' 					, en: 'Alma-Ata' 					, }, country: 'kaz', site: { wiki: { ua: '%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D0%B8', }, }, },
{ id: 'amman' 						, title: { ua: 'Амман' 						, en: 'Amman' 						, }, country: 'jor', site: { wiki: { ua: '%D0%90%D0%BC%D0%BC%D0%B0%D0%BD', }, }, },
{ id: 'amsterdam' 					, title: { ua: 'Амстердам' 					, en: 'Amsterdam' 					, }, country: 'nld', site: { wiki: { ua: '%D0%90%D0%BC%D1%81%D1%82%D0%B5%D1%80%D0%B4%D0%B0%D0%BC', }, }, },
{ id: 'andorra_la_vella' 			, title: { ua: 'Андорра-ла-Велья' 			, en: 'Andorra la Vella' 			, }, country: 'and', site: { wiki: { ua: '%D0%90%D0%BD%D0%B4%D0%BE%D1%80%D1%80%D0%B0-%D0%BB%D0%B0-%D0%92%D0%B5%D0%BB%D1%8C%D1%8F', }, }, },
*/


{ 
	id: 'ankara', 
	title: { ua: 'Анкара', en: 'Ankara', }, 
	country: 'tur', 
	site: { wiki_ua: '%D0%90%D0%BD%D0%BA%D0%B0%D1%80%D0%B0', }, 
	population: { n: 4587000, date: 2015, }, 
},


/*
{ id: 'antananarivo' 				, title: { ua: 'Антананаріву' 				, en: 'Antananarivo' 				, }, country: 'mdg', site: { wiki: { ua: '%D0%90%D0%BD%D1%82%D0%B0%D0%BD%D0%B0%D0%BD%D0%B0%D1%80%D1%96%D0%B2%D1%83', }, }, },
{ id: 'apia' 						, title: { ua: 'Апіа' 						, en: 'Apia' 						, }, country: 'wsm', site: { wiki: { ua: '%D0%90%D0%BF%D1%96%D0%B0', }, }, },
{ id: 'asmer' 						, title: { ua: 'Асмера' 					, en: 'Asmer' 						, }, country: 'eri', site: { wiki: { ua: '%D0%90%D1%81%D0%BC%D0%B5%D1%80%D0%B0', }, }, },
{ id: 'asuncion' 					, title: { ua: 'Асунсьйон' 					, en: 'Asuncion' 					, }, country: 'pry', site: { wiki: { ua: '%D0%90%D1%81%D1%83%D0%BD%D1%81%D1%8C%D0%B9%D0%BE%D0%BD', }, }, },
{ id: 'athens' 						, title: { ua: 'Афіни' 						, en: 'Athens' 						, }, country: 'grc', site: { wiki: { ua: '%D0%90%D1%84%D1%96%D0%BD%D0%B8', }, }, },
{ id: 'ashgabat' 					, title: { ua: 'Ашгабат' 					, en: 'Ashgabat' 					, }, country: 'tkm', site: { wiki: { ua: '%D0%90%D1%88%D0%B3%D0%B0%D0%B1%D0%B0%D1%82', }, }, },
*/


{ 
	id: 'baghdad', 
	title: { ua: 'Багдад', en: 'Baghdad', }, 
	country: 'irq', 
	population: { n: 6554126, date: 2004, }, 
	site: { wiki_ua: '%D0%91%D0%B0%D0%B3%D0%B4%D0%B0%D0%B4', }, 
},



/*

{ id: 'baku' 						, title: { ua: 'Баку' 						, en: 'Baku' 						, }, country: 'aze', site: { wiki: { ua: '%D0%91%D0%B0%D0%BA%D1%83', }, }, },
{ id: 'bamako' 						, title: { ua: 'Бамако' 					, en: 'Bamako' 						, }, country: 'mli', site: { wiki: { ua: '%D0%91%D0%B0%D0%BC%D0%B0%D0%BA%D0%BE', }, }, },
{ id: 'bungee' 						, title: { ua: 'Бангі' 						, en: 'Bungee' 						, }, country: 'caf', site: { wiki: { ua: '%D0%91%D0%B0%D0%BD%D0%B3%D1%96', }, }, },
*/

{ 
	id: 'bangkok', 
	title: { ua: 'Бангкок', en: 'Bangkok', }, 
	country: 'tha', 
	population: { n: 8160522, date: 2007, }, 
	site: { wiki_ua: '%D0%91%D0%B0%D0%BD%D0%B3%D0%BA%D0%BE%D0%BA', }, 
},

/*
{ id: 'bandar_seri_begawan' 		, title: { ua: 'Бандар-Сері-Бегаван' 		, en: 'Bandar Seri Begawan' 		, }, country: 'brn', site: { wiki: { ua: '%D0%91%D0%B0%D0%BD%D0%B4%D0%B0%D1%80-%D0%A1%D0%B5%D1%80%D1%96-%D0%91%D0%B5%D0%B3%D0%B0%D0%B2%D0%B0%D0%BD', }, }, },
{ id: 'banjul' 						, title: { ua: 'Банжул' 					, en: 'Banjul' 						, }, country: 'gmb', site: { wiki: { ua: '%D0%91%D0%B0%D0%BD%D0%B6%D1%83%D0%BB', }, }, },
{ id: 'beirut' 						, title: { ua: 'Бейрут' 					, en: 'Beirut' 						, }, country: 'lbn', site: { wiki: { ua: '%D0%91%D0%B5%D0%B9%D1%80%D1%83%D1%82 ', }, }, },
{ id: 'belgrade' 					, title: { ua: 'Белград' 					, en: 'Belgrade' 					, }, country: 'srb', site: { wiki: { ua: '%D0%91%D0%B5%D0%BB%D0%B3%D1%80%D0%B0%D0%B4', }, }, },
{ id: 'belmopan' 					, title: { ua: 'Бельмопан' 					, en: 'Belmopan' 					, }, country: 'blz', site: { wiki: { ua: '%D0%91%D0%B5%D0%BB%D1%8C%D0%BC%D0%BE%D0%BF%D0%B0%D0%BD', }, }, },

*/

{ 
	id: 'berlin', 
	title: { ua: 'Берлін', en: 'Berlin', }, 
	country: 'deu', 
	population: { n: 3664088, date: 2020, }, 
	site: { wiki_ua: '%D0%91%D0%B5%D1%80%D0%BB%D1%96%D0%BD', }, 
},



/*

{ id: 'bern' 						, title: { ua: 'Берн' 						, en: 'Bern' 						, }, country: 'che', site: { wiki: { ua: '%D0%91%D0%B5%D1%80%D0%BD', }, }, },
{ id: 'bissau' 						, title: { ua: 'Бісау' 						, en: 'Bissau' 						, }, country: 'gnb', site: { wiki: { ua: '%D0%91%D1%96%D1%81%D0%B0%D1%83', }, }, },
{ id: 'bishkek' 					, title: { ua: 'Бішкек' 					, en: 'Bishkek' 					, }, country: 'kgz', site: { wiki: { ua: '%D0%91%D1%96%D1%88%D0%BA%D0%B5%D0%BA', }, }, },

*/

{ 
	id: 'bogota', 
	title: { ua: 'Богота', en: 'Bogota', }, 
	country: 'col', 
	site: { wiki_ua: '%D0%91%D0%BE%D0%B3%D0%BE%D1%82%D0%B0', }, 
	population: { n: 8550000, date: 2008, }, 
},



/*

{ id: 'brazzaville' 				, title: { ua: 'Браззавіль' 				, en: 'Brazzaville' 				, }, country: 'cog', site: { wiki: { ua: '%D0%91%D1%80%D0%B0%D0%B7%D0%B7%D0%B0%D0%B2%D1%96%D0%BB%D1%8C', }, }, },
*/

{ 
	id: 'brasilia', 
	title: { ua: 'Бразиліа', en: 'Brasilia', }, 
	country: 'bra', 
	population: { n: 3039444, date: 2012, }, 
	site: { wiki_ua: '%D0%91%D1%80%D0%B0%D0%B7%D0%B8%D0%BB%D1%96%D0%B0', }, 
},


/*
{ id: 'bratislava' 					, title: { ua: 'Братислава' 				, en: 'Bratislava' 					, }, country: 'svk', site: { wiki: { ua: '%D0%91%D1%80%D0%B0%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D0%B0', }, }, },
*/



{ 
	id: 'brazzaville', 
	title: { ua: 'Браззавіль', en: 'Brazzaville', }, 
	country: 'cog', 
	population: { n: 1408150, date: 2010, }, 
	site: { wiki_ua: '%D0%91%D1%80%D0%B0%D0%B7%D0%B7%D0%B0%D0%B2%D1%96%D0%BB%D1%8C', }, 
},


/*

{ id: 'bridgetown' 					, title: { ua: 'Бриджтаун' 					, en: 'Bridgetown' 					, }, country: 'brb', site: { wiki: { ua: '%D0%91%D1%80%D0%B8%D0%B4%D0%B6%D1%82%D0%B0%D1%83%D0%BD', }, }, },
{ id: 'brussels' 					, title: { ua: 'Брюссель' 					, en: 'Brussels' 					, }, country: 'bel', site: { wiki: { ua: '%D0%91%D1%80%D1%8E%D1%81%D1%81%D0%B5%D0%BB%D1%8C', }, }, },
{ id: 'budapest' 					, title: { ua: 'Будапешт' 					, en: 'Budapest' 					, }, country: 'hun', site: { wiki: { ua: '%D0%91%D1%83%D0%B4%D0%B0%D0%BF%D0%B5%D1%88%D1%82', }, }, },
*/


{ 
	id: 'buenos_aires', 
	title: { ua: 'Буенос-Айрес', en: 'Buenos Aires', }, 
	country: 'arg', 
	population: { n: 2891082, date: 0, }, 
	site: { wiki_ua: '%D0%91%D1%83%D0%B5%D0%BD%D0%BE%D1%81-%D0%90%D0%B9%D1%80%D0%B5%D1%81', }, 



},

/*

{ id: 'bucharest' 					, title: { ua: 'Бухарест' 					, en: 'Bucharest' 					, }, country: 'rou', site: { wiki: { ua: '%D0%91%D1%83%D1%85%D0%B0%D1%80%D0%B5%D1%81%D1%82', }, }, },
{ id: 'vaduz' 						, title: { ua: 'Вадуц' 						, en: 'Vaduz' 						, }, country: 'lie', site: { wiki: { ua: '%D0%92%D0%B0%D0%B4%D1%83%D1%86', }, }, },
*/


{ 
	id: 'valencia', 
	title: { ua: 'Валенсія', en: 'Valencia', }, 
	country: 'ven', 
	population: { n: 1196000, date: 2001, }, 
	site: { wiki_ua: '%D0%92%D0%B0%D0%BB%D0%B5%D0%BD%D1%81%D1%96%D1%8F_(%D0%92%D0%B5%D0%BD%D0%B5%D1%81%D1%83%D0%B5%D0%BB%D0%B0)', }, 
},





/*
{ id: 'valletta' 					, title: { ua: 'Валлетта' 					, en: 'Valletta' 					, }, country: 'mlt', site: { wiki: { ua: '%D0%92%D0%B0%D0%BB%D0%BB%D0%B5%D1%82%D1%82%D0%B0', }, }, },
{ id: 'warszawa' 					, title: { ua: 'Варшава' 					, en: 'Warszawa' 					, }, country: 'pol', site: { wiki: { ua: '%D0%92%D0%B0%D1%80%D1%88%D0%B0%D0%B2%D0%B0', }, }, },
{ id: 'washington' 					, title: { ua: 'Вашингтон' 					, en: 'Washington' 					, }, country: 'usa', site: { wiki: { ua: '%D0%92%D0%B0%D1%88%D0%B8%D0%BD%D0%B3%D1%82%D0%BE%D0%BD', }, }, },
{ id: 'wellington' 					, title: { ua: 'Веллінгтон' 				, en: 'Wellington' 					, }, country: 'nzl', site: { wiki: { ua: '%D0%92%D0%B5%D0%BB%D0%BB%D1%96%D0%BD%D0%B3%D1%82%D0%BE%D0%BD', }, }, },
{ id: 'vientiane' 					, title: { ua: 'В\'єнтьян' 					, en: 'Vientiane' 					, }, country: 'lao', site: { wiki: { ua: '%D0%92%27%D1%94%D0%BD%D1%82%D1%8C%D1%8F%D0%BD', }, }, },
{ id: 'wien' 						, title: { ua: 'Відень' 					, en: 'Wien' 						, }, country: 'aut', site: { wiki: { ua: '%D0%92%D1%96%D0%B4%D0%B5%D0%BD%D1%8C', }, }, },
{ id: 'vilnius' 					, title: { ua: 'Вільнюс' 					, en: 'Vilnius' 					, }, country: 'ltu', site: { wiki: { ua: '%D0%92%D1%96%D0%BB%D1%8C%D0%BD%D1%8E%D1%81', }, }, },
{ id: 'windhoek' 					, title: { ua: 'Віндгук' 					, en: 'Windhoek' 					, }, country: 'nam', site: { wiki: { ua: '%D0%92%D1%96%D0%BD%D0%B4%D0%B3%D1%83%D0%BA', }, }, },
{ id: 'gaborone' 					, title: { ua: 'Габороне' 					, en: 'Gaborone' 					, }, country: 'bwa', site: { wiki: { ua: '%D0%93%D0%B0%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B5', }, }, },
{ id: 'havana' 						, title: { ua: 'Гавана' 					, en: 'Havana' 						, }, country: 'cub', site: { wiki: { ua: '%D0%93%D0%B0%D0%B2%D0%B0%D0%BD%D0%B0', }, }, },
*/



{ 
	id: 'guadalajara', 
	title: { ua: 'Гвадалахара', en: 'Guadalajara', }, 
	country: 'mex', 
	population: { n: 1460148, date: 2010, }, 
	site: { wiki_ua: '%D0%93%D0%B2%D0%B0%D0%B4%D0%B0%D0%BB%D0%B0%D1%85%D0%B0%D1%80%D0%B0_(%D0%9C%D0%B5%D0%BA%D1%81%D0%B8%D0%BA%D0%B0)', }, 
},


/*
{ id: 'guatemala' 					, title: { ua: 'Гватемала' 					, en: 'Guatemala' 					, }, country: 'gtm', site: { wiki: { ua: '%D0%93%D0%B2%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D0%BB%D0%B0_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
{ id: 'helsinki' 					, title: { ua: 'Гельсінкі' 					, en: 'Helsinki' 					, }, country: 'fin', site: { wiki: { ua: '%D0%93%D0%B5%D0%BB%D1%8C%D1%81%D1%96%D0%BD%D0%BA%D1%96', }, }, },

*/


{ 
	id: 'giza', 
	title: { ua: 'Гіза', en: 'Giza', }, 
	country: 'egy', 
	population: { n: 3087878, date: 0, }, 
	site: { wiki_ua: '%D0%93%D1%96%D0%B7%D0%B0', }, 
},
{ 
	id: 'dhaka', 
	title: { ua: 'Дака', en: 'Dhaka', }, 
	country: 'bgd', 
	population: { n: 14543124, date: 2012, }, 
	site: { wiki_ua: '%D0%94%D0%B0%D0%BA%D0%B0', }, 
},





/*

{ id: 'dakar' 						, title: { ua: 'Дакар' 						, en: 'Dakar' 						, }, country: 'sen', site: { wiki: { ua: '%D0%94%D0%B0%D0%BA%D0%B0%D1%80', }, }, },
*/
{ 
	id: 'damascus', 
	title: { ua: 'Дамаск', en: 'Damascus', }, 
	country: 'syr', 
	population: { n: 1711000, date: 2009, }, 
	site: { wiki_ua: '%D0%94%D0%B0%D0%BC%D0%B0%D1%81%D0%BA', }, 
},
{ 
	id: 'delhi', 
	title: { ua: 'Делі', en: 'Delhi', }, 
	country: 'idn', 
	population: { n: 13782976, date: 0, }, 
	site: { wiki_ua: '%D0%94%D0%B5%D0%BB%D1%96', }, 
},
{ 
	id: 'jakarta', 
	title: { ua: 'Джакарта', en: 'Jakarta', }, 
	country: 'idn', 
	population: { n: 8489910, date: 2008, }, 
	site: { wiki_ua: '%D0%94%D0%B6%D0%B0%D0%BA%D0%B0%D1%80%D1%82%D0%B0', }, 
},

/*


{ id: 'djibouti' 					, title: { ua: 'Джибуті' 					, en: 'Djibouti'					, }, country: 'dji', site: { wiki: { ua: '%D0%94%D0%B6%D0%B8%D0%B1%D1%83%D1%82%D1%96_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
{ id: 'georgetown' 					, title: { ua: 'Джорджтаун' 				, en: 'Georgetown' 					, }, country: 'guy', site: { wiki: { ua: '%D0%94%D0%B6%D0%BE%D1%80%D0%B4%D0%B6%D1%82%D0%B0%D1%83%D0%BD', }, }, },
{ id: 'juba' 						, title: { ua: 'Джуба' 						, en: 'Juba' 						, }, country: 'ssd', site: { wiki: { ua: '%D0%94%D0%B6%D1%83%D0%B1%D0%B0', }, }, },
{ id: 'dodoma' 						, title: { ua: 'Додома' 					, en: 'Dodoma' 						, }, country: 'tza', site: { wiki: { ua: '%D0%94%D0%BE%D0%B4%D0%BE%D0%BC%D0%B0', }, }, },
{ id: 'doha' 						, title: { ua: 'Доха' 						, en: 'Doha' 						, }, country: 'qat', site: { wiki: { ua: '%D0%94%D0%BE%D1%85%D0%B0', }, }, },
*/

{ 
	id: 'dubai',
	title: { ua: 'Дубай', en: 'Dubai', }, 
	country: 'are', 
	population: { n: 3331420, date: 2020, }, 
	site: { wiki_ua: '%D0%94%D1%83%D0%B1%D0%B0%D0%B9', }, 
},





/*
{ id: 'dublin' 						, title: { ua: 'Дублін' 					, en: 'Dublin' 						, }, country: 'irl', site: { wiki: { ua: '%D0%94%D1%83%D0%B1%D0%BB%D1%96%D0%BD', }, }, },
{ id: 'dushanbe' 					, title: { ua: 'Душанбе' 					, en: 'Dushanbe' 					, }, country: 'tjk', site: { wiki: { ua: '%D0%94%D1%83%D1%88%D0%B0%D0%BD%D0%B1%D0%B5', }, }, },
{ id: 'el_kuwait' 					, title: { ua: 'Ель-Кувейт' 				, en: 'El Kuwait' 					, }, country: 'kwt', site: { wiki: { ua: '%D0%95%D0%BB%D1%8C-%D0%9A%D1%83%D0%B2%D0%B5%D0%B9%D1%82', }, }, },

*/

{ 
	id: 'riyadh', 
	title: { ua: 'Ер-Ріяд', en: 'Riyadh', }, 
	country: 'sau', 
	population: { n: 6506700, date: 2016, }, 
	site: { wiki_ua: '%D0%95%D1%80-%D0%A0%D1%96%D1%8F%D0%B4', }, 
},


/*

{ id: 'yerevan' 					, title: { ua: 'Єреван' 					, en: 'Yerevan' 					, }, country: 'arm', site: { wiki: { ua: '%D0%84%D1%80%D0%B5%D0%B2%D0%B0%D0%BD', }, }, },
{ id: 'jerusalem' 					, title: { ua: 'Єрусалим' 					, en: 'Jerusalem' 					, }, country: 'isr', site: { wiki: { ua: '%D0%84%D1%80%D1%83%D1%81%D0%B0%D0%BB%D0%B8%D0%BC', }, }, },
{ id: 'zagreb' 						, title: { ua: 'Загреб' 					, en: 'Zagreb' 						, }, country: 'hrv', site: { wiki: { ua: '%D0%97%D0%B0%D0%B3%D1%80%D0%B5%D0%B1', }, }, },
*/


{ 
	id: 'yokohama', 
	title: { ua: 'Йокогама', en: 'Yokohama', }, 
	country: 'jpn', 
	population: { n: 3692809, date: 2011, }, 
	site: { wiki_ua: '%D0%99%D0%BE%D0%BA%D0%BE%D0%B3%D0%B0%D0%BC%D0%B0', }, 
},


/*

{ id: 'islamabad' 					, title: { ua: 'Ісламабад' 					, en: 'Islamabad' 					, }, country: 'pak', site: { wiki: { ua: '%D0%86%D1%81%D0%BB%D0%B0%D0%BC%D0%B0%D0%B1%D0%B0%D0%B4', }, }, },
{ id: 'kabul' 						, title: { ua: 'Кабул' 						, en: 'Kabul' 						, }, country: 'afg', site: { wiki: { ua: '%D0%9A%D0%B0%D0%B1%D1%83%D0%BB', }, }, },
{ id: 'cairo' 						, title: { ua: 'Каїр' 						, en: 'Cairo' 						, }, country: 'egy', site: { wiki: { ua: '%D0%9A%D0%B0%D1%97%D1%80', }, }, },
*/


{ 
	id: 'calcutta', 
	title: { ua: 'Калькутта', en: 'Calcutta', }, 
	country: 'ind', 
	population: { n: 4580544, date: 2007, }, 
	site: { wiki_ua: '%D0%9A%D0%BE%D0%BB%D0%BA%D0%B0%D1%82%D0%B0', }, 
},


/*
{ id: 'kampala' 					, title: { ua: 'Кампала' 					, en: 'Kampala' 					, }, country: 'uga', site: { wiki: { ua: '%D0%9A%D0%B0%D0%BC%D0%BF%D0%B0%D0%BB%D0%B0', }, }, },
{ id: 'canberra'					, title: { ua: 'Канберра' 					, en: 'Canberra' 					, }, country: 'aus', site: { wiki: { ua: '%D0%9A%D0%B0%D0%BD%D0%B1%D0%B5%D1%80%D1%80%D0%B0', }, }, },
{ id: 'caracas' 					, title: { ua: 'Каракас' 					, en: 'Caracas' 					, }, country: 'ven', site: { wiki: { ua: '%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%B0%D1%81', }, }, },
*/


{ 
	id: 'casablanca', 
	title: { ua: 'Касабланка', en: 'Casablanca', }, 
	country: 'mar', 
	population: { n: 3356337, date: 2012, }, 
	site: { wiki_ua: '%D0%9A%D0%B0%D1%81%D0%B0%D0%B1%D0%BB%D0%B0%D0%BD%D0%BA%D0%B0', }, 
},





/*
{ id: 'kathmandu' 					, title: { ua: 'Катманду' 					, en: 'Kathmandu' 					, }, country: 'npl', site: { wiki: { ua: '%D0%9A%D0%B0%D1%82%D0%BC%D0%B0%D0%BD%D0%B4%D1%83', }, }, },
{ id: 'cape_town' 					, title: { ua: 'Кейптаун' 					, en: 'Cape Town' 					, }, country: 'zaf', site: { wiki: { ua: '%D0%9A%D0%B5%D0%B9%D0%BF%D1%82%D0%B0%D1%83%D0%BD', }, }, },
{ id: 'сhisinau' 					, title: { ua: 'Кишинів' 					, en: 'Chisinau' 					, }, country: 'mda', site: { wiki: { ua: '%D0%9A%D0%B8%D1%88%D0%B8%D0%BD%D1%96%D0%B2', }, }, },
{ id: 'kigali' 						, title: { ua: 'Кігалі' 					, en: 'Kigali' 						, }, country: 'rwa', site: { wiki: { ua: '%D0%9A%D1%96%D0%B3%D0%B0%D0%BB%D1%96', }, }, },
{ id: 'kingston' 					, title: { ua: 'Кінгстон' 					, en: 'Kingston' 					, }, country: 'jam', site: { wiki: { ua: '%D0%9A%D1%96%D0%BD%D0%B3%D1%81%D1%82%D0%BE%D0%BD_(%D0%AF%D0%BC%D0%B0%D0%B9%D0%BA%D0%B0)', }, }, },
{ id: 'kinshasa' 					, title: { ua: 'Кіншаса' 					, en: 'Kinshasa' 					, }, country: 'cod', site: { wiki: { ua: '%D0%9A%D1%96%D0%BD%D1%88%D0%B0%D1%81%D0%B0', }, }, },
{ id: 'quito' 						, title: { ua: 'Кіто' 						, en: 'Quito' 						, }, country: 'ecu', site: { wiki: { ua: '%D0%9A%D1%96%D1%82%D0%BE', }, }, },
{ id: 'conakry' 					, title: { ua: 'Конакрі' 					, en: 'Conakry' 					, }, country: 'gin', site: { wiki: { ua: '%D0%9A%D0%BE%D0%BD%D0%B0%D0%BA%D1%80%D1%96', }, }, },
{ id: 'copenhagen' 					, title: { ua: 'Копенгаген' 				, en: 'Copenhagen' 					, }, country: 'dnk', site: { wiki: { ua: '%D0%9A%D0%BE%D0%BF%D0%B5%D0%BD%D0%B3%D0%B0%D0%B3%D0%B5%D0%BD', }, }, },
*/

{ 
	id: 'kuala_lumpur', 
	title: { ua: 'Куала-Лумпур', en: 'Kuala Lumpur', }, 
	country: 'mys', 
	population: { n: 1768000, date: 2015, }, 
	site: { wiki_ua: '%D0%9A%D1%83%D0%B0%D0%BB%D0%B0-%D0%9B%D1%83%D0%BC%D0%BF%D1%83%D1%80', }, 
},


/*
{ id: 'las_vegas' 					, title: { ua: 'Лас-Вегас' 					, en: 'Las Vegas' 					, }, country: 'usa', site: { wiki: { ua: '%D0%9B%D0%B0%D1%81-%D0%92%D0%B5%D0%B3%D0%B0%D1%81', }, }, },
{ id: 'libreville' 					, title: { ua: 'Лібревіль' 					, en: 'Libreville' 					, }, country: 'gab', site: { wiki: { ua: '%D0%9B%D1%96%D0%B1%D1%80%D0%B5%D0%B2%D1%96%D0%BB%D1%8C', }, }, },
{ id: 'lima' 						, title: { ua: 'Ліма' 						, en: 'Lima' 						, }, country: 'per', site: { wiki: { ua: '%D0%9B%D1%96%D0%BC%D0%B0', }, }, },
{ id: 'lisbon' 						, title: { ua: 'Лісабон' 					, en: 'Lisbon' 						, }, country: 'prt', site: { wiki: { ua: '%D0%9B%D1%96%D1%81%D0%B0%D0%B1%D0%BE%D0%BD', }, }, },
{ id: 'lome' 						, title: { ua: 'Ломе' 						, en: 'Lome' 						, }, country: 'tgo', site: { wiki: { ua: '%D0%9B%D0%BE%D0%BC%D0%B5', }, }, },
*/

{ 
	id: 'london', 
	title: { ua: 'Лондон', en: 'London', }, 
	country: 'gbr', 
	population: { n: 8908081, date: 2018, }, 
	site: { wiki_ua: '%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD', }, 
},
{ 
	id: 'los_angeles', 
	title: { ua: 'Лос-Анджелес', en: 'Los Angeles', }, 
	country: 'usa', 
	population: { n: 3884307, date: 2013, }, 
	site: { wiki_ua: '%D0%9B%D0%BE%D1%81-%D0%90%D0%BD%D0%B4%D0%B6%D0%B5%D0%BB%D0%B5%D1%81', }, 
},




/*


{ id: 'luanda' 						, title: { ua: 'Луанда' 					, en: 'Luanda' 						, }, country: 'ago', site: { wiki: { ua: '%D0%9B%D1%83%D0%B0%D0%BD%D0%B4%D0%B0', }, }, },
{ id: 'lusaka' 						, title: { ua: 'Лусака' 					, en: 'Lusaka' 						, }, country: 'zmb', site: { wiki: { ua: '%D0%9B%D1%83%D1%81%D0%B0%D0%BA%D0%B0', }, }, },
{ id: 'lublyana' 					, title: { ua: 'Любляна' 					, en: 'Lublyana' 					, }, country: 'svn', site: { wiki: { ua: '%D0%9B%D1%8E%D0%B1%D0%BB%D1%8F%D0%BD%D0%B0', }, }, },
{ id: 'luxembourg' 					, title: { ua: 'Люксембург' 				, en: 'Luxembourg' 					, }, country: 'lux', site: { wiki: { ua: '%D0%9B%D1%8E%D0%BA%D1%81%D0%B5%D0%BC%D0%B1%D1%83%D1%80%D0%B3_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
*/



{ 
	id: 'madrid', 
	title: { ua: 'Мадрид', en: 'Madrid', }, 
	country: 'esp', 
	population: { n: 3266126, date: 2019, }, 
	site: { wiki_ua: '%D0%9C%D0%B0%D0%B4%D1%80%D0%B8%D0%B4', }, 
},


/*
{ id: 'malabo' 						, title: { ua: 'Малабо' 					, en: 'Malabo' 						, }, country: 'gnq', site: { wiki: { ua: '%D0%9C%D0%B0%D0%BB%D0%B0%D0%B1%D0%BE', }, }, },
{ id: 'manama' 						, title: { ua: 'Манама' 					, en: 'Manama' 						, }, country: 'bhr', site: { wiki: { ua: '%D0%9C%D0%B0%D0%BD%D0%B0%D0%BC%D0%B0', }, }, },
{ id: 'managua' 					, title: { ua: 'Манагуа' 					, en: 'Managua' 					, }, country: 'nic', site: { wiki: { ua: '%D0%9C%D0%B0%D0%BD%D0%B0%D0%B3%D1%83%D0%B0', }, }, },
{ id: 'manila' 						, title: { ua: 'Маніла' 					, en: 'Manila' 						, }, country: 'phl', site: { wiki: { ua: '%D0%9C%D0%B0%D0%BD%D1%96%D0%BB%D0%B0', }, }, },
{ id: 'maputo' 						, title: { ua: 'Мапуту' 					, en: 'Maputo' 						, }, country: 'moz', site: { wiki: { ua: '%D0%9C%D0%B0%D0%BF%D1%83%D1%82%D1%83', }, }, },
{ id: 'maseru' 						, title: { ua: 'Масеру' 					, en: 'Maseru' 						, }, country: 'lso', site: { wiki: { ua: '%D0%9C%D0%B0%D1%81%D0%B5%D1%80%D1%83', }, }, },
{ id: 'muscat' 						, title: { ua: 'Маскат' 					, en: 'Muscat' 						, }, country: 'omn', site: { wiki: { ua: '%D0%9C%D0%B0%D1%81%D0%BA%D0%B0%D1%82', }, }, },
*/


{ 
	id: 'melbourne', 
	title: { ua: 'Мельбурн', en: 'Melbourne', }, 
	country: 'aus', 
	population: { n: 5078193, date: 2019, }, 
	site: { wiki_ua: '%D0%9C%D0%B5%D0%BB%D1%8C%D0%B1%D1%83%D1%80%D0%BD', }, 
},
{ 
	id: 'mexico', 
	title: { ua: 'Мехіко', en: 'Mexico', }, 
	country: 'mex', 
	population: { n: 8918653, date: 2015, }, 
	site: { wiki_ua: '%D0%9C%D0%B5%D1%85%D1%96%D0%BA%D0%BE', }, 
},
{ 
	id: 'milan', 
	title: { ua: 'Мілан', en: 'Milan', }, 
	country: 'ita', 
	population: { n: 1337155, date: 0, }, 
	site: { wiki_ua: '%D0%9C%D1%96%D0%BB%D0%B0%D0%BD', }, 
},



/*
{ id: 'minsk' 						, title: { ua: 'Мінськ' 					, en: 'Minsk' 						, }, country: 'blr', site: { wiki: { ua: '%D0%9C%D1%96%D0%BD%D1%81%D1%8C%D0%BA', }, }, },
{ id: 'mogadishu' 					, title: { ua: 'Могадішо' 					, en: 'Mogadishu' 					, }, country: 'som', site: { wiki: { ua: '%D0%9C%D0%BE%D0%B3%D0%B0%D0%B4%D1%96%D1%88%D0%BE', }, }, },
{ id: 'monrovia' 					, title: { ua: 'Монровія' 					, en: 'Monrovia' 					, }, country: 'lbr', site: { wiki: { ua: '%D0%9C%D0%BE%D0%BD%D1%80%D0%BE%D0%B2%D1%96%D1%8F', }, }, },
{ id: 'montevideo' 					, title: { ua: 'Монтевідео' 				, en: 'Montevideo' 					, }, country: 'ury', site: { wiki: { ua: '%D0%9C%D0%BE%D0%BD%D1%82%D0%B5%D0%B2%D1%96%D0%B4%D0%B5%D0%BE', }, }, },
*/

{ 
	id: 'moscow', 
	title: { ua: 'Москва', en: 'Moscow', }, 
	country: 'rus', 
	population: { n: 12692466, date: 2020, }, 
	site: { wiki_ua: '%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0', }, 
},
{ 
	id: 'mumbai', 
	title: { ua: 'Мумбай', en: 'Mumbai', }, 
	country: 'ind', 
	population: { n: 13922125, date: 2008, }, 
	site: { wiki_ua: '%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B9', }, 
},









/*
{ id: 'naypedo' 					, title: { ua: 'Найп\'їдо' 					, en: 'Naypedo' 					, }, country: 'mmr', site: { wiki: { ua: '%D0%9D%D0%B0%D0%B9%D0%BF%27%D1%97%D0%B4%D0%BE', }, }, },
*/


{ 
	id: 'nairobi', 
	title: { ua: 'Найробі', en: 'Nairobi', }, 
	country: 'ken', 
	population: { n: 2940911, date: 2007, }, 
	site: { wiki_ua: '%D0%9D%D0%B0%D0%B9%D1%80%D0%BE%D0%B1%D1%96', }, 
},
{ 
	id: 'ndjamena', 
	title: { ua: 'Нджамена', en: 'N\'Djamena', }, 
	country: 'tcd', 
	population: { n: 721000, date: 2005, }, 
	site: { wiki_ua: '%D0%9D%D0%B4%D0%B6%D0%B0%D0%BC%D0%B5%D0%BD%D0%B0', }, 


},


/*
{ id: 'niamey' 						, title: { ua: 'Ніамей' 					, en: 'Niamey' 						, }, country: 'ner', site: { wiki: { ua: '%D0%9D%D1%96%D0%B0%D0%BC%D0%B5%D0%B9', }, }, },
{ id: 'nicosia' 					, title: { ua: 'Нікосія' 					, en: 'Nicosia' 					, }, country: 'cyp', site: { wiki: { ua: '%D0%9D%D1%96%D0%BA%D0%BE%D1%81%D1%96%D1%8F', }, }, },
{ id: 'nouakchott' 					, title: { ua: 'Нуакшот' 					, en: 'Nouakchott' 					, }, country: 'mrt', site: { wiki: { ua: '%D0%9D%D1%83%D0%B0%D0%BA%D1%88%D0%BE%D1%82', }, }, },
{ id: 'nur_sultan' 					, title: { ua: 'Нур-Султан' 				, en: 'Nur-Sultan' 					, }, country: 'kaz', site: { wiki: { ua: '%D0%9D%D1%83%D1%80-%D0%A1%D1%83%D0%BB%D1%82%D0%B0%D0%BD', }, }, },
{ id: 'nuuk' 						, title: { ua: 'Нуук' 						, en: 'Nuuk' 						, }, country: 'grl', site: { wiki: { ua: '%D0%9D%D1%83%D1%83%D0%BA', }, }, },
*/


{ 
	id: 'new_delhi', 
	title: { ua: 'Нью-Делі', 
	en: 'New Delhi', }, 
	country: 'ind', 
	population: { n: 302363, date: 2001, }, 
	site: { wiki_ua: '%D0%9D%D1%8C%D1%8E-%D0%94%D0%B5%D0%BB%D1%96', }, 
},
{ 
	id: 'new_york', 
	title: { ua: 'Нью-Йорк', en: 'New York', }, 
	country: 'usa', 
	population: { n: 8804190, date: 2020, }, 
	site: { wiki_ua: '%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA', }, 
},


/*


{ id: 'oslo' 						, title: { ua: 'Осло' 						, en: 'Oslo' 						, }, country: 'nor', site: { wiki: { ua: '%D0%9E%D1%81%D0%BB%D0%BE', }, }, },
{ id: 'ottawa' 						, title: { ua: 'Оттава' 					, en: 'Ottawa' 						, }, country: 'can', site: { wiki: { ua: '%D0%9E%D1%82%D1%82%D0%B0%D0%B2%D0%B0', }, }, },
{ id: 'panama' 						, title: { ua: 'Панама' 					, en: 'Panama' 						, }, country: 'pan', site: { wiki: { ua: '%D0%9F%D0%B0%D0%BD%D0%B0%D0%BC%D0%B0_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
{ id: 'paramaribo' 					, title: { ua: 'Парамарибо' 				, en: 'Paramaribo' 					, }, country: 'sur', site: { wiki: { ua: '%D0%9F%D0%B0%D1%80%D0%B0%D0%BC%D0%B0%D1%80%D0%B8%D0%B1%D0%BE', }, }, },
*/

{ 
	id: 'paris', 
	title: { ua: 'Париж', en: 'Paris', }, 
	country: 'fra', 
	population: { n: 2175601, date: 2021, }, 
	site: { wiki_ua: '%D0%9F%D0%B0%D1%80%D0%B8%D0%B6', }, 
},
{ 
	id: 'beijing', 
	title: { ua: 'Пекін', en: 'Beijing', }, 
	country: 'chn', 
	population: { n: 21705000, date: 2015, }, 
	site: { wiki_ua: '%D0%9F%D0%B5%D0%BA%D1%96%D0%BD', }, 
},




/*

{ id: 'south_tarawa' 				, title: { ua: 'Південна Тарава' 			, en: 'South Tarawa' 				, }, country: 'kir', site: { wiki: { ua: '%D0%9F%D1%96%D0%B2%D0%B4%D0%B5%D0%BD%D0%BD%D0%B0_%D0%A2%D0%B0%D1%80%D0%B0%D0%B2%D0%B0', }, }, },
{ id: 'phnom_penh' 					, title: { ua: 'Пномпень' 					, en: 'Phnom Penh' 					, }, country: 'khm', site: { wiki: { ua: '%D0%9F%D0%BD%D0%BE%D0%BC%D0%BF%D0%B5%D0%BD%D1%8C', }, }, },
{ id: 'podgorica' 					, title: { ua: 'Подгориця' 					, en: 'Podgorica' 					, }, country: 'mne', site: { wiki: { ua: '%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D1%80%D0%B8%D1%86%D1%8F', }, }, },
{ id: 'port_moresby' 				, title: { ua: 'Порт-Морсбі' 				, en: 'Port Moresby' 				, }, country: 'png', site: { wiki: { ua: '%D0%9F%D0%BE%D1%80%D1%82-%D0%9C%D0%BE%D1%80%D1%81%D0%B1%D1%96', }, }, },
{ id: 'porto_novo' 					, title: { ua: 'Порто-Ново' 				, en: 'Porto Novo' 					, }, country: 'ben', site: { wiki: { ua: '%D0%9F%D0%BE%D1%80%D1%82%D0%BE-%D0%9D%D0%BE%D0%B2%D0%BE', }, }, },
{ id: 'port_au_prince' 				, title: { ua: 'Порт-о-Пренс' 				, en: 'Port-au-Prince' 				, }, country: 'hti', site: { wiki: { ua: '%D0%9F%D0%BE%D1%80%D1%82-%D0%BE-%D0%9F%D1%80%D0%B5%D0%BD%D1%81', }, }, },
{ id: 'port_of_spain' 				, title: { ua: 'Порт-оф-Спейн' 				, en: 'Port of Spain' 				, }, country: 'tto', site: { wiki: { ua: '%D0%9F%D0%BE%D1%80%D1%82-%D0%BE%D1%84-%D0%A1%D0%BF%D0%B5%D0%B9%D0%BD', }, }, },
{ id: 'prague'						, title: { ua: 'Прага' 						, en: 'Prague' 						, }, country: 'cze', site: { wiki: { ua: '%D0%9F%D1%80%D0%B0%D0%B3%D0%B0', }, }, },
{ id: 'pretoria' 					, title: { ua: 'Преторія' 					, en: 'Pretoria' 					, }, country: 'zaf', site: { wiki: { ua: '%D0%9F%D1%80%D0%B5%D1%82%D0%BE%D1%80%D1%96%D1%8F', }, }, },
{ id: 'pyongyang'					, title: { ua: 'Пхеньян' 					, en: 'Pyongyang' 					, }, country: 'prk', site: { wiki: { ua: '%D0%9F%D1%85%D0%B5%D0%BD%D1%8C%D1%8F%D0%BD', }, }, },
{ id: 'rabat' 						, title: { ua: 'Рабат' 						, en: 'Rabat' 						, }, country: 'mar', site: { wiki: { ua: '%D0%A0%D0%B0%D0%B1%D0%B0%D1%82', }, }, },
{ id: 'ramallah' 					, title: { ua: 'Рамалла' 					, en: 'Ramallah' 					, }, country: 'pse', site: { wiki: { ua: '%D0%A0%D0%B0%D0%BC%D0%B0%D0%BB%D0%BB%D0%B0', }, }, },
{ id: 'reykjavik' 					, title: { ua: 'Рейк\'явік' 				, en: 'Reykjavik' 					, }, country: 'isl', site: { wiki: { ua: '%D0%A0%D0%B5%D0%B9%D0%BA%27%D1%8F%D0%B2%D1%96%D0%BA', }, }, },
{ id: 'riga' 						, title: { ua: 'Рига' 						, en: 'Riga' 						, }, country: 'lva', site: { wiki: { ua: '%D0%A0%D0%B8%D0%B3%D0%B0', }, }, },

*/

{ 
	id: 'rome', 
	title: { ua: 'Рим', en: 'Rome', }, 
	country: 'ita', 
	population: { n: 2870500, date: 2019, }, 
	site: { wiki_ua: '%D0%A0%D0%B8%D0%BC', }, 
},
{ 
	id: 'rio_de_janeiro', 
	title: { ua: 'Ріо-де-Жанейро', en: 'Rio de Janeiro', }, 
	country: 'bra', 
	population: { n: 6323037, date: 2010, }, 
	site: { wiki_ua: '%D0%A0%D1%96%D0%BE-%D0%B4%D0%B5-%D0%96%D0%B0%D0%BD%D0%B5%D0%B9%D1%80%D0%BE', }, 
},








/*


{ id: 'rose' 						, title: { ua: 'Розо' 						, en: 'Rose' 						, }, country: 'dma', site: { wiki: { ua: '%D0%A0%D0%BE%D0%B7%D0%BE', }, }, },
{ id: 'san_marino' 					, title: { ua: 'Сан-Марино' 				, en: 'San Marino' 					, }, country: 'smr', site: { wiki: { ua: '%D0%A1%D0%B0%D0%BD-%D0%9C%D0%B0%D1%80%D0%B8%D0%BD%D0%BE_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
{ id: 'san_salvador' 				, title: { ua: 'Сан-Сальвадор' 				, en: 'San Salvador' 				, }, country: 'slv', site: { wiki: { ua: '%D0%A1%D0%B0%D0%BD-%D0%A1%D0%B0%D0%BB%D1%8C%D0%B2%D0%B0%D0%B4%D0%BE%D1%80', }, }, },
{ id: 'san_francisco' 				, title: { ua: 'Сан-Франциско' 				, en: 'San Francisco' 				, }, country: 'usa', site: { wiki: { ua: '%D0%A1%D0%B0%D0%BD-%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%81%D0%BA%D0%BE', }, }, },
{ id: 'san_jose' 					, title: { ua: 'Сан-Хосе' 					, en: 'San Jose' 					, }, country: 'cri', site: { wiki: { ua: '%D0%A1%D0%B0%D0%BD-%D0%A5%D0%BE%D1%81%D0%B5_(%D0%9A%D0%BE%D1%81%D1%82%D0%B0-%D0%A0%D0%B8%D0%BA%D0%B0)', }, }, },
{ id: 'san_juan' 					, title: { ua: 'Сан-Хуан' 					, en: 'San Juan' 					, }, country: 'pri', site: { wiki: { ua: '%D0%A1%D0%B0%D0%BD-%D0%A5%D1%83%D0%B0%D0%BD', }, }, },
{ id: 'sana' 						, title: { ua: 'Сана' 						, en: 'Sana' 						, }, country: 'yem', site: { wiki: { ua: '%D0%A1%D0%B0%D0%BD%D0%B0', }, }, },
*/


{ 
	id: 'st_petersburg', 
	title: { ua: 'Санкт-Петербург', en: 'St. Petersburg', }, 
	country: 'rus', 
	population: { n: 5398064, date: 2020, }, 
	site: { wiki_ua: '%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3', }, 
},
{ 
	id: 'santiago', 
	title: { ua: 'Сантьяго', en: 'Santiago', }, 
	country: 'chl', 
	population: { n: 5145599, date: 2009, }, 
	site: { wiki_ua: '%D0%A1%D0%B0%D0%BD%D1%82%D1%8C%D1%8F%D0%B3%D0%BE', }, 
},

/*

{ id: 'sarajevo' 					, title: { ua: 'Сараєво' 					, en: 'Sarajevo' 					, }, country: 'bih', site: { wiki: { ua: '%D0%A1%D0%B0%D1%80%D0%B0%D1%94%D0%B2%D0%BE', }, }, },
*/

{ 
	id: 'seoul', 
	title: { ua: 'Сеул', en: 'Seoul', }, 
	country: 'kor', 
	population: { n: 9689159, date: 2020, }, 
	site: { wiki_ua: '%D0%A1%D0%B5%D1%83%D0%BB', }, 
},



/*

{ id: 'Sydney' 						, title: { ua: 'Сідней' 					, en: 'Sydney' 						, }, country: 'aus', site: { wiki: { ua: '%D0%A1%D1%96%D0%B4%D0%BD%D0%B5%D0%B9', }, }, },
{ id: 'skopje' 						, title: { ua: 'Скоп\'є' 					, en: 'Skopje' 						, }, country: 'mkd', site: { wiki: { ua: '%D0%A1%D0%BA%D0%BE%D0%BF%27%D1%94', }, }, },
{ id: 'sofia' 						, title: { ua: 'Софія' 						, en: 'Sofia' 						, }, country: 'bgr', site: { wiki: { ua: '%D0%A1%D0%BE%D1%84%D1%96%D1%8F', }, }, },

*/
{ 
	id: 'istanbul', 
	title: { ua: 'Стамбул', en: 'Istanbul', }, 
	country: 'tur', 
	population: { n: 15415197, date: 21, }, 
	site: { wiki_ua: '%D0%A1%D1%82%D0%B0%D0%BC%D0%B1%D1%83%D0%BB', }, 
},


/*
{ id: 'stockholm' 					, title: { ua: 'Стокгольм' 					, en: 'Stockholm' 					, }, country: 'swe', site: { wiki: { ua: '%D0%A1%D1%82%D0%BE%D0%BA%D0%B3%D0%BE%D0%BB%D1%8C%D0%BC', }, }, },
{ id: 'suva' 						, title: { ua: 'Сува' 						, en: 'Suva' 						, }, country: 'fji', site: { wiki: { ua: '%D0%A1%D1%83%D0%B2%D0%B0_(%D0%A4%D1%96%D0%B4%D0%B6%D1%96)', }, }, },
{ id: 'sucre' 						, title: { ua: 'Сукре' 						, en: 'Sucre' 						, }, country: 'bol', site: { wiki: { ua: '%D0%A1%D1%83%D0%BA%D1%80%D0%B5', }, }, },
*/



{ 
	id: 'surabaya', 
	title: { ua: 'Сурабая', en: 'Surabaya', }, 
	country: 'idn', 
	population: { n: 2765487, date: 2010, }, 
	site: { wiki_ua: '%D0%A1%D1%83%D1%80%D0%B0%D0%B1%D0%B0%D1%8F', }, 
},








{ 
	id: 'taipei', 
	title: { ua: 'Тайбей', en: 'Taipei', }, 
	country: 'twn', 
	site: { wiki_ua: '%D0%A2%D0%B0%D0%B9%D0%B1%D0%B5%D0%B9', }, 
	population: { n: 2618772, date: 2010, }, 
},

/*

{ id: 'tallinn' 					, title: { ua: 'Таллінн' 					, en: 'Tallinn' 					, }, country: 'est', site: { wiki: { ua: '%D0%A2%D0%B0%D0%BB%D0%BB%D1%96%D0%BD%D0%BD', }, }, },
{ id: 'tashkent' 					, title: { ua: 'Ташкент' 					, en: 'Tashkent' 					, }, country: 'uzb', site: { wiki: { ua: '%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82', }, }, },
*/


{ 
	id: 'tehran', 
	title: { ua: 'Тегеран', en: 'Tehran', }, 
	country: 'irn', 
	site: { wiki_ua: '%D0%A2%D0%B5%D0%B3%D0%B5%D1%80%D0%B0%D0%BD', }, 
	population: { n: 8693706, date: 2016, }, 
},


/*
{ id: 'tegucigalpa' 				, title: { ua: 'Тегусігальпа' 				, en: 'Tegucigalpa' 				, }, country: 'hnd', site: { wiki: { ua: '%D0%A2%D0%B5%D0%B3%D1%83%D1%81%D1%96%D0%B3%D0%B0%D0%BB%D1%8C%D0%BF%D0%B0', }, }, },
{ id: 'tirana' 						, title: { ua: 'Тирана' 					, en: 'Tirana' 						, }, country: 'alb', site: { wiki: { ua: '%D0%A2%D0%B8%D1%80%D0%B0%D0%BD%D0%B0', }, }, },
{ id: 'tbilisi' 					, title: { ua: 'Тбілісі' 					, en: 'Tbilisi' 					, }, country: 'geo', site: { wiki: { ua: '%D0%A2%D0%B1%D1%96%D0%BB%D1%96%D1%81%D1%96', }, }, },
*/

{ 
	id: 'tokyo', 
	title: { ua: 'Токіо', en: 'Tokyo', }, 
	country: 'jpn', 
	population: { n: 13185502, date: 2011, }, 
	site: { wiki_ua: '%D0%A2%D0%BE%D0%BA%D1%96%D0%BE', }, 
},
{ 
	id: 'toronto', 
	title: { ua: 'Торонто', en: 'Toronto', }, 
	country: 'can', 
	population: { n: 2731571, date: 2016, }, 
	site: { wiki_ua: '%D0%A2%D0%BE%D1%80%D0%BE%D0%BD%D1%82%D0%BE', }, 
},





/*


{ id: 'tripoli' 					, title: { ua: 'Триполі' 					, en: 'Tripoli' 					, }, country: 'lby', site: { wiki: { ua: '%D0%A2%D1%80%D0%B8%D0%BF%D0%BE%D0%BB%D1%96', }, }, },
{ id: 'tunisia' 					, title: { ua: 'Туніс' 						, en: 'Tunisia' 					, }, country: 'tun', site: { wiki: { ua: '%D0%A2%D1%83%D0%BD%D1%96%D1%81_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)', }, }, },
{ id: 'thimphu' 					, title: { ua: 'Тхімпху' 					, en: 'Thimphu' 					, }, country: 'btn', site: { wiki: { ua: '%D0%A2%D1%85%D1%96%D0%BC%D0%BF%D1%85%D1%83', }, }, },
*/


{ 
	id: 'ulaanbaatar', 
	title: { ua: 'Улан-Батор', en: 'Ulaanbaatar', }, 
	country: 'mng', 
	population: { n: 1466125, date: 2020, }, 
	site: { wiki_ua: '%D0%A3%D0%BB%D0%B0%D0%BD-%D0%91%D0%B0%D1%82%D0%BE%D1%80', }, 
},



/*

{ id: 'freetown' 					, title: { ua: 'Фрітаун' 					, en: 'Freetown' 					, }, country: 'sle', site: { wiki: { ua: '%D0%A4%D1%80%D1%96%D1%82%D0%B0%D1%83%D0%BD', }, }, },
{ id: 'funafuti' 					, title: { ua: 'Фунафуті' 					, en: 'Funafuti' 					, }, country: 'tuv', site: { wiki: { ua: '%D0%A4%D1%83%D0%BD%D0%B0%D1%84%D1%83%D1%82%D1%96', }, }, },

*/

{ 
	id: 'hanoi', 
	title: { ua: 'Ханой', en: 'Hanoi', }, 
	country: 'vnm', 
	site: { wiki_ua: '%D0%A5%D0%B0%D0%BD%D0%BE%D0%B9', }, 
	population: { n: 3083800, date: 2004, }, 
},


/*

{ id: 'harare' 						, title: { ua: 'Хараре' 					, en: 'Harare' 						, }, country: 'zwe', site: { wiki: { ua: '%D0%A5%D0%B0%D1%80%D0%B0%D1%80%D0%B5', }, }, },
{ id: 'khartoum' 					, title: { ua: 'Хартум' 					, en: 'Khartoum' 					, }, country: 'sdn', site: { wiki: { ua: '%D0%A5%D0%B0%D1%80%D1%82%D1%83%D0%BC', }, }, },


*/


{ 
	id: 'shanghai', 
	title: { ua: 'Шанхай', en: 'Shanghai', }, 
	country: 'chn', 
	population: { n: 20217748, date: 2016, }, 
	site: { wiki_ua: '%D0%A8%D0%B0%D0%BD%D1%85%D0%B0%D0%B9', }, 
},

/*




{ id: 'sri_jayawardenepura_kotte' 	, title: { ua: 'Шрі-Джаяварденепура-Котте' 	, en: 'Sri Jayawardenepura Kotte' 	, }, country: 'lka', site: { wiki: { ua: '%D0%A8%D1%80%D1%96-%D0%94%D0%B6%D0%B0%D1%8F%D0%B2%D0%B0%D1%80%D0%B4%D0%B5%D0%BD%D0%B5%D0%BF%D1%83%D1%80%D0%B0-%D0%9A%D0%BE%D1%82%D1%82%D0%B5', }, }, },
{ id: 'yamoussoukro' 				, title: { ua: 'Ямусукро' 					, en: 'Yamoussoukro' 				, }, country: 'civ', site: { wiki: { ua: '%D0%AF%D0%BC%D1%83%D1%81%D1%83%D0%BA%D1%80%D0%BE', }, }, },
{ id: 'yaounde' 					, title: { ua: 'Яунде' 						, en: 'Yaounde' 					, }, country: 'cmr', site: { wiki: { ua: '%D0%AF%D1%83%D0%BD%D0%B4%D0%B5', }, }, },






*/










/*

{ 
	id: '', 
	country: '', 
	title: { 
		ru: '', 
		ua: '', 
		en: '', 
	}, 
	site: { 
		wiki: { 
			ru: '', 
			ua: '', 
			en: '', 
		}, 
	}, 
},

*/












];




let objCity = {};
arrCity.forEach( k => {
	objCity[ k.id ] = k;
});



//console.log( objCity );













