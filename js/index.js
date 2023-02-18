gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	
		gsap.fromTo('.hero', {opacity: 1}, {
			opacity: 0,
			scrollTrigger: {
				trigger: '.hero',
				start: 'center',
				end: '820',
				scrub: true
			}
		})

		const itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item')
		const itemsRight = gsap.utils.toArray('.gallery__right .gallery__item')

		itemsLeft.forEach(element => {
			gsap.fromTo(element, {opacity: 0, x: -50}, {
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: element,
					start: '-750',
					end: '100',
					scrub: true
				}
			})
		});

		itemsRight.forEach(element => {
			gsap.fromTo(element, {opacity: 0, x: 50}, {
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: element,
					start: '-750',
					end: '100',
					scrub: true
				}
			})
		});

	
}