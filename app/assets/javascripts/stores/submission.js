(function(root) {
  'use strict';
  var _submissions = [];
  var CHANGE_EVENT = "change";

  var resetSubmissions = function(submissions){
    _submissions = submissions.slice(0);
  };

  var created_at_sort = function (a, b) {
    var first = a.created_at;
    var second = b.created_at;
    if (first < second) {
      return -1;
    } else if (first === second) {
      return 0;
    } else {
      return 1;
    }
  };

  var SubmissionStore = root.SubmissionStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _submissions.slice();
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case SubmissionConstants.SUBMISSIONS_RECIEVED:
          resetSubmissions(payload.submissions);
          SubmissionStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
