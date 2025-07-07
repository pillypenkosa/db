// © 2024 DJS 
 
 
 
 
 
class ComponentFilter { 
 
 
 
	static args = {}; 
 
 
 
	static html( arr = [] ) { 
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
 
 
		//console.log( 'arr: ', arr ); 
 


		let html = ''; 
		//let htmlSelectYear = ''; 





		arr.forEach( k => {

			if ( k.win ) {

				if ( k.win == 'movies' ) {

					if ( k.cat && k.key && k.cat == 'select' ) {

						if ( k.key == 'letter' ) {

							let htmlOption = '';
					 		let color = '';


					 		const arrAbc = [ 'eng', '123', 'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я', ];


							arrAbc.forEach( k_letter => {

								let attrSelected = '';
								if ( k_letter == decodeURI( Router.urlGET.letter )) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								htmlOption += `<option value="${ k_letter }" ${ attrSelected }>${ k_letter }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changeMovieLetter( this )">
								<option value="all">- Літера ---</option>
								${ htmlOption }
							</select>`;
						}



						if ( k.key == 'year' ) {

							let htmlOption = '';
					 		let color = '';

							k.arr.forEach( k_year => {

								let attrSelected = '';
								if ( k_year == Router.urlGET.year ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								htmlOption += `<option value="${ k_year }" ${ attrSelected }>${ k_year }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changeMovieYear( this )">
								<option value="all">- Рік ---</option>
								${ htmlOption }
							</select>`;
						}



						if ( k.key == 'genre' ) {

							let htmlOption = '';
					 		let color = '';


							arrMoviesGenres.forEach( k_genre => {

								let attrSelected = '';

								if ( k_genre.id == Router.urlGET.genre ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								htmlOption += `<option value="${ k_genre.id }" ${ attrSelected }>${ k_genre.title }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changeMovieGenre( this )">
								<option value="all">- Жанр ---</option>
								${ htmlOption }
							</select>`;
						}



						if ( k.key == 'country' ) {

							let htmlOption = '';
					 		let color = '';

							arrCountry.forEach( k_country => {

								let attrSelected = '';
								if ( k_country.id == Router.urlGET.country ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								let titleCountry = '';
								if ( k_country.title && k_country.title.ua )
									titleCountry = k_country.title.ua;


								htmlOption += `<option value="${ k_country.id }" ${ attrSelected }>${ titleCountry }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changeCountry( this )">
								<option value="all">- Країна ---</option>
								${ htmlOption }
							</select>`;
						}



						if ( k.key == 'hash' ) {

							let htmlOption = '';
					 		let color = '';


							arrMoviesHash.forEach( k_hash => {

								let attrSelected = '';

								if ( k_hash.id == Router.urlGET.hash ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								htmlOption += `<option value="${ k_hash.id }" ${ attrSelected }>${ k_hash.title }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changeHash( this )">
								<option value="all">- Хеш ---</option>
								${ htmlOption }
							</select>`;
						}



						// підбірка
						if ( k.key == 'set' ) {

							let htmlOption = '';
					 		let color = '';

							arrMovieSet.forEach( k_set => {

								let attrSelected = '';

								if ( k_set.id == Router.urlGET.set ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								//alert();

								htmlOption += `<option value="${ k_set.id }" ${ attrSelected }>${ k_set.title }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changeMovieSet( this )">
								<option value="all">- Підбірки ---</option>
								${ htmlOption }
							</select>`;
						}
					}
				}
			


				if ( k.win == 'people' ) {

					if ( k.cat && k.key && k.cat == 'select' ) {

						if ( k.key == 'sex' ) {

							let htmlOption = '';
					 		let color = '';

							[ 'man', 'woman', ].forEach( k_sex => {

								let attrSelected = '';

								if ( k_sex == Router.urlGET.sex ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								let titleSex = '';
								if ( k_sex == 'man' )
									titleSex = 'Чоловіки';

								if ( k_sex == 'woman' )
									titleSex = 'Жінки';

								htmlOption += `<option value="${ k_sex }" ${ attrSelected }>${ titleSex }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changePeopleSex( this )">
								<option value="all">- Стать ---</option>
								${ htmlOption }
							</select>`;
						}



						if ( k.key == 'year' ) {

							let htmlOption = '';
					 		let color = '';

					 		let arrYears = [];

					 		for ( let k_year in arrPeopleYears ) 
					 			arrYears.push( +k_year );
					 		

	/*
					 		arrYears.sort();
					 		arrYears.reverse();
	*/
							//console.log( arrYears );



							arrYears.forEach( k_year => {

								//console.log( k_country );

								let attrSelected = '';
								if ( k_year == Router.urlGET.year ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}



	/*
								let titleCountry = '';

								if ( objCountry && objCountry[ k_country ] && objCountry[ k_country ].title && objCountry[ k_country ].title.ua )

									titleCountry = objCountry[ k_country ].title.ua;

	*/



								htmlOption += `<option value="${ k_year }" ${ attrSelected }>${ k_year }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changePeopleYear( this )">
								<option value="all">- Рік ---</option>
								${ htmlOption }
							</select>`;
						}



						if ( k.key == 'country' ) {

							let htmlOption = '';
					 		let color = '';

							arrCountry1.forEach( k_country => {

								//console.log( k_country );

								let attrSelected = '';
								if ( k_country == Router.urlGET.country ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								let titleCountry = '';
								if ( objCountry && objCountry[ k_country ] && objCountry[ k_country ].title && objCountry[ k_country ].title.ua )
									titleCountry = objCountry[ k_country ].title.ua;


								htmlOption += `<option value="${ k_country }" ${ attrSelected }>${ titleCountry }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changeCountry( this )">
								<option value="all">- Країна ---</option>
								${ htmlOption }
							</select>`;
						}



						if ( k.key == 'hash' ) {

							let htmlOption = '';
					 		let color = '';

							arrPeopleHash.forEach( k_hash => {

								//console.log( k_hash );

								if ( k_hash.id ) {

									let attrSelected = '';
									if ( k_hash.id == Router.urlGET.hash ) {
										attrSelected 	= `selected`;
						 				color 			= `class="color"`;
									}

									let titleHash = '';
									if ( objPeopleHash && objPeopleHash[ k_hash.id ] && objPeopleHash[ k_hash.id ].title ) 
										titleHash = objPeopleHash[ k_hash.id ].title;
									
									htmlOption += `<option value="${ k_hash.id }" ${ attrSelected }>${ titleHash }</option>`;
								}
							});

							html += `<select ${ color } onchange="${ this.name }.changeHash( this )">
								<option value="all">- Хеш ---</option>
								${ htmlOption }
							</select>`;
						}
					}
				}



				if ( k.win == 'countries' ) {

					if ( k.cat && k.key && k.cat == 'select' ) {

						if ( k.key == 'part' ) {

							let htmlOption = '';
					 		let color = '';


							arrWorldPart.forEach( k_part => {

								let attrSelected = '';

								if ( k_part.id == Router.urlGET.part ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								htmlOption += `<option value="${ k_part.id }" ${ attrSelected }>${ k_part.ua }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changeCountryParts( this )">
								<option value="all">- Частина світу ---</option>
								${ htmlOption }
							</select>`;

						}




						if ( k.key == 'symbol' ) {


							let arrSymbol = [

								{ id: 'coa' 				, title: 'Герби'					, },
								{ id: 'flag' 				, title: 'Флаги'					, },

								{ id: 'coa_side2' 			, title: 'Герби (пари)'				, },
								{ id: 'coa_bird' 			, title: 'Герби (птахи)'			, },
								{ id: 'coa_wreath' 			, title: 'Герби (вінки)'			, },
								{ id: 'coa_shield' 			, title: 'Герби (щити)'				, },

								{ id: 'coa_crown_shield' 	, title: 'Герби (корона на щиті)'	, },



								{ id: 'coa_star' 			, title: 'Герби (зірки)'			, },
								{ id: 'coa_circle' 			, title: 'Герби (кола)'				, },

								{ id: 'flag_1x1' 			, title: 'Флаги 1:1'				, },
								{ id: 'flag_1x2' 			, title: 'Флаги 1:2'				, },
								{ id: 'flag_2x3' 			, title: 'Флаги 2:3'				, },
								{ id: 'flag_3x5' 			, title: 'Флаги 3:5'				, },
								{ id: 'flag_5x8' 			, title: 'Флаги 5:8'				, },
		


							];


							let htmlOption = '';
					 		let color = '';


							arrSymbol.forEach( k_symbol => {

								let attrSelected = '';

								if ( k_symbol.id == Router.urlGET.symbol ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								htmlOption += `<option value="${ k_symbol.id }" ${ attrSelected }>${ k_symbol.title }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changeCountrySymbol( this )">
								<option value="all">- Символіка ---</option>
								${ htmlOption }
							</select>`;
						}

					}
				}



				if ( k.win == 'manufacturers' ) {

					if ( k.cat && k.key && k.cat == 'select' ) {

						if ( k.key == 'country' ) {

							let htmlOption = '';
					 		let color = '';



					 		let objCountryIDs = {};


					 		arrManufacturer.forEach( k_manufacturer => {

					 			if ( k_manufacturer.country ) {

					 				for ( let k_country in k_manufacturer.country ) 
					 					objCountryIDs[ k_country ] = 1;

					 			}
					 		});


					 		//console.log( objCountryIDs );



					 		let arrCountrySelected = [];

			 				for ( let k_id in objCountryIDs ) {
			 					if ( objCountry && objCountry[ k_id ] ) {


			 						arrCountrySelected.push( objCountry[ k_id ] );

			 					}



			 				}

					 		//console.log( arrCountrySelected );
					 		//console.log( arrCountry );


			 				function sortCountryByLetter( a, b ) {

			 					if ( a.title && b.title ) {
			 						if ( a.title.ua && b.title.ua ) {

					 					console.log( a.title.ua );
					 					console.log( b.title.ua );

					 					if ( a.title.ua > b.title.ua )
			 								return 1;
			 							else
			 								return -1;
			 						}
			 					}
			 				}

			 				arrCountrySelected.sort( sortCountryByLetter );

							arrCountrySelected.forEach( k_country => {

								//console.log( k_country );

								let attrSelected = '';
								if ( k_country == Router.urlGET.country ) {
									attrSelected 	= `selected`;
					 				color 			= `class="color"`;
								}

								let countryID = k_country.id ? k_country.id : null;
								let titleCountry = '';
								if ( countryID && objCountry && objCountry[ countryID ] && objCountry[ countryID ].title && objCountry[ countryID ].title.ua ) {
									titleCountry = objCountry[ countryID ].title.ua;


									//console.log( titleCountry );




								}


								htmlOption += `<option value="${ countryID }" ${ attrSelected }>${ titleCountry }</option>`;
							});

							html += `<select ${ color } onchange="${ this.name }.changeCountry( this )">
								<option value="all">- Країна ---</option>
								${ htmlOption }
							</select>`;
						}



						if ( k.key == 'hash' ) {

							let htmlOption = '';
					 		let color = '';

							arrManufacturerHash.forEach( k_hash => {

								//console.log( k_hash );

								if ( k_hash.id ) {

									let attrSelected = '';
									if ( k_hash.id == Router.urlGET.hash ) {
										attrSelected 	= `selected`;
						 				color 			= `class="color"`;
									}

									let titleHash = '';
									if ( objManufacturerHash && objManufacturerHash[ k_hash.id ] ) 
										titleHash = objManufacturerHash[ k_hash.id ].title;
									
									htmlOption += `<option value="${ k_hash.id }" ${ attrSelected }>${ titleHash }</option>`;
								}
							});

							html += `<select ${ color } onchange="${ this.name }.changeHash( this )">
								<option value="all">- Хеш ---</option>
								${ htmlOption }
							</select>`;
						}
					}
				}
			}
		});

		return { tagParam, html };  
	} 
 
 
 






	static changeMovieLetter( elem ) { 
		const fooName = this.name + '.changeMovieLetter()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		let val = elem.value;

		if ( val == 'all' )
			elem.style.color = '#000';

		else
			elem.style.color = '#f00';


		delete( Router.urlGET.id ); 

		Router.link([
			{ k: 'letter' 	, v: val 	, },
		]);
	}






 

 
	static changeMovieYear( elem ) { 
		const fooName = this.name + '.changeMovieYear()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		let val = elem.value;

		if ( val == 'all' )
			elem.style.color = '#000';

		else
			elem.style.color = '#f00';



		delete( Router.urlGET.id ); 

		Router.link([
			{ k: 'year' 	, v: val 	, },
		]);
	}



	static changeMovieGenre( elem ) { 
		const fooName = this.name + '.changeMovieGenre()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		let val = elem.value;


		if ( val == 'all' )
			elem.style.color = '#000';

		else
			elem.style.color = '#f00';

		//Router.urlGET = {}; 
		delete( Router.urlGET.id ); 
		
		Router.link([
			{ k: 'genre', v: val, },
		]);
	}





	static changeMovieSet( elem ) { 
		const fooName = this.name + '.changeMovieSet()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		let val = elem.value;



		if ( val == 'all' )
			elem.style.color = '#000';

		else
			elem.style.color = '#f00';


		//Router.urlGET = {}; 
		delete( Router.urlGET.id ); 
		
		Router.link([
			{ k: 'set', v: val, },
		]);
	}




	static changePeopleSex( elem ) { 
		const fooName = this.name + '.changePeopleSex()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		let val = elem.value;



		if ( val == 'all' )
			elem.style.color = '#000';

		else
			elem.style.color = '#f00';


		//Router.urlGET = {}; 
		delete( Router.urlGET.id ); 
		
		Router.link([
			{ k: 'sex', v: val, },
		]);
	}








	static changePeopleYear( elem ) { 
		const fooName = this.name + '.changePeopleYear()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		let val = elem.value;



		if ( val == 'all' )
			elem.style.color = '#000';

		else
			elem.style.color = '#f00';


		//Router.urlGET = {}; 
		delete( Router.urlGET.id ); 
		
		Router.link([
			{ k: 'year', v: val, },
		]);
	}




	static changeCountry( elem ) { 
		const fooName = this.name + '.changeCountry()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		let val = elem.value;



		if ( val == 'all' )
			elem.style.color = '#000';

		else
			elem.style.color = '#f00';


		//Router.urlGET = {}; 
		delete( Router.urlGET.id ); 
		
		Router.link([
			{ k: 'country', v: val, },
		]);
	}




	static changeCountryParts( elem ) { 
		const fooName = this.name + '.changeCountryParts()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		let val = elem.value;



		if ( val == 'all' )
			elem.style.color = '#000';

		else
			elem.style.color = '#f00';


		//Router.urlGET = {}; 
		delete( Router.urlGET.id ); 
		
		Router.link([
			{ k: 'part', v: val, },
		]);
	}





	static changeCountrySymbol( elem ) { 
		const fooName = this.name + '.changeCountrySymbol()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		let val = elem.value;



		if ( val == 'all' )
			elem.style.color = '#000';

		else
			elem.style.color = '#f00';


	
		//Router.urlGET = {}; 
		delete( Router.urlGET.id ); 
		Router.link([
			//{ k: 'win' 		, v: 'countries' 	, },
			{ k: 'symbol' 	, v: val 			, },
		]);
	}





	static changeHash( elem ) { 
		const fooName = this.name + '.changeHash()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		let val = elem.value;



		if ( val == 'all' )
			elem.style.color = '#000';

		else
			elem.style.color = '#f00';


		//Router.urlGET = {}; 
		delete( Router.urlGET.id ); 
		
		Router.link([
			{ k: 'hash', v: val, },
		]);
	}






 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
