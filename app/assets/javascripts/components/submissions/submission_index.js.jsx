var SubmissionIndex = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {submissions: SubmissionStore.all(), activePage: 1};
  },
  componentWillMount: function () {
    SubmissionStore.addChangeListener(this._update);
    ApiUtil.fetchSubmissions(this.props.params.assignmentID, this.state.activePage);
  },
  _update: function () {
    this.setState({submissions: SubmissionStore.all()});
  },
  componentWillUnmount: function () {
    SubmissionStore.removeChangeListener(this._update);
  },
  getPage: function (pageNumber) {
    ApiUtil.fetchSubmissions(this.props.params.assignmentID, pageNumber);
    this.setState({activePage: pageNumber});
  },
  changePage: function (addon) {
    var pageNumber = this._wrapPageNumber(addon);
    ApiUtil.fetchSubmissions(this.props.params.assignmentID, pageNumber);
    this.setState({activePage: pageNumber});
  },
  _wrapPageNumber: function (addon) {
    return ((this.state.activePage + addon - 1) % 5 + 5) % 5 + 1;
  },
  render: function () {
    var dueAt = new Date(this.props.due_at)
    var pages = [ 1, 2, 3, 4, 5];
    return <ul className="media-list">
            <Pagination changePage={this.changePage}
            activePage={this.state.activePage} getPage={this.getPage}/>
            {this.state.submissions.map(function (submission) {
              return <SubmissionIndexItem
              key={submission.id} {...submission}/>
            })}
          </ul>
  }
})
