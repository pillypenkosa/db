// © 2024 DJS 
 
 
 
 
 
class ComponentWinCountry { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
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
		let htmlSpoilersList = '';
 
 
 
		setMeta({ 
			title 			: 'Країни', 
			description 	: 'Опис... Країни', 
			//image 		: '', 
		}); 
 
 

		let arrSelected = arrCountry;


		if ( objData.part ) {

			//console.log( objData.genre );
			arrSelected = arrSelected.filter( k => {

				if ( k.geo && k.geo.part && k.geo.part == objData.part )
					return true;
			});
		}





/*
		if ( objData.symbol ) {

			//console.log( objData.genre );
			arrSelected = arrSelected.filter( k => {

				if ( k.symbol && k.symbol[ objData.symbol ] )
					return true;
			});
		}
*/

		if ( objData.symbol ) {



			let htmlGalleryCoa = '';

			if ( objData.symbol == 'coa' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.coa )
						htmlGalleryCoa += `<img src="img/pic/country/${ k.id }_coatarms.png" alt="Герб" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-coa">${ htmlGalleryCoa }</div>`;
			}

			if ( objData.symbol == 'coa_wreath' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.coa && k.symbol.coa.wreath )
						htmlGalleryCoa += `<img src="img/pic/country/${ k.id }_coatarms.png" alt="Герб" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-coa">${ htmlGalleryCoa }</div>`;
			}

			if ( objData.symbol == 'coa_bird' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.coa && k.symbol.coa.bird )
						htmlGalleryCoa += `<img src="img/pic/country/${ k.id }_coatarms.png" alt="Герб" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-coa">${ htmlGalleryCoa }</div>`;
			}

			if ( objData.symbol == 'coa_side2' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.coa && k.symbol.coa.side2 )
						htmlGalleryCoa += `<img src="img/pic/country/${ k.id }_coatarms.png" alt="Герб" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-coa">${ htmlGalleryCoa }</div>`;
			}

			if ( objData.symbol == 'coa_shield' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.coa && k.symbol.coa.shield )
						htmlGalleryCoa += `<img src="img/pic/country/${ k.id }_coatarms.png" alt="Герб" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-coa">${ htmlGalleryCoa }</div>`;
			}

			if ( objData.symbol == 'coa_star' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.coa && k.symbol.coa.star )
						htmlGalleryCoa += `<img src="img/pic/country/${ k.id }_coatarms.png" alt="Герб" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-coa">${ htmlGalleryCoa }</div>`;
			}

			if ( objData.symbol == 'coa_circle' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.coa && k.symbol.coa.circle )
						htmlGalleryCoa += `<img src="img/pic/country/${ k.id }_coatarms.png" alt="Герб" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-coa">${ htmlGalleryCoa }</div>`;
			}

			if ( objData.symbol == 'coa_crown_shield' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.coa && k.symbol.coa.crown_shield )
						htmlGalleryCoa += `<img src="img/pic/country/${ k.id }_coatarms.png" alt="Герб" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-coa">${ htmlGalleryCoa }</div>`;
			}



















			let htmlGalleryFlag = '';

			if ( objData.symbol == 'flag' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.flag )
						htmlGalleryFlag += `<img src="img/pic/country/${ k.id }_flag.png" alt="Флаг" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-flag">${ htmlGalleryFlag }</div>`;
			}

			if ( objData.symbol == 'flag_1x1' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.flag && k.symbol.flag._1x1 )
						htmlGalleryFlag += `<img src="img/pic/country/${ k.id }_flag.png" alt="Флаг" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-flag">${ htmlGalleryFlag }</div>`;
			}

			if ( objData.symbol == 'flag_1x2' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.flag && k.symbol.flag._1x2 )
						htmlGalleryFlag += `<img src="img/pic/country/${ k.id }_flag.png" alt="Флаг" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-flag">${ htmlGalleryFlag }</div>`;
			}

			if ( objData.symbol == 'flag_2x3' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.flag && k.symbol.flag._2x3 )
						htmlGalleryFlag += `<img src="img/pic/country/${ k.id }_flag.png" alt="Флаг" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-flag">${ htmlGalleryFlag }</div>`;
			}

			if ( objData.symbol == 'flag_3x5' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.flag && k.symbol.flag._3x5 )
						htmlGalleryFlag += `<img src="img/pic/country/${ k.id }_flag.png" alt="Флаг" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-flag">${ htmlGalleryFlag }</div>`;
			}

			if ( objData.symbol == 'flag_5x8' ) {

				arrSelected.forEach( k => {

					if ( k.symbol && k.symbol.flag && k.symbol.flag._5x8 )
						htmlGalleryFlag += `<img src="img/pic/country/${ k.id }_flag.png" alt="Флаг" title="${ k.title.ua }">`;
				});

				html += `<div class="gallery-flag">${ htmlGalleryFlag }</div>`;
			}






		} else {

			arrSelected.forEach( k => {
				htmlSpoilersList += `${ 
					Component( 'Spoyler', { 
						id 		: k.id, 
						title 	: `${ k.title ? ( k.title.ua ? k.title.ua : '' ) : '' }`, 
						cmp 	: 'Spoyler-Body-Country', // для вставки в body спойлера
					})}`;
			});



			if ( htmlSpoilersList )
				html = `<div class="spoilers-list" data-body-cmp-name="Spoyler-Body-Country">${ htmlSpoilersList }</div>`;




		}





		return { tagParam, html };  
	} 
 
 
 




 
	static getHtmlFilter( data ) { 
		const fooName = this.name + '.getHtmlFilter()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 



		const arrFilter = [

			{ win: 'countries' 	, cat: 'select' 	, key: 'part' 		, clc: '' 	, arr: [] 			, },
			{ win: 'countries' 	, cat: 'select' 	, key: 'symbol' 	, clc: '' 	, arr: [] 			, },


		];


		return Component( 'Filter', arrFilter );
	} 
 
 







 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
