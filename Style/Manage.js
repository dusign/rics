
$(function(){
	$("#main_box").height($(window).height()).width($(window).width());
	$("#main_box_middle_con").width($(window).width()-280);
	$("#main_box_middle_nav").height($(window).height()-260);
	$("#main_box_middle_con").height($(window).height()-260);

	/**
	 * [description]
	 * @param  {[type]} ){		$("#main_box").height($(window).height()).width($(window).width());	} [description]
	 * @return {[type]}                                                                             [description]
	 */
	$(window).resize(function(){
		$("#main_box").height($(window).height()).width($(window).width());
		$("#main_box_middle_con").width($(window).width()-280);
		$("#main_box_middle_nav").height($(window).height()-260);
		$("#main_box_middle_con").height($(window).height()-260);
	});
});