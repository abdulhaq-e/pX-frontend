(function () {
    'use strict';

    angular
        .module('pX.main.controllers')
        .controller('PRController', PRController);

    PRController.$inject = ['getResultsService'];

    function PRController(getResultsService){

        var vm = this;
        //Results.getResults('022121867').then(
        //      function(data) {
        //console.log(ResultsService);

        vm.results = getResultsService;
        vm.periods = [];
        vm.periodGPA = [];
        vm.cumulativeGPA = [];
        //vm.courses = vm.data['Courses'];
        for (var i = 0; i < vm.results.length - 1; i++) { 
            vm.periods.push(vm.results[i].student_registration.period);
            vm.periodGPA.push(vm.results[i].GPA);
            vm.cumulativeGPA.push(vm.results[i].cumulative_GPA);
        }
        vm.barOptions = {
            scaleBeginAtZero : true,
            scaleShowGridLines : true,
            scaleGridLineColor : "rgba(0,0,0,.05)",
            scaleGridLineWidth : 1,
            barShowStroke : true,
            barStrokeWidth : 2,
            barValueSpacing : 5,
            barDatasetSpacing : 1
        };

        /**
         * Data for Bar chart
         */
        vm.barData = {
            labels: vm.periods,
            datasets: [
                {
                    label: "Period GPA",
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: vm.periodGPA
                },
                {
                    label: "Accumulative GPA",
                    fillColor: "rgba(26,179,148,0.5)",
                    strokeColor: "rgba(26,179,148,0.8)",
                    highlightFill: "rgba(26,179,148,0.75)",
                    highlightStroke: "rgba(26,179,148,1)",
                    data: vm.cumulativeGPA
                }
            ]
        };
    };
})();
