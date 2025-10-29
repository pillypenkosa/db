// © 2025 DJS 
 
 
 
 
 
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


			let arrKeyVal = [];
			if ( obj ) {

				if ( obj.id )	
					arrKeyVal.push( { key: 'id', val: obj.id, } );


				//arrKeyVal.push( { backspace: true, } );
				//arrKeyVal.push( { backspace: true, } );



				if ( obj.title ) {

					if ( obj.title.ua ) 
						arrKeyVal.push( { key: 'title.ua', val: obj.title.ua, } );

					if ( obj.title.en ) 
						arrKeyVal.push( { key: 'title.en', val: obj.title.en, } )
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

						arrKeyVal.push( { key: 'geo.capital', val: val } );
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

						arrKeyVal.push( { key: 'geo.part', val: val } );
					}
				}



				if ( obj.internet ) {
					for ( let k in obj.internet ) {

						//console.log( 'key: ', k  );
						//console.log( 'obj: ', obj.internet );
						//console.log( obj.internet[ k ] );


						let tr = {};
						if ( k == 'wiki_ua' ) {

							tr.key = `internet.${ k }`;
							tr.val = 'WikiUA';
							tr.href = 'https://uk.wikipedia.org/wiki/' + obj.internet[ k ];
						}

						arrKeyVal.push( tr );
					}
				}



				if ( obj.not_exist )	
					arrKeyVal.push( { key: 'not_exist', val: obj.not_exist, } );






				
				if ( obj.symbol ) {

					if ( obj.symbol.flag ) 
						htmlSymbol += `<img class="flag" src="img/pic/country/${ obj.id }_flag.png" alt="Флаг" title="Флаг">`;
					
					if ( obj.symbol.coa ) 
						htmlSymbol += `<img class="coa" src="img/pic/country/${ obj.id }_coatarms.png" alt="Герб" title="Герб">`;
				}

				if ( htmlSymbol )
					htmlSymbol = `<div class="symbol center">${ htmlSymbol }</div>`;
			}	

			console.log( arrKeyVal );

			html = `
				${ htmlSymbol }
				<div class="tvk">
					${ Component( 'Table-Key-Val', arrKeyVal ) }
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
 
 
 	
 
 
 
 
 	
 
 
