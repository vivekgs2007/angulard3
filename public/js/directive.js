app.directive('d3chart', function (jsondata) {
  jsondata.getJsonData().then(function(response){   
    return {
      restrict: 'EA',
      scope: {
          dataArr: "="
        } ,
      link: function (scope, elem, attrs) {
        var rows = response.data;
        alert(elem);
        var dataArr = [];
        for(row in rows){
            dataArr.push(rows[row].d3);
        }
        /*var width = 460,
            height = 300,
            radius = Math.min(width, height) / 2;

        var color = d3.scale.category20();

        var pie = d3.layout.pie()
            .sort(null);

        var arc = d3.svg.arc()
            .innerRadius(radius - 100)
            .outerRadius(radius - 50);

        var svg = d3.select(elem[0]).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var path = svg.selectAll("path")
            .data(pie(dataArr))
          .enter().append("path")
            .attr("fill", function(d, i) { return color(i); })
            .attr("d", arc);*/

      }
    }
  });
    
});    