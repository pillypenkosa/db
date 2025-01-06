




const dependences = [



	// масиви-списки з інших сайтів ( сторонні ) ----------------------------------------------------------------------------------
	
		// https://pillypenkosa.github.io/   ${ k.site }   /list/list.   ${ k.db }   .js
	
	//{ db: 'people' 		, site: 'media' 	, },  
	//{ db: 'films' 		, site: 'movies' 	, },  





	// масиви-списки з ЦЬОГО проекту ( свої ) -------------------------------------------------------------------------------------




	{ arr: 'manufacturer'		, },  
	{ arr: 'city'				, },  
	{ arr: 'country'			, },  
	{ arr: 'people'				, },  
	{ arr: 'movies'				, },  
	{ arr: 'movies.hash'		, },  




	// сервіси ---------------------------------------------------------------------------------------------------------------------

	//{ service: 'prepare' 			, },
	



	// компоненти загальні --------------------------------------------------------------------------------------------------------

	//{ cmp: 'Filter-People' 					, },




	{ cmp: 'Filter' 						, },

	{ cmp: 'Gallery-Movies' 				, },
	{ cmp: 'Gallery-People' 				, },
	{ cmp: 'Table-Key-Val' 					, },
	{ cmp: 'Spoyler' 						, },
	{ cmp: 'Menu' 							, },
	
	{ cmp: 'Spoyler-Body-Country' 			, },
	{ cmp: 'Spoyler-Body-Manufacturer' 		, },
	{ cmp: 'Spoyler-Body-People' 			, },
	{ cmp: 'Spoyler-Body-Movie' 			, },







	{ cmp: 'Logo' 				, },
	{ cmp: 'Footer' 			, },
	{ cmp: 'Header' 			, },
	{ cmp: 'Win-Err404' 		, },







	//{ cmp: 'Franchise' 			, },







	// компоненти-контенти // win-сторiнки ----------------------------------------------------------------------------------------
	
	{ cmp: 'Win-Index' 				, win: /^index$/ 				, }, 	// regexp - url-маршрут (route) в адресному рядку
	{ cmp: 'Win-Country' 			, win: /^countries$/ 			, }, 	
	{ cmp: 'Win-Manufacturers' 		, win: /^manufacturers$/ 		, }, 	
	{ cmp: 'Win-Movies' 			, win: /^movies$/ 				, }, 	
	{ cmp: 'Win-People' 			, win: /^people$/ 				, }, 	
	

	//{ cmp: 'Win-Uid' 					, win: /^user\/[0-9A-Za-z]+$/ 		, }, 	// user/{ txt }







];




















