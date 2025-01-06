// © 2024 DJS 
 
 
 
 
 
class ComponentSpoylerBodyCountry { 
 
 
 
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
 
 
 
		//console.log( 'objData: ', objData ); 

		let id = objData;

		let html = ''; 
		let htmlSymbol = '';

		if ( objCountry && objCountry[ id ] ) {

			let obj = objCountry[ id ];


			//console.log( obj ); 


			let arr = [];
			if ( obj ) {

				if ( obj.id )	
					arr.push( { key: 'id', val: obj.id, } );



				if ( obj.title ) {

					if ( obj.title.ua ) 
						arr.push( { key: 'title.ua', val: obj.title.ua, } );

					if ( obj.title.en ) 
						arr.push( { key: 'title.en', val: obj.title.en, } )
				}



				if ( obj.geo ){
					if ( obj.geo.capital ) {

						let val = obj.geo.capital;
						/*
						if ( objCity ) {
							if ( objCity[ obj.geo.capital ] ) {

								if ( objCity[ obj.geo.capital ].title ) {
									if ( objCity[ obj.geo.capital ].title.ua ) 
										val = obj.geo.capital ;
								}
							}
						}
						*/

						arr.push( { key: 'geo.capital', val } );
					}

					if ( obj.geo.part ) {

						let val = obj.geo.part;
						/*
						if ( objWorldPart ) {
							if ( objWorldPart[ obj.geo.part ] ) {
								if ( objWorldPart[ obj.geo.part ].ua ) 
									val = obj.geo.part;
									//val = objWorldPart[ obj.geo.part ].ua;
							}
						}
						*/

						arr.push( { key: 'geo.part', val } );
					}
				}



				if ( obj.internet ) {
					for ( let k in obj.internet ) 
						arr.push({ 
							key: 'internet.' + k, 
							val: obj.internet[ k ], 
						});
				}



				if ( obj.not_exist )	
					arr.push( { key: 'not_exist', val: obj.not_exist, } );






				
				if ( obj.symbol ) {

					if ( obj.symbol.flag ) 
						htmlSymbol += `<img class="flag" src="img/pic/country/${ obj.id }_flag.png" alt="Флаг" title="Флаг">`;
					
					if ( obj.symbol.coa ) 
						htmlSymbol += `<img class="coa" src="img/pic/country/${ obj.id }_coatarms.png" alt="Герб" title="Герб">`;
				}

				if ( htmlSymbol )
					htmlSymbol = `<div class="symbol center">${ htmlSymbol }</div>`;
			}	












			html = `
				${ htmlSymbol }
				<div class="tvk">
					${ Component( 'Table-Key-Val', arr ) }
				</div>
			`;
		}



		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 



 
 
	static getHtmlFilterMenu( data ) { 
		const fooName = this.name + '.getHtmlFilterMenu()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 

		let	html = fooName;



		return html;


 
	} 
 
 
















 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
