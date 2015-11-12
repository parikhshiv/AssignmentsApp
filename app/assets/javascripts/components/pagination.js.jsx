var Pagination = React.createClass({
  getPage: function (pageNumber) {
    event.preventDefault();
    this.props.getPage(pageNumber);
  },
  changePage: function (addon) {
    event.preventDefault();
    this.props.changePage(addon);
  },
  render: function () {
    var pages = [ 1, 2, 3, 4, 5];
    return (
      <nav>
        <ul className="pagination">
          <li>
            <a onClick={this.changePage.bind(this, -1)} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pages.map(function (i) {
            return <li key={i} className={(i === this.props.activePage) ? "active" : ""}>
              <a onClick={this.getPage.bind(this, i)}>
                {i}
              </a>
            </li>
          }.bind(this))}
          <li>
            <a onClick={this.changePage.bind(this, 1)} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
})
