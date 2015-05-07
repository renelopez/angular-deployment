'use strict';

describe('Arena',function(){

   beforeEach(function(){
       module('packt')
   });

    describe('Matchup generation',function(){
        it('should generate a matchup with an opponent and a terrain',inject(function(Arena){
            var matchup=Arena.generateMatchup();
            should.exist(matchup.opponent);
            should.exist(matchup.terrain);
        }));
    })


    describe('Scoring',function(){

        beforeEach(inject(function(Animals,Terrains){
            this.rhino=Animals.find('rhino');
            this.alligator=Animals.find('alligator');
            this.swamp=Animals.find('swamp');
        }));

       it('should calculate the combat score for an animal',inject(function(){

       }));


        it('should calculate the terrain influence of a terrain and a animal',inject(function(){

        }));

        it('should calculate the final score for an animal based on its stats and the terrain',inject(function(){

        }));



    });

});