// © 2024 DJS 
 
 
 
 
 
class ComponentWinManufacturer { 
 
 
 
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
 
 
 
/*
		let html = `
			<div>Виробники</div>
			${ Component( 'Table', { 
					keys: [ 'id', 'title', 'year', ], 
					arr: arrManufacturer, 
				} 
			)}
		`;
 */

 



		let html = `
			<div>Виробники</div>
			${ Component( 'Spoyler', 
				{ 
					key 	: 'qwertyKEY' 	, 
					data 	: {

						id 		: 'qwertyID' 	, 

					},
				} 
			)}
		`;




		setMeta({ 
			title 			: 'Виробники', 
			description 	: 'Опис...', 
			//image 		: '', 
		}); 
 
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
