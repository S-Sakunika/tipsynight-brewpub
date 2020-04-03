$(document).ready(function() {
	neons();
	function neons() {
		anime({
		  targets: ['.sign.open'],
		  color: ['transparent', '#ff40ac'],
		  loop: true,
		  duration: 200,
		});

		anime({
		  targets: ['.sign.name'],
		  color: ['transparent', '#00CFDE'],
		  easing: 'easeOutBounce',
		  duration: 300,
		  delay: 800,
		  complete: function(anim) {
		  	anime({
			  targets: ['.sign.name span:nth-child('+anime.random(4, 6)+'), .sign.name span:nth-child('+anime.random(9, 10)+'), .sign.name span:nth-child('+anime.random(7, 8)+'), .sign.name span:nth-child('+anime.random(1, 3)+')'],
			  color: ['transparent', '#00CFDE'],
			  loop: 10,
			  easing: 'easeOutBounce',
			  duration: 100,
			  delay: anime.stagger(10),
			  complete: function(anim) {
			    anime({
				  targets: ['.sign.name span:nth-child(2)'],
				  color: ['transparent', '#00CFDE'],
				  loop: true,
				  easing: 'easeOutBounce',
				  duration: 100,
				});
			  }
			});
		  }
		});
	}

});