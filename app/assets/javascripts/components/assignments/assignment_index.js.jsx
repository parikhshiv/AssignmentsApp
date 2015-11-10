// var ReactPaginate = require('react-paginate');
var AssignmentIndex = React.createClass({
  getInitialState: function () {
    return {assignments: AssignmentStore.all(), active: null};
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
  Activate: function (id) {
    this.setState({active: id})
  },
  render: function () {
    return (
      <div className = "page container-fluid">
        <Navbar Activate={this.Activate}/>
        <div className="index row">
          <div className=".col-xs-4">
            <h1>Assignments</h1>
            <nav>
            <ul className="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="list-group">
            {this.state.assignments.map(function (assignment) {
                return <AssignmentIndexItem key={assignment.id} {...assignment}
                Activate={this.Activate} active={this.state.active === assignment.id}/>;
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
