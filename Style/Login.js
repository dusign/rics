
$(function(){
	$("#main_box").height($(window).height()).width($(window).width());
	$("#main_box_middle").css("marginTop",($(window).height()-650)/2);

	/**
	 * [Windows size change event]
	 * @param  {[type]}    [description]
	 * @return {[type]}    [description]
	 */
	$(window).resize(function(){
		$("#main_box").height($(window).height()).width($(window).width());
		$("#main_box_middle").css("marginTop",($(window).height()-650)/2);
	});

	/**
	 * [Mouse event]
	 * @param  {[type]}    [description]
	 * @return {[type]}    [description]
	 */
	$(".turn_login_button").click(function(){
		$("#main_box_middle_reg").css("display","none");
		$("#main_box_middle_log").css("display","block");
	});
	$(".turn_register_button").click(function(){
		$("#main_box_middle_log").css("display","none");
		$("#main_box_middle_reg").css("display","block");
	});
	$("#login").click(function(){
		alert("login");
	});
	$("#register").click(function(){
		alert("register");
	});
});