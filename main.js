var anchorTags = document.getElementsByTagName('a');

for (var i = 0; i < anchorTags.length; i++) {
    if (anchorTags[i].href.indexOf("buzzfeed.com") > -1)
    {
        anchorTags[i].href = "http://en.wikipedia.org/wiki/Special:Random";
        // for facebook and a few other sites, which fake the href:
        anchorTags[i].onmouseover = "";
        anchorTags[i].onclick = "";
    }
}

