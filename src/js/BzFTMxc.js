// BzFTMxc.js

(function(_W, _D){

    var makeSquare = function(elements){
	for (var i = 0; i < elements.length; i ++) {
	    elements[i].setAttribute('height', elements[i].offsetWidth);
	    elements[i].style.height = elements[i].offsetWidth + 'px';
	}
    };
    
    _D.addEventListener('DOMContentLoaded', function(e){

	// Make elements square
	var square_elems = _D.getElementsByClassName('square');
	makeSquare(square_elems);

	// Add event listener for screen re-size
	_W.addEventListener('resize', function(e){
	    makeSquare(square_elems);
	});
	
	// Invoke before printing
	var printing = function(){
	    makeSquare(square_elems);
	};	
	if (window.matchMedia) {
	    var mediaQueryList = window.matchMedia('print');
	    mediaQueryList.addListener(printing);
	}
	window.onbeforeprint = printing;
	
    });
    
})(window, window.document);

