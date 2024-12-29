// © 2024 DJS 
 
 
 
 
 
class ComponentSpoylerBodyPeople { 
 
 
 
	static args = {}; 
 
 
 
	static html( data = '' ) { 
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



 
		//console.log( 'data: ', data ); 
 
 
		let html = ''; 
		let obj = {};


		if ( objListPeople && objListPeople[ data ] ) {
			obj = objListPeople[ data ];



			//let tBody = '';


			let htmlName = '';
			if ( obj.name ) {

				if ( obj.name.n )
					htmlName += obj.name.n;

				if ( obj.name.p )
					htmlName += ' ' + obj.name.p;

				if ( obj.name.s )
					htmlName += ' ' + obj.name.s;

				if ( htmlName )
					htmlName = `<div class="name-title">${ htmlName }</div>`;
			}



			let htmlRibbon = '';
			let htmlDate = '';
			if ( obj.life ) {

				//let htmlDateB = '';

				if ( obj.life.bd )
					htmlDate += obj.life.bd;

				if ( obj.life.bm )
					htmlDate += '.' + obj.life.bm;

				if ( obj.life.by )
					htmlDate += '.' + obj.life.by;




				let htmlDateD = '';

				if ( obj.life.dd )
					htmlDateD += obj.life.dd;

				if ( obj.life.dm )
					htmlDateD += '.' + obj.life.dm;

				if ( obj.life.dy )
					htmlDateD += '.' + obj.life.dy;

				if ( htmlDateD ) {
					htmlDateD = ' - ' + htmlDateD;
					htmlRibbon = '<img class="ribbon" src="img/pic/ribbon.png" alt="">';
				}



				if ( htmlDate )
					htmlDate = `<div class="date">${ htmlDate }${ htmlDateD }</div>`;
			}






			let htmlAva = '';
			let htmlGalery = '';
			if ( obj.img ) {

				if ( obj.img[ 1 ] )
					htmlAva = `<div class="poster">
						<img class="avatar" src="img/people/${ obj.id }/${ obj.img[ 1 ] }.jpg" alt="${ obj.id }">
						${ htmlRibbon }
					</div>`;

				if ( obj.img[ 0 ] && obj.img[ 0 ] > 1 ) {
					for ( let i=1; i<obj.img[ 0 ]+1; i++ ) 
						htmlGalery += `<img class="pointer" src="img/people/${ obj.id }/${ i }.jpg" alt="${ obj.id }" data-img="${ obj.id }/${ i }" onmouseover="${ this.name }.mouseover( this )">`;
				
					if ( htmlGalery )
						htmlGalery = `<div class="galery">${ htmlGalery }</div>`;
				}
			}



			html = `<div class="body-wrap">

				<div class="main-info">
					${ htmlName }
					${ htmlDate }
					${ htmlAva }
					${ htmlGalery }
				</div>

				<button data-id="${ obj.id }" onclick="${ this.name }.showKeyValObject( this )">Object</button>
				<div class="key-val-object"></div>

			</div>`;
		}



				//<table class="table-key-val">${ tBody }</table>

		return { tagParam, html };  
	} 
 
 







	static showKeyValObject( elem ) { 
		const fooName = this.name + '.showKeyValObject()'; 
 
		console.log( 'fooName: ', fooName ); 
		console.log( 'elem', elem ); 


		let elemParent = elem.closest( 'cmp-spoyler-body-people' );
		console.log( 'elemParent', elemParent ); 



		let id = elem.dataset.id;



		//elemParent.querySelector( '.key-val-object' ).innerHTML = this.getHtmlKeyValObject( id );

		if ( elemParent.querySelector( '.key-val-object' ).innerHTML )
			elemParent.querySelector( '.key-val-object' ).innerHTML = '';

		else
			elemParent.querySelector( '.key-val-object' ).innerHTML = this.getHtmlKeyValObject( id );

	} 
 




	static getHtmlKeyValObject( id ) {

		const fooName = this.name + '.getHtmlKeyValObject()'; 
 
		console.log( 'fooName: ', fooName ); 
		console.log( 'id', id ); 


		let html = '';
		if ( objListPeople ) {

			if ( objListPeople[ id ] ) {

				let obj = objListPeople[ id ];

				let htmlTBody = '';






				if ( obj.id )
					htmlTBody += `<tr><td class="key">id</td><td class="val">${ obj.id }</td></tr>`;



				if ( obj.name ) {
					if ( obj.name.n )
						htmlTBody += `<tr><td class="key">name.n</td><td class="val">${ obj.name.n }</td></tr>`;

					if ( obj.name.p )
						htmlTBody += `<tr><td class="key">name.p</td><td class="val">${ obj.name.p }</td></tr>`;

					if ( obj.name.s )
						htmlTBody += `<tr><td class="key">name.s</td><td class="val">${ obj.name.s }</td></tr>`;
				}



				if ( obj.sex ) 
					htmlTBody += `<tr><td class="key">sex</td><td class="val">${ obj.sex }</td></tr>`;



				if ( obj.life ) {

					let htmlLife = '';

					if ( obj.life.bd ) 
						htmlTBody += `<tr><td class="key">life.bd</td><td class="val">${ obj.life.bd }</td></tr>`;

					if ( obj.life.bm ) 
						htmlTBody += `<tr><td class="key">life.bm</td><td class="val">${ obj.life.bm }</td></tr>`;

					if ( obj.life.by ) 
						htmlTBody += `<tr><td class="key">life.by</td><td class="val">${ obj.life.by }</td></tr>`;

					if ( obj.life.dd ) 
						htmlTBody += `<tr><td class="key">life.dd</td><td class="val">${ obj.life.dd }</td></tr>`;

					if ( obj.life.dm ) 
						htmlTBody += `<tr><td class="key">life.dm</td><td class="val">${ obj.life.dm }</td></tr>`;

					if ( obj.life.dy ) 
						htmlTBody += `<tr><td class="key">life.dy</td><td class="val">${ obj.life.dy }</td></tr>`;
				}



				if ( obj.country ) {

					let htmlCountry = '';

					for ( let k in obj.country ) {
						htmlCountry += `${ k } `;

						//htmlCountry += objCountry[ k ] ? ( objCountry[ k ].title ? ( objCountry[ k ].title.ua ? objCountry[ k ].title.ua : k ) : k ) : k;
						//htmlCountry += ' ';
					}

					htmlTBody += `<tr><td class="key">country</td><td class="val">${ htmlCountry }</td></tr>`;
				}



				if ( obj.hash ) {
					let htmlHash = '';

					for ( let k in obj.hash )
						htmlHash += `#${ k } `;

					htmlTBody += `<tr><td class="key">hash</td><td class="val">${ htmlHash }</td></tr>`;
				}



				if ( obj.internet ) {

					if ( obj.internet.imdb ) 
						htmlTBody += `<tr><td class="key">internet.wiki_ua</td><td class="val">
							<a href="https://www.imdb.com/name/nm${ obj.internet.imdb }/" target="_blank">IMDb&#11023;</a>
						</td></tr>`;

					if ( obj.internet.wiki_ua ) 
						htmlTBody += `<tr><td class="key">internet.wiki_ua</td><td class="val">
							<a href="https://uk.wikipedia.org/wiki/${ obj.internet.wiki_ua }" target="_blank">WikiUa&#11023;</a>
						</td></tr>`;
				}



				if ( obj.img ) {

					htmlTBody += `<tr>
						<td class="key">img</td>
						<td class="val">${ obj.img[ 0 ] }, ${ obj.img[ 1 ] }</td>
					</tr>`;
				}





				html = `<table class="table-key-val">${ htmlTBody }</table>`;	
			}
		}

		return html;
	}



	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 

	static mouseover( elem ) { 
		const fooName = this.name + '.hover()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem', elem ); 

		let elemParent = elem.closest( '.main-info' );
		//console.log( 'elemParent', elemParent ); 

		//elemParent.querySelector( '.poster' ).innerHTML = `<img src="img/people/${ elem.dataset.img }.jpg" alt="">`;
		
		elemParent.querySelector( 'img.avatar' ).src = `img/people/${ elem.dataset.img }.jpg`;






























/*
		let elemSpoyler = document.querySelector( `cmp-spoyler[ data-id="richard_gere_31081949" ]` );
		elemSpoyler.scrollIntoView();

		window.scrollBy( 0, -48 );

		let elemBody = elemSpoyler.querySelector( '.body' );
		elemBody.innerHTML = Component( 'Spoyler-Body-People', 'richard_gere_31081949' ); 

		//document.querySelector( '' );
*/




	} 
 
 

 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
