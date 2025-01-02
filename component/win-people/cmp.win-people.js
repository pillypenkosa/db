
 
 
 
 
 
class ComponentWinPeople { 
 
 
 
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
		document.querySelector( 'cmp-header .filter' ).classList.add( 'unvisible' );


		setMeta({
			title 			: 'Люди',
			description 	: 'Опис... Люди',
			//keywords 		: 'Ключові слова...' + name,
			//image 			: 'img/pic/logoDJS.png',
			//url 			: 'url/any/there/' + name,
			//type 			: 'Тіпі-тіп ' + name,
			//site_name 	: 'Назва сайту, мабуть стале значення... ' + name,
		});




		//console.log( Router.urlGET );



		if ( objData ) {

			if ( objData ) {

				arrPeople.forEach( k => {

					html += `${ 
						Component( 'Spoyler', { 
							id 		: k.id, 
							title 	: `${ k.name.n ? k.name.n : '' } ${ k.name.s ? k.name.s : '' }`, 
							cmp 	: 'Spoyler-Body-People', // для вставки в body спойлера
						})}`;
				});

			}
		}

		return { tagParam, html };  
	} 
 
 
 
 
 
	static clcSpoyler( elem ) { 
		const fooName = this.name + '.clcSpoyler()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem:', elem ); 

		let innerBody = elem.closest( '.each-people' ).querySelector( '.body' ).innerHTML;

		//console.log( 'innerBody: ', innerBody ); 

		let elemParent = elem.closest( '.each-people' );
		let uid = elemParent.dataset.id;

		//console.log( 'uid: ', uid ); 


		if ( !innerBody ) 
			elem.closest( '.each-people' ).querySelector( '.body' ).innerHTML = this.getPeopleHTML( uid );

		else 
			elem.closest( '.each-people' ).querySelector( '.body' ).classList.toggle( 'unvisible' );
	} 
 
 






 	static getHtmlFilter( elem ) { 
		const fooName = this.name + '.clcSpoyler()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem:', elem ); 

		let html = ''; 






		return html; 
	}
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
