// © 2024 DJS 
 
 
 
 
 
class ComponentSpoylerBodyMovie { 
 
 
 
	static args = {}; 
 
 
 
	static html( data = '' ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 



 
		//console.log( 'data: ', data ); 
 
 
		let html = ''; 
		let obj = {};


		if ( objMovies && objMovies[ data ] ) {
			obj = objMovies[ data ];

			let htmlImdb 		= '';
			let htmlWikiUa 		= '';
			let htmlWikiRu 		= '';
			let htmlHDvip 		= '';
			let htmlAuliki7 	= '';

			if ( obj.internet ) {
				if ( obj.internet.imdb ) 
					htmlImdb = `<a href="https://www.imdb.com/title/tt${ obj.internet.imdb }" target="_blank" title="IMDb"><img src="img/pic/logo_IMDb.png" alt="IMDb"></a>`;
				
				if ( obj.internet.wiki_ua ) 
					htmlWikiUa = `<a href="https://uk.wikipedia.org/wiki/${ obj.internet.wiki_ua }" target="_blank" title="WikiUa"><img src="img/pic/logo_wiki_ua.png" alt="WikiUa"></a>`;
			
				if ( obj.internet.wiki_ru ) 
					htmlWikiRu = `<a href="https://ru.wikipedia.org/wiki/${ obj.internet.wiki_ru }" target="_blank" title="WikiRu"><img src="img/pic/logo_wiki_ru.png" alt="WikiRu"></a>`;
		
				if ( obj.internet.hd_vip ) 
					htmlHDvip = `<a href="https://ashdi.vip/vod/${ obj.internet.hd_vip  }" target="_blank" title="HDVip"><img src="img/pic/logo_hdvip.png" alt="HDVip"></a>`;
			
				if ( obj.internet.auliki7 ) 
					htmlAuliki7 = `<a href="http://auliki7.xyz/stream.php?name=films/${ obj.internet.auliki7 }.mp4" target="_blank" title="Auliki7"><img src="img/pic/logo_auliki7.png" alt="Auliki7"></a>`;
			}



			let htmlGenres = '';
			if ( obj.genre ) {
				for ( let k in obj.genre ) {

					let txtHash = '';
					if ( objMoviesGenres && objMoviesGenres[ k ] && objMoviesGenres[ k ].title ) 
							txtHash = objMoviesGenres[ k ].title
					
					htmlGenres += `<span class="hash pointer" data-id="${ k }">#${ txtHash }</span> `;
				}

				if ( htmlGenres )
					htmlGenres = `<div class="movie-genres center"><span class="key">Жанр:</span> ${ htmlGenres }</div>`;
			}



			let htmlCountry = '';
			if ( obj.country ) {
				for ( let k in obj.country ) {

					let txtCountry = '';
					if ( objCountry && objCountry[ k ] && objCountry[ k ].title && objCountry[ k ].title.ua ) 
							txtCountry = objCountry[ k ].title.ua
					
					htmlCountry += `<span class="country pointer" data-id="${ k }">${ txtCountry }</span> `;
				}

				if ( htmlCountry )
					htmlCountry = `<div class="movie-country center"><span class="key">Країна:</span> ${ htmlCountry }</div>`;
			}




			let htmlCast = '';
			if ( obj.cast ) {
				let arrCast = [];

				for ( let k in obj.cast )
					arrCast.push( k );
				//console.log( arrCast );

				htmlCast = `<div class="movie-cast center">${ Component( 'Galery-People', arrCast ) }</div>`;
			}
			














			html = `<div class="wrap">
				<div class="section-1">
					<div class="movie-title-en">${ obj.title.en ? obj.title.en : '' }</div>
					<div class="movie-title-ua">${ obj.title.ua ? obj.title.ua : '' }</div>
					<div class="movie-year">( ${ obj.year } )</div>
				</div>

				<div class="poster center">
					<img src="img/movies/${ obj.id }.jpg" alt="${ obj.title.ua } (${ obj.year })">
				</div>

				<div class="internet center">
					${ htmlImdb }
					${ htmlWikiUa }
					${ htmlWikiRu }
					${ htmlHDvip }
					${ htmlAuliki7 }
				</div>

				${ htmlCountry }
				${ htmlGenres }
				${ htmlCast }

			</div>`;
		}



		return { tagParam, html };  
	} 
 
 
 
 








 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
