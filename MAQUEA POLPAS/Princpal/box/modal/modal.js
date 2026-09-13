var modalCSSExists = 0;
function addModal(id){
	if($("body").find("#modalBoxCSS").length == 0) {
		modalCSSExists = 0;
	}
	if(modalCSSExists == 0) {
		$("head").prepend("<link rel='stylesheet' href='" + rootSite + "box/modal/modal.css?r=13a' type='text/css' media='screen'>");
		modalCSSExists = 1;
	}
	
	if($("body").find("#" + id).length == 0) {
		var mo = '<div class="modal-box" id="' + id + '" tabindex="-1" role="dialog">';
		mo += '<div class="modal-box-dialog" role="document">';
		mo += '<button type="button" class="modal-box-close" onclick="closeModal(\'' + id + '\')"><span aria-hidden="true">&times;</span></button>';
		mo += '<div class="modal-box-content">';
		mo += '<div class="modal-box-header">';
		mo += '<h3 class="modal-box-title" id="' + id + 'Label"></h3>';
		mo += '</div>';
		//mo += '<button type="button" class="modal-box-close" onclick="closeModal(\'' + id + '\')"><span aria-hidden="true">&times;</span></button>';
		mo += '<div class="modal-box-body"></div>';
		mo += '<div class="modal-box-footer">';
		mo += '<button type="button" class="modal-box-btn" onclick="closeModal(\'' + id + '\')">OK</button>';
		mo += '</div>';
		mo += '</div>';
		mo += '</div>';
		mo += '</div>';
		$("body").append(mo);
	}
}

var IdModalShown = "";
function openModal(Id_Modal, Title_Modal, Text_Modal, Bt_Modal_Label, Bt_Modal_Link, Class_Modal) {
	if(Id_Modal === undefined){ Id_Modal = 'ID' + parseInt(Math.random() * 1000000); }
	if(Title_Modal == undefined){ Title_Modal = ''; }
	if(Text_Modal == undefined){ Text_Modal = ''; }
	if (Text_Modal.indexOf("ajax") >= 0) {
		addModal(Id_Modal);
		$("#" + Id_Modal).find('.modal-box-body').html('<div><p>Carregando...</p></div>');
		setTimeout(function () {
			$("#" + Id_Modal).find('.modal-box-body').load(Text_Modal, function(){});
		}, 1000);
		if(Class_Modal == "modal-box-lg"){
			$("#" + Id_Modal).find('.modal-box-dialog').attr("class", "modal-box-dialog modal-box-lg");
		} else if(Class_Modal == "modal-box-md"){
			$("#" + Id_Modal).find('.modal-box-dialog').attr("class", "modal-box-dialog modal-box-md");
		} else if(Class_Modal == "modal-box-sm"){
			$("#" + Id_Modal).find('.modal-box-dialog').attr("class", "modal-box-dialog modal-box-sm");
		} else {
			$("#" + Id_Modal).find('.modal-box-dialog').removeClass("modal-box-lg");
			$("#" + Id_Modal).find('.modal-box-dialog').removeClass("modal-box-md");
		}

		if(Title_Modal == "none" || Title_Modal == "hidden") {
			$("#" + Id_Modal).find('.modal-box-header').hide();
		} else if(Title_Modal != "") {
			$("#" + Id_Modal).find('.modal-box-title').html(Title_Modal);
		}
		if(Bt_Modal_Label == "none" || Bt_Modal_Label == "hidden") {
			$("#" + Id_Modal).find('.modal-box-footer').hide();
			$("#" + Id_Modal).find('.modal-box-body').addClass('full');
		} else if (Bt_Modal_Label) {
			$("#" + Id_Modal + ' .modal-box-footer .btn-primary').remove();
			$("#" + Id_Modal).find('.modal-box-body').removeClass('full');
		}
		$("#" + Id_Modal).addClass("show");
	} else {
		if($("body").find("#" + Id_Modal).length > 0) {
			if(modalCSSExists == 0) {
				$("head").prepend("<link rel='stylesheet' href='" + rootSite + "box/modal/modal.css?r=13a' type='text/css' media='screen'>");
				modalCSSExists = 1;
			}
			$("#" + Id_Modal).appendTo('body');
		} else {
			IdModalShown = Id_Modal;
			addModal(Id_Modal);
		}
		var modalContent = $("#" + Id_Modal).find('.modal-box-content');
		if(Class_Modal == "modal-box-lg"){
			$("#" + Id_Modal).find('.modal-box-dialog').attr("class", "modal-box-dialog modal-box-lg");
		} else if(Class_Modal == "modal-box-md"){
			$("#" + Id_Modal).find('.modal-box-dialog').attr("class", "modal-box-dialog modal-box-md");
		} else {
			$("#" + Id_Modal).find('.modal-box-dialog').removeClass("modal-box-lg");
			$("#" + Id_Modal).find('.modal-box-dialog').removeClass("modal-box-md");
		}
		modalContent.find('.modal-box-title').html("");
		modalContent.find('.modal-box-body').html("");
		if(Title_Modal) {
			modalContent.find('.modal-box-title').html(Title_Modal);
		}
		if(Text_Modal) {
			modalContent.find('.modal-box-body').html(Text_Modal);
		}
		if(Bt_Modal_Label == "none" || Bt_Modal_Label == "hidden") {
			$("#" + Id_Modal).find('.modal-box-footer').hide();
			$("#" + Id_Modal).find('.modal-box-body').addClass('full');
		} else if (Bt_Modal_Label) {
			var bt = '<button class="modal-box-btn" onclick="' + Bt_Modal_Link + '">' + Bt_Modal_Label + '</button>';
			$("#" + Id_Modal).find('.modal-box-footer').html(bt);
			$("#" + Id_Modal).find('.modal-box-body').removeClass('full');
		}
		$("#" + Id_Modal).addClass("show");
	}
}

/* ADD MODAL
	__box("modal", {"Id":"Alert","Title":"","Text":"","Label":"","Link":"","Class":""});
*/
function __modal(args){
	if(args["Title_Modal"]){
		openModal(args["Id_Modal"], args["Title_Modal"], args["Text_Modal"], args["Bt_Modal_Label"], args["Bt_Modal_Link"], args["Class_Modal"]);
	} else if(args["Id"]){
		openModal(args["Id"], args["Title"], args["Text"], args["Label"], args["Link"], args["Class"]);
	} else {
		var mdnum = parseInt(Math.random(1) * 1000);
		mdnum = '';
		openModal("ModalBox" + mdnum, args[0], args[1], args[2], args[3], args[4]);
	}
}

function closeModal(Id) {
	if(Id != "" && Id != undefined && Id.indexOf("ID") >= 0){
		$("#" + Id).find('.modal-box-title').text("");
		$("#" + Id).find('.modal-box-body').text("");
		$("#" + Id).removeClass("show");
	} else {
		$(".modal-box").each(function(){
			if($(this).is(':visible')) {
				// $(this).find('.modal-box-title').text("");
				// $(this).find('.modal-box-body').text("");
				$(this).removeClass("show");
			}
		});
	}
}

function confirmation(title, text, callback){
	if(modalCSSExists == 0) {
		$("head").prepend("<link rel='stylesheet' href='" + rootSite + "box/modal/modal.css?r=13a' type='text/css' media='screen'>");
		modalCSSExists = 1;
	}

	var mo = '<div class="modal-box fade" id="modalConfirm" tabindex="-1" role="dialog" aria-hidden="true">';
		mo += '<div class="modal-box-dialog" role="document">';
		mo += '<div class="modal-box-content">';
		mo += '<div class="modal-box-header">';
		mo += '<h5 class="modal-box-title">' + title + '</h5>';
		mo += '<button type="button" class="modal-box-close" onclick="closeModal()">';
		mo += '<span aria-hidden="true">&times;</span>';
		mo += '</button>';
		mo += '</div>';
		mo += '<div class="modal-box-body">' + text + '</div>';
		mo += '<div class="modal-box-footer">';
		mo += '<button type="button" class="modal-box-btn modal-box-btn-secondary" onclick="closeModal()">Não</button>';
		mo += '<button type="button" class="modal-box-btn" id="modalBoxConfirmBtn">Sim</button>';
		mo += '</div>';
		mo += '</div>';
		mo += '</div>';
		mo += '</div>';

	var modalConfirm = $('#modalConfirm');
	if(modalConfirm.length != 0){
		$(modalConfirm).remove();
	}

	$('body').append($(mo));
	modalConfirm = $('#modalConfirm');
	
	var args = new Array();
	for(var i = 2;i<arguments.length;i++){
		args.push(arguments[i]);
	}
		
	$('#modalBoxConfirmBtn').on('click',function(){
		callback.apply(this,args);
		$("#modalConfirm").removeClass("show");   
	});
	
	$("#modalConfirm").addClass("show");
	return false;
}