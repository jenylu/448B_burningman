
// $('.outer').click(function(){
//     // $(this).css('opacity', function(i,o){
//     //     return parseFloat(o).toFixed(1) === '0.6' ? 1 : 0.6;
//     // });
// });
var datatypes = ["bm", "event", "art", "camp", "twitter"];
var techniques = ["wordcount", "theme", "entity", "query", "category"];
var default_technique = "wordcount";
var years = ["2009", "2010", "2011", "2012", "2013", "2014", "2015"];

// $(".outer").on("click", function() {
//     $(this).toggleClass("selectedCol");
// }); 

d3.json("datasets/bm.json", function(error, data) {

    if (error) {
        return console.warn(error);
    }

    for (j = 0; j < years.length; j ++) {
    	console.log(j);
    	year = years[j];
    	data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == default_technique; })

	    for (i = 0; i < data2.length; i ++) {
	        object = data2[i];
	        word = object['Word'];
	     
	        var div = document.getElementById('bm_' + year);
	        //console.log(div.innerHTML);

	        $('#bm_' + year).append('<span class=' + word +'>'+word+" "+'</span>');
	        //div.innerHTML = div.innerHTML + word + "\n";
	    }
    }

});

d3.json("datasets/event.json", function(error, data) {

    if (error) {
        return console.warn(error);
    }

    for (j = 0; j < years.length; j ++) {
    	console.log(j);
    	year = years[j];
    	data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == default_technique; })

	    for (i = 0; i < data2.length; i ++) {
	        object = data2[i];
	        word = object['Word'];
	     
	        var div = document.getElementById('event_' + year);
	        //console.log(div.innerHTML);

	        $('#event_' + year).append('<span class=' + word +'>'+word+" "+'</span>');
	        //div.innerHTML = div.innerHTML + word + "\n";
	    }
    }

});

d3.json("datasets/art.json", function(error, data) {

    if (error) {
        return console.warn(error);
    }

    for (j = 0; j < years.length; j ++) {
    	console.log(j);
    	year = years[j];
    	data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == default_technique; })

	    for (i = 0; i < data2.length; i ++) {
	        object = data2[i];
	        word = object['Word'];
	     
	        var div = document.getElementById('art_' + year);
	        //console.log(div.innerHTML);

	        $('#art_' + year).append('<span class=' + word +'>'+word+" "+'</span>');
	        //div.innerHTML = div.innerHTML + word + "\n";
	    }
    }

});

d3.json("datasets/camp.json", function(error, data) {

    if (error) {
        return console.warn(error);
    }

    for (j = 0; j < years.length; j ++) {
    	console.log(j);
    	year = years[j];
    	data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == default_technique; })

	    for (i = 0; i < data2.length; i ++) {
	        object = data2[i];
	        word = object['Word'];
	     
	        var div = document.getElementById('camp_' + year);
	        //console.log(div.innerHTML);

	        $('#camp_' + year).append('<span class=' + word +'>'+word+" "+'</span>');
	        //div.innerHTML = div.innerHTML + word + "\n";
	    }
    }

});

d3.json("datasets/twitter.json", function(error, data) {

    if (error) {
        return console.warn(error);
    }

    for (j = 0; j < years.length; j ++) {
    	console.log(j);
    	year = years[j];
    	data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == default_technique; })

	    for (i = 0; i < data2.length; i ++) {
	        object = data2[i];
	        word = object['Word'];
	     
	        var div = document.getElementById('twitter_' + year);
	        //console.log(div.innerHTML);

	        $('#twitter_' + year).append('<span class=' + word +'>'+word+" "+'</span>');
	        //div.innerHTML = div.innerHTML + word + "\n";
	    }
    }

});


$(".itemHeader").on("click", function() {
    $(this).parent().toggleClass("selectedCol");
}); 

$(".legend").on("click", function() {
    $(this).toggleClass("selected");
}); 
