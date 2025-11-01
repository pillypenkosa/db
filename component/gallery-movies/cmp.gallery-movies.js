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

		// всі актори, які були знайдені у всіх фільмах з конкретної галереї фільмів
		let totalActorObj = {};
		
		//console.log( 'totalActorObj: ', totalActorObj ); 

		arrData.forEach( k => {
			if ( objMovies[ k ] ) {

				if ( objMovies[ k ] && objMovies[ k ].cast )  
					totalActorObj = Object.assign( totalActorObj, objMovies[ k ].cast );


		
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



		let totalActorArr = [];
		for ( let k in totalActorObj ) {
			totalActorArr.push( k );
		}


		//console.log( 'totalActorArr: ', totalActorArr ); 

		if ( totalActorArr.length ) {


			//console.log( 'totalActorArr: ', totalActorArr ); 
			

			html += `<div class="gallery-coop-actors">
				<div>
					<br/>
					<br/>
					Перетин з акторамі по фільмографії ( ${ totalActorArr.length } )</div>
					<br/>
				<div>${ Component( 'Gallery-People', { arr: totalActorArr, year: 0, } ) }</div>
			</div>`;
		}





		//html += Component( 'Gallery-Cooperate-Actors', totalActorObj );



		//console.log( 'totalActorObj: ', totalActorObj ); 


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
 
 
 	
 
 
 
 
 	
 
 
