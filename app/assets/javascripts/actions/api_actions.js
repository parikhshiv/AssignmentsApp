ApiActions = {
  receiveAssignments: function(assignments){
    AppDispatcher.dispatch({
      actionType: AssignmentConstants.ASSIGNMENTS_RECIEVED,
      assignments: assignments
    });
  },
  receiveSubmissions: function(submissions){
    AppDispatcher.dispatch({
      actionType: SubmissionConstants.SUBMISSIONS_RECIEVED,
      submissions: submissions
    });
  },
  receiveSpeeches: function(speeches){
    AppDispatcher.dispatch({
      actionType: SpeechConstants.SPEECHES_RECIEVED,
      speeches: speeches
    });
  },
  receiveAnnotations: function (annotations) {
    AppDispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATIONS_RECEIVED,
      annotations: annotations
    });
  },
  receiveFilteredSpeeches: function (speeches) {
    AppDispatcher.dispatch({
      actionType: SpeechConstants.FILTERED_SPEECHES_RECIEVED,
      speeches: speeches
    });
  }
};
