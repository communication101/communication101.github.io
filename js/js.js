// JavaScript
$(function(){
	//assign varibles for better customizations
	var width = 734; //max images width 5138 problem: images aren't on the same size
	var speed = 1000;
	var pause = 3000;
	var currentImg = 1;
	var $slider = $('#slider'); //scan through dom for the following elements
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	
	setInterval(function() {
	$slideContainer.animate({'margin-left': '-=' +width}, speed, function() {
		currentImg++ // increment for each image
		if (currentImg === 8) //check if we reach the last image and return to the first image. 7+1 for the last image as it's going to be image1_
		{
			currentImg = 1;
			$slideContainer.css('margin-left', 0);
		}
	});}, pause);
	
	
	
});
var data = {"total":0,"rows":[]};
		var totalCost = 0;
		
$(function(){
	$('#cartcontent').datagrid({
		singleSelect:true
	});
	$('.Items').draggable({
		revert:true,
		proxy:'clone',
		onStopDrag:function(){
			$(this).draggable('options').cursor = 'not-allowed';
			$(this).draggable('proxy').css('z-index',10);
		},
		onStopDrag:function(){
			$(this).draggable('options').cursor='move';
		}
	});
	$('.cart').droppable({
		onDragEnter:function(e,source){
			$(source).draggable('options').cursor='auto';
		},
		onDragLeave:function(e,source){
			$(source).draggable('options').cursor='not-allowed';
		},
		onDrop:function(e,source){
			var name = $(source).find('p:eq(0)').html();
			var price = $(source).find('p:eq(1)').html();
			var Custom_Quan = $('#myQuntity').val();
			DropProduct(name, parseFloat(price.split('$')[1]), parseInt(Custom_Quan));
		}
	});
});
		
function DropProduct(name, price, Custom_Quan){
			
	function addProduct(){
		for(var i=0; i<data.total; i++){
			var row = data.rows[i];
			if (row.name == name){
				row.quantity += 1;
				return;
			}
		}
		data.total +=1;
		data.rows.push({
			name:name,
			quantity:Custom_Quan,
			price:price
		});
	}
	if (Boolean(Custom_Quan) == true ){
	addProduct();
	totalCost += price * Custom_Quan;
	$('#cartcontent').datagrid('loadData', data);
	$('div.cart .total').html('Total: $'+totalCost);
	Custom_Quan = 0;
	}
	else if (Boolean(Custom_Quan) == false)
	{
		alert("Please insert a valid quantity");
	}
}


window.onload = function(){
	init();
}
function init(){
	
function check_info(){
var info = document.getElementById("info_f").value;
var message = document.getElementById("message").value;

if(info =="" || message ==""){
	alert("Please complete the missing fields!");
	return false;
	}
	else{return true;}
	}
	
	
}

	


	




	
	
	



	
	
	
