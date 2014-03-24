app.directive('d3chart', function (jsondata) {
    return {
      restrict: 'E',      
      link: function (scope, elem, attrs) {        
          var width = 560,
            height = 600,
            radius = Math.min(width, height) / 2;

          var svg = d3.select(elem[0])
              .append("svg")
              .attr("width", width)
              .attr("height", height)
              .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

          scope.$watchCollection("jsonObjs", function() {
              var dataArr = [];
              for(row in scope.jsonObjs){
                  dataArr.push(scope.jsonObjs[row].d3);
                  dataArr.push(scope.jsonObjs[row].angular);
              }              
              scope.rerender(dataArr);
          });

          

          scope.rerender = function(dataArr){ 
            svg.selectAll("*").remove();           
            var color = d3.scale.category20();

            var pie = d3.layout.pie()
                .sort(null);

            var arc = d3.svg.arc()
                .innerRadius(radius - 100)
                .outerRadius(radius - 50);

            var tooltip = d3.select(elem[0]).append("div")
            .attr("class", "tooltip");

            var path = svg.selectAll("path")
                .data(pie(dataArr))
                .enter().append("path")
                .attr("fill", function(d, i) { return color(i); })
                .attr("d", arc)
                .on("mousemove", function(d,i) {
                var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );
                var textKey = 'Angular.js';
                if(i % 2 == 0){
                  textKey = 'D3.js';
                }
                tooltip.classed("hidden", false)
                  .attr("style", "left:"+(mouse[0]+225)+"px;top:"+(mouse[1]+255)+"px")
                  .html(textKey+ ' :  ' +d.data)
                })
              .on("mouseout",  function(d,i) {
                tooltip.classed("hidden", true)
              })
          }  
      }
    }    
});    