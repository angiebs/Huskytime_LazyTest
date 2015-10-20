define(['angular','search/module'],function(angular, SearchModule){
  'use strict';

  var houses = 'flat,duplex,penthouse,chalet,country-home',
  conditions = 'indifferent,needs-renovating,good-condition',
  taxonomies = 'lift,garage,swimming-pool,terrace,exterior,repossessed,new-development,storeroom,air-condition,fitted-wardrobes,photos,video,tour';
  // Rooms 0 to 4+
  // Badrooms de 1,2,3+
  // Size Serie 0 40, 60, 80, 100, 120, 140, 180, 200, 400, 600, 700, 800,900 infinito

  SearchModule.factory('IdealistaFactory',[
    function(){
      return {
        getTypeOfHouses : function(){
          return houses.split(',');
        },
        getHouseConditions : function(){
          return conditions.split(',');
        },
        getHouseTaxonomies : function(){
          return taxonomies.split(',');
        }
      };
    }
  ]);

  return SearchModule;
});
