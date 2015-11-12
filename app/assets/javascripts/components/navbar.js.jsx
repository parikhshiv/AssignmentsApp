var Navbar = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {showModal: false};
  },
  home: function (e) {
    e.preventDefault();
    this.props.Activate();
    this.history.pushState(null, "/");
  },
  logOut: function () {
    ApiUtil.logOut();
  },
  close(e) {
    if (!e || e.target.className === "modal-container container" ||
      e.target.className === "close pull-right") {
      this.setState({ showModal: false });
    }
  },
  open(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  },
  render: function () {
    var hidden = !(this.state.showModal);
    return (
        <nav className="navbar navbar-default">
          <div className="special-container container-fluid">
            <button type="button" className="btn btn-default navbar-btn pull-left new-assignment-btn"
              onClick={this.open}>
              New Assignment!
            </button>
            <AssignmentForm close={this.close} hidden={hidden}
            createAssignment={this.props.createAssignment}/>
            <div className="navbar-header">
              <a className="navbar-brand title" onClick={this.home}>
                AssignmentsApp
              </a>
            </div>
          </div>
        </nav>

    );
  }
});
