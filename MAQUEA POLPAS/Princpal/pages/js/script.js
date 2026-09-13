$('.icon.menu').click(function(){
	$('.main-menu').toggleClass('open');
});

$('.icon.close').click(function(){
	$('.main-menu').toggleClass('open');
});

/*
makeAnimation();
$(document).ready(function(){
	$(window).scroll(function(){
		makeAnimation();
	});
});

function makeAnimation(){
	var bottomObj;
	$('.animated').each(function(){
		bottomObj = $(this).offset().top;
		// console.log(($(window).scrollTop() + $(window).height()) >= bottomObj);
		if(($(window).scrollTop() + $(window).height()) >= bottomObj){
			$(this).addClass('slideInDown');
		}
	});
}
*/


// $('input[name=phone]').mask('(99) 9 9999-9999');

/*
$(document).ready(function(){
	$(".modal-nutritional").on("click",function(){
		var idNutrition = "";
		idNutrition = $(this).attr("id");
		var urlAjax = "";
		urlAjax = rootSite+"ajax/"+uriA+"/"+uriB+"/"+idNutrition;
		console.log(urlAjax);
		$(".modal-content").load(urlAjax);
	})
})
*/

function gerar(){
	$("#formInfo input").length();
	console.log($("#formInfo input").length());
}
/*
$(document).ready(function(){
	$('.category-itens-menu ul li').hover(
		function(){
			$('.products-itens-menu > ul li').removeClass('active');
			$('.products-itens-menu > ul li:first-child').addClass('active');
			$('.sku-itens-menu > ul').removeClass('active');
			$('.sku-itens-menu > ul li').removeClass('active');
			$('.sku-itens-menu > ul li:first-child').addClass('active');

			$('.category-itens-menu > ul li').removeClass('active');
			$(this).addClass('active');
			var idCat = $(this).attr('id');
			var splCat = idCat.split("-")
			var idProd = "prod-"+splCat[1];
			$('.products-itens-menu > ul').removeClass('active');
			$('#'+idProd).addClass('active');
			$('#sku-'+splCat[1]).addClass('active');
		},
		function(){}
	);
	$('.products-itens-menu > ul li').hover(
		function(){
			$('.products-itens-menu > ul li').removeClass('active');
			$(this).addClass('active');
			var idProd = $(this).attr('id');
			var splProd = idProd.split("|")
			var idProdSku = splProd[0];
			var idSku = splProd[1];
			$('.sku-itens-menu ul').removeClass('active');
			$('.sku-itens-menu > ul li').removeClass('active');
			$('#sku-'+idProdSku).addClass('active');
			$('#'+idSku).addClass('active');
		},
		function(){}
	);
	var openMenu = false;
	$('li.products-menu').on("click", function(){
		if(openMenu){
			$('li.products-menu .content-menu').removeClass('show');
			openMenu = false;
		}else{
			$('li.products-menu .content-menu').addClass('show');
			openMenu = true;
		}
	});
});
*/


//gofind-iframe

var pageHeight = 0,
	pageWidth = 0,
	pageScrollTop = 0,
	projPageW = 0,
	projPageH = 0,
	version = "";
var topMargin = 116;
var shdwTop = 0;

var resised = true;

function restaura() {
	pageHeight = $(window).height();
	pageWidth = $(window).width();
	pageScrollTop = $(window).scrollTop();
	$("#gofind-iframe").css("min-height",(pageHeight - 207));
}

$(document).ready(function() {
	restaura();
	$(window).scroll(function() {
		restaura();
	});
	$(window).resize(function(){
		clearTimeout(this.idr);
		this.idr = setTimeout(function(){
			resised = true;
			restaura();
		}, 1000);
	});
});

// Form Handling & Validation for all pages
$(document).ready(function() {
	$('form').on('submit', function(e) {
		// Skip search forms
		const action = $(this).attr('action');
		if ($(this).hasClass('search-menu') || action === '/busca' || action === './busca') {
			const searchInput = $(this).find('input[name="s"]');
			if (searchInput && searchInput.val().trim()) {
				e.preventDefault();
				alert('Busca simulada por: "' + searchInput.val().trim() + '"\n\nEm um ambiente de produção, isto redirecionaria para os resultados de busca.');
				$('.search-bkg').removeClass('on');
				searchInput.val('');
			}
			return;
		}

		// Check captcha for franquia
		const challengeInput = $(this).find('input[name="Challenge"]');
		if (challengeInput.length && challengeInput.val().trim() !== '8') {
			e.preventDefault();
			alert('Resposta do desafio de segurança incorreta. 5 + 3 = ?');
			return;
		}

		if (this.checkValidity()) {
			e.preventDefault();
			const submitBtn = $(this).find('button[type="submit"], input[type="submit"]');
			const originalText = submitBtn.length ? (submitBtn.text() || submitBtn.val()) : 'Enviando...';
			
			if (submitBtn.length) {
				submitBtn.prop('disabled', true).text('Enviando...').val('Enviando...');
			}
			
			setTimeout(() => {
				this.reset();
				if (submitBtn.length) {
					submitBtn.prop('disabled', false).text(originalText).val(originalText);
				}
				
				const modalEl = document.getElementById('successModal');
				if (modalEl) {
					const modal = new bootstrap.Modal(modalEl);
					modal.show();
				} else {
					alert('Mensagem enviada com sucesso! Obrigado pelo seu contato.');
				}
			}, 1500);
		}
	});
});
