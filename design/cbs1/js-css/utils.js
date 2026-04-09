/*
function OpenMenus (id, clickedId) 
{
	var node = document.getElementById (id);
	
	if (node == undefined) {
		return;
	}
	
	if (node.className == "Expander" && id == clickedId) {
		node.className = "Open Active";
	} else {
		if (node.className == "Expander") {
			node.className = "Open";
		} else {
			if (id == clickedId) {
				node.className = "Active";
			}
		}
	}
	
	var parentnode = node.parentNode;
	if (parentnode != undefined) {
		parentparentnode = parentnode.parentNode;
		if (parentparentnode != undefined) {
			if (parentparentnode.nodeName.toLowerCase() == "li") {
				var parentid = parentparentnode.getAttribute('id');
				if (parentid != undefined) {
					OpenMenus (parentid, clickedId);
				}
			}
		}
	}

	var ulList = node.getElementsByTagName ('ul');
	if (ulList != undefined && ulList != null && ulList.length > 0) {
		ulList[0].style.display = "block";
	}
}
*/
function equalHeight(group) {
   tallest = 0;
   group.each(function() {
      thisHeight = $(this).height();
      if(thisHeight > tallest) {
         tallest = thisHeight;
      }
   });
   group.height(tallest);
}
$(document).ready(function() {
   equalHeight($(".column"));
});

function SetFrontpageBorder ()
{
	var node = document.getElementById ('Main');
	if (node != undefined) {
		node.style.borderLeftColor = '#ffffff';
	}
}

function SetColumnHeight (id, pid)
{
	var node = document.getElementById (id);
	if (node == undefined) {
		return;
	}
	
	var mainnode = document.getElementById (pid);
	if (mainnode == undefined) {
		return;
	}

	if (node.offsetHeight < mainnode.offsetHeight) {
		node.style.height = mainnode.offsetHeight + 'px';
	}
}

function SetContentSize (w)
{
	var node = document.getElementById ('Content');
	if (node == undefined) {
		return;
	}
	
	node.style.width = w;
}

function SetRightIntegrated ()
{
	var node = document.getElementById ('Right');
	if (node == undefined) {
		return;
	}
	
	node.style.backgroundColor = '#ffffff';
	node.style.borderLeft = '0px solid #ffffff';
	node.style.borderBottom = '0px solid #ffffff';
}

function openwindow (href,id,w,h)
{
    win=window.open(href,id,"height="+h+",width="+w+",status=yes,menubar=yes,toolbar=yes,location=yes,resizable=yes,scrollbars=yes");
    win.focus();
}

function openvideowindow(videoid,haslow,w,h) {

    if (!w) { w = 700; }
    if (!h) { h = 530; }

    xtop = ( (screen.height - w)/2)  + 0;
    xleft = ( (screen.width - h)/2)  + 0;

    var playerurl = '';
    var panoptoUrl = 'https://cbs.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=' + videoid + '&v=1&autoplay=false&showTitle=false&offerviewer=false';

    playerurl = panoptoUrl;

    win=window.open(playerurl
	,null,"height="+h+",width="+w+",top=" + xtop + ",left=" + xleft + ",status=no,menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=no");
    win.focus();

}
function openvideowindow_deprecated (hrefvideo,haslow,w,h)
{

    if (!haslow) { haslow = 0; }
    if (!w) { w = 480; }
    if (!h) { h = 304; }

    if (haslow) { h = h + 25; }



    xtop = ( (screen.width - w)/2)  - 0;
    xleft = ( (screen.height - h)/2)  + 20;

    win=window.open("http://cbscast.cbs.dk/cbsplayer/?f=" + hrefvideo + "&haslow=" + haslow
	,null,"height="+h+",width="+w+",top=" + xtop + ",left=" + xleft + ",status=no,menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=no");
    win.focus();
}

function validateemail(oneemail) 
{
	if (oneemail.indexOf('@')==-1) return false;
  	var splitemail=oneemail.split('@');
  	if (splitemail[0].length==0 || splitemail[0].length>63) return false;
  	if (splitemail[1].indexOf('.')==-1) return false;
  	var validdomain=splitemail[1].split('.');
  	if (validdomain[0].length==0 || validdomain[0].length>63) return false;
  	return true; 
}

function RotateBanner (nodeId)
{
        var node = document.getElementById (nodeId);
        if (node == undefined) return;

        var len = 12;
        var arr = new Array(len);
        arr[0] = "cbs-1.gif";
        arr[1] = "cbs-2.gif";
		arr[2] = "cbs-3.gif";
		arr[3] = "cbs-4.gif";
		arr[4] = "cbs-5.gif";
		arr[5] = "cbs-6.gif";
		arr[6] = "cbs-7.gif";
		arr[7] = "cbs-8.gif";
		arr[8] = "cbs-9.gif";
		arr[9] = "cbs-10.gif";
		arr[10] = "cbs-11.gif";
		arr[11] = "cbs-12.gif";
		
        var idx = Math.floor(Math.random()*len);

        node.style.background = "url('/design/cbs/images/friser/" + arr[idx] + "')";
}

function DeleteChildren (node)
{
	var child = node.firstChild;

	while (child != undefined)
	{
		node.removeChild(child);
		child = node.firstChild;
	}
}



function GetOrganizationalUnits (lang)
{
	dojo.xhrPost ({
		url: '/html/odsoap.php',
		handleAs: 'json',
		mimetype: 'text/json-comment-filtered',
		content: {'type': 'json', 'func': 'GetOrganizationalUnits', 'lang': lang},
		load: GetOrganizationalUnitsResult,
		error: SearchError
	});
	
	return false;
}

function Search ()
{
	dojo.xhrPost ({
		url: '/html/odsoap.php',
		handleAs: 'json',
		mimetype: 'text/json-comment-filtered',
		form: document.getElementById('SearchForm'),
		load: SearchResult,
		error: SearchError
	});
	
	return false;
}

function SearchDept (dept)
{
	dojo.xhrPost ({
		url: '/html/odsoap.php',
		handleAs: 'json',
		mimetype: 'text/json-comment-filtered',
		content: {'type': 'json', 'func': 'GetUserList', 'dept': dept},
		load: SearchResult,
		error: SearchError
	});
	
	return false;
}

function SearchError (response, ioArgs)
{
}


function GetOrganizationalUnitsResult (content, args)
{
	var elm = document.getElementById('Departments');
	if (elm == undefined) return false;

	DeleteChildren (elm);
	var len = content.length;
	
	var def = document.createElement ('option');
	def.setAttribute('value', '');
	def.innerHTML = '';
	elm.appendChild (def);
	
	for (i=0; i<len; i++)
	{
		var opt = document.createElement ('option');
		opt.setAttribute('value', content[i]['ou']);
		opt.innerHTML = content[i]['cn'] + ' (' + content[i]['ou'].toUpperCase() + ')';
		elm.appendChild (opt);
	}
}

function SearchResult (content, args)
{
	var header = document.getElementById('SearchResultDiv');
	if (header == undefined) return false;
	
	var elm = document.getElementById('SearchResult');
	if (elm == undefined) return false;

	var nodiv = document.getElementById('SearchResultNoneDiv');
	if (nodiv == undefined) return false;

	DeleteChildren (elm);
	var len = content.length;
	
	if (len <= 0)
	{
		nodiv.style.display = '';
		header.style.display = 'none';
	} else {
		nodiv.style.display = 'none';
		header.style.display = '';
	}
	
	for (i=0; i<len; i++)
	{
		var tr = document.createElement ('tr');
		
		var td1 = document.createElement ('td');
		td1.innerHTML = content[i]['name'] != null ? '&nbsp;' + content[i]['name'] : '&nbsp;';
		
		var td2 = document.createElement ('td');
		if (content[i]['ou'] != null) {
			td2.innerHTML = "<a href=\"javascript:return false;\" onclick=\"return SearchDept('" + content[i]['ou'] + "');\">" + content[i]['ou'] + "</a>";
			td2.style.cursor = 'pointer';
		}
		
		var td3 = document.createElement ('td');
		td3.innerHTML = content[i]['roomnumber'] != null ? content[i]['roomnumber'] : '&nbsp;';

		var td4 = document.createElement ('td');
		td4.innerHTML = content[i]['email'] != null ? "<a href='mailto:" + content[i]['email'] + "'>" + content[i]['email'] + "</a>" : '&nbsp;';

		var td5 = document.createElement ('td');
		td5.innerHTML = content[i]['phone'] != null ? content[i]['phone'] + '&nbsp;' : '&nbsp;';
		td5.className = 'Right';
		
		tr.appendChild (td1);
		tr.appendChild (td2);
		tr.appendChild (td3);
		tr.appendChild (td4);
		tr.appendChild (td5);
		elm.appendChild (tr);
	}
}

