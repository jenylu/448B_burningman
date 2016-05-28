// $('.outer').click(function(){
//     // $(this).css('opacity', function(i,o){
//     //     return parseFloat(o).toFixed(1) === '0.6' ? 1 : 0.6;
//     // });
// });
var datatypes = ["bm", "event", "art", "camp", "twitter"];
var techniques = ["wordcount", "theme", "entity", "query", "category"];
var default_technique = "wordcount";
var years = ["2009", "2010", "2011", "2012", "2013", "2014", "2015"];

$(".outer").on("click", function() {
    $(this).toggleClass("selectedCol");
}); 

for (z = 0; z < 1; z ++) {

	datatype = datatypes[z];

	//console.log(datatype);

	d3.json("datasets/" + datatype +".json", function(error, data) {

	    if (error) {
	        return console.warn(error);
	    }
	    //console.log(data);

	    for (j = 0; j < years.length; j ++) {
	    	year = years[j];
	    	var data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == default_technique; })

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];
		        //console.log(word);
		        //var div = document.getElementsByClassName('art 2015');
		     
		        var div = document.getElementById(datatype +'_' + year);
		        //console.log(div.innerHTML);

		        $('#' + datatype + '_' + year).append('<span class=' + word +'>'+word+" "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";
		    }
	    }

	 //break;

 	});
}
