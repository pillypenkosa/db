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
			//'data-key' 		: objData.key, 
			'data-id' 		: objData.id, 
			//'onclick' 		: `${ this.name }.clc( this )`,
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
		let htmlTitle = '';
		//let htmlThroughput = '';

		if ( objData ) {
			if ( objData.title ) 
				htmlTitle = objData.title;
		}

 
		let html = `
			<div class="title" data-cmp="${ objData.cmp }" onclick="${ this.name }.clc( this )">
				<div class="txt">${ htmlTitle }</div>
				<div class="pm" title="Розгорнути / згорнути">${ this.pmClose }</div>
			</div>
			<div class="body"></div>
		`; 

		return { tagParam, html };  
	} 














	static clc( elem ) { 
		const fooName = this.name + '.clc()'; 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem );

		let elemParent 		= elem.closest( 'cmp-spoyler' );
		let id 				= elemParent.dataset.id;


		let cmpName 		= elem.dataset.cmp;

		//console.log( 'insert: ', insert );
		//console.log( 'id: ', id );

		let elemBody 		= document.querySelector( `cmp-spoyler[ data-id="${ id }" ] .body` );

		//console.log( 'elemBody: ', elemBody );

		if ( !elemBody.innerHTML ) 
			elemBody.innerHTML = Component( cmpName, id ); 
			//elemBody.innerHTML = eval( `${ cmpName }.insertHtmlBody( '${ id }' )`  ); // insertHtmlBody() - має бути прописаним у компоненті, назва якого залітає сюди
		
			//elemBody.innerHTML = this.getHtml( id );
		else 
			elemBody.classList.toggle( 'unvisible' );


		let htmlPM = '';
		if ( elemBody.classList.contains( 'unvisible' ) ) 
			htmlPM = this.pmClose;
		else 
			htmlPM = this.pmOpen;

		elem.querySelector( '.title .pm' ).innerHTML = htmlPM;
	} 
 
 





















	static getHtml( data = {} ) {
		const fooName = this.name + '.getHtml()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 

		let obj = {};

		//console.log( 'objListPcVga: ', objListPcVga ); 

		let html = '';

		if ( objListPcVga ) {
			if ( objListPcVga[ data ] ) {


				obj = objListPcVga[ data ];


				//console.log( 'obj: ', obj ); 

				let htmlSites = '';
				if ( obj.site ) {

					if ( obj.site.elmir ) 
						htmlSites += `<a href="${ obj.site.elmir }" title="ElMir" target="_blank"><img src="img/pic/favicon_elmir.png" alt=""></a>`;
					
					if ( obj.site.rozetka ) 
						htmlSites += `<a href="${ obj.site.rozetka }" title="Rozetka" target="_blank"><img src="img/pic/favicon_rozetka.png" alt=""></a>`;
					
					if ( obj.site.pcshop ) 
						htmlSites += `<a href="${ obj.site.pcshop }" title="PC Shop" target="_blank"><img src="img/pic/favicon_pcshop.png" alt=""></a>`;
					
					if ( obj.site.stylus ) 
						htmlSites += `<a href="${ obj.site.stylus }" title="Stylus" target="_blank"><img src="img/pic/favicon_stylus.png" alt=""></a>`;
					
					if ( obj.site.telemart ) 
						htmlSites += `<a href="${ obj.site.telemart }" title="TeleMart" target="_blank"><img src="img/pic/favicon_telemart.png" alt=""></a>`;
					
					if ( obj.site.compx ) 
						htmlSites += `<a href="${ obj.site.compx }" title="CompX" target="_blank"><img src="img/pic/favicon_compx.png" alt=""></a>`;
					
					if ( obj.site.click ) 
						htmlSites += `<a href="${ obj.site.click }" title="Click" target="_blank"><img src="img/pic/favicon_click.png" alt=""></a>`;
					
					if ( obj.site.teraflops ) 
						htmlSites += `<a href="${ obj.site.teraflops }" title="TeraFlops" target="_blank"><img src="img/pic/favicon_teraflops.png" alt=""></a>`;					

					if ( obj.site.v_comp ) 
						htmlSites += `<a href="${ obj.site.v_comp }" title="V-Comp" target="_blank"><img src="img/pic/favicon_v_comp.png" alt=""></a>`;
					


					if ( htmlSites )
						htmlSites = `<div class="sites">${ htmlSites }</div>`;
				}



				let htmlThroughput = '';
				if ( obj.bit && obj.rate ) {

					htmlThroughput = `<div class="throughput">
						<span class="txt-key">продуктивність:</span>
						<span class="txt-val">${ this.getThroughput( obj.bit, obj.rate ) }</span>
						<span class="txt-unit">GB/s</span>
					</div>`;
				}

				let htmlBit = '';
				if ( obj.bit ) {

					htmlBit = `<div class="bit">
						<span class="txt-key">шина:</span>
						${ obj.bit }
						<span class="txt-unit">bit</span>
					</div>`;
				}

				let htmlRate = '';
				if ( obj.rate ) {

					htmlRate = `<div class="rate">
						<span class="txt-key">частота:</span>
						${ obj.rate }
						<span class="txt-unit">MHz</span>
					</div>`;
				}

				let htmlRam = '';
				if ( obj.ram ) {

					htmlRam = `<div class="ram">
						<span class="txt-key">об'єм:</span>
						${ obj.ram }
						<span class="txt-unit">GB</span>
					</div>`;
				}

				let htmlType = '';
				if ( obj.type ) {

					htmlType = `<div class="type">
						<span class="txt-key">тип:</span>
						${ obj.type }
					</div>`;
				}

				let htmlResolution = '';
				if ( obj.resolution ) {

					htmlResolution = `<div class="resolution">
						<span class="txt-key">екран:</span>
						${ obj.resolution }
					</div>`;
				}





				html = `<div class="inner">
					<div class="txt-chip">${ obj.chip }</div>
					<div class="txt-title">${ obj.title }</div>

					${ htmlThroughput }
					${ htmlBit }
					${ htmlRate }
					${ htmlRam }
					${ htmlType }
					${ htmlResolution }
					${ htmlSites }

				</div>`;


			}
		}



		return html;
	}



 
	static getThroughput( bit, rate ) { 	// bit - в бітах, rate - в мегагерцах

		return ( bit * rate ) / 8000;
	}







	static linkTo( data = {} ) {
		const fooName = this.name + '.linkTo()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 







	}






 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
