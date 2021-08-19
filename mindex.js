//first let's initialize add note
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
$(".addnote").click(function(){

	if($(".container3").css("display")=="none"){
		$(".container3").css("display",'block');
		}
	
});

//now for cross icon
$(".hide").mouseover(function(){
	$(".hide").addClass("temp");
	setTimeout(function(){
		$(".hide").removeClass("temp");
	},100);
});
$(".hide").click(function(e){
	$(".container3").css("display","none");
}); 



//now for the tick item
$(".tick").mouseover(function(){
	$(".tick").addClass("temp");
	setTimeout(function(){
		$(".tick").removeClass("temp");
	},100);
});

$(".tick").click(function(e){
	var item=$("textarea").val();
	let content=$("<textarea>");
	let box=$("<div>");
	$(".container2").append(box);
	const calculation=Math.floor(Math.random()*colorArray.length);
    content.css("background-color",colorArray[calculation].toString());
    content.addClass("adjustment");
    content.text(item);
    box.append(content);
    box.addClass("boxer");
    //$(".container2").append(content);
    $(".container3").css("display","none");
    
  
 	
 	
 	// $("body").on().on("click",function(){
 	// 	box.remove();
 	// });
 	var touchtime = 0;
	box.on("click", function() {
    if (touchtime == 0) {
        // set first click
        touchtime = new Date().getTime();
    } else {
        // compare first click to this click and see if they occurred within double click threshold
        if (((new Date().getTime()) - touchtime) < 800) {
            // double click occurred
            box.remove();
            touchtime = 0;
        } else {
            // not a double click so set as a new first click
            touchtime = new Date().getTime();
        }
    }
});
 	box.mouseenter(function(){
 		// box.css("position","absolute");
 		box.css({"transform":"scale(1.1)"});
});
 	box.mouseleave(function(){
 		// box.css("position","absolute");
 		box.css({"transform":"scale(1)"});
});
 	
 });

// $(".boxer .far").click(function(){
//  		console.log($(".boxer")[0]);
//  	});

