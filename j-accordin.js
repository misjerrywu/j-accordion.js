($ => {

	function jAccordion(){
		this.imageContainerHeight = 0;
		this.contentContainerHeight = 0;
		this.headingHeight = 0;
		this.numberOfAccordions = 4;
		this.numberOfBoxesPerAccordion = 3;
		this.accordionHeadings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
		this.divAccordionContainerClass = 'col-sm';
	}

	jAccordion.prototype = {
		jaccordion: function(settings = {}){

			if(typeof settings == 'object')
			{
				Number.isInteger(settings.numberOfAccordions) && (this.numberOfAccordions = settings.numberOfAccordions);
				Number.isInteger(settings.numberOfBoxesPerAccordion) && (this.numberOfBoxesPerAccordion = settings.numberOfBoxesPerAccordion);
				Array.isArray(settings.accordionHeadings) && settings.accordionHeadings.length == this.numberOfAccordions && (this.accordionHeadings = settings.accordionHeadings);
				Array.isArray(settings.data) && settings.data.length == this.numberOfAccordions && (this.data = settings.data);
				typeof settings.divAccordionContainerClass !== 'undefined' && (this.divAccordionContainerClass = settings.divAccordionContainerClass);

				for(let i = 0; i < this.numberOfAccordions; i++){

					let divAccordionContainer = $('<div>').addClass(this.divAccordionContainerClass);
					let divAccordion = $('<div>').addClass('accordion').append(`<h2>${settings.accordionHeadings[i]}</h2>`);
					let divAccordionContent = $('<div>').addClass('accordion-content');

					for(let j = 0; j < this.numberOfBoxesPerAccordion; j++){

						let divBox = $('<div>').addClass(`box-${j + 1}`).html(`
							<div class="image-container"><img src="${settings.data[i][j].imagePath}" class="img-fluid" /></div>
              <div class="content"><strong>${settings.data[i][j].heading}</strong>
                <p>${settings.data[i][j].content}</p>
              </div>
						`).attr('style', `z-index: ${this.numberOfBoxesPerAccordion - j};`).appendTo(divAccordionContent);

						j === 0 && divBox.addClass('current');
					}

					divAccordion.append(divAccordionContent).appendTo(divAccordionContainer);
					divAccordionContainer.appendTo(this);

				}

				let accordions = $(this).find('.accordion-content');

				this.fromOffset = Array(this.numberOfBoxesPerAccordion - 1);
				this.toOffset = Array(this.numberOfBoxesPerAccordion - 1);

				setTimeout(() => {

					this._getHeights(accordions);
					this._init(accordions);
					this._animate(accordions);

					$(window).resize(() => this._reset(accordions));

				}, 100);

			}

		},
		_animate: function(accordions){

			$(accordions).each((index, element) => {

				let accordion = element;

				$(accordion).children().mouseenter(event => {

					let toIndex = $(accordion).children().index(event.currentTarget);
					let fromIndex = $(accordion).children().index($(accordion).children('[class~="current"]'));

					if(!$(event.currentTarget).hasClass('current'))
					{
						if(fromIndex > toIndex)
						{
							for(let i = fromIndex - 1; i >= toIndex; i--)
							{
								$($(accordion).children().get(i)).stop(false, false);
								toTop = `${this.toOffset[i]}px`;
								$($(accordion).children().get(i)).animate({top: toTop});
							}
						}
						else if(fromIndex < toIndex)
						{
							for(let i = fromIndex; i < toIndex; i++)
							{
								$($(accordion).children().get(i)).stop(false, false);
								toTop = `${this.fromOffset[i]}px`;
								$($(accordion).children().get(i)).animate({top: toTop});
							}
						}

						$(accordion).children().removeClass('current');
						$(event.currentTarget).addClass('current');

					}
				});
			});
		},
		_init: function(accordions){

			let absoluteTop = 0;

			$(accordions).children().each((index, element) => {
				if($(element).hasClass('box-1')) absoluteTop = 0;
				$(element).css('top', `${absoluteTop}px`);
				absoluteTop += this.contentContainerHeight;
			});

			$(accordions).css('height', `${this.contentContainerHeight * this.numberOfBoxesPerAccordion + this.imageContainerHeight}px`).find('.content').css('height', `${this.contentContainerHeight}px`);
			$(accordions).prev().css('height', `${this.headingHeight}px`);

			$(accordions).children().each((index, element) => {
				if(index == (this.numberOfBoxesPerAccordion - 1)) return;
				this.toOffset[index] = $(element).position().top;
				this.fromOffset[index] = $(element).position().top - $(element).children().outerHeight();
			});

		},
		_resetAccordion: function(accordions){
			$(accordions).css('height', '').find('.content').css('height', '').end().prev().css('height', '');
			$(accordions).children().removeClass('current').end().children('[class*="box-1"]').addClass('current');
		},
		_getHeights: function(accordions){

			$(accordions).each((index, element) => {
					if($(element).prev().outerHeight() > this.headingHeight) this.headingHeight = $(element).prev().outerHeight();
			});

			$(accordions).find('.image-container').each((index, element) => {
				if($(element).outerHeight() > this.imageContainerHeight) this.imageContainerHeight = $(element).outerHeight();
			});

			$(accordions).find('.content').each((index, element) => {
				if($(element).outerHeight() > this.contentContainerHeight) this.contentContainerHeight = $(element).outerHeight();
			});

		},
		_reset: function(accordions){
			this.contentContainerHeight = 0;
			this.headingHeight = 0;
			this.imageContainerHeight = 0;
			this._resetAccordion(accordions);
			this._getHeights(accordions);
			this._init(accordions);
		}
	};

	$.fn.extend(new jAccordion());

})(jQuery);
