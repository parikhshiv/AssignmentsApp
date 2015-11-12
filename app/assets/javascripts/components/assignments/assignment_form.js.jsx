var AssignmentForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function () {
    return {title: null, description: null, due_at: null};
  },
  handleSubmit: function (e) {
    e.preventDefault();
    if (this._validated()) {
      this.props.close();
      var id = $(document.getElementsByClassName("list-group")).children().length
      this.props.createAssignment($.extend({}, this.state, {id: id}));
      this.setState({title: null, description: "", due_at: null, errors: false});
    } else {
      this.setState({errors: true});
    }
  },
  _validated: function () {
    var state = this.state;
    if (state.title && state.description && state.due_at) {
      return (state.title.length > 0 && state.description.length > 0 &&
          state.due_at.length > 0);
    }
    return false;
  },
  reset: function (e) {
    if (!e || e.target.className === "modal-container container" ||
      e.target.className === "close pull-right") {
      this.props.close()
      this.setState({title: null, description: "", due_at: null, errors: false});
    }
  },
  render: function () {
    var errors;
    var hidden = this.props.hidden ? " invisible" : ""
    if (this.state.errors) {
      errors = "All fields must be completed.";
    }
    return (
      <div className={"modal-container container" + hidden} onClick={this.reset}>
        <div className="assignment-form">
          <div className="close pull-right" onClick={this.reset}>X</div>
          <h3>Add A New Assignment</h3>
          <h4 className="errors">{errors}</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control"
               valueLink={this.linkState('title')} placeholder="Title"/>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" valueLink={this.linkState('due_at')}
              className="form-control"/>
            </div>
            <label>Description</label>
            <textarea className="form-control" rows="9"
            placeholder="Enter Description Here"
            valueLink={this.linkState('description')}></textarea>
            <button type="submit" className="submit btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    )
  }
});
