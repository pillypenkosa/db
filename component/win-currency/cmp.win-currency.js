// © 2024 DJS 
 
 
 
 
 
class ComponentWinCurrency { 
 
 
 
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
 
 
 
		let html = `
			<div>Валюта</div>
			${ Component( 'Table', { 
					keys: [ 'id', 'title', 'code', 'sign', ], 
					arr: arrCurrency, 
				} 
			)}
		`;
 
 








 
		setMeta({ 
			title 			: 'Валюта', 
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
 
 
 	
 
 
 
 
 	
 
 
