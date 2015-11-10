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
    hidden = this.state.detailHidden ? " invisible" : ""
    return (
      <li className="media" onClick={this.onClick}>
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={this.props.creator.avatars.large} alt="..."/>
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.creator.first_name} {this.props.creator.last_name}</h4>
          <div className="pull-right">turned in on {submittedAt.toDateString()}</div>
          <br/>
          <br/>
          <div className={hidden}>
            {this.props.content}
          </div>
        </div>
      </li>
    )
  }
})

// <div className="container-fluid submission-index-item">
//   <div className="media" onClick={this.onClick}>
//     <div className="media-left">
//       <a href="#">
//         <img className="media-object" src={this.props.creator.avatars.large} alt=""/>
//       </a>
//     </div>
//     <div className="media-body">
//       <h4 className="media-heading">{this.props.creator.first_name} {this.props.creator.last_name}</h4>
//       turned in on {submittedAt.toDateString()}
//       <div className={hidden}>
//         {this.props.content}
//       </div>
//     </div>
//     <br/>
//   </div>
// </div>
