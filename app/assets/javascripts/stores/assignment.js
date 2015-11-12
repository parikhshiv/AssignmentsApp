(function(root) {
  'use strict';
  var _assignments = [];
  var _newAssignments = [];
  var CHANGE_EVENT = "change";

  var resetAssignments = function(assignments){
    _assignments = assignments.slice(0);
  };

  var AssignmentStore = root.AssignmentStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _assignments.slice();
    },
    allNew: function () {
      return _newAssignments.slice();
    },
    addNewAssignment: function (assignment) {
      _newAssignments.push(assignment)
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
