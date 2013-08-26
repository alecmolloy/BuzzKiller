setInterval(function(){
    var anchorTags = document.getElementsByTagName('a');
    
    for (var i = 0; i < anchorTags.length; i++) {
        if ((anchorTags[i].href.indexOf("buzzfeed.com") > -1) || (anchorTags[i].href.indexOf("upworthy.com") > -1))
        {
            anchorTags[i].href = "http://en.wikipedia.org/wiki/Special:Random";
            // for facebook and a few other sites, which fake the href:
            anchorTags[i].onmouseover = null;
            anchorTags[i].onclick = null;
            anchorTags[i].removeAttribute("onclick");
            anchorTags[i].removeAttribute("onmouseover");
        }
    }
},150);
