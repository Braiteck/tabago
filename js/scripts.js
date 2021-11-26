$(() => {
	// Слайдер в тексте
	if ($('.text_block .slider_block .swiper-container').length) {
		let sliders = []

		$('.text_block .slider_block .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 16,
							slidesPerView: 1
						},
						480: {
							spaceBetween: 16,
							slidesPerView: 2
						},
						768: {
							spaceBetween: 16,
							slidesPerView: 3
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 3
						},
						1280: {
							spaceBetween: 32,
							slidesPerView: 4
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Слайдер с сылками
	if ($('.links_carousel .swiper-container').length) {
		let sliders = []

		$('.links_carousel .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					spaceBetween: 20,
					slidesPerView: 'auto',
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Наши партнёры
	if ($('.partners .swiper-container').length) {
		let sliders = []

		$('.partners .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 16,
							slidesPerView: 1
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 2
						},
						1280: {
							spaceBetween: 29,
							slidesPerView: 2
						}
					},
					on: {
						init: swiper => {
							setTimeout(() => {
								setHeight($(swiper.$el).find('.partner'))
							})
						},
						resize: swiper => {
							setTimeout(() => {
								setHeight($(swiper.$el).find('.partner'))
							})
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Бренды
	if ($('.brands .swiper-container').length) {
		let sliders = []

		$('.brands .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.brands-swiper-button-next',
						prevEl: '.brands-swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 20,
							slidesPerView: 2
						},
						768: {
							spaceBetween: 20,
							slidesPerView: 4
						},
						1024: {
							spaceBetween: 20,
							slidesPerView: 5
						},
						1280: {
							spaceBetween: 24,
							slidesPerView: 5
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Продукция
	if ($('.products .swiper-container').length) {
		let sliders = []

		$('.products .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 16,
							slidesPerView: 1
						},
						480: {
							spaceBetween: 16,
							slidesPerView: 2
						},
						768: {
							spaceBetween: 20,
							slidesPerView: 3
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 3
						},
						1280: {
							spaceBetween: 30,
							slidesPerView: 4
						}
					},
					on: {
						init: swiper => {
							setTimeout(() => {
								setHeight($(swiper.$el).find('.product'))
							})
						},
						resize: swiper => {
							setTimeout(() => {
								setHeight($(swiper.$el).find('.product'))
							})
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Моб. меню
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').toggleClass('active')
		$('header .mob_menu').toggleClass('show')
	})
})