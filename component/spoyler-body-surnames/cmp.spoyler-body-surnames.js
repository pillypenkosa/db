// © 2025 DJS 
 
 
 
 
 
class ComponentSpoylerBodySurnames { 
 
 
 
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
 


		let id = objData.toLowerCase();
		//console.log( 'ID: ', id ); 

		let html = ''; 
		if ( objListSurnames && objListSurnames[ id ] ) {

			let obj = objListSurnames[ id ];

			//console.log( obj ); 

			let arr = [];
			if ( obj ) {

				if ( obj.en )	
					arr.push( { key: 'en', val: obj.en, } );

				if ( obj.ua )	
					arr.push( { key: 'ua', val: obj.ua, } );
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
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
