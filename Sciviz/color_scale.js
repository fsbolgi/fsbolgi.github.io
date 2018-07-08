function time_color_scales () {
    var past_scale = d3.scale.linear().domain([1,30])
        .interpolate(d3.interpolateHcl) // interpolate red color scale
        .range([d3.rgb("#f3b748"), d3.rgb('#f3b748')]);
    var present_scale = d3.scale.linear().domain([1,35])
        .interpolate(d3.interpolateHcl) // interpolate green color scale
        .range([d3.rgb("#62cc9a"), d3.rgb('#62cc9a')]);
    var future_scale = d3.scale.linear().domain([1,48])
        .interpolate(d3.interpolateHcl) // interpolate blue color scale
        .range([d3.rgb("#388393"), d3.rgb('#388393')]);

    var color_scale = new Array(114); // insert interpolated color in array
    for (i = 0; i<31; i++){
        color_scale[i] = past_scale(i);
    }
    for (i = 0; i<36; i++){
        color_scale[i+30] = present_scale(i);
    }
    for (i = 0; i<49; i++){
        color_scale[i+66] = future_scale(i);
    }
    return color_scale;
}