var SubmissionIndex = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {submissions: SubmissionStore.all()};
  },
  componentWillMount: function () {
    SubmissionStore.addChangeListener(this._update);
    ApiUtil.fetchSubmissions(this.props.params.assignmentID);
  },
  _update: function () {
    this.setState({submissions: SubmissionStore.all()});
  },
  componentWillUnmount: function () {
    SubmissionStore.removeChangeListener(this._update);
  },
  render: function () {
    var dueAt = new Date(this.props.due_at)
    return <div className="submissions-index">
            {this.state.submissions.map(function (submission) {
              return <SubmissionIndexItem
              key={submission.id} {...submission}/>
            })}
          </div>
  }
})
