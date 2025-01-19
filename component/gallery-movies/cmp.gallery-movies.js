// © 2024 DJS 
 
 
 
 
 
class ComponentGalleryMovies { 
 
 
 
	static args = {}; 
 
 
 
	static html( arrData = [] ) { 
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
 
 
 
		let html = ''; 





		//console.log( 'arrData: ', arrData ); 


		arrData.forEach( k => {
			if ( objMovies[ k ] ) {

				let obj = objMovies[ k ];


				let titleMovie = '';

				if ( obj.title && obj.title.ua ) 
					titleMovie = obj.title.ua;

				if ( obj.year )
					titleMovie += ` (${ obj.year })`;
				

				html += `<div class="each-movie pointer" data-id="${ obj.id }" title="${ titleMovie }" onclick="${ this.name }.clc( this )">
					<img src="img/movies/${ obj.id }.jpg" alt="${ titleMovie }">
				</div>`;
			}
		});



		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 



		let id = elem.dataset.id;



		Router.urlGET = {}; 
		Router.link([
			{ k: 'win', v: 'movies', },
			{ k: 'id', v: id, },
		]);
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
