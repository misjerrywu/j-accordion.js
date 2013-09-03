(function( $ ){
	$.fn.jaccordion = function() {
	
		$(this).each(function(){
			
			var num_sliding_box = $(this).children().length;
			var from_offset = Array(num_sliding_box - 1);
			var to_offset = Array(num_sliding_box - 1);
		
			$(this).children().each(function(index){
				if(index == (num_sliding_box - 1)) return;
				to_offset[index] = $(this).position().top;
				from_offset[index] = $(this).position().top - $(this).children().outerHeight();
			});
			
			var root = this;
			
			$(this).children().mouseenter(function(){
				
				var to_index = $(root).children().index(this);
				var from_index = $(root).children().index($(root).children('[class~="current"]'));
				
				if(!$(this).hasClass('current')){
					
					if(from_index > to_index)
					{
						for(var i = from_index - 1; i >= to_index; i--)
						{
						
							$($(root).children().get(i)).stop(false, false);
							to_top = to_offset[i] + 'px';
							$($(root).children().get(i)).animate({top: to_top});
							
						}
					}else if(from_index < to_index){
						for(var i = from_index; i < to_index; i++)
						{
							$($(root).children().get(i)).stop(false, false);
							to_top = from_offset[i] + 'px';
							$($(root).children().get(i)).animate({top: to_top});
							
						}
					}
					
					$(root).children().removeClass('current');
					$(this).addClass('current');
					
				}
			});
		});
	};
	
})( jQuery );