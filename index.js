
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

	    	function compare(a,b) {
			  if (a['Count'] < b['Count'])
			    return 1;
			  else if (a['Count'] > b['Count'])
			    return -1;
			  else 
			    return 0;
			}
			data2 = data2.sort(compare);

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];
		        word = word.toString();
		        count = object['Count'];
		        //console.log(count);
		        sentiment_scale = object['Sentiment Scale'];
		        //console.log(word, count, sentiment_scale);

		     	var new_word = "";

		        if (word.indexOf(' ') >= 0) {
		        	wordlist = word.split(" ");
		        	for (h = 0; h < wordlist.length; h ++) {
		        		if (new_word != "") {
		        			new_word = new_word.concat("-" + wordlist[h]);
		        		} else {
		        			new_word = new_word.concat(wordlist[h]);
		        		}
		        	}
		        } else {
		        	new_word = word;
		        }

		        if (new_word.indexOf('@') >= 0) {
			    	new_word = new_word.replace('@', '');
			    }
			    if (new_word.indexOf('#') >= 0) {
			    	new_word = new_word.replace('#', '');
			    }
			    new_word = new_word.replace(/[|&;$%@"<>()+,.:!’'?Ã¢â‚¬Å“Â]/g, "-");
			    new_word = new_word.replace("’", '-');
                new_word = new_word.replace(/\//g, 'ForwardSlash');

		        var lastchar = word.toString().substring(word.length - 1);
				if (lastchar == "." || lastchar == ",") {
					word = word.toString().substring(0, word.length - 1);
				}

	        	var div = document.getElementById('bm_' + year);
		        //console.log(div.innerHTML);

		        $('#bm_' + year).append('<span onclick="showThisWord(this.innerHTML, ' + sentiment_scale + ')" class="word ' + new_word + ' id=' + new_word + '">['+word+"] "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";

                makeSentimentStyle(technique, new_word, year, "theme", sentiment_scale);
                $('.' + year + ' > .theme > .' + new_word).addClass('sentimentColor' + new_word + year + 'theme' );
		    }
	    }

	    updateSelectedCol();

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

	    	function compare(a,b) {
			  if (a['Count'] < b['Count'])
			    return 1;
			  else if (a['Count'] > b['Count'])
			    return -1;
			  else 
			    return 0;
			}
			data2 = data2.sort(compare);

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];
		        word = word.toString();
                sentiment_scale = object['Sentiment Scale'];

		        var new_word = "";

		        if (word.indexOf(' ') >= 0) {
		        	wordlist = word.split(" ");
		        	for (h = 0; h < wordlist.length; h ++) {
		        		if (new_word != "") {
		        			new_word = new_word.concat("-" + wordlist[h]);
		        		} else {
		        			new_word = new_word.concat(wordlist[h]);
		        		}
		        	}
		        } else {
		        	new_word = word;
		        }

		        if (new_word.indexOf('@') >= 0) {
			    	new_word = new_word.replace('@', '');
			    }
			    if (new_word.indexOf('#') >= 0) {
			    	new_word = new_word.replace('#', '');
			    }
			    new_word = new_word.replace(/[|&;$%@"<>()+,.:!’'?Ã¢â‚¬Å“Â]/g, "-");
			    new_word = new_word.replace("’", '-');
                new_word = new_word.replace(/\//g, 'ForwardSlash');

		        var lastchar = word.toString().substring(word.length - 1);
				if (lastchar == "." || lastchar == ",") {
					word = word.toString().substring(0, word.length - 1);
				}
		     
		        var div = document.getElementById('event_' + year);
		        //console.log(div.innerHTML);

		        $('#event_' + year).append('<span onclick="showThisWord(this.innerHTML, ' + sentiment_scale + ')" class="word ' + new_word +'">['+word+"] "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";

                makeSentimentStyle(technique, new_word, year, "event", sentiment_scale);
                $('.' + year + ' > .event > .' + new_word).addClass('sentimentColor' + new_word + year + 'event' );

		    }
	    }
	    updateSelectedCol();

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

	    	function compare(a,b) {
			  if (a['Count'] < b['Count'])
			    return 1;
			  else if (a['Count'] > b['Count'])
			    return -1;
			  else 
			    return 0;
			}
			data2 = data2.sort(compare);

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];
		        word = word.toString();
                sentiment_scale = object['Sentiment Scale'];

		        var new_word = "";

		        if (word.indexOf(' ') >= 0) {
		        	wordlist = word.split(" ");
		        	for (h = 0; h < wordlist.length; h ++) {
		        		if (new_word != "") {
		        			new_word = new_word.concat("-" + wordlist[h]);
		        		} else {
		        			new_word = new_word.concat(wordlist[h]);
		        		}
		        	}
		        } else {
		        	new_word = word;
		        }

		        if (new_word.indexOf('@') >= 0) {
			    	new_word = new_word.replace('@', '');
			    }
			    if (new_word.indexOf('#') >= 0) {
			    	new_word = new_word.replace('#', '');
			    }
			    new_word = new_word.replace(/[|&;$%@"<>()+,.:!’'?Ã¢â‚¬Å“Â]/g, "-");
			    new_word = new_word.replace("’", '-');
                new_word = new_word.replace(/\//g, 'ForwardSlash');

		        var lastchar = word.toString().substring(word.length - 1);
				if (lastchar == "." || lastchar == ",") {
					word = word.toString().substring(0, word.length - 1);
				}
		     
		        var div = document.getElementById('art_' + year);
		        //console.log(div.innerHTML);

		        $('#art_' + year).append('<span onclick="showThisWord(this.innerHTML, ' + sentiment_scale + ')" class="word ' + new_word +'">['+word+"] "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";

                makeSentimentStyle(technique, new_word, year, "art", sentiment_scale);
                $('.' + year + ' > .art > .' + new_word).addClass('sentimentColor' + new_word + year + 'art' );
		    }
	    }
	    updateSelectedCol();

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

	    	function compare(a,b) {
			  if (a['Count'] < b['Count'])
			    return 1;
			  else if (a['Count'] > b['Count'])
			    return -1;
			  else 
			    return 0;
			}
			data2 = data2.sort(compare);

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];
		        word = word.toString();
                sentiment_scale = object['Sentiment Scale'];

		        var new_word = "";

		        if (word.indexOf(' ') >= 0) {
		        	wordlist = word.split(" ");
		        	for (h = 0; h < wordlist.length; h ++) {
		        		if (new_word != "") {
		        			new_word = new_word.concat("-" + wordlist[h]);
		        		} else {
		        			new_word = new_word.concat(wordlist[h]);
		        		}
		        	}
		        } else {
		        	new_word = word;
		        }

		        if (new_word.indexOf('@') >= 0) {
			    	new_word = new_word.replace('@', '');
			    }
			    if (new_word.indexOf('#') >= 0) {
			    	new_word = new_word.replace('#', '');
			    }
			    new_word = new_word.replace(/[|&;$%@"<>()+,.:!’'?Ã¢â‚¬Å“Â]/g, "-");
			    new_word = new_word.replace("’", '-');
                new_word = new_word.replace(/\//g, 'ForwardSlash');

		        var lastchar = word.toString().substring(word.length - 1);
				if (lastchar == "." || lastchar == ",") {
					word = word.toString().substring(0, word.length - 1);
				}
		     
		        var div = document.getElementById('camp_' + year);
		        //console.log(div.innerHTML);

		        $('#camp_' + year).append('<span onclick="showThisWord(this.innerHTML, ' + sentiment_scale + ')" class="word ' + new_word +'">['+word+"] "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";

                makeSentimentStyle(technique, new_word, year, "camp", sentiment_scale);
                $('.' + year + ' > .camp > .' + new_word).addClass('sentimentColor' + new_word + year + 'camp' );

		    }
	    }
	    updateSelectedCol();

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

	    	function compare(a,b) {
			  if (a['Count'] < b['Count'])
			    return 1;
			  else if (a['Count'] > b['Count'])
			    return -1;
			  else 
			    return 0;
			}
			data2 = data2.sort(compare);

		    for (i = 0; i < data2.length; i ++) {
		        object = data2[i];
		        word = object['Word'];
		        word = word.toString();
                sentiment_scale = object['Sentiment Scale'];

		        var new_word = "";

		        if (word.indexOf(' ') >= 0) {
		        	wordlist = word.split(" ");
		        	for (h = 0; h < wordlist.length; h ++) {
		        		if (new_word != "") {
		        			new_word = new_word.concat("-" + wordlist[h]);
		        		} else {
		        			new_word = new_word.concat(wordlist[h]);
		        		}
		        	}
		        } else {
		        	new_word = word;
		        }

		        if (new_word.indexOf('@') >= 0) {
		        	new_word = new_word.replace('@', '');
		        }
		        if (new_word.indexOf('#') >= 0) {
		        	new_word = new_word.replace('#', '');
		        }
		        new_word = new_word.replace(/[|&;$%@"<>()+,.:!’'?Ã¢â‚¬Å“Â]/g, "-");
			    new_word = new_word.replace("’", '-');
                new_word = new_word.replace(/\//g, 'ForwardSlash');

		        var lastchar = word.toString().substring(word.length - 1);
				if (lastchar == "." || lastchar == ",") {
					word = word.toString().substring(0, word.length - 1);
				}
		     
		        var div = document.getElementById('twitter_' + year);
		        //console.log(div.innerHTML);

		        $('#twitter_' + year).append('<span onclick="showThisWord(this.innerHTML, ' + sentiment_scale + ')" class="word ' + new_word +'">['+word+"] "+'</span>');
		        //div.innerHTML = div.innerHTML + word + "\n";

                makeSentimentStyle(technique, new_word, year, "twitter", sentiment_scale);
                $('.' + year + ' > .twitter > .' + new_word).addClass('sentimentColor' + new_word + year + 'twitter' );
		    }
	    }
	    updateSelectedCol();

	});

}

function updateSelectedCol() {
	//console.log("entere");
	var categories = ["theme", "event", "art", "camp", "twitter"];
	for (i = 0; i < categories.length; i ++) {
		cur_category = categories[i];
		if ($(".itemHeader." + cur_category).hasClass("selectedCol")) {
            $('.' + cur_category + ' > .word').removeAttr('style');
		} else {
			$('.' + cur_category + ' > .word').css('color', '#D3D3D3');
		}

	}
}


$(".itemHeader").on("click", function() {
    //$(this).parent().toggleClass("selectedCol");
    selected_title = this.innerHTML.toLowerCase();

	if ($(this).hasClass("selectedCol")) {
		$('.' + selected_title + ' > .word').css('color', '#D3D3D3');

	} else {
        $('.' + selected_title + ' > .word').removeAttr('style');
	}

    $(this).toggleClass("selectedCol");

    // var sheetToBeRemoved = document.getElementById('styleSheetId');
    // var sheetParent = sheetToBeRemoved.parentNode;
    // sheetParent.removeChild(sheetToBeRemoved);

    //see if there are multiple sets selected; find intersection

    updateIntersection();
}); 

function updateIntersection() {
	var selected_categories = document.getElementsByClassName("selectedCol");
    //console.log(selected_categories);

    if (selected_categories.length > 1) {
    	//console.log("Entered");

    	var categories = []

    	for (i = 0; i < selected_categories.length; i ++) {
    		categories.push(selected_categories[i].innerHTML.toLowerCase());
    	}

    	//console.log(categories);

    	// for each category, 
    }
}

$(".legend.tech").on("click", function() {

	$(".legend.tech.selected").toggleClass("selected");

	//console.log(this.innerHTML);
	if (this.innerHTML == "Text Themes") {
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

function showThisWord(word, sentimentVal) {
	console.log(word);
	word = word.toString().substring(1, word.length - 2);

	var new_word = "";

    if (word.indexOf(' ') >= 0) {
    	wordlist = word.split(" ");
    	for (h = 0; h < wordlist.length; h ++) {
    		if (new_word != "") {
    			new_word = new_word.concat("-" + wordlist[h]);
    		} else {
    			new_word = new_word.concat(wordlist[h]);
    		}
    	}
    } else {
    	new_word = word;
    }

    if (new_word.indexOf('@') >= 0) {
    	new_word = new_word.replace('@', '');
    }
    if (new_word.indexOf('#') >= 0) {
    	new_word = new_word.replace('#', '');
    }
    new_word = new_word.replace(/[|&;$%@"<>()+,.:!’'?Ã¢â‚¬Å“Â]/g, "-");
	new_word = new_word.replace("’", '-');
    new_word = new_word.replace(/\//g, 'ForwardSlash');

	var selected_categories = document.getElementsByClassName("selectedCol");
    //console.log(selected_categories);

    var sentimentColor = calcSentimentColor(sentimentVal);

    for (i = 0; i < selected_categories.length; i ++) {
    	cur_category = selected_categories[i].innerHTML.toLowerCase();
    	console.log(cur_category);
    	$(".item." + cur_category).css('color', '#D3D3D3');
    	$('.' + cur_category + ' > .word').css('color', '#D3D3D3');
    	$('.' + cur_category + ' > .word.' + new_word).removeAttr('style');
    }

}

function showThisSentimentWord(sentimentColor) {

	var selected_categories = document.getElementsByClassName("selectedCol");
    //console.log(selected_categories);

    // var sentimentColor = calcSentimentColor(sentimentVal);

    for (i = 0; i < selected_categories.length; i ++) {
    	cur_category = selected_categories[i].innerHTML.toLowerCase();
    	console.log(cur_category);
    	$(".item." + cur_category).css('color', '#D3D3D3');
    	$('.' + cur_category + ' > .word').css('color', '#D3D3D3');

    	$('.' + cur_category).children().each(function() {
    		
    		var word_two = this.attributes.class.textContent.split(" ")[1];
    		var word_four = this.attributes.class.textContent.split(" ")[3];

    		console.log("color " + $('.' + word_four).css('color'));

    		$('.' + cur_category + ' > .word.' + word_two).removeAttr('style');

    		console.log("after color " + $('.' + word_four).css('color'));

    		if($('.' + word_four).css("color") === sentimentColor) {
	    		console.log("hi");
	    		// $('.' + cur_category + ' > .word.' + word_two).removeAttr('style');

	    	} else {
	    		$('.' + cur_category + ' > .word.' + word_two).css('color', '#D3D3D3');
	    	}
    	});    	
    }

}

function calcSentimentColor(sentimentVal) {
    sentimentVal = sentimentVal * 50.0 + 50.0;  //convert sentiment value to scale 0-100

    //convert sentiment scale into a gradient color from red to green
    if (sentimentVal > 100) {
        sentimentVal = 100;
    }
    else if (sentimentVal < 0) {
        val = 0;
    }
    // $(".value", span).text(val);
    
    var h= Math.floor((sentimentVal) * 120 / 100);
    // var s = Math.abs(sentimentVal - 50)/50;
    var s= 1;
    var v = 0.8;

    //convert to color black
    if (s == 0) { v = 0; }
    
    var sentimentColor = hsv2rgb(h, s, v);

    return sentimentColor;
}

var hsv2rgb = function(h, s, v) {
  // adapted from http://schinckel.net/2012/01/10/hsv-to-rgb-in-javascript/
  var rgb, i, data = [];
  if (s === 0) {
    rgb = [v,v,v];
  } else {
    h = h / 60;
    i = Math.floor(h);
    data = [v*(1-s), v*(1-s*(h-i)), v*(1-s*(1-(h-i)))];
    switch(i) {
      case 0:
        rgb = [v, data[2], data[0]];
        break;
      case 1:
        rgb = [data[1], v, data[0]];
        break;
      case 2:
        rgb = [data[0], v, data[2]];
        break;
      case 3:
        rgb = [data[0], data[1], v];
        break;
      case 4:
        rgb = [data[2], data[0], v];
        break;
      default:
        rgb = [v, data[0], data[1]];
        break;
    }
  }
  return '#' + rgb.map(function(x){
    return ("0" + Math.round(x*255).toString(16)).slice(-2);
  }).join('');
};

function makeSentimentStyle(technique, new_word, year, category, sentiment_scale) {
    var sentimentColor;
    if (technique === "wordcount") {
        sentimentColor = 'black';
    } else {   
        sentimentColor = calcSentimentColor(sentiment_scale);              
    }

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.sentimentColor' + new_word + year + category + ' { color: ' + sentimentColor + '; }';
    document.getElementsByTagName('head')[0].appendChild(style);
}



$(document).ready(function() {
    if($(".splash").is(":visible")) {
        $(".wrapper").css({"opacity":"0"});
    }

    $(".splash-arrow").click(function() {
        $(".splash").slideUp("800", function() {
            $(".wrapper").delay(100).animate({"opacity":"1.0"},800);
        });
    });
});

$(window).scroll(function() {
    $(window).off("scroll");
    $(".splash").slideUp("800", function() {
        $("html, body").animate({"scrollTop":"0px"},100);
        $(".wrapper").delay(100).animate({"opacity":"1.0"},800);
    });
});