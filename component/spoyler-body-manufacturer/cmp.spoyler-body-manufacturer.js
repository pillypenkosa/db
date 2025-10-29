// © 2024 DJS 
 
 
 
 
 
class ComponentSpoylerBodyManufacturer { 
 
 
 
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
		if ( objManufacturer && objManufacturer[ id ] ) {

			let obj = objManufacturer[ id ];


			//console.log( obj ); 


			let arr = [];
			if ( obj ) {

				if ( obj.id )	
					arr.push( { key: 'id', val: obj.id, } );



				if ( obj.title )	
					arr.push( { key: 'title', val: obj.title, } );



				if ( obj.parent ) {
					let val = ( objManufacturer && objManufacturer[ obj.parent ] ) ? ( objManufacturer[ obj.parent ].title ? objManufacturer[ obj.parent ].title : obj.parent ) : obj.parent;
					arr.push( { key: 'parent', val, } );
				}



				if ( obj.country ) {

					let htmlCountry = '';
					for ( let k in obj.country ) 
						htmlCountry += (( objCountry && objCountry[ k ] && objCountry[ k ].title && objCountry[ k ].title.ua ) ? objCountry[ k ].title.ua : k ) + ', ';

					arr.push( { key: 'country', val: htmlCountry.slice( 0, -2 ) , } );
				}



				if ( obj.year )	
					arr.push( { key: 'year', val: obj.year, } );

				if ( obj.year_d )	
					arr.push( { key: 'year_d', val: obj.year_d, } );





				if ( obj.hash ) {

					let htmlHash = '';
					for ( let k in obj.hash ) 
						htmlHash += (( objManufacturerHash && objManufacturerHash[ k ] && objManufacturerHash[ k ].title ) ? objManufacturerHash[ k ].title : k ) + ', ';

					arr.push( { key: 'hash', val: htmlHash.slice( 0, -2 ) , } );
				}



				if ( obj.internet ) {
					for ( let k in obj.internet ) {


						//console.log( k );

						if ( k == 'avtopro' ) {

							arr.push({ 
								key: 'internet.' + k, 
								val: `<a href="https://avtopro.ua/makers/${ obj.internet[ k ] }" target="_blank">${ obj.internet[ k ] }${ Total.htmlLinkSign }</a>`, 
							});
						}


						if ( k == 'wiki_ua' ) {

							arr.push({ 
								key: 'internet.' + k, 
								val: `<a href="https://uk.wikipedia.org/wiki/${ obj.internet[ k ] }" target="_blank">${ obj.internet[ k ] }${ Total.htmlLinkSign }</a>`, 
							});
						}



					}
				}
			}

			//console.log( 'arr: ', arr ); 


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
 
 
 	
 
 
 
 
 	
 
 
