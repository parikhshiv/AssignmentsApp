SubmissionIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {detailHidden: true}
  },
  onClick: function (e) {
    e.preventDefault();
    this.setState({detailHidden: !(this.state.detailHidden)})
  },
  render: function () {
    var submittedAt = new Date(this.props.submitted_at)
    hidden = this.state.detailHidden ? "invisible" : ""
    return (
        <div className="">
          <div className="speech-index-item" onClick={this.onClick}>
            <h4>{this.props.creator.first_name} {this.props.creator.last_name}</h4>
            <br/>
            turned in on {submittedAt.toDateString()}
            <br/>
            <img src={this.props.creator.avatars.large}/>
          </div>
          <div className={hidden}>
            {this.props.content}
          </div>
        </div>
    )
  }
})
