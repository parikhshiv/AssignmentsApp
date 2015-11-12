ApiUtil = {
  fetchAssignments: function (pageNumber) {
    pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : 1;
    $.ajax({
      url: "https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d",
      type: "get",
      data: {page: pageNumber, per_page: 4},
      success: function (assignments) {
       ApiActions.receiveAssignments(assignments);
      }
    });
  },
  fetchSubmissions: function (data, pageNumber) {
    pageNumber = typeof pageNumber !== 'undefined' ? pageNumber : 1;
    $.ajax({
      url: "https://api.edmodo.com/assignment_submissions?assignment_id=" +
       data +
       "&assignment_creator_id=73240721&access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d",
      type: "get",
      data: {page: pageNumber, per_page: 4},
      success: function (submissions) {
       ApiActions.receiveSubmissions(submissions);
      }
    });
  }
};
