var StartReact = function () {
  $(function () {
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;

    var rootEl = document.getElementById('container');

    var App = React.createClass({
      render: function () {
        return (
          <div className="App">
            <Navbar/>
            {this.props.children}
          </div>
        );
      }
    });

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


// <Route path="/" component={App}>
// </Route>
// <IndexRoute component={}>

// </IndexRoute>
// <Route path="about" component={AboutPage}/>
// <Route path="speeches/new" component={SpeechForm}/>
// <Route path="speeches/edit/:speechID" component={SpeechEditForm}/>
// <Route path="speeches/:speechID/annotations/edit/:annotationID" component={AnnotationEditForm}/>
// <Route path="speeches/:speechID" component={SpeechShow}>
//   <Route path="annotations/:annotationID" components={AnnotationShow}/>
// </Route>
