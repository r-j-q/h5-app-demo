
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tab/index/index","pages/tab/vance/index","pages/tab/weath/index","pages/userLoginRegister/login","pages/nativeDetail/index","pages/stockList","pages/describe/index","pages/describe/webView","pages/ploutoDetail/index","pages/userLoginRegister/register","pages/mine/index","pages/tab/mine/index","pages/more/index","App"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#fff","backgroundColor":"#F5F5F5","onReachBottomDistance":10,"rpxCalcMaxDeviceWidth":1024,"rpxCalcBaseDeviceWidth":375,"rpxCalcIncludeWidth":750},"tabBar":{"color":"#776f86","selectedColor":"#3ce5bc","backgroundColor":"#191224","borderStyle":"#776f86","list":[{"pagePath":"pages/tab/index/index","text":"Signals","iconPath":"static/images/signals.png","selectedIconPath":"static/images/signalsActive.png"},{"pagePath":"pages/tab/vance/index","text":"Vane","iconPath":"static/images/stockVane.png","selectedIconPath":"static/images/stockVaneActive.png"},{"pagePath":"pages/tab/weath/index","text":"Wealth","iconPath":"static/images/wealth.png","selectedIconPath":"static/images/wealthActive.png"},{"pagePath":"pages/tab/mine/index","text":"Me","iconPath":"static/images/my.png","selectedIconPath":"static/images/my-active.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"Plouto","compilerVersion":"3.4.15","entryPagePath":"pages/tab/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tab/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"Signals","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white"}},{"path":"/pages/tab/vance/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"Stock Vane","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white"}},{"path":"/pages/tab/weath/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"Wealth Quarterly Guide","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white"}},{"path":"/pages/userLoginRegister/login","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"","navigationStyle":"custom"}},{"path":"/pages/nativeDetail/index","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white"}},{"path":"/pages/stockList","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"Free Signals","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white"}},{"path":"/pages/describe/index","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"describe","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white"}},{"path":"/pages/describe/webView","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white","navigationStyle":"custom"}},{"path":"/pages/ploutoDetail/index","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"Details","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white"}},{"path":"/pages/userLoginRegister/register","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"","navigationStyle":"custom"}},{"path":"/pages/mine/index","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"My Subscriptions","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white"}},{"path":"/pages/tab/mine/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"Me","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white"}},{"path":"/pages/more/index","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"More","navigationBarBackgroundColor":"#191224","navigationBarTextStyle":"white","enablePu11lDownRefresh":true,"onReachBottomDistance":50}},{"path":"/App","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});