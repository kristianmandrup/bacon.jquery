// Generated by CoffeeScript 1.8.0
(function() {
  init(function($) {
    $.ajax = function(params, abort) {
      return Bacon.fromPromise($.Request.ajax(params), abort);
    };
    $.ajaxGet = function(url, data, dataType, abort) {
      return $.ajax({
        url: url,
        dataType: dataType,
        data: data
      }, abort);
    };
    $.ajaxGetJSON = function(url, data, abort) {
      return $.ajax({
        url: url,
        dataType: "json",
        data: data
      }, abort);
    };
    Bacon.$.ajaxPost = function(url, data, dataType, abort) {
      return $.ajax({
        url: url,
        dataType: dataType,
        data: data,
        type: "POST"
      }, abort);
    };
    $.ajaxGetScript = function(url, abort) {
      return $.ajax({
        url: url,
        dataType: "script"
      }, abort);
    };
    $.lazyAjax = function(params) {
      return Bacon.once(params).flatMap(Bacon.$.ajax);
    };
    return Bacon.Observable.prototype.ajax = function() {
      return this.flatMapLatest($.ajax);
    };
  });

}).call(this);

//# sourceMappingURL=bacon-ajax.js.map