(function(root) {
  'use strict';
  var _assignments = [];
  var CHANGE_EVENT = "change";

  var resetAssignments = function(assignments){
    _assignments = assignments.slice(0);
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

  var AssignmentStore = root.AssignmentStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _assignments.slice();
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case AssignmentConstants.ASSIGNMENTS_RECIEVED:
          resetAssignments(payload.assignments);
          AssignmentStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
