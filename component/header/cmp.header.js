





class ComponentHeader {



	static args = {};




	static html( objData = {} ) {
		const fooName = this.name + '.html()';
		
		this.args = objData.args ? objData.args : {}; 




		let tagParam = {
			//'class' 		: 'active',
			//'name' 			: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 		: 'any-data',
			//'onclick' 		: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 		: '',
			//'defer' 		: '',
		};




		let clsUnvisible = '';
		if ( Router.urlGET ) {
			if ( Router.urlGET.win ) {
				if ( Router.urlGET.win == 'index' || Router.urlGET.win == 'movie' ) 
					clsUnvisible = 'unvisible';
			}
		}




		let html = `
			<div class="head">
				<div class="title">${ appProjectName }</div>

				<div class="nav">
					<div class="btn pointer" onclick="${ this.name }.clcFilter()">
						<img src="img/pic/filter.png" alt="menu">
					</div>

					<div class="btn pointer" onclick="${ this.name }.clcMenu()">
						<img src="img/pic/menu.png" alt="menu">
					</div>
				</div>
			</div>
			<div class="filter"></div>
			<div class="nav-menu unvisible">${ Component( 'Menu' ) }</div>
		`;
			//<div class="nav-menu ${ clsUnvisible }">${ Component( 'Menu' ) }</div>

		return { tagParam, html };
	}




	static clcMenu() {
		const fooName = this.name + '.clcMenu()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );


		//document.querySelector( '.nav-menu' ).classList.toggle( 'unvisible' );


		//document.querySelector( 'cmp-header .filter' ).classList.add( 'unvisible' );
		document.querySelector( 'cmp-header .filter' ).innerHTML = '';

		document.querySelector( 'cmp-header .nav-menu' ).classList.toggle( 'unvisible' );

/*
		let bodyMenu = document.querySelector( 'cmp-header .nav-menu' );

		if ( bodyMenu.innerHTML ) 
			this.delHtmlMenu();

		else 
			this.addHtmlMenu();

*/

	}






	static clcFilter() {
		const fooName = this.name + '.clcFilter()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );


		//console.log( Router.urlGET );


		let elemFilter = document.querySelector( 'cmp-header .filter' );

		document.querySelector( 'cmp-header .nav-menu' ).classList.add( 'unvisible' );


		if ( elemFilter.innerHTML ) 
			elemFilter.innerHTML = '';

		else 
			elemFilter.innerHTML = this.getHtmlFilter();
	}







	static getHtmlFilter() {
		const fooName = this.name + '.getHtmlFilter()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );
	
		let html = '';



		if ( Router.urlGET && Router.urlGET.win ) {

			if ( Router.urlGET.win == 'movies' ) 
				html = ComponentWinMovies.getHtmlFilter();
			

			if ( Router.urlGET.win == 'people' ) 
				html = ComponentWinPeople.getHtmlFilter();
			

			if ( Router.urlGET.win == 'countries' ) 
				html = ComponentWinCountry.getHtmlFilter();
			






/*
			if ( Router.urlGET.win == 'manufacturers' ) 
				html = ComponentWinManufacturers.getHtmlFilter();



*/



			
		}



		return html;
	}









	static changeFilter( elem ) {
		const fooName = this.name + '.changeFilter()';
		//console.log( 'fooName: ', fooName );
		
		//console.log( 'elem:', elem );

		//document.querySelector( 'cmp-header .filter' ).classList.toggle( 'unvisible' );





		//console.log( 'elem: ', elem );
		//console.log( 'value: ', elem.value );


		if ( elem.value == 'all' ) 
			elem.style.color = '#000';
		
		else 
			elem.style.color = '#f00';
		
		






		//console.log( 'elem.dataset.id: ', elem.dataset.id  );



		Router.link([

			{ k: 'win' 					, v: 'manufacturers' 	, },
			{ k: elem.dataset.id 		, v: elem.value 		, },
			
		]);

		//alert( fooName );




	}

































	static addHtmlMenu() {
		document.querySelector( 'cmp-header .nav-menu' ).innerHTML = Component( 'Menu' );
	}

	static delHtmlMenu() {
		//document.querySelector( 'cmp-header .nav-menu' ).innerHTML = '';



		document.querySelector( 'cmp-header .nav-menu' ).classList.add( 'unvisible' );

		//document.querySelector( '.nav-menu' ).classList.add( 'unvisible' );
	}








	static addHtmlFilter() {
		document.querySelector( 'cmp-header .filter' ).innerHTML = Component( 'Filter-People' );
	}

	static delHtmlFilter() {
		document.querySelector( 'cmp-header .filter' ).innerHTML = '';

		//document.querySelector( '.nav-menu' ).classList.add( 'unvisible' );
	}







/*
	static hide222() {
		document.querySelector( '.nav-menu' ).classList.add( 'unvisible' );
	}

*/





}











