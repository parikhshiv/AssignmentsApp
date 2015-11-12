var StartReact = function () {
  $(function () {
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;

    var rootEl = document.getElementById('container');

    React.render((
      <Router>
      <Route path="/" component={AssignmentIndex}>
        <Route path="assignments/:assignmentID" components={AssignmentShow}>
          <Route path="submissions" components = {SubmissionIndex}>
          </Route>
        </Route>
      </Route>
      </Router>
    ), rootEl);
  });
}
