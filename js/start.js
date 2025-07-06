

LoadDependences.load();



window.onload = function() { 
	
	Router.loadApp();








};








// обработчик кликов по спойлеру
document.querySelector( 'app' ).addEventListener( 'click', function( e ) {

	let elem = e.target;


	//console.log( elem );


	let elemParent = elem.closest( 'cmp-spoyler' );
	//console.log( elemParent );



	//if ( elem.classList.contains( 'spoiler-title' )) {
	if ( elemParent ) {


		//console.log( elem );
		ComponentSpoyler.clc( elemParent );

		//let elemParent = elem.closest( 'cmp-spoyler' );
		//console.log( elemParent );

		//console.log( elemParent );
		//console.log( elemParent.dataset.id );

		//elemParent.querySelector( '.spoiler-body' ).hidden = !elemParent.querySelector( '.spoiler-body' ).hidden;

	}






});










