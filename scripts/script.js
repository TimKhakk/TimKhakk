const swiper = new Swiper('.channel-slider', {
	// Optional parameters
	loop: true,

	spaceBetween: 20,

	slidesPerView: 1,
	breakpoints: {
		1900: {
			slidesPerView: 6
		},
		1600: {
			slidesPerView: 5
		},
		1400: {
			slidesPerView: 4
		},
		1200: {
			slidesPerView: 3
		},
		1050: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 2
		}
	},

	// Navigation arrows
	navigation: {
		nextEl: '.channel-button-next',
		prevEl: '.channel-button-prev',
	}
});

const swiper2 = new Swiper('.channel-slider-2', {
	// Optional parameters
	loop: true,

	spaceBetween: 20,

	slidesPerView: 1,

	breakpoints: {
		1300: {
			slidesPerView: 3
		},
		992: {
			slidesPerView: 2
		}
	},
	// Navigation arrows
	navigation: {
		nextEl: '.channel-button-next-2',
		prevEl: '.channel-button-prev-2',
	}
});

const swiper3 = new Swiper('.channel-slider-3', {
	// Optional parameters
	loop: true,

	spaceBetween: 20,

	slidesPerView: 1,
	breakpoints: {
		1900: {
			slidesPerView: 6
		},
		1600: {
			slidesPerView: 5
		},
		1400: {
			slidesPerView: 4
		},
		1200: {
			slidesPerView: 3
		},
		1050: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 2
		}
	},

	// Navigation arrows
	navigation: {
		nextEl: '.channel-button-next-3',
		prevEl: '.channel-button-prev-3',
	}
});