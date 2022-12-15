const redirecttogithub = () => {
document.write('<style>.redirect_parent {position: fixed;z-index: 99999;width: 200%;height: 200%;background-color: #000;opacity: 0.5;top: 0px;left: 0px;}.redirect {position: fixed;top: 10%;width: 60%;margin-left: 20%;margin-right: 20%;background-color: snow;opacity: 1;z-index: 100000;font-size: 50px;}</style><div class="redirect_parent"></div><div class="redirect">this page will redirect to the new page</div><br><h3>or go to yourself by <a href="https://cidertrafficlight.github.io">this link</a></h3>')
now_url = location.pathname
location.href = 'https://cidertrafficlight.github.io/redirect?url='+now_url
}
setInterval(redirecttogithub,1)