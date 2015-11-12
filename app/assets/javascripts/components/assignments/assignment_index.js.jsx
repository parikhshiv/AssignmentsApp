var AssignmentIndex = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {assignments: AssignmentStore.all(), activePage: 1};
  },
  componentWillMount: function () {
    AssignmentStore.addChangeListener(this._update);
    ApiUtil.fetchAssignments(this.state.activePage);
  },
  _update: function () {
    var assignments = (this.state.activePage === 1) ?
    AssignmentStore.all().concat(AssignmentStore.allNew()) :
    AssignmentStore.all();
    
    this.setState({assignments: assignments,
      activeAssignment: parseInt(this.props.params.assignmentID)});
  },
  componentWillUnmount: function () {
    AssignmentStore.removeChangeListener(this._update);
  },
  Activate: function (id) {
    this.setState({activeAssignment: id})
  },
  createAssignment: function (data) {
    var new_assignment = data;
    AssignmentStore.addNewAssignment(new_assignment)
    this.setState({assignments: this.state.assignments.concat(new_assignment),
      activeAssignment: data.id})
    this.history.pushState(null, "/assignments/" + data.id);
  },
  getPage: function (pageNumber) {
    ApiUtil.fetchAssignments(pageNumber);
    this.setState({activePage: pageNumber});
  },
  changePage: function (addon) {
    var pageNumber = this._wrapPageNumber(addon);
    ApiUtil.fetchAssignments(pageNumber);
    this.setState({activePage: pageNumber});
  },
  _wrapPageNumber: function (addon) {
    return ((this.state.activePage + addon - 1) % 5 + 5) % 5 + 1;
  },
  render: function () {
    var pages = [ 1, 2, 3, 4, 5];
    return (
      <div className = "page container-fluid">
        <Navbar Activate={this.Activate} createAssignment={this.createAssignment}/>
        <div className="index row">
          <div className=".col-xs-4">
            <h1>Assignments</h1>
            <Pagination changePage={this.changePage}
            activePage={this.state.activePage} getPage={this.getPage}/>
            <div className="list-group">
              {this.state.assignments.map(function (assignment) {
                  return <AssignmentIndexItem key={assignment.id} {...assignment}
                  Activate={this.Activate} active={this.state.activeAssignment === assignment.id}/>;
                }.bind(this))
              }
            </div>
          </div>
        </div>
        <div className="assignment container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
});
