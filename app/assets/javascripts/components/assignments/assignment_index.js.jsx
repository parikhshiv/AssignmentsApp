// var ReactPaginate = require('react-paginate');
var AssignmentIndex = React.createClass({
  getInitialState: function () {
    return {assignments: AssignmentStore.all()};
  },
  componentWillMount: function () {
    AssignmentStore.addChangeListener(this._update);
    ApiUtil.fetchAssignments();
  },
  _update: function () {
    this.setState({assignments: AssignmentStore.all()});
  },
  componentWillUnmount: function () {
    AssignmentStore.removeChangeListener(this._update);
  },
  newAssignment: function (e) {
    e.preventDefault();
    // create modal here
  },
  render: function () {
    return (
      <div className = "page-container">
        <div className="new-assignment" onClick={this.newAssignment}>
          New Assignment!
        </div>
        <div className="index">
          <h1>Assignments</h1>
          {this.state.assignments.map(function (assignment) {
              return <AssignmentIndexItem key={assignment.id} {...assignment}/>;
            })
          }
        </div>
        <div className="assignment-container">
          {this.props.children}
        </div>
      </div>
    );
  }
});
