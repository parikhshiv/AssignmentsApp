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
};
