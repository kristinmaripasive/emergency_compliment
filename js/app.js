"use strict";

(function(){
  angular
    .module("compliments")
    .config(["$stateProvider", RouterFunction])

    function RouterFunction($stateProvider){
      $stateProvider
      .state ("complimentIndex", {
        url: "/compliments",
        templateUrl: "js/compliments/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      })

    }

})();
