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
 
 
 
		console.log( 'objData: ', objData ); 

		let id = objData;

		let html = ''; 
		if ( objCountry && objCountry[ id ] ) {

			let obj = objCountry[ id ];


			console.log( obj ); 


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
						if ( objCity ) {
							if ( objCity[ obj.geo.capital ] ) {
								if ( objCity[ obj.geo.capital ].title ) {
									if ( objCity[ obj.geo.capital ].title.ua ) 
										val = `${ obj.geo.capital } ( ${ objCity[ obj.geo.capital ].title.ua } )`;
								}
							}
						}

						arr.push( { key: 'geo.capital', val } );
					}

					if ( obj.geo.part ) {

						let val = obj.geo.part;
						if ( objWorldPart ) {
							if ( objWorldPart[ obj.geo.part ] ) {
								if ( objWorldPart[ obj.geo.part ].ua ) 
									val = `${ obj.geo.part} ( ${ objWorldPart[ obj.geo.part ].ua } )`;
									//val = objWorldPart[ obj.geo.part ].ua;
							}
						}

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
			}


			html = Component( 'Table-Key-Val', arr );
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
 
 
 	
 
 
 
 
 	
 
 
