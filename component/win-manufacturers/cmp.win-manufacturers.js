
 
 
 
 
 
class ComponentWinManufacturers { 
 
 
 
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
 
		//console.log( fooName ); 
		console.log( objData ); 



		if ( objData && objData.win && objData.win == 'manufacturer' ) {

			arrManufacturer.forEach( k => {

				html += `${ 
					Component( 'Spoyler', { 
						id 		: k.id, 
						title 	: `${ k.title ? k.title : '' }`, 
						cmp 	: 'Spoyler-Body-Mnufacturer', // для вставки в body спойлера
					})}`;
			});

		}

		return { tagParam, html };  
	} 
 
 
 




	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		console.log( 'elem:', elem ); 



/*

		let innerBody = elem.closest( '.each-people' ).querySelector( '.body' ).innerHTML;

		//console.log( 'innerBody: ', innerBody ); 

		let elemParent = elem.closest( '.each-people' );
		let uid = elemParent.dataset.id;

		//console.log( 'uid: ', uid ); 


		if ( !innerBody ) 
			elem.closest( '.each-people' ).querySelector( '.body' ).innerHTML = this.getPeopleHTML( uid );

		else 
			elem.closest( '.each-people' ).querySelector( '.body' ).classList.toggle( 'unvisible' );

*/



	} 
 
 






 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
