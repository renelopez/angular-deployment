'use strict';

angular.module('packt')
    .service('Animals',function(ANIMALS_COLLECTION){

        var Animals=this;

        Animals.findAll=function(){
            return ANIMALS_COLLECTION;
        };

        Animals.find=function(animalId){
            var i,animalslength=ANIMALS_COLLECTION.length,animal;

          for(i=0;i<animalslength;i++){
              animal=ANIMALS_COLLECTION[i];
              if(animal.id===animalId){
                  return animal;
              }
          }
            return undefined;
        }
    });
