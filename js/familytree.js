// JavaScript Document
function loadtree()
{
	var w = window;
	var d = document;
	var e = d.documentElement;
	var g = d.getElementsByTagName('body')[0];
	var x = w.innerWidth || e.clientWidth || g.clientWidth;
	if (x < 1028) 
	{
		document.getElementById("tree-1950s").src = "images/Family Tree/1950s-tree-s.png";
		document.getElementById("tree-1950s").style.display = "block";
		document.getElementById("tree-1960s").src = "images/Family Tree/1960s-tree-s.png";
		document.getElementById("tree-1960s").style.display = "block";
	} 
	else 
	{
		document.getElementById("tree-1950s").src = "images/Family Tree/1950s-tree-b.png";
		document.getElementById("tree-1950s").style.display = "block";
		document.getElementById("tree-1960s").src = "images/Family Tree/1960s-tree-b.png";
		document.getElementById("tree-1960s").style.display = "block";
	}
}