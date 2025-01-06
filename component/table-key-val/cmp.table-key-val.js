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
 
		//console.log( 'objData: ', objData ); 
 
		let htmlTBody = ''; 
		objData.forEach( k => {


			//let htmlKey = '';
			let htmlVal = k.val;

			if ( k.key == 'internet.official' ) 
				htmlVal = `<a href="${ k.val }" target="_blank">Official${ htmlHrefSign }</a>`;
			


			if ( k.key == 'internet.imdb' ) {
				if ( k.id == 'people' )
					htmlVal = `<a href="https://www.imdb.com/name/nm${ k.val }/" target="_blank">IMDb${ htmlHrefSign }</a>`;

				if ( k.id == 'movies' )
					htmlVal = `<a href="https://www.imdb.com/title/tt${ k.val }/" target="_blank">IMDb${ htmlHrefSign }</a>`;
			}



			if ( k.key == 'internet.wiki_ua' ) 
				htmlVal = `<a href="https://uk.wikipedia.org/wiki/${ k.val }" target="_blank">WikiUa${ htmlHrefSign }</a>`;
			


			if ( k.key == 'internet.wiki_ru' ) 
				htmlVal = `<a href="https://ru.wikipedia.org/wiki/${ k.val }" target="_blank">WikiRu${ htmlHrefSign }</a>`;
			


			if ( k.key == 'internet.avtopro' ) 
				htmlVal = `<a href="https://avtopro.ua/makers/${ k.val }" target="_blank">AvtoPro${ htmlHrefSign }</a>`;
			


			if ( k.key == 'internet.hd_vip' ) 
				htmlVal = `<a href="https://ashdi.vip/vod/${ k.val }" target="_blank">HDvip${ htmlHrefSign }</a>`;
			


			if ( k.key == 'internet.auliki7' ) 
				htmlVal = `<a href="http://auliki7.xyz/stream.php?name=films/${ k.val }.mp4" target="_blank">Auliki7${ htmlHrefSign }</a>`;
			



			htmlTBody += `<tr><td class="key">${ k.key }</td><td class="val">${ htmlVal }</td></tr>`;
		});

 		if ( htmlTBody )
 			html = `<table>${ htmlTBody }</table>`;
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
