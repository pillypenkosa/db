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

			let arrTKV 			= []; // arr-Table-Key-Val

			let htmlImdb 		= '';
			let htmlWikiUa 		= '';
			let htmlWikiRu 		= '';
			let htmlHDvip 		= '';
			let htmlAuliki7 	= '';





			let htmlGenres = '';
			if ( obj.genre ) {
				for ( let k in obj.genre ) {

					let txtHash = '';
					if ( objMoviesGenres && objMoviesGenres[ k ] && objMoviesGenres[ k ].title ) 
							txtHash = objMoviesGenres[ k ].title
					
					htmlGenres += `<span class="hash pointer" data-id="${ k }" onclick="${ this.name }.clcGenre( this )">#${ txtHash }</span> `;
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
					
					htmlCountry += `<span class="country pointer" data-id="${ k }" onclick="${ this.name }.clcCountry( this )">${ txtCountry }</span> `;
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

				htmlCast = `<div class="movie-cast center">
					<div>Cast:</div>
					${ Component( 'Gallery-People', { arr: arrCast, year: obj.year, } ) }
				</div>`;
			}
			






			if ( obj.id )	
				arrTKV.push( { key: 'id', val: obj.id, } );



			if ( obj.title ) {

				if ( obj.title.en )
					arrTKV.push( { key: 'title.en', val: obj.title.en, } );

				if ( obj.title.ua )
					arrTKV.push( { key: 'title.ua', val: obj.title.ua, } );
			}



			if ( obj.year )	
				arrTKV.push( { key: 'year', val: obj.year, } );



			if ( obj.country ) {

				let htmlCountry = '';

				for ( let k in obj.country ) {
					htmlCountry += `${ k }<br/>`;

					//htmlCountry += objCountry[ k ] ? ( objCountry[ k ].title ? ( objCountry[ k ].title.ua ? objCountry[ k ].title.ua : k ) : k ) : k;
					//htmlCountry += ' ';
				}

				arrTKV.push( { key: 'country', val: htmlCountry, } );
			}





			if ( obj.genre ) {

				let htmlGenre = '';

				for ( let k in obj.genre ) 
					htmlGenre += `${ k }<br/>`;

				arrTKV.push( { key: 'genre', val: htmlGenre, } );
			}





			if ( obj.hash ) {

				let htmlHash = '';

				for ( let k in obj.hash ) 
					htmlHash += `${ k }<br/>`;

				arrTKV.push( { key: 'hash', val: htmlHash, } );
			}





			if ( obj.cast ) {
				let htmlCast = '';

				for ( let k in obj.cast )
					htmlCast += `${ k }<br/>`;

				arrTKV.push( { key: 'cast', val: htmlCast, } );
			}





			if ( obj.internet ) {
				if ( obj.internet.imdb ) {
					htmlImdb = `<a href="https://www.imdb.com/title/tt${ obj.internet.imdb }" target="_blank" title="IMDb">
						<img src="img/pic/logo_IMDb.png" alt="IMDb">
					</a>`;

					arrTKV.push( { key: 'internet.imdb', val: obj.internet.imdb, id: 'movies', } );
				}
				


				if ( obj.internet.wiki_ua ) {

					htmlWikiUa = `<a href="https://uk.wikipedia.org/wiki/${ obj.internet.wiki_ua }" target="_blank" title="WikiUa">
						<img src="img/pic/logo_wiki_ua.png" alt="WikiUa">
					</a>`;
					
					arrTKV.push( { key: 'internet.wiki_ua', val: obj.internet.wiki_ua, } );
				}
			


				if ( obj.internet.wiki_ru ) {
					htmlWikiRu = `<a href="https://ru.wikipedia.org/wiki/${ obj.internet.wiki_ru }" target="_blank" title="WikiRu">
						<img src="img/pic/logo_wiki_ru.png" alt="WikiRu">
					</a>`;

					arrTKV.push( { key: 'internet.wiki_ru', val: obj.internet.wiki_ru, } );
				}
		


				if ( obj.internet.hd_vip ) {
					htmlHDvip = `<a href="https://ashdi.vip/vod/${ obj.internet.hd_vip  }" target="_blank" title="HDVip">
						<img src="img/pic/logo_hdvip.png" alt="HDVip">
					</a>`;

					arrTKV.push( { key: 'internet.hd_vip', val: obj.internet.hd_vip, } );
				}
			




				if ( obj.internet.auliki7 ) {

					htmlAuliki7 = `<a href="http://auliki7.xyz/stream.php?name=films/${ obj.internet.auliki7 }.mp4" target="_blank" title="Auliki7">
						<img src="img/pic/logo_auliki7.png" alt="Auliki7">
					</a>`;
					
					arrTKV.push( { key: 'internet.auliki7', val: obj.internet.auliki7, } );
				}
			}














			let htmlTKV = '';
			if ( arrTKV.length )
				htmlTKV = Component( 'Table-Key-Val', arrTKV );
























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







				<div class="tkv-object">
					<button onclick="${ this.name }.showTKV( this )">Object</button>
					<div class="body-tkv unvisible">${ htmlTKV }</div>
				</div>

			</div>`;
		}



		return { tagParam, html };  
	} 
 
 
 
 





	static showTKV( elem ) { 
		const fooName = this.name + '.showTKV()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		elem.closest( '.tkv-object' ).querySelector( '.body-tkv' ).classList.toggle( 'unvisible' );;
	}





	static clcCountry( elem ) { 
		const fooName = this.name + '.clcCountry()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem', elem ); 


 		let id = elem.dataset.id;
 

		Router.urlGET = {}; 
		Router.link([
			{ k: 'win' 		, v: 'movies' 	, },
			{ k: 'country' 	, v: id 		, },
		]);
	} 
 
 







	static clcGenre( elem ) { 
		const fooName = this.name + '.clcGenre()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem', elem ); 


 		let id = elem.dataset.id;
 

		Router.urlGET = {}; 
		Router.link([
			{ k: 'win' 		, v: 'movies' 	, },
			{ k: 'genre' 	, v: id 		, },
		]);
	} 
 
 
















	static clcHash( elem ) { 
		const fooName = this.name + '.clcHash()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem', elem ); 

		let id = elem.dataset.id;
 

		Router.urlGET = {}; 
		Router.link([
			{ k: 'win' 		, v: 'movies' 	, },
			{ k: 'hash' 	, v: id 		, },
		]);




	} 
 
 







 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
