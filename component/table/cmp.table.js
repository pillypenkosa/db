// © 2024 DJS 
 
 
 
 
 
class ComponentTable { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData:', objData ); 






 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 		let lengthArrKeys = objData.keys.length;
		//alert( 'lengthArrKeys: ' + lengthArrKeys );



		let htmlTBody = '';
		objData.arr.forEach( k => {

			let htmlTr = '';
			objData.keys.forEach( k1 => {

				//let htmlTitleUa = '';
				//let htmlTitleEn = '';


				if ( k1 == 'title' ) {

					let htmlTitle = ( typeof k.title == 'string' ) ? k.title : this.getTitle( k.title );


					htmlTr += `<td>${ htmlTitle }</td>`;

				} else 
					htmlTr += `<td>${ k[ k1 ] }</td>`;


				//console.log( k1 );




			});

			htmlTBody += `<tr>${ htmlTr }</tr>`;
		});

		htmlTBody = `<tbody>${ htmlTBody }</tbody>`;





		let htmlTHead = '';
		objData.keys.forEach( k => {
			htmlTHead += `<td>${ k }</td>`;
		});

		htmlTHead = `<thead><tr>${ htmlTHead }</tr></thead>`;
		


		let html = `<table>
			${ htmlTHead }
			${ htmlTBody }
		</table>`; 



 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 

	static getTitle( obj ) { 
		const fooName = this.name + '.getTitle()'; 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 

		let html = '';


		

 
		for ( let k in obj ) 
			html += `<span class="key">${ k }:</span> ${ obj[ k ] }, `;

		return html.slice( 0, -2 ); 
	} 
 
 
 












 
 
} 
 
 
 	
 
 
 
 
 	
 
 
