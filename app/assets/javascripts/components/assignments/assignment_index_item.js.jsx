var AssignmentIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  onClick: function (e) {
    e.preventDefault();
    this.history.pushState(null, "/assignments/" + this.props.id);
  },
  render: function () {
    var dueAt = new Date(this.props.due_at)
    return <div className="speech-index-item" onClick={this.onClick}>
            {this.props.title}
            <br/>
            {dueAt.toDateString()}
          </div>
  }
})
