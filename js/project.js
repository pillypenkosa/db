const appProjectName = 'DataBase DJS';

//const htmlHrefSign = '&#11023;'; 	// ⬏

const HTML_HREF_SIGN = '&#11023;'; 	// ⬏

// &#698; // ʺ

// &#11023;
// &#11173;







let errConsole 		= [];
let warningConsole 	= [];





function sortObjByYear( a, b ) { 
	return a.year - b.year; 
}


















function addErr( txt = '' ) {
	if ( txt )
		errConsole.push( txt );
		//errConsole.err.push( txt );
}

function addWarning( txt = '' ) {
	if ( txt )
		warningConsole.push( txt );
		//errConsole.warning.push( txt );
}





function isErr() {

	const name = 'Component()';



	if ( errConsole.length || warningConsole.length ) {

		//if ( errConsole.err.length ) {
		if ( errConsole.length ) {
			//cns( 'Бля буду, помилки хуярять... ', 'шось', 'err' );

			errConsole.forEach( k => {
				//console.log( k );
				cns( 'err', k, );
			});
		}

		//if ( errConsole.warning.length ) {
		if ( warningConsole.length ) {
			//cns( 'Бля буду, помилки хуярять... ', 'шось', 'err' );

			warningConsole.forEach( k => {
				//console.log( k );
				cns( 'warning', k, );
			});
		}

	} else 
		cns( 'ok', 'Помилок не виявлено...', );


	errConsole 		= [];	
	warningConsole 	= [];	
}





// возврат HTML-разметки конкретного компонента
function Component( txt, obj = {} ) { 		// txt - назва компонента, obj - дані для компонента

	const name = 'Component()';

	//console.log( 'txt:', txt );
	//console.log( 'obj:', obj );


	let arr = txt.split( '-' );

	let className = 'Component';
	arr.forEach( k => {
		className += k;
	});

	let tagName = 'cmp-' + txt.toLowerCase();
	let fileName = txt.toLowerCase();



	//const txtEavl_1 = className + '.html( obj )';

	// дані з конкретного компонента
	let objIni = eval( className + '.html( obj )' );

	//console.log( objIni );

	let tagParam = '';
	if ( objIni ) {
		if ( objIni.tagParam ) {

			for ( let k in objIni.tagParam ) 
				tagParam += ' ' + k + '="' + objIni.tagParam[ k ] + '"';
		}
	}


	// допоміжна приблуда // можно прибрати
	//cns( 'var', 'задіяно компонент', className + '.html()' );

	return '<' + tagName + ' ' + tagParam + '>' + ( objIni.html ? objIni.html : '' ) + '</' + tagName + '>';
}





// виведення інформвції в консоль
function cns( type, txt, obj ) { 	// t - type: текст `ok`, `err`, `warning`, 	// txt - текстова назва змінної 		// obj - змінна з конкретним змістом 

	let bgFrom 			= '';
	let bgTo 			= '';
	let borderRadiusTL 	= 10; 	// L - left, R - right, T - top, B - bottom
	let borderRadiusTR 	= 10; 	// L - left, R - right, T - top, B - bottom
	let borderRadiusBL 	= 10; 	// L - left, R - right, T - top, B - bottom
	let borderRadiusBR 	= 10; 	// L - left, R - right, T - top, B - bottom
	let css 			= '';

	let outContent 		= '';

	//console.trace();


	if ( type == 'ok' ) {
		bgFrom 	= '0f0';
		bgTo 	= '050';
	}

	if ( type == 'err' ) {
		bgFrom 	= 'f00';
		bgTo 	= '500';
	}

	if ( type == 'warning' ) {
		bgFrom 	= 'f70';
		bgTo 	= 'fc0';
	}

	if ( type == 'var' ) {
		bgFrom 	= '777';
		bgTo 	= '111';
		borderRadiusTR 	= 0; 	// L - left, R - right, T - top, B - bottom
		borderRadiusBR 	= 0; 	// L - left, R - right, T - top, B - bottom
	}


	css = `
		padding: 0 10px; 
		border-top-left-radius: ${ borderRadiusTL }px; 
		border-top-right-radius: ${ borderRadiusTR }px; 
		border-bottom-left-radius: ${ borderRadiusBL }px; 
		border-bottom-right-radius: ${ borderRadiusBR }px; 
		font-size: 10px; 
		font-family: Courier; 
		font-weight: bold; 
		background: linear-gradient( to top, #${ bgFrom }, #${ bgTo } ); 
		color: #fff; 
	`;

	outContent = `%c${ type }: ${ txt }` ;




	if ( type == 'ok' ) {
		bgFrom 	= '0f0';
		bgTo 	= '050';

		console.log( `%c${ txt }`, css );
		//console.trace(  );
	}

	if ( type == 'err' ) {
		bgFrom 	= 'f00';
		bgTo 	= '500';

		console.log( `%c${ txt }`, css );
	}

	if ( type == 'warning' ) {
		bgFrom 	= 'fc0';
		bgTo 	= 'f90';

		console.log( `%c${ txt }`, css );
	}

	if ( type == 'var' ) {
		bgFrom 	= '777';
		bgTo 	= '111';
		borderRadiusTR 	= 0; 	// L - left, R - right, T - top, B - bottom
		borderRadiusBR 	= 0; 	// L - left, R - right, T - top, B - bottom

		console.log( '%c' + txt + ':', css, obj );
	}

}




// встановлення МЕТА-тегів
function setMeta ( obj = {} ) {



	let title = '';
	if ( obj.title ) {

		title += obj.title;

		if ( obj.year ) 
			title += ' (' + obj.year + ')';
	}



	document.title = 
		document.querySelector( 'head meta[ property="og:title" ]' ).content = 
			title;





	document.querySelector( 'head meta[ name="description" ]' ).content = 
		document.querySelector( 'head meta[ property="og:description" ]' ).content = 
			obj.description ? obj.description : '';





	//console.log( document.querySelector( 'head link[ rel="image_src" ]' ) );
	document.querySelector( 'head link[ rel="image_src" ]' ).href =
		document.querySelector( 'head meta[ property="og:image" ]' ).content =
			document.querySelector( 'head meta[ property="og:image:url" ]' ).content =
				obj.image ? obj.image : '';





	document.querySelector( 'head meta[ name="keywords" ]' ).content = 
		obj.keywords ? obj.keywords : '';





	document.querySelector( 'head meta[ property="og:site_name" ]' ).content = appProjectName;

	document.querySelector( 'head meta[ property="og:url" ]' ).content = 'img/pic/logo_djs.png';














/*

"og:title" — указывает заголовок статьи.
"og:description" — указывает краткое описание, которое выводится при формировании превью ссылки.
"og:image" — ссылка на картинку, которая будет отображаться в посте.
"og:url" — ссылка на страницу сайта.
"og:type" — указывает тип страницы (статья, новость, видео, категория и т. д.), можно использовать по умолчанию "article".
"og:site_name" — название сайта.

"og:locale" — указывает локализацию (язык сайта), можно использовать значение "ru_RU" по умолчанию.



*/

}






// відображення в консолі факт задії компонента
function cnsInfoCmp ( txt ) {

	if ( isCmpInfo )
		cns( 'var', 'name', txt );
}























// подсветка кнопок
function btnLight222( container, id ) { 	// container - блок, где расположены кнопки 		// data-id - идентификатор конкретной кнопки

	// !!! в каждой кнопке должен быть класс `btn` и атрибут data-id <div class="btn" data-id=" ...anyTxt... "></div>
	//console.log( container, id );
	//alert( container );
	//alert( id );

	let arr = document.querySelectorAll( container + ' .btn' );

	arr.forEach( k => {
		if ( k.dataset.id == id ) 
			k.classList.add( 'active' );
		else 
			k.classList.remove( 'active' );
	});
}






function big1Letter222( txt ) {

	return txt[ 0 ].toUpperCase() + txt.slice( 1 );
}









//console.trace();






