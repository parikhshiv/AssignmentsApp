var AssignmentIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {active: false};
  },
  onClick: function (e) {
    e.preventDefault();
    this.props.Activate(this.props.id);
    this.history.pushState(null, "/assignments/" + this.props.id);
  },
  render: function () {
    var dueAt = new Date(this.props.due_at)
    var active = this.props.active ? " active" : "";
    return <a className={"list-group-item" + active} onClick={this.onClick}>
            {this.props.title}
            <br/>
            due {dueAt.toDateString()}
          </a>
  }
})
