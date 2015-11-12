SubmissionIndexItem = React.createClass({
  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],
  getInitialState: function () {
    return {detailHidden: true, grade: this.props.grade}
  },
  onClick: function (e) {
    e.preventDefault();
    if (e.target.className !== "grade"){
      this.setState({detailHidden: !(this.state.detailHidden)})
    }
  },
  componentWillUnmount: function () {
    SubmissionStore.addGrade(this.props.id, this.state.grade);
  },
  render: function () {
    var submittedAt = new Date(this.props.submitted_at)
    hidden = this.state.detailHidden ? " invisible" : ""
    return (
      <li className="media" onClick={this.onClick}>
        <div className="media-left">
          <a href="#">
            <img className="media-object"
            src={this.props.creator.avatars.large} alt="..."/>
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            {this.props.creator.first_name} {this.props.creator.last_name}
          </h4>
          <div className="grade">
            <h5>Grade:</h5>
            <input className="grade"
              valueLink={this.linkState('grade')}/>
          </div>
          <div className="pull-right turn-in">
            Turned in on {submittedAt.toDateString()}
          </div>
          <br/>
          <div className={"content" + hidden}>
            {this.props.content}
          </div>
        </div>
      </li>
    )
  }
})
