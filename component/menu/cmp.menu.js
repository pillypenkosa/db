// © 2023 DJS 
 
 
 
 
 
class ComponentMenu { 
 
 
 
	static args = {}; 
 
 


	static arrBtns = [];



/*
	static filter = {

		cast 		: 'all',
		country 	: 'all',
		genre 		: 'all',
		year 		: 'all',
		letter 		: 'all',
	};
*/




 
	static html( objData = {} ) { 
		const name = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 


 		


 		//console.log( Router.urlGET );


		//console.log( 'objData: ', objData );
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 


/*
		let clsUnvisibleMovie = 'unvisible';
		let clsUnvisiblePeople = 'unvisible';

		if ( Router.urlGET  ) {
			if ( Router.urlGET.win ) {

				if ( Router.urlGET.win == 'movies' ) 
					clsUnvisibleMovie = '';

				if ( Router.urlGET.win == 'people' ) 
					clsUnvisiblePeople = '';
			}
		}
*/


		const arrMenu = [

			{ href: 'index' 				, title: 'Головна' 		, },
			{ href: 'countries' 			, title: 'Країни' 		, },
			{ href: 'people' 				, title: 'Люди' 		, },
			{ href: 'movies' 				, title: 'Фільми' 		, },
			{ href: 'manufacturers' 		, title: 'Виробники' 	, },
			
		];

		

 		let html = '';
		arrMenu.forEach( k => {
			html += `<div class="btn2" data-href="${ k.href }" onclick="${ this.name }.clc( this )">${ k.title }</div>`;
		});


		return { tagParam, html };  
	} 
 
 



	static clc( elem ) {
		const fooName = this.name + '.clc()';
		//console.log( 'fooName: ', fooName );
		//console.log( elem );

		//let href = elem.dataset.href;


		// видаляємо будь-який фільтр при натисканні на будь-який пункт Меню
		document.querySelector( 'cmp-header .filter' ).innerHTML = '';




		Router.urlGET = {}; 
		Router.link([
			{ k: 'win', v: elem.dataset.href, },
		]);

		//ComponentHeader.delHtmlMenu();



	}




 
 
 
} 
 
 
 	
 




