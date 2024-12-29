
 
 
 
 
 
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
		//console.log( objData ); 


		//document.querySelector( 'cmp-header .filter' ).innerHTML = this.getHtmlFilter();



		let arrSelected = arrManufacturer;


		if ( objData && objData.win && objData.win == 'manufacturers' ) {


			if ( objData.country ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.country && k.country[ objData.country ] ) 
						return true;
				});
			}


			if ( objData.hash ) {
				arrSelected = arrSelected.filter( k => {
					if ( k.hash && k.hash[ objData.hash ] ) 
						return true;
				});
			}
		}


		arrSelected.forEach( k => {
			html += `${ 
				Component( 'Spoyler', { 
					id 		: k.id, 
					title 	: `${ k.title ? k.title : '' }`, 
					cmp 	: 'Spoyler-Body-Manufacturer', // для вставки в body спойлера
				})}`;
		});


		return { tagParam, html };  
	} 
 
 
 




	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem:', elem ); 



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
 
 



	static getHtmlFilter() {
		const fooName = this.name + '.insertFilter()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );

		//document.querySelector( '.nav-menu' ).classList.toggle( 'unvisible' );

/*
		let htmlOptionCountry = '';
		arrCountry.forEach( k => {
			htmlOptionCountry += `<option value="${ k.id }">${ k.title ? ( k.title.ua ? k.title.ua : '' ) : '' }</option>`;
		});


		let htmlSelectCountry = `<select>
			<option value="all">- Країна ---</option>
			${ htmlOptionCountry }
		</select>`;

*/



 		let htmlOptionCountry = '<option value="all">- Країна ---</option>';
 		let colorCountry = '';
 		arrCountry.forEach( k => {
 			

			//htmlOptionCountry += `<option value="${ k.id }">${ k.title ? ( k.title.ua ? k.title.ua : '' ) : '' }</option>`;

 			
 			let attrSelected = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'manufacturers' ) {
	 				if ( Router.urlGET.country ) {
	 					if ( k.id ) {
				 			if ( k.id == Router.urlGET.country ) {
				 				attrSelected = 'selected';
				 				colorCountry = 'color';
				 			}
	 					}
	 				}
	 			}
	 		}

			if ( k.title ) {
				if ( k.title.ua ) 
					htmlOptionCountry += `<option value="${ k.id }" ${ attrSelected }>${ k.title.ua }</option>`;
			}
 			
 		});






 		let htmlOptionHash = '<option value="all">- Хештеги ---</option>';
 		let colorHash = '';
 		arrManufacturerHash.forEach( k => {

 			let attrSelected = '';
			let name = '';
	 		if ( Router.urlGET ) {
	 			if ( Router.urlGET.win == 'manufacturers' ) {
	 				if ( Router.urlGET.hash ) {
			 			if ( k.id && k.id == Router.urlGET.hash ) {
			 				attrSelected = 'selected';
				 			colorHash = 'color';
			 			}
			 		}
			 	}
			}

 			htmlOptionHash += `<option value="${ k.id }" ${ attrSelected }>${ k.title }</option>`;
 		});



 		let html = `
 			<div class="wrap">

	 			<div>
	 				<select class="${ colorCountry }" data-id="country" onchange="ComponentHeader.changeFilter( this )">${ htmlOptionCountry }</select>
	 			</div>
	 			<div>
	 				<select class="${ colorHash }" data-id="hash" onchange="ComponentHeader.changeFilter( this )">${ htmlOptionHash }</select>
	 			</div>
	 		</div>
 		`;


		return html;
	}



	static getHtmlSpoylers( arr ) {
		const fooName = this.name + '.insertFilter()';
		//console.log( 'fooName', fooName );
		//console.log( 'data', data );


	}





	static changeFilter222( elem ) {
		const fooName = this.name + '.insertFilter()';
		//console.log( 'fooName', fooName );
		console.log( 'elem', elem );






	}





 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
