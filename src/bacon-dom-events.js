// Generated by CoffeeScript 1.8.0
(function() {
  var __slice = [].slice;

  module.exports = function($) {
    var e, eventNames, events, _fn, _i, _len;
    eventNames = ["keydown", "keyup", "keypress", "click", "dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "dragstart", "drag", "dragenter", "dragleave", "dragover", "drop", "dragend", "resize", "scroll", "select", "change", "submit", "blur", "focus", "focusin", "focusout", "load", "unload"];
    events = {};
    _fn = function(e) {
      return events[e + 'E'] = function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return this.asEventStream.apply(this, [e].concat(__slice.call(args)));
      };
    };
    for (_i = 0, _len = eventNames.length; _i < _len; _i++) {
      e = eventNames[_i];
      _fn(e);
    }
    $.Extender.extend(events);
    $.Extender.asEventStream = Bacon.$.asEventStream;
    return $;
  };

}).call(this);

//# sourceMappingURL=bacon-dom-events.js.map
