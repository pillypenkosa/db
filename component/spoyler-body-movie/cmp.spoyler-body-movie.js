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
			let htmlGidOnline 	= '';
			let htmlAuliki7 	= '';




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



			let htmlCountry = '';
			if ( obj.country ) {

				let txtCountryTKV = '';

				for ( let k in obj.country ) {
					txtCountryTKV += `${ k }<br/>`;

					//htmlCountry += objCountry[ k ] ? ( objCountry[ k ].title ? ( objCountry[ k ].title.ua ? objCountry[ k ].title.ua : k ) : k ) : k;
					//htmlCountry += ' ';

					let txtCountry = '';
					if ( objCountry && objCountry[ k ] && objCountry[ k ].title && objCountry[ k ].title.ua ) 
							txtCountry = objCountry[ k ].title.ua
					
					htmlCountry += `<span class="country pointer" data-id="${ k }" onclick="${ this.name }.clcCountry( this )">${ txtCountry }</span> `;


				}

				arrTKV.push( { key: 'country', val: txtCountryTKV, } );


				if ( htmlCountry )
					htmlCountry = `<div class="section-10 movie-country center">${ htmlCountry }</div>`;
			}



			let htmlGenres = '';
			if ( obj.genre ) {

				let txtGenreTKV = '';
				for ( let k in obj.genre ) {

					txtGenreTKV += `${ k }<br/>`;

					let txtGenre = '';
					if ( objMoviesGenres && objMoviesGenres[ k ] && objMoviesGenres[ k ].title ) 
							txtGenre = objMoviesGenres[ k ].title
					
					htmlGenres += `<span class="genre pointer" data-id="${ k }" onclick="${ this.name }.clcGenre( this )">${ txtGenre }</span> `;
				}

				arrTKV.push( { key: 'genre', val: txtGenreTKV, } );

				if ( htmlGenres )
					htmlGenres = `<div class="section-10 movie-genres center">${ htmlGenres }</div>`;
			}



			let htmlHash = '';
			if ( obj.hash ) {

				let txtHashTKV = '';
				for ( let k in obj.hash ) {
					txtHashTKV += `${ k }<br/>`;

					let txtHash = '';
					if ( objMoviesHash && objMoviesHash[ k ] && objMoviesHash[ k ].title ) 
							txtHash = objMoviesHash[ k ].title
					
					htmlHash += `<span class="hash pointer" data-id="${ k }" onclick="${ this.name }.clcHash( this )">#${ txtHash }</span> `;
				}

				arrTKV.push( { key: 'hash', val: txtHashTKV, } );

				if ( htmlHash )
					htmlHash = `<div class="section-10 movie-hashes center">${ htmlHash }</div>`;
			}



			let htmlCast = '';
			if ( obj.cast ) {

				let txtCastTKV = '';
				let arrCast = [];

				for ( let k in obj.cast ) {

					txtCastTKV += `${ k }<br/>`;
					arrCast.push( k );
				}

				arrTKV.push( { key: 'cast', val: txtCastTKV, } );

				htmlCast = `<div class="movie-makers center">
					<div>Актори:</div>
					${ Component( 'Gallery-People', { arr: arrCast, year: obj.year, } ) }
				</div>`;
			}



			let htmlDirector = '';
			if ( obj.director ) {

				let txtDirectorTKV = '';
				let arrDirector = [];

				for ( let k in obj.director ) {

					txtDirectorTKV += `${ k }<br/>`;
					arrDirector.push( k );
				}

				arrTKV.push( { key: 'composer', val: txtDirectorTKV, } );

				htmlDirector = `<div class="movie-makers center">
					<div>Режисери:</div>
					${ Component( 'Gallery-People', { arr: arrDirector, year: obj.year, } ) }
				</div>`;
			}



			let htmlComposer = '';
			if ( obj.composer ) {

				let txtComposerTKV = '';
				let arrComposer = [];

				for ( let k in obj.composer ) {

					txtComposerTKV += `${ k }<br/>`;
					arrComposer.push( k );
				}

				arrTKV.push( { key: 'composer', val: txtComposerTKV, } );

				htmlComposer = `<div class="movie-makers center">
					<div>Композитори:</div>
					${ Component( 'Gallery-People', { arr: arrComposer, year: obj.year, } ) }
				</div>`;
			}



			let htmlFranchise = '';
			if ( obj.franchise ) {

				let txtFranchiseTKV = '';
				let arrFranchise = [];

				arrTKV.push( { key: 'franchise', val: obj.franchise , } );

				let arr = arrMovies.filter( k => {

					if ( k.franchise && k.franchise == obj.franchise )
						return true;
				});


				//console.log( arr );

				arr.sort( sortObjByYear );     

				//console.log( arr );

				arr = arr.map( k => k.id );

				htmlFranchise = `<div class="center">Франшиза:</div>${ Component( 'Gallery-Movies', arr ) }`;
			}



			if ( obj.rating ) 
				arrTKV.push( { key: 'rating', val: obj.rating , } );
			



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



				if ( obj.internet.gid_online ) {
					htmlGidOnline = `<a href="https://api.embess.ws/embed/movie/${ obj.internet.gid_online  }" target="_blank" title="GidOnline">
						<img src="img/pic/logo_gid_online.png" alt="GidOnline">
					</a>`;

					arrTKV.push( { key: 'internet.hd_vip', val: obj.internet.gid_online, } );
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
					${ htmlGidOnline }
					${ htmlAuliki7 }
				</div>

				${ htmlCountry }
				${ htmlGenres }
				${ htmlHash }
				${ htmlCast }
				${ htmlDirector }
				${ htmlComposer }
				${ htmlFranchise }

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
 
 
 	
 
 
 
 
 	
 
 
