// © 2024 DJS 
 
 
 
 
 
class ComponentSpoyler { 
 
 
 
	static args = {}; 

	//static pmClose = '&#9207';
	static pmClose = '+';
	//static pmClose = '&#11163';
	//static pmOpen = '&#9204';
	static pmOpen = '-';
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData ); 


 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			'data-id' 		: objData.id,
			//'data-cmp' 		: objData.cmp,
			//'data-key' 	: '', 
			//'onclick' 		: `${ this.name }.hideMenu()`,
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
		let htmlTitle = '';
		//let htmlThroughput = '';

		if ( objData ) {
			if ( objData.title ) 
				htmlTitle = objData.title;
		}



		let htmlBody = '';
		if ( objData.tf ) {		// відкритий спойлер
			//console.log( objData );
			//htmlBody = Component( objData.cmp, objData.id );
			htmlBody = Component( objData.cmp, objData.id );
		}

 
			//<div class="title" data-id="${ objData.id }" data-cmp="${ objData.cmp }" onclick="${ this.name }.clc( this )">
			//<div class="spoiler-title" data-id="${ objData.id }" data-cmp="${ objData.cmp }">
		let html = `
			<div class="spoiler-title">
				<div class="txt">${ htmlTitle }</div>
				<div class="pm" title="Розгорнути / згорнути">${ this.pmClose }</div>
			</div>
			<div class="body">${ htmlBody }</div>
		`; 

		return { tagParam, html };  
	} 










	static hideMenu() { 
		const fooName = this.name + '.hideMenu()'; 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem );

		//document.querySelector( 'cmp-header .filter' ).classList.add( 'unvisible' );

		document.querySelector( 'cmp-header .filter' ).innerHTML = '';


		document.querySelector( 'cmp-header .nav-menu' ).classList.add( 'unvisible' );
	}







	static clc( elem, cmpBodyName ) { 
		const fooName = this.name + '.clc()'; 
		//console.log( 'fooName: ', fooName ); 



		//console.log( 'elem: ', elem );
		//console.log( 'cmpBodyName: ', cmpBodyName );


		//let elemParent 	= elem.closest( 'cmp-spoyler' );
		let id 			= elem.dataset.id;
		//let cmpName 	= elem.dataset.cmp;
		let elemBody 	= elem.querySelector( '.body' );


		if ( !elemBody.innerHTML ) 
			elemBody.innerHTML = Component( cmpBodyName, id ); 

		else 
			elemBody.hidden = !elemBody.hidden;

	} 
 
 
/*
	static insertSpoyler( cmp, id ) { 
		const fooName = this.name + '.insertSpoyler()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'id: ', id );
	}
*/





	static openSpoyler222( cmp, id ) { 
		const fooName = this.name + '.openSpoyler()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'id: ', id );


		let elem = document.querySelector( `cmp-spoyler[ data-id="${ id }"]` );

		let elemBody 		= elem.querySelector( '.body' );

		if ( !elemBody.innerHTML ) 
			elemBody.innerHTML = Component( cmpName, id ); 

		else 
			elemBody.classList.remove( 'unvisible' );

/*
		elem.querySelector( '.title .pm' ).innerHTML = this.pmClose;



		let elemBody = elem.querySelector( '.body' );

		elemBody.classList.toggle( 'unvisible' );
*/

	}









	static closeSpoyler222( id ) { 
		const fooName = this.name + '.closeSpoyler()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'id: ', id );


		let elem = document.querySelector( `cmp-spoyler[ data-id="${ id }"]` );

		elem.querySelector( '.title .pm' ).innerHTML = this.pmClose;



		let elemBody = elem.querySelector( '.body' );

		//elemBody.classList.toggle( 'unvisible' );
		elemBody.classList.add( 'unvisible' );


	}












	static linkTo( data = {} ) {
		const fooName = this.name + '.linkTo()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 







	}






 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
