

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

		let cmpSpoilersList = elem.closest( '.spoilers-list' );
		if ( cmpSpoilersList ) {

			let cmpBodyName = cmpSpoilersList.dataset.bodyCmpName || '';
			let elemParent = elem.closest( 'cmp-spoyler' );

			ComponentSpoyler.clc( elemParent, cmpBodyName );
		}
	}






});










