// your code here!
$('.js-form').submit(function(event)
{

	console.log("in submit");
	event.preventDefault();
	var userText=$('#user-text').val();
	var words=getTokens(userText);
	var textAnalyze=[];
	console.log(words);
	for (var i=0; i<words.length; i++)
	{
		
		 
		if(textAnalyze.indexOf(words[i])===-1)
			textAnalyze.push(words[i]);
	}
	
 	
 	var uwc=textAnalyze.length;
 	var sum =0;
 	for (var j=0;j<textAnalyze.length;j++)
 	{
 		//console.log(textAnalyze[j]);
 		sum = sum +textAnalyze[j].length;
 	}
 	var awl=sum/uwc;
 	$('dl').removeClass("hidden");
	$('.js-wc').text(words.length);
 	$('.js-uwc').text(uwc);
 	$('.js-awl').text(awl+" characters");
})
function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  var  singleLine=rawString.replace(/\r?\n|\r/g," ");
  console.log(rawString.replace(/\r?\n|\r/g,"").toLowerCase().match(/\b[^\s]+\b/g).sort());
  var newSingleLine=singleLine.replace(/\(/g,"").replace(/\)/g,"");
  console.log(" single line is "+newSingleLine);
  return newSingleLine.toLowerCase().split(/\b[\s+]\b/);
}