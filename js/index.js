/*

	JUST SOME GLOBAL VARS AND WHATEVER

*/
var _dist = 0;
var _header = document.getElementsByTagName('img')[0];
var _content = document.getElementsByClassName('Content')[0];
var _aside = document.getElementsByTagName('aside')[0];


/*

	A FEW HELPER FUNCTIONS

*/
function get_xy(el) {
	var box = el.getBoundingClientRect();
	return {
		x: box.left,
		y: box.top
	};
};

function render_transform(y) {
	return "translate(0px, " + y + "px)";
};

function render_scale(f) {
	return "scale(" + f + ", " + f + ")";
};


/*

	THE M3@T AND THE P0T@T035

*/
function onscroll(e) {
	var width = window.innerWidth;
	var pos = width < 1000 ? 0 : get_xy(_content).y;
	
	if (pos < 0)
		_aside.style.transform = render_transform(-pos);
	else
		_aside.style.transform = null;
	
	
	var doc = document.documentElement;
	var y = e.pageY || ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
	
	_header.style.transform = render_transform(y * 0.5) +
		" " +
		render_scale(Math.max(0, 1 - y * 0.0003));
	_header.style.opacity = 1 - y * 0.0015;
};

// OUR "LOOP"
onscroll({});
window.addEventListener('scroll', onscroll, false);
window.addEventListener('resize', onscroll, false);