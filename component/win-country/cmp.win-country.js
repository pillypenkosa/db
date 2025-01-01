// © 2024 DJS 
 
 
 
 
 
class ComponentWinCountry { 
 
 
 
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
			title 			: 'Країни', 
			description 	: 'Опис... Країни', 
			//image 		: '', 
		}); 
 
 






		arrCountry.forEach( k => {
			html += `${ 
				Component( 'Spoyler', { 
					id 		: k.id, 
					title 	: `${ k.title ? ( k.title.ua ? k.title.ua : '' ) : '' }`, 
					cmp 	: 'Spoyler-Body-Country', // для вставки в body спойлера
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
 
 
 	
 
 
 
 
 	
 
 
