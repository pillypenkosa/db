// © 2024 DJS 
 
 
 
 
 
class ComponentSpoylerBodyManufacturer { 
 
 
 
	static args = {}; 
 
 
 
	static html( data = '' ) { 
		const fooName = this.name + '.html()'; 
 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 

		let obj = {};

		//console.log( 'objListPcVga: ', objListPcVga ); 

		let html = '';

		if ( objListPcVga ) {
			if ( objListPcVga[ data ] ) {


				obj = objListPcVga[ data ];


				console.log( 'obj: ', obj ); 




				html = `<div class="inner">
					${ fooName }
				</div>`;
			}
		}



 
		return { tagParam, html };  
	} 
 
 
 






 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
