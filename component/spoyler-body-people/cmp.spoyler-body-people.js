// © 2024 DJS 
 
 
 
 
 
class ComponentSpoylerBodyPeople { 
 
 
 
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


		if ( objPeople && objPeople[ data ] ) {
			obj = objPeople[ data ];



			//let tBody = '';


			let htmlName = '';
			if ( obj.name ) {

				if ( obj.name.n )
					htmlName += obj.name.n;

				if ( obj.name.p )
					htmlName += ' ' + obj.name.p;

				if ( obj.name.s )
					htmlName += ' ' + obj.name.s;

				if ( htmlName )
					htmlName = `<div class="name-title">${ htmlName }</div>`;
			}



			let htmlRibbon = '';
			let htmlDate = '';
			if ( obj.life ) {

				//let htmlDateB = '';

				if ( obj.life.bd )
					htmlDate += obj.life.bd;

				if ( obj.life.bm )
					htmlDate += '.' + obj.life.bm;

				if ( obj.life.by )
					htmlDate += '.' + obj.life.by;




				let htmlDateD = '';

				if ( obj.life.dd )
					htmlDateD += obj.life.dd;

				if ( obj.life.dm )
					htmlDateD += '.' + obj.life.dm;

				if ( obj.life.dy )
					htmlDateD += '.' + obj.life.dy;

				if ( htmlDateD ) {
					htmlDateD = ' - ' + htmlDateD;
					htmlRibbon = '<img class="ribbon" src="img/pic/ribbon.png" alt="">';
				}



				if ( htmlDate )
					htmlDate = `<div class="date">${ htmlDate }${ htmlDateD }</div>`;
			}






			let htmlAva = '';
			let htmlGalery = '';
			if ( obj.img ) {

				if ( obj.img[ 1 ] )
					htmlAva = `<div class="poster">
						<img class="avatar" src="img/people/${ obj.id }/${ obj.img[ 1 ] }.jpg" alt="${ obj.id }">
						${ htmlRibbon }
					</div>`;

				if ( obj.img[ 0 ] && obj.img[ 0 ] > 1 ) {
					for ( let i=1; i<obj.img[ 0 ]+1; i++ ) 
						htmlGalery += `<img class="pointer" src="img/people/${ obj.id }/${ i }.jpg" alt="${ obj.id }" data-img="${ obj.id }/${ i }" onmouseover="${ this.name }.mouseover( this )">`;
				
					if ( htmlGalery )
						htmlGalery = `<div class="galery">${ htmlGalery }</div>`;
				}
			}



			let htmlMovies = '';
			let arrMoviesGallery = [];

			arrMovies.forEach( k => {

				if ( k.cast && k.cast[ obj.id ] ) 
					arrMoviesGallery.push( k );
			});



			//console.log( arrMoviesGallery );





			// функція сортування об'єктів по року
			//function sortUp( a, b ) { return ( a.year > b.year ) ? 1 : -1; }
			function sortUp( a, b ) { return a.year - b.year; }


			arrMoviesGallery.sort( sortUp );

			arrMoviesGallery = arrMoviesGallery.map( k => {
				return k.id;
			});



			//console.log( 'arrMoviesGallery: ', arrMoviesGallery );

			if ( arrMoviesGallery.length )
				htmlMovies = Component( 'Gallery-Movies', arrMoviesGallery );







			let arrTKV = []; // arr-Table-Key-Val


			if ( obj.id )	
				arrTKV.push( { key: 'id', val: obj.id, } );



			if ( obj.name )	{

				if ( obj.name.n ) 
					arrTKV.push( { key: 'name.n', val: obj.name.n, } );

				if ( obj.name.p ) 
					arrTKV.push( { key: 'name.p', val: obj.name.p, } );

				if ( obj.name.s ) 
					arrTKV.push( { key: 'name.s', val: obj.name.s, } );
			}



			if ( obj.sex ) 
				arrTKV.push( { key: 'sex', val: obj.sex, } );



			if ( obj.life ) {

				//let htmlLife = '';

				if ( obj.life.bd ) 
					arrTKV.push( { key: 'life.bd', val: obj.life.bd, } );

				if ( obj.life.bm ) 
					arrTKV.push( { key: 'life.bm', val: obj.life.bm, } );

				if ( obj.life.by ) 
					arrTKV.push( { key: 'life.by', val: obj.life.by, } );

				if ( obj.life.dd ) 
					arrTKV.push( { key: 'life.dd', val: obj.life.dd, } );

				if ( obj.life.dm ) 
					arrTKV.push( { key: 'life.dm', val: obj.life.dm, } );

				if ( obj.life.dy ) 
					arrTKV.push( { key: 'life.dy', val: obj.life.dy, } );
			}



			if ( obj.country ) {

				let htmlCountry = '';

				for ( let k in obj.country ) {
					htmlCountry += `${ k } `;

					//htmlCountry += objCountry[ k ] ? ( objCountry[ k ].title ? ( objCountry[ k ].title.ua ? objCountry[ k ].title.ua : k ) : k ) : k;
					//htmlCountry += ' ';
				}

				arrTKV.push( { key: 'country', val: htmlCountry, } );
			}



			let htmlHash = '';
			if ( obj.hash ) {
				let txtHashTKV = '';

				for ( let k in obj.hash ) {
					txtHashTKV += `#${ k } `;


					htmlHash += `<span class="hash pointer" data-id="${ k }" onclick="${ this.name }.clcHash( this )">#${ k }</span> `;

				}

				arrTKV.push( { key: 'hash', val: txtHashTKV, } );

				if ( htmlHash )
					htmlHash = `<div class="people-hashes center"><span class="key">Хеш:</span> ${ htmlHash }</div>`;


			}




			let htmlInternet = '';
			if ( obj.internet ) {

				if ( obj.internet.imdb ) {

					htmlInternet += `<a href="https://www.imdb.com/name/nm${ obj.internet.imdb }/" target="_blank">
						<img src="img/pic/logo_IMDb.png" alt="IMDb">
					</a>`;

					arrTKV.push( { key: 'internet.imdb', val: obj.internet.imdb, id: 'people', } );
				}

				if ( obj.internet.wiki_ua ) {

					htmlInternet += `<a href="https://uk.wikipedia.org/wiki/${ obj.internet.wiki_ua }" target="_blank" title="WikiUa">
						<img src="img/pic/logo_wiki_ua.png" alt="WikiUa">
					</a>`;

					arrTKV.push( { key: 'internet.wiki_ua', val: obj.internet.wiki_ua, } );
				}

				if ( obj.internet.wiki_ru ) {

					htmlInternet += `<a href="https://ru.wikipedia.org/wiki/${ obj.internet.wiki_ru }" target="_blank" title="WikiRu">
						<img src="img/pic/logo_wiki_ru.png" alt="WikiRu">
					</a>`;

					arrTKV.push( { key: 'internet.wiki_ru', val: obj.internet.wiki_ru, } );
				}
			}

			if ( htmlInternet )
				htmlInternet = `<div class="img-internet">${ htmlInternet }</div>`;











		

			//console.log( 'arr: ', arr ); 


			let htmlTKV = '';
			if ( arrTKV.length )
				htmlTKV = Component( 'Table-Key-Val', arrTKV );





			html = `<div class="wrap">
				<div class="main-info">
					${ htmlName }
					${ htmlDate }
					${ htmlAva }
					${ htmlGalery }

					${ htmlInternet }
					${ htmlHash }
				</div>

				${ htmlMovies }

				<div class="tkv-object">
					<button onclick="${ this.name }.showTKV( this )">Object</button>
					<div class="body-tkv unvisible">${ htmlTKV }</div>
				</div>
			</div>`;
		}



				//<table class="table-key-val">${ tBody }</table>

		return { tagParam, html };  
	} 
 
 



	static showTKV( elem ) { 
		const fooName = this.name + '.showTKV()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		elem.closest( '.tkv-object' ).querySelector( '.body-tkv' ).classList.toggle( 'unvisible' );;
	}






	static clcHash( elem ) { 
		const fooName = this.name + '.clcHash()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem', elem ); 

		let id = elem.dataset.id;
 
		Router.urlGET = {}; 
		Router.link([
			{ k: 'win' 		, v: 'people' 	, },
			{ k: 'hash' 	, v: id 		, },
		]);
	} 
 
 







	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 

	static mouseover( elem ) { 
		const fooName = this.name + '.hover()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem', elem ); 

		let elemParent = elem.closest( '.main-info' );
		//console.log( 'elemParent', elemParent ); 

		//elemParent.querySelector( '.poster' ).innerHTML = `<img src="img/people/${ elem.dataset.img }.jpg" alt="">`;
		
		elemParent.querySelector( 'img.avatar' ).src = `img/people/${ elem.dataset.img }.jpg`;








/*
		let elemSpoyler = document.querySelector( `cmp-spoyler[ data-id="richard_gere_31081949" ]` );
		elemSpoyler.scrollIntoView();

		window.scrollBy( 0, -48 );

		let elemBody = elemSpoyler.querySelector( '.body' );
		elemBody.innerHTML = Component( 'Spoyler-Body-People', 'richard_gere_31081949' ); 

		//document.querySelector( '' );
*/




	} 
 
 

 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
