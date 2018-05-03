var age = [20, 40, 60, 80, 100, 120];
var nPeopleA = [8, 18, 30, 23, 12, 5, 2];
var nPeopleB = [6, 17, 22, 32, 14, 8, 5];
var width = 600;
var height = 550;

///////// TODO read data from csv

/*d3.csv("../sample.csv", function(data) {
    var d = data[0];
    console.log(d.object());
});*/

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

var xScale = d3.scale.linear()
    .domain([0, getMaxOfArray(nPeopleB)])
    .range([0, width/2-30])

d3.select(".histoA_svg")
    .selectAll("rect")
    .data(nPeopleA)
        .enter()
            .append("rect")
            .attr("width", function(d) { return xScale(d); })
            .attr("height", (height-50)/nPeopleA.length)
            .attr("x", function(d){ return (width/2-(xScale(d)+20)); })
            .attr("y", function(d, i) { return i * (height)/nPeopleA.length; })
            .style("stroke", "black")
            .style("opacity", .5)
        .on('mouseover', function(d){
            d3.select(this).style("opacity", .9);
        })
        .on('mouseout', function(d){
            d3.select(this).style("opacity", .5);
        });

d3.select(".histoB_svg") // where we want to create the histogram
    .selectAll("rect") // select all rectangles (even if not present)
    .data(nPeopleB) // you pass the array, everything later will be executed for each element
        .enter() // what do do if rect is missing
            .append("rect") // insert new rectangle
            .attr("width", function(d) { return xScale(d); }) //width of the rect
            .attr("height", (height-50)/nPeopleB.length) //height of the rect
            .attr("x", 20) // position on x coord
            .attr("y", function(d, i) { return i * (height)/nPeopleB.length; }) // position on y coord
                        // this function takes as first input the data element and as second the index
            .style("stroke", "black")
            .style("opacity", .5)
        .on('mouseover', function(d){
            d3.select(this).style("opacity", .9);
        })
        .on('mouseout', function(d){
            d3.select(this).style("opacity", .5);
        });
