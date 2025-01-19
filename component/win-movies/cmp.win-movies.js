// © 2024 DJS 
 
 
 
 
 
class ComponentWinMovies { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '123', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		//let html = ''; 
 
		//console.log( objData ); // GET - параметры

		//let arrSelected = arrFilms;

		//console.log( arrSelected );

		let html = '';
		if ( objData ) {



			let tfOpenCloseSpoyler = false; 	 	// true - відкритий 	// false або відсутній як такий - закритий

			let arrSelected = arrMovies;



			if ( objData.id ) {
				arrSelected = arrSelected.filter( k => k.id == objData.id );
				tfOpenCloseSpoyler = true;
			}



			if ( objData.letter ) {

				arrSelected = arrSelected.filter( k => {

					if ( k.title ) {
						if ( k.title.ua ) {

							let firstSym = k.title.ua.slice( 0, 1 );

							if ( objData.letter == 'eng' ) {
								if ( /^[A-Z]$/.test( firstSym ) ) 
									return true;
							
							} else if ( objData.letter == '123' ) {
								if ( /^[0-9]$/.test( firstSym ) ) 
									return true;

							} else {

								//console.log( objData.letter );
								//console.log( decodeURI( objData.letter ) );
								//console.log( firstSym );

								if ( decodeURI( objData.letter ).toUpperCase() == firstSym ) 
									return true;
							}
						}
					}
				});
			}



			if ( objData.year ) 
				arrSelected = arrSelected.filter( k => k.year == objData.year );

			

			if ( objData.genre ) {

				//console.log( objData.genre );
				arrSelected = arrSelected.filter( k => {

					if ( k.genre && k.genre[ objData.genre ] )
						return true;
				});
			}



			if ( objData.country ) {

				//console.log( objData.genre );
				arrSelected = arrSelected.filter( k => {

					if ( k.country && k.country[ objData.country ] )
						return true;
				});
			}



			if ( objData.hash ) {

				//console.log( objData.genre );
				arrSelected = arrSelected.filter( k => {

					if ( k.hash && k.hash[ objData.hash ] )
						return true;
				});
			}



			if ( objData.set ) {

				//console.log( objData.genre );
				arrSelected = arrSelected.filter( k => {

					if ( objData.set == '_5' ) {

						if ( k.rating && ( k.rating == 5 || k.rating == '5+' )) 
							return true;
					}

					if ( objData.set == '_5+' ) {

						if ( k.rating && k.rating == '5+' )
							return true;
					}

				});
			}



			arrSelected.forEach( k => {

				let htmlRating = '';
				if ( k.rating  ) {

					if ( k.rating == 5 )
						htmlRating += ' <span class="txt-rating5">&#10003;</span>';

					if ( k.rating == '5+' )
						htmlRating += ' <span class="txt-rating5p">&#10030;</span>';
				}



				html += `${ 
					Component( 'Spoyler', { 
						id 		: k.id, 
						title 	: `${ k.title.ua } (${ k.year })${ htmlRating }`, 
						cmp 	: 'Spoyler-Body-Movie', // для вставки в body спойлера
						tf 		: tfOpenCloseSpoyler,
					})}`;
			});
		}





		//console.log( arrSelected );
		//console.log( arrSelected );



		//let html2 = '';


		//html = html2 + html;
 
 
		setMeta ({ 
			title 			: 'Фільми', 
			description 	: 'Опис... Фільми', 
			//image 			: 'img/pic/logoDJS.png', 
		}); 
 

		return { tagParam, html };  
	} 
 
 
 
 



	static getHtmlFilter() { 
		const fooName = this.name + '.getHtmlFilter()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 
 

		let objYears = {};
		let arrYears = [];

		arrMovies.forEach( k => {

			if ( k.year )
				objYears[ '_' + k.year ] = 1;
		});

		for ( let k in objYears ) 
			arrYears.push( +k.slice( 1 ) );
		
		arrYears.sort().reverse();


		//console.log( 'arrYears: ', arrYears ); 
		//console.log( 'objYears: ', objYears ); 








		const arrFilter = [

			{ win: 'movies' 	, cat: 'select' 	, key: 'letter' 	, clc: '' 	, arr: [] 			, },
			{ win: 'movies' 	, cat: 'select' 	, key: 'year' 		, clc: '' 	, arr: arrYears 	, },
			{ win: 'movies' 	, cat: 'select' 	, key: 'genre' 		, clc: '' 	, arr: [] 			, },
			{ win: 'movies' 	, cat: 'select' 	, key: 'country' 	, clc: '' 	, arr: [] 			, },
			{ win: 'movies' 	, cat: 'select' 	, key: 'hash' 		, clc: '' 	, arr: [] 			, },
			{ win: 'movies' 	, cat: 'select' 	, key: 'set' 		, clc: '' 	, arr: [] 			, },

		];








		let html = Component( 'Filter', arrFilter );



		return html;






		//document.querySelector( 'cmp-header .filter' ).innerHTML = Component( 'Filter-Movies', arrFilter );
	} 
 
 











 
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 
 

	} 
 
 
 


 
} 
 
 
 	
 
 
 
 
 	
 
 
