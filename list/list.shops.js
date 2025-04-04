// магазини   



// категорії магазинів   



const arrListShopCat = [

	//{ id: 'all' 			, title: 'Усі'				, },
	{ id: 'autograd' 		, title: 'Автоград' 		, },
	{ id: 'pharmacy' 		, title: 'Аптека'			, },
	{ id: 'atb' 			, title: 'АТБ'				, },
	{ id: 'bank' 			, title: 'Банк' 			, },
	{ id: 'barabashovo' 	, title: 'Барабашово' 		, },
	{ id: 'epicentr' 		, title: 'Епіцентр'			, },
	{ id: 'losk' 			, title: 'Лоск' 			, },
	{ id: 'newline' 		, title: 'НоваЛінія'		, },
	{ id: 'rost' 			, title: 'Рост'				, },
	{ id: 'market' 			, title: 'Ц.Ринок'			, },
	{ id: 'pc' 				, title: 'PC' 				, },
	{ id: 'car' 			, title: 'Авто' 			, },
	{ id: 'household' 		, title: 'Господарство' 	, },
	{ id: 'home' 			, title: 'Дім' 				, },
	{ id: 'electro' 		, title: 'Електро' 			, },
	{ id: 'tool' 			, title: 'Інструмент' 		, },
	{ id: 'furniture' 		, title: 'Меблі' 			, },
	{ id: 'dishes' 			, title: 'Посуд' 			, },
	{ id: 'food' 			, title: 'Продукти' 		, },
	{ id: 'chemical' 		, title: 'Хімія' 			, },



];






let objListShopCat = {};
arrListShopCat.forEach( k => {
	objListShopCat[ k.id ] = k;
});































let arrListShop = [

/*



{
	id 			: '', 		// ID - дата, время
	title 		: '', 		// название магазина
	cat 		: {}, 		// категория, тип, вид продукции 
	locality 	: '', 		// населенный пенкт
	adress 		: '', 		// адрес
	orientir    : '', 		// ориентир
	phone 		: '', 		// телефон
	gps 		: '', 		// GPS-координаты //    https://goo.gl/maps/
},




{
	id 			: '',
	title 		: '',
	cat 		: {},
	locality 	: '',
	adress 		: '',
	orientir    : '',
	phone 		: '',
	gps 		: '',
},




*/






{
	id 			: 'kharkiv_bus_auto',
	title 		: 'BusAuto',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: 'вул. Шевченка, 24',
	orientir    : '',
	phone 		: '',
	gps 		: 'https://www.google.com/maps/place/BusAuto/@49.9988509,36.2557567,21z/data=!4m6!3m5!1s0x4127a0d6e32ab073:0xdef628f748d50ac8!8m2!3d49.9988947!4d36.2558399!16s%2Fg%2F1tmcks9b?entry=ttu',
},
{
	id 			: 'kharkiv_comfy_1',
	title 		: 'Comfy',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: 'вул. Героїв Праці, 9',
	orientir    : '',
	phone 		: '',
	gps 		: 'https://www.google.com/maps/place/COMFY/@50.0267467,36.329068,461m/data=!3m1!1e3!4m6!3m5!1s0x4127a768a84fd345:0x1978c190a897765a!8m2!3d50.0271243!4d36.330099!16s%2Fg%2F1vxz84lq?entry=ttu',
},
{
	id 			: 'kharkiv_pc_shop_1',
	title 		: 'PC Shop',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: '',
	orientir    : '',
	phone 		: '',
},
{
	id 			: 'kharkiv_avtograd',
	title 		: 'Автоград',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: '',
	orientir    : '',
	phone 		: '',
	gps 		: 'https://www.google.com/maps/place/%D0%90%D0%92%D0%A2%D0%9E%D0%93%D0%A0%D0%90%D0%94/@49.9369486,36.2811835,923m/data=!3m1!1e3!4m6!3m5!1s0x41270adde0c572db:0x4ecd74ba2315407f!8m2!3d49.9369482!4d36.2875563!16s%2Fg%2F1hhh71pjz?entry=ttu',
},
{
	id 			: 'kharkiv_allo_1',
	title 		: 'Алло',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: '',
	orientir    : '',
	phone 		: '',
},
{
	id 			: 'kharkiv_aquaera_1',
	title 		: 'АкваЭра',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: 'вул. Пискунівська, 33',
	orientir    : 'Ц.Рынок вдоль дороги напротив автостанции',
	phone 		: '',
},
{
	id 			: 'kharkiv_atb_1',
	title 		: 'АТБ',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: '',
	orientir    : 'Південний Вокзал',
	gps 		: 'https://www.google.com/maps/place/%D0%90%D0%A2%D0%91/@49.9901943,36.1994044,922m/data=!3m1!1e3!4m6!3m5!1s0x4127a055343cf9a1:0x616bd1e2639a5393!8m2!3d49.9901967!4d36.2048244!16s%2Fg%2F1pp2tylqv?entry=ttu',
},
{
	id 			: 'kharkiv_atb_2',
	title 		: 'АТБ',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: '',
	orientir    : 'Центральний Ринок',
	gps 		: 'https://www.google.com/maps/place/Atb/@49.9927793,36.2205995,115m/data=!3m1!1e3!4m6!3m5!1s0x4127a0fbc26cabeb:0x8ceedf786a085337!8m2!3d49.992761!4d36.2217286!16s%2Fg%2F11c49_mmmg?entry=ttu',
},
{
	id 			: 'vysoky_atb_1',
	title 		: 'АТБ',
	cat 		: {},
	locality 	: 'vysoky',
	adress 		: '',
	orientir    : 'На трасі',
	gps 		: 'https://www.google.com/maps/place/%D0%90%D0%A2%D0%91-%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@49.8837022,36.1295819,462m/data=!3m1!1e3!4m6!3m5!1s0x41279fb469184ccf:0x5c105b738d19118c!8m2!3d49.8836838!4d36.1324404!16s%2Fg%2F11jg0p28xg?entry=ttu',
},
{
	id 			: 'karachivka_atb_1',
	title 		: 'АТБ',
	cat 		: {},
	locality 	: 'karachivka',
	adress 		: '',
	orientir    : 'На трасі',
	gps 		: 'https://www.google.com/maps/place/%D0%90%D0%A2%D0%91/@49.9121574,36.1975245,231m/data=!3m1!1e3!4m7!3m6!1s0x41277544da788f55:0xb02993f37074168f!8m2!3d49.912163!4d36.1991367!15sCgbQkNCi0JEiA4gBAVoIIgbQsNGC0LGSAQtzdXBlcm1hcmtldOABAA!16s%2Fg%2F11j7z2k38p?entry=tts',
},
{
	id 			: 'kharkiv_armeysky_1',
	title 		: 'Армейский',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: 'вул. Ярославська, 4',
},
{
	id 			: 'kharkiv_atlanta_show',
	title 		: 'Атланта Шоу',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: '',
},
{
	id 			: 'kharkiv_tc_barabashovo',
	title 		: 'ТЦ Барабашово',
	locality 	: 'kharkiv',
},
{
	id 			: 'kharkiv_blagbaz',
	title 		: 'Центральний ринок',
	locality 	: 'kharkiv',
},
{
	id 			: 'kharkiv_gvardeysky_1',
	title 		: 'Гвардейский',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: 'вул. Ярославська, 2/2',
},
{
	id 			: 'kharkiv_losk',
	title 		: 'Лоск',
	locality 	: 'kharkiv',
},
{
	id 			: 'kharkiv_losk_1_auto_elektryka',
	title 		: 'Лоск 1. Магазин електрики',
	locality 	: 'kharkiv',
	orientir 	: 'Ряд 1, місце ?',
	gps			: '',
},
{
	id 			: 'kharkiv_losk_2_4',
	title 		: 'Лоск 2/4. З/ч для іномарок',
	locality 	: 'kharkiv',
	orientir 	: 'Ряд 2, місце 4',
	gps			: '',
},
{
	id 			: 'kharkiv_losk_9_97',
	title 		: 'Лоск 9/97',
	locality 	: 'kharkiv',
	orientir 	: 'Ряд 9, місце 97',
},
{
	id 			: 'kharkiv_losk_10_22',
	title 		: 'Лоск 10/22',
	locality 	: 'kharkiv',
	orientir 	: 'Ряд 10, місце 22',
	phone 		: '+38099-987-21-32, +38068-584-71-06',
	note 		: 'Аккумуляторы у Ромы',
},
{
	id 			: 'kharkiv_losk_11_49',
	title 		: 'Лоск 11/49',
	locality 	: 'kharkiv',
	orientir 	: 'Ряд 11, місце 49',
},
{
	id 			: 'kharkiv_losk_insideParts',
	title 		: 'Лоск InsideParts',
	locality 	: 'kharkiv',
	orientir 	: 'Лоск',
	phone 		: '+3800500107176, +380637002060',
},
{
	id 			: 'kharkiv_rost_1', 			// http://rost.kharkov.ua/company/supermarkety-rost/rost-kievskij/
	title 		: 'Рост Центральний',
	locality 	: 'kharkiv',
	adress 		: 'вул. Клочківська, 65',
	orientir 	: '',
	phone 		: '',
},
{
	id 			: 'kharkiv_rost_2',
	title 		: 'Рост Малишевський',
	locality 	: 'kharkiv',
	adress 		: 'вул. Плеханівська, 135-139',
	orientir 	: '',
	phone 		: '',
},
{
	id 			: 'kharkiv_rost_3',
	title 		: 'Рост Київський',
	locality 	: 'kharkiv',
	adress 		: 'вул. Шевченко, 142а',
	orientir 	: '',
	phone 		: '',
},
{
	id 			: 'kharkiv_rost_4',
	title 		: 'Рост Холодногірський',
	locality 	: 'kharkiv',
	adress 		: 'вул. Полтавський Шлях, 140',
	orientir 	: '',
	phone 		: '',
},
{
	id 			: 'kharkiv_rost_5',
	title 		: 'Рост',
	locality 	: 'kharkiv',
	adress 		: '',
	orientir 	: '',
	phone 		: '',
},
{
	id 			: 'kharkiv_rost_6',
	title 		: 'Рост',
	locality 	: 'kharkiv',
	adress 		: '',
	orientir 	: '',
	phone 		: '',
},
{
	id 			: 'kharkiv_rost_7',
	title 		: 'Рост',
	locality 	: 'kharkiv',
	adress 		: '',
	orientir 	: '',
	phone 		: '',
},
{
	id 			: 'kharkiv_rost_8',
	title 		: 'Рост',
	locality 	: 'kharkiv',
	adress 		: '',
	orientir 	: '',
	phone 		: '',
},
{
	id 			: 'kharkiv_rost_9',
	title 		: 'Рост',
	locality 	: 'kharkiv',
	adress 		: '',
	orientir 	: '',
	phone 		: '',
},
{
	id 			: 'kharkiv_univermag_kharkiv',
	title 		: 'Універмаг Харків',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: '',
	orientir    : '',
	phone 		: '',
},
{
	id 			: 'kharkiv_epicentr_1',
	title 		: 'Епіцентр',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: 'пр. Гагаріна, 352',
	orientir    : '',
	gps 		: 'https://www.google.com/maps/place/%D0%95%D0%9F%D0%86%D0%A6%D0%95%D0%9D%D0%A2%D0%A0/@49.9108882,36.2709834,15z/data=!4m6!3m5!1s0x412774d17a1ebe1b:0xcf7bfa18e0254d66!8m2!3d49.9098091!4d36.2747802!16s%2Fg%2F1tjmc5_v?entry=ttu',
},
{
	id 			: 'kharkiv_epicentr_2',
	title 		: 'Епіцентр',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: 'вул. Героїв Праці, 9а',
	orientir    : '',
	gps 		: 'https://www.google.com/maps/place/Epitsentr/@50.028262,36.3173031,15.25z/data=!4m7!3m6!1s0x4127a764b51845bd:0x33e46441eb6a4aaa!8m2!3d50.0281813!4d36.3343539!15sChDQldCf0IbQptCV0J3QotCgIgOIAQFaEiIQ0LXQv9GW0YbQtdC90YLRgJIBD3Nob3BwaW5nX2NlbnRlcuABAA!16s%2Fg%2F11c0q0wwvd?entry=tts',
},
{
	id 			: 'kharkiv_shiny_diski_1',
	title 		: 'Шини та Диски',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: 'Харків, вул. Академіка Білецького, 34',
	orientir    : 'Шиномонтаж + магазин',
	gps 		: 'https://www.google.com/maps/place/%D0%A8%D0%B8%D0%BD%D1%8B+%D0%B8+%D0%94%D0%B8%D1%81%D0%BA%D0%B8+(Shiny%26Diski)+Top+Service+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2/@49.9980618,36.2727638,21z/data=!4m6!3m5!1s0x4127a0bb838bcd55:0xd8093d244bc563ef!8m2!3d49.9980618!4d36.2730454!16s%2Fg%2F12hkkm1vc?entry=ttu',
},
{
	id 			: 'kharkiv_elmir_1',
	title 		: 'Электронный мир',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: 'вул. Короленка, 6',
	orientir    : '',
	phone 		: '',
},
{
	id 			: 'kharkiv_elmir_2',
	title 		: 'Электронный мир',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: 'пр. Незалежності, 5',
	orientir    : '',
	phone 		: '',
},
{
	id 			: 'kharkiv_elmir_3',
	title 		: 'Электронный мир',
	cat 		: {},
	locality 	: 'kharkiv',
	adress 		: '',
	orientir    : '',
	phone 		: '',
},
{
	id 			: 'merefa_dnipro_m',
	title 		: 'Dnipro-M',
	locality 	: 'merefa',
	adress 		: 'вул. Дніпропетровська, 131',
},
{
	id 			: 'merefa_rynok_santehnika_1',
	title 		: 'Сантехника',
	locality 	: 'merefa',
},





];





let objListShop = {};
arrListShop.forEach( k => {
	objListShop[ k.id ] = k;
});




















