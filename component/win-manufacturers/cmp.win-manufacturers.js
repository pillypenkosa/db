
 
 
 
 
 
class ComponentWinManufacturers { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
		setMeta({
			title 			: 'Виробники',
			description 	: 'Опис... Виробники',
			//keywords 		: 'Ключові слова...' + name,
			//image 			: 'img/pic/logoDJS.png',
			//url 			: 'url/any/there/' + name,
			//type 			: 'Тіпі-тіп ' + name,
			//site_name 	: 'Назва сайту, мабуть стале значення... ' + name,
		});



 
		let html = ''; 
 
		//console.log( fooName ); 
		//console.log( objData ); 


		//document.querySelector( 'cmp-header .filter' ).innerHTML = this.getHtmlFilter();



		let arrSelected = arrManufacturer;


		if ( objData && objData.win && objData.win == 'manufacturers' ) {


			if ( objData.country ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.country && k.country[ objData.country ] ) 
						return true;
				});
			}


			if ( objData.hash ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.hash && k.hash[ objData.hash ] ) 
						return true;
				});
			}
		}














		arrSelected.forEach( k => {
			html += `${ 
				Component( 'Spoyler', { 
					id 		: k.id, 
					title 	: `${ k.title ? k.title : '' }`, 
					cmp 	: 'Spoyler-Body-Manufacturer', // для вставки в body спойлера
				})}`;
		});


		return { tagParam, html };  
	} 
 
 
 




	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem:', elem ); 

	} 
 
 



	static getHtmlFilter() {
		const fooName = this.name + '.insertFilter()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );



		const arrFilter = [


			{ win: 'manufacturers' 	, cat: 'select' 	, key: 'country' 	, clc: '' 	, arr: [] 			, },
			{ win: 'manufacturers' 	, cat: 'select' 	, key: 'hash' 		, clc: '' 	, arr: [] 			, },


		];



		return Component( 'Filter', arrFilter );
	}



	static getHtmlSpoylers( arr ) {
		const fooName = this.name + '.insertFilter()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );


	}





	static changeFilter222( elem ) {
		const fooName = this.name + '.insertFilter()';
		//console.log( 'fooName', fooName );
		console.log( 'elem', elem );






	}





 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
