// © 2024 DJS 
 
 
 
 
 
class ComponentTableKeyVal { 
 
 
 
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
 
		console.log( 'objData: ', objData ); 
 
		let htmlTBoty = ''; 
		objData.forEach( k => {


			//let htmlKey = '';
			let htmlVal = k.val;
			if ( k.key == 'internet.official' ) 
				htmlVal = `<a href="${ k.val }" target="_blank">Official${ htmlHrefSign }</a>`;
			
			if ( k.key == 'internet.avtopro' ) 
				htmlVal = `<a href="https://avtopro.ua/makers/${ k.val }" target="_blank">AvtoPro${ htmlHrefSign }</a>`;
			
			if ( k.key == 'internet.wiki_ua' ) 
				htmlVal = `<a href="https://uk.wikipedia.org/wiki/${ k.val }" target="_blank">WikiUa${ htmlHrefSign }</a>`;
			
			if ( k.key == 'internet.wiki_ru' ) 
				htmlVal = `<a href="https://ru.wikipedia.org/wiki/${ k.val }" target="_blank">WikiRu${ htmlHrefSign }</a>`;
			





			htmlTBoty += `<tr><td class="key">${ k.key }</td><td class="val">${ htmlVal }</td></tr>`;
		});

 		if ( htmlTBoty )
 			html = `<table>${ htmlTBoty }</table>`;
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
