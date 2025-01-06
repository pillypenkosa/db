// © 2024 DJS 
 
 
 
 
 
class ComponentGalleryPeople { 
 
 
 
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
 
 
		let html = ''; 
 		let arr = objData.arr;
 		//let year = objData.year;



 		arr.forEach( k => {
 			if ( objPeople && objPeople[ k ] ) {

 				let obj 	= objPeople[ k ];
 				let name 	= '';


 				console.log( objData );
 				console.log( obj.life.by );



 				let age = 0;
 				if ( obj.life && obj.life.bd ) 
 					age = objData.year - obj.life.by;
 				


 				if ( obj.name ) {
 					if ( obj.name.n ) 
 						name += obj.name.n;
 					
 					if ( obj.name.p ) 
 						name += ' ' + obj.name.p;

 					if ( obj.name.s ) 
 						name += ' ' + obj.name.s;

 					age

 				}

 				html += `<div class="each-gallery pointer" title="${ name } (~${ age })" data-id="${ obj.id }" onclick="${ this.name }.clc( this )">
 					<img src="img/people/${ obj.id }/1.jpg" alt="${ name }">
 				</div>`;
 			}
 		});

		//console.log( 'objData: ', objData ); 
 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 
 

		let id = elem.dataset.id;




		Router.urlGET = {}; 
		Router.link([
			{ k: 'win', v: 'people', },
			{ k: 'id', v: id, },
		]);




/*

		window.onload = function() { 
			
			//Router.loadApp();


				alert();



				let elemSpoyler = document.querySelector( `cmp-spoyler[ data-id="richard_gere_31081949" ]` );
				elemSpoyler.scrollIntoView();

				window.scrollBy( 0, -48 );

				let elemBody = elemSpoyler.querySelector( '.body' );
				elemBody.innerHTML = Component( 'Spoyler-Body-People', 'richard_gere_31081949' ); 

				//document.querySelector( '' );





		};

*/







	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
