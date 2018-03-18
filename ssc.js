var app = angular.module("mainModule", []);
 
   app.controller('simpleCtrl', simpleController);
   
   function simpleController($rootScope) {
      $rootScope.elementy = [
         {
            kwb: "",
            vat: [
					0,
					5,
					7,
					8,
					22,
					23
			],
            kwn: "",
            Vvat: null
         },
		 
      ];
	  

	$rootScope.skwn = 0;
   
   $rootScope.test = [{
	   mzk: [1,4,7],
	   gkm: 4}];
   
   $rootScope.addEntry = function() {
	
		$rootScope.elementy.push({kwb: "",vat: [0,5,7,8,22,23],kwn: ""})
   }
   
   $rootScope.testujemy = function(numer) {

	//$rootScope.skwn = $rootScope.skwn + numer;

	  
   }
   
   
   }