'use strict';

angular.module('packt')
    .controller('ArenaCtrl',function(Animals,Arena,$timeout){

        var vm=this;

        vm.allAnimals=Animals.findAll();

        vm.selectAnimal=function(animal){
          vm.playerAnimal=animal;
        };

        vm.isSelectedAnimal=function(animal){
            if(vm.playerAnimal){
                return vm.playerAnimal.id===animal.id;
            }
        };

        vm.fightMatch=function(){
            vm.matchWinner=Arena.determineWinner(vm.playerAnimal,vm.matchup.opponent,vm.matchup.terrain)
        };

        vm.resetMatch=function(){
            vm.matchup=undefined;
            vm.matchWinner=undefined;
            generateMatchup();
        };

        function generateMatchup(){
            $timeout(function(){
                vm.matchup=Arena.generateMatchup()
            },2000)
        }

        generateMatchup();





});