var AssignmentShow = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    var assignmentID = this.props.params.assignmentID;
    var assignment = this._findAssignmentById(assignmentID) || {} ;
    return { assignment: assignment}
  },
  componentWillReceiveProps: function (nextProps) {
    ApiUtil.fetchSubmissions(nextProps.params.assignmentID);
    var assignmentID = nextProps.params.assignmentID;
    var assignment = this._findAssignmentById(assignmentID) || {} ;
    this.setState({ assignment: assignment});
  },
  componentWillMount: function () {
    AssignmentStore.addChangeListener(this._updateAssignment);
    // window.addEventListener('mouseup', this.clearAnnotationLink);
    ApiUtil.fetchAssignments();
  },
  componentWillUnmount: function () {
    AssignmentStore.removeChangeListener(this._updateAssignment);
    // window.removeEventListener('mouseup', this.clearAnnotationLink);
  },
  _updateAssignment: function () {
    var assignmentID = this.props.params.assignmentID;
    var assignment = this._findAssignmentById(assignmentID) || {} ;
    this.setState({ assignment: assignment});
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
  assignmentClick: function (e) {
    e.preventDefault();
    this.history.pushState(null, "/assignments/" + this.props.params.assignmentID);
  },
  submissionClick: function (e) {
    e.preventDefault();
    this.history.pushState(null, "/assignments/" + this.props.params.assignmentID + "/submissions");
  },
  render: function () {
    var hidden = this.props.children ? " invisible" : ""
    return (
      <div className="assignment-tabs">
        <div className="tabs">
          <div onClick={this.assignmentClick}>Assigment</div>
          <div onClick={this.submissionClick}>Submissions</div>
        </div>
        <div className={"assignment-show" + hidden}>
          {this.state.assignment.description}
        </div>
        <div className="submissions-index">
          {this.props.children}
        </div>
      </div>
    )
  }
})
