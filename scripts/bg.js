function openPopup(){
	window.open(chrome.extension.getURL('popup.html'),"mywindow","menubar=1,resizable=1,width=350,height=250");
}

$(document).bind('keydown', 'ctrl+p', openPopup);