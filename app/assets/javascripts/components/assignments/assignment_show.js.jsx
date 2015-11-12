var AssignmentShow = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    var assignmentID = this.props.params.assignmentID;
    var assignment = this._setAssignment(assignmentID);
    return { assignment: assignment}
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.params.assignmentID !== this.props.params.assignmentID) {
      ApiUtil.fetchSubmissions(nextProps.params.assignmentID);
      this._updateAssignment(nextProps);
    }
  },
  componentWillMount: function () {
    AssignmentStore.addChangeListener(this._updateAssignment);
    ApiUtil.fetchAssignments();
    ApiUtil.fetchSubmissions(this.props.params.assignmentID);
  },
  componentWillUnmount: function () {
    AssignmentStore.removeChangeListener(this._updateAssignment);
  },
  _updateAssignment: function (nextProps) {
    var assignmentID = (nextProps) ? nextProps.params.assignmentID :
    this.props.params.assignmentID;
    var assignment = this._setAssignment(assignmentID);
    this.setState({ assignment: assignment});
  },
  _findNewAssignmentById: function (id) {
    if (AssignmentStore.all().length > 0) {
      var res;
       AssignmentStore.allNew().forEach(function (assignment) {
        if (id == assignment.id) {
          res = assignment;
        }
      }.bind(this));
      return res;
    }
  },
  _findAssignmentById: function (id) {
    var res;
     AssignmentStore.all().forEach(function (assignment) {
      if (id == assignment.id) {
        res = assignment;
      }
    }.bind(this));
    return res;
  },
  _setAssignment: function (assignmentID) {
    var assignment = (assignmentID < 1000) ?
    this._findNewAssignmentById(assignmentID) || {} :
    this._findAssignmentById(assignmentID) || {} ;
    return assignment;
  },
  assignmentClick: function (e) {
    e.preventDefault();
    this.history.pushState(null, "/assignments/" +
    this.props.params.assignmentID);
  },
  submissionClick: function (e) {
    e.preventDefault();
    this.history.pushState(null, "/assignments/" +
    this.props.params.assignmentID + "/submissions");
  },
  render: function () {
    var hidden = this.props.children ? " invisible" : "";
    var assignmentActive = this.props.children ? "" : "active";
    var submissionActive = this.props.children ? "active" : "";

    var date = new Date(this.state.assignment.due_at);
    if (date.toString() !== "Invalid Date") {
      var dueAt = "due " + date.toDateString();
    }
    return (
      <div className="assignment-tabs">
        <ul className="nav nav-tabs">
          <li onClick={this.assignmentClick} className={assignmentActive}>
          <a href="#">Assignment</a></li>
          <li onClick={this.submissionClick} className={submissionActive}>
          <a href="#">Submissions</a></li>
        </ul>
        <div className={"page-header" + hidden}>
          <h1>{this.state.assignment.title}
          <small className="right">{dueAt}</small>
          <br/>
          <small>{this.state.assignment.description}</small>
          </h1>
        </div>
        <div className="submissions-index">
          {this.props.children}
        </div>
      </div>
    )
  }
})
