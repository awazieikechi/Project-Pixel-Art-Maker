// Select color input
// Select size input

var row, column, color;

// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function(event){
	event.preventDefault();
	row = $("#inputWeight").val();
	column = $("#inputHeight").val();
	makeGrid(column,row);
	//console.log( "Row " + row + "this is column " + column);
	
})
	
function makeGrid(a,b) {

    // Your code goes here!
	$("tr").remove();
	for (var i=0; i<a; i++)
		{
			$("#pixelCanvas").append("<tr id=table" + i + "></tr>")
			for (var j=0 ; j<b; j++)
				{
					$("#table" + i).append("<td></td>");
				}
		}
	
	//add color to cell
	$("td").click(function(){
		var color = $("#colorPicker").val();
		if ($(this).attr("style"))
			{
				$(this).removeAttr("style");
			}
		 else
			 {
				 
				 $(this).attr("style", "background-color:" + color);
				 
			 }
		
		
	})
}




