console.log("Heap Analytics (MarketoLive) > Running");

/**************************************************************************************
 *
 *  This script contains all of the functionality needed for loading Heap Analytics on
 *  MarketoLive demo environments.
 *
 *  @Author Brian Fisher
 *
 *  @namespace
 *
 **************************************************************************************/

var prod = "3521051524",
dev = "3020587545",
env = prod;

/**************************************************************************************
 *
 *  Main
 *
 **************************************************************************************/

window.heap = window.heap || [], heap.load = function (e, t) {
  window.heap.appid = e,
  window.heap.config = t = t || {};
  var r = t.forceSSL || "https:" === document.location.protocol,
  a = document.createElement("script");
  a.type = "text/javascript",
  a.async = !0,
  a.src = (r ? "https:" : "http:") + "//cdn.heapanalytics.com/js/heap-" + e + ".js";
  var n = document.getElementsByTagName("script")[0];
  n.parentNode.insertBefore(a, n);
  for (var o = function (e) {
    return function () {
      heap.push([e].concat(Array.prototype.slice.call(arguments, 0)))
    }
  }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], c = 0; c < p.length; c++)
    heap[p[c]] = o(p[c])
};

heap.load(env, {
  forceSSL: true
});