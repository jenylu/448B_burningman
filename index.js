
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

var selectedTechnique = "";

showWordCount("wordcount");

function showWordCount(technique) {

	d3.json("datasets/bm.json", function(error, data) {

	    if (error) {
	        return console.warn(error);
	    }

	    for (j = 0; j < years.length; j ++) {
	    	//console.log(j);
	    	year = years[j];
	    	var div = document.getElementById('bm_' + year);
	    	while (div.firstChild) {
			    div.removeChild(div.firstChild);
			}
	    	data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == technique; })

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];
		        count = object['Count'];
		        sentiment_scale = object['Sentiment Scale'];
		        //console.log(word, count, sentiment_scale);

		        var lastchar = word.toString().substring(word.length - 1);
				if (lastchar == "." || lastchar == ",") {
					word = word.toString().substring(0, word.length - 1);
				}

	        	var div = document.getElementById('bm_' + year);
		        //console.log(div.innerHTML);

		        $('#bm_' + year).append('<span onclick="showThisWord(this.innerHTML)" class="word ' + word +'">['+word+"] "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";
		    }
	    }

	});

	d3.json("datasets/event.json", function(error, data) {

	    if (error) {
	        return console.warn(error);
	    }

	    for (j = 0; j < years.length; j ++) {
	    	//console.log(j);
	    	year = years[j];
	    	var div = document.getElementById('event_' + year);
	    	while (div.firstChild) {
			    div.removeChild(div.firstChild);
			}
	    	data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == technique; })

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];

		        var lastchar = word.toString().substring(word.length - 1);
				if (lastchar == "." || lastchar == ",") {
					word = word.toString().substring(0, word.length - 1);
				}
		     
		        var div = document.getElementById('event_' + year);
		        //console.log(div.innerHTML);

		        $('#event_' + year).append('<span onclick="showThisWord(this.innerHTML)" class="word ' + word +'">['+word+"] "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";
		    }
	    }

	});

	d3.json("datasets/art.json", function(error, data) {

	    if (error) {
	        return console.warn(error);
	    }

	    for (j = 0; j < years.length; j ++) {
	    	//console.log(j);
	    	year = years[j];
	    	var div = document.getElementById('art_' + year);
	    	while (div.firstChild) {
			    div.removeChild(div.firstChild);
			}
	    	data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == technique; })

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];

		        var lastchar = word.toString().substring(word.length - 1);
				if (lastchar == "." || lastchar == ",") {
					word = word.toString().substring(0, word.length - 1);
				}
		     
		        var div = document.getElementById('art_' + year);
		        //console.log(div.innerHTML);

		        $('#art_' + year).append('<span onclick="showThisWord(this.innerHTML)" class="word ' + word +'">['+word+"] "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";
		    }
	    }

	});

	d3.json("datasets/camp.json", function(error, data) {

	    if (error) {
	        return console.warn(error);
	    }

	    for (j = 0; j < years.length; j ++) {
	    	//console.log(j);
	    	year = years[j];
	    	var div = document.getElementById('camp_' + year);
	    	while (div.firstChild) {
			    div.removeChild(div.firstChild);
			}
	    	data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == technique; })

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];

		        var lastchar = word.toString().substring(word.length - 1);
				if (lastchar == "." || lastchar == ",") {
					word = word.toString().substring(0, word.length - 1);
				}
		     
		        var div = document.getElementById('camp_' + year);
		        //console.log(div.innerHTML);

		        $('#camp_' + year).append('<span onclick="showThisWord(this.innerHTML)" class="word ' + word +'">['+word+"] "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";
		    }
	    }

	});

	d3.json("datasets/twitter.json", function(error, data) {

	    if (error) {
	        return console.warn(error);
	    }

	    for (j = 0; j < years.length; j ++) {
	    	//console.log(j);
	    	year = years[j];
	    	var div = document.getElementById('twitter_' + year);
	    	while (div.firstChild) {
			    div.removeChild(div.firstChild);
			}
	    	data2 = data.filter(function(d) { return d.Year == year && d['NLP Technique'] == technique; })

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];

		        var lastchar = word.toString().substring(word.length - 1);
				if (lastchar == "." || lastchar == ",") {
					word = word.toString().substring(0, word.length - 1);
				}
		     
		        var div = document.getElementById('twitter_' + year);
		        //console.log(div.innerHTML);

		        $('#twitter_' + year).append('<span onclick="showThisWord(this.innerHTML)" class="word ' + word +'">['+word+"] "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";
		    }
	    }

	});

}


$(".itemHeader").on("click", function() {
    //$(this).parent().toggleClass("selectedCol");
    selected_title = this.innerHTML.toLowerCase();

	if ($(this).hasClass("selectedCol")) {
		$(".item." + selected_title).css('color', '#D3D3D3');
	} else {
		$(".item." + selected_title).css('color', 'black');
	}

    $(this).toggleClass("selectedCol");

    //see if there are multiple sets selected; find intersection

    updateIntersection();
}); 

function updateIntersection() {
	var selected_categories = document.getElementsByClassName("selectedCol");
    console.log(selected_categories);

    if (selected_categories.length > 1) {
    	console.log("Entered");

    	var categories = []

    	for (i = 0; i < selected_categories.length; i ++) {
    		categories.push(selected_categories[i].innerHTML.toLowerCase());
    	}

    	console.log(categories);
    }
}

$(".legend.tech").on("click", function() {

	$(".legend.tech.selected").toggleClass("selected");

	console.log(this.innerHTML);
	if (this.innerHTML == "Theme") {
		selectedTechnique = "theme";
	} else if (this.innerHTML == "Word Count") {
		selectedTechnique = "wordcount";
	} else if (this.innerHTML == "Entities") {
		selectedTechnique = "entity";
	} else if (this.innerHTML == "Queries") {
		selectedTechnique = "query";
	} else if (this.innerHTML == "Category") {
		selectedTechnique = "category";
	}

    $(this).toggleClass("selected");

    if (selectedTechnique != "") {
    	showWordCount(selectedTechnique);
    }
});

$(".legend.year").on("click", function() {

	selected_year = this.innerHTML;

	$(this).toggleClass("selected");

	if ($(this).hasClass("selected")) {
		$(".container." + selected_year).show();
	} else {
		$(".container." + selected_year).hide();
	}
});

// $("#theme").on("click", function() {
// 	selectedTechnique = "theme";
// 	console.log(selectedTechnique);
//     showWordCount(selectedTechnique);
// }); 

function showThisWord(word) {
	word = word.toString().substring(1, word.length - 2);

	var selected_categories = document.getElementsByClassName("selectedCol");
    console.log(selected_categories);

    for (i = 0; i < selected_categories.length; i ++) {
    	cur_category = selected_categories[i].innerHTML.toLowerCase();
    	console.log(cur_category);
    	$(".item." + cur_category).css('color', '#D3D3D3');
    	$('.' + cur_category + ' > .word').css('color', '#D3D3D3');
    	$('.' + cur_category + ' > .word.' + word).css('color', 'black');
    }


}

