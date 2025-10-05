// © 2025 DJS 
 
 
 
 
 
class ComponentWinRemember { 
 
 
 
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
 
 
 
 
 
 
		setMeta({ 
			title 			: 'Пригадайка фільмів', 
			description 	: 'Опис... Пригадайка', 
			//image 		: '', 
		}); 
 


		let html = ''; 

		arrMoviesRemember.forEach( ( k_txt, n ) => {

			html += `<div class="remember-each">${ n + 1 }) ${ k_txt.txt }</div>`;

			//console.log( k_txt.txt );

		});


 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
