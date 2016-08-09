$(function () {
			$('.nav-menu').mouseover(function () {
				$(this).children('ul').show();
			})

			$('.nav-menu').mouseout(function () {
				$(this).children('ul').hide();
			})
		})