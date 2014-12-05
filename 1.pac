function FindProxyForURL(url) { 
if (shExpMatch(url,"http://elife.e-pointchina.com/*")
||shExpMatch(url,"http://*card360.com.cn")
)
{return "PROXY 192.168.1.184:8182";} return "DIRECT"; }