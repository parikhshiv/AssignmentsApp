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
    e.preventDefault();
    this.setState({title: null, description: "", due_at: null, errors: false});
  },
  render: function () {
    var errors;
    if (this.state.errors) {
      errors = "All fields must be completed.";
    }
    return (
      <div className="assignment-form">
        <div className="close pull-right" onClick={this.props.close}>X</div>
        <h3>Add A New Assignment</h3>
        <h4 className="errors">{errors}</h4>
        <form onSubmit={this.handleSubmit}>
          <div className = "form-input">
            <label>Title:</label>
            <br/>
            <input type="text"
            valueLink={this.linkState('title')}
            placeholder="Enter title here"/>
          </div>
          <div className = "form-input">
            <label>Due Date:</label>
            <br/>
            <input type="date"
            valueLink={this.linkState('due_at')}/>
          </div>
          <label>Description:</label>
          <textarea rows='20' cols='40' placeholder="Enter Description Here" valueLink={this.linkState('description')}/>
          <br/>
          <input type="Submit"/>
          <input className="pull-right reset-form" onClick={this.reset} value="Reset Form" readOnly/>
        </form>
      </div>
    )
  }
});
