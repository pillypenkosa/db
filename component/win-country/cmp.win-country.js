// © 2024 DJS 
 
 
 
 
 
class ComponentWinCountry { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 
 
 
 
		setMeta({ 
			title 			: 'Країни', 
			description 	: 'Опис... Країни', 
			//image 		: '', 
		}); 
 
 

		let arrSelected = arrCountry;


		if ( objData.part ) {

			//console.log( objData.genre );
			arrSelected = arrSelected.filter( k => {

				if ( k.geo && k.geo.part && k.geo.part == objData.part )
					return true;
			});
		}







		arrSelected.forEach( k => {
			html += `${ 
				Component( 'Spoyler', { 
					id 		: k.id, 
					title 	: `${ k.title ? ( k.title.ua ? k.title.ua : '' ) : '' }`, 
					cmp 	: 'Spoyler-Body-Country', // для вставки в body спойлера
				})}`;
		});





		return { tagParam, html };  
	} 
 
 
 




 
	static getHtmlFilter( data ) { 
		const fooName = this.name + '.getHtmlFilter()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 



		const arrFilter = [

			{ win: 'countries' 	, cat: 'select' 	, key: 'part' 		, clc: '' 	, arr: [] 			, },

		];


		return Component( 'Filter', arrFilter );
	} 
 
 







 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
