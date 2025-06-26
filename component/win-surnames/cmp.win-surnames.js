// © 2024 DJS 
 
 
 
 
 
class ComponentWinSurnames { 
 
 
 
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
			title 			: 'Прізвища', 
			description 	: 'Опис... Прізвища', 
			//image 		: '', 
		}); 
 
 


		//let arrSelected = arrListSurnames;



		arrListSurnames.forEach( k => {
			html += `${ 
				Component( 'Spoyler', { 
					id 		: k.id, 
					title 	: `${ k.title ? k.title : '' }`, 
					cmp 	: 'Spoyler-Body-Surnames', // для вставки в body спойлера
				})}`;
		});



















 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
