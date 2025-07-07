

LoadDependences.load();



window.onload = function() { 
	
	Router.loadApp();








};








// обработчик кликов по спойлеру
document.querySelector( 'app' ).addEventListener( 'click', function( e ) {

	let elem = e.target;


	//console.log( elem );

	// проверяем был ли клик на элементе .spoiler-title, даже если был клик на его дочернем элементе 
	if ( elem.classList.contains( 'spoiler-title' ) || elem.closest( '.spoiler-title' ) ) {
	//if ( elemParent ) {




		let elemParent = elem.closest( 'cmp-spoyler' );
		//let elemParent = elem.closest( '.spoiler-title' );
		//console.log( elemParent );




		//console.log( elem );
		ComponentSpoyler.clc( elemParent );

		//let elemParent = elem.closest( 'cmp-spoyler' );
		//console.log( elemParent );

		//console.log( elemParent );
		//console.log( elemParent.dataset.id );

		//elemParent.querySelector( '.spoiler-body' ).hidden = !elemParent.querySelector( '.spoiler-body' ).hidden;

	}






});










