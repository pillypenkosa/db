// © 2024 DJS 
 
 
 
 
 
class ComponentWinShop { 
 
 
 
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
 
 

		let title = 'Магазини';


		let html = `
			<div>Категорії магазинів</div>
			${ Component( 'Table', { 
					keys: [ 'id', 'title', ], 
					arr: arrListShopCat, 
				} 
			)}

			<br/>
			<br/>
			<div>${ title }</div>
			${ Component( 'Table', { 
					keys: [ 'id', 'title', ], 
					arr: arrListShop, 
				} 
			)}












		`;
 










 
		setMeta({ 
			title 			: title, 
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
 
 
 	
 
 
 
 
 	
 
 
