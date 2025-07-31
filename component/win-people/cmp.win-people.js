
 
 
 
 
 
class ComponentWinPeople { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
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
 
 
 

 
		//console.log( fooName ); 
		//console.log( objData ); 


		//document.querySelector( 'cmp-header .filter' ).innerHTML = this.getHtmlFilter();
		//document.querySelector( 'cmp-header .filter' ).classList.add( 'unvisible' );


		setMeta({
			title 			: 'Люди',
			description 	: 'Опис... Люди',
			//keywords 		: 'Ключові слова...' + name,
			//image 			: 'img/pic/logoDJS.png',
			//url 			: 'url/any/there/' + name,
			//type 			: 'Тіпі-тіп ' + name,
			//site_name 	: 'Назва сайту, мабуть стале значення... ' + name,
		});




		//console.log( Router.urlGET );
		//console.log( objData );


		let html = ''; 
		let htmlSpoilersList = '';


		if ( objData ) {

			let tfOpenCloseSpoyler = false; 	 	// true - відкритий 	// false або відсутній як такий - закритий


			let arrSelected = arrPeople;


			if ( objData.id ) {
				arrSelected = arrSelected.filter( k => k.id == objData.id );
				tfOpenCloseSpoyler = true;
			}



			if ( objData.sex ) {
				arrSelected = arrSelected.filter( k => {

					if ( objData.sex == 'man' && k.sex )
						return true;

					if ( objData.sex == 'woman' && !k.sex )
						return true;
				});
			}



			if ( objData.year ) {
				arrSelected = arrSelected.filter( k => {

					if ( k.life && k.life.by && k.life.by == objData.year )
						return true;
				});
			}



			if ( objData.country ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.country && k.country[ objData.country ] )
						return true;
				});
			}


			if ( objData.hash ) {


				if ( objData.hash == 'died' /*   || objData.hash == 'any1' || objData.hash == 'any2' */ ) {

					if ( objData.hash == 'died' ) {
						arrSelected = arrSelected.filter( k => {
							if ( k.life && k.life.dy ) 
								return true;
						});
					}

				} else {

					arrSelected = arrSelected.filter( k => {

						if ( k.hash && k.hash[ objData.hash ] )
							return true;
					});
				}
			}



			arrSelected.forEach( k => {
				htmlSpoilersList += `${ 
					Component( 'Spoyler', { 
						cmp 	: 'Spoyler-Body-People',
						id 		: k.id, 
						title 	: `${ k.name.n ? k.name.n : '' } ${ k.name.s ? k.name.s : '' }`, 
						tf 		: tfOpenCloseSpoyler,
					})}`;
			});



			if ( htmlSpoilersList )
				html = `<div class="spoilers-list" data-body-cmp-name="Spoyler-Body-People">${ htmlSpoilersList }</div>`;
		}

		return { tagParam, html };  
	} 
 
 
 
 
 
	static clcSpoyler( elem ) { 
		const fooName = this.name + '.clcSpoyler()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem:', elem ); 

		let innerBody = elem.closest( '.each-people' ).querySelector( '.body' ).innerHTML;

		//console.log( 'innerBody: ', innerBody ); 

		let elemParent = elem.closest( '.each-people' );
		let uid = elemParent.dataset.id;

		//console.log( 'uid: ', uid ); 


		if ( !innerBody ) 
			elem.closest( '.each-people' ).querySelector( '.body' ).innerHTML = this.getPeopleHTML( uid );

		else 
			elem.closest( '.each-people' ).querySelector( '.body' ).classList.toggle( 'unvisible' );
	} 
 
 






	static getHtmlFilter() { 
		const fooName = this.name + '.getHtmlFilter()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 
 
/*
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

*/



		const arrFilter = [

			{ win: 'people' 	, cat: 'select' 	, key: 'sex' 		, clc: '' 	, arr: [] 			, },
			{ win: 'people' 	, cat: 'select' 	, key: 'year' 		, clc: '' 	, arr: [] 			, },
			{ win: 'people' 	, cat: 'select' 	, key: 'country' 	, clc: '' 	, arr: [] 			, },
			{ win: 'people' 	, cat: 'select' 	, key: 'hash' 		, clc: '' 	, arr: [] 			, },


		];






		let html = Component( 'Filter', arrFilter );



		return html;






		//document.querySelector( 'cmp-header .filter' ).innerHTML = Component( 'Filter-Movies', arrFilter );
	} 
 
 




















 
} 
 
 
 	
 
 
 
 
 	
 
 
