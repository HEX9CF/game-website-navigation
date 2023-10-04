function AddFavorite(sURL, sTitle) {
    sURL = encodeURI(sURL);
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
            alert("您的浏览器不支持自动收藏功能，请在本页面使用Ctrl+D进行添加收藏，或手动在浏览器里进行设置。");
        }
    }
}

function SetHome(url) {
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(url);
    } else {
        alert("您的浏览器不支持自动设置本页面为首页功能，请手动在浏览器里设置该页面为首页！");
    }
}
