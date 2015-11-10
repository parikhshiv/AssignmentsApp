var Navbar = React.createClass({
  mixins: [ReactRouter.History],
  home: function (e) {
    e.preventDefault();
    this.props.Activate();
    this.history.pushState(null, "/");
  },
  logOut: function () {
    ApiUtil.logOut();
  },
  newAssignment: function (e) {
    e.preventDefault();
    // create modal here
  },
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <button type="button" className="btn btn-default navbar-btn pull-left">New Assignment!</button>
          <div className="navbar-header">
            <a className="navbar-brand title" onClick={this.home}>assignments</a>
          </div>

        </div>
      </nav>
    );
  }
});

// <header>
//   <h1 onClick={this.home} className="home-page">assignments</h1>
// </header>
