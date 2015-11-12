### AssignmentsApp

[Live Link](http://assignmentapp.herokuapp.com/)

## Summary

AssignmentsApp is a single-page client-side application built on React.js and Flux that enables teachers to view student submissions to assignments. It does not connect to a database, but instead accesses the Edmodo API.

## Landing Page

![Landing Page](https://github.com/parikhshiv/SpeechGenius/blob/master/docs/screenshots/landing.png)

## Students submissions are sorted by Last Name for easy access

```
var last_name_sort = function (a, b) {
  var first = a.creator.last_name;
  var second = b.creator.last_name;
  if (first < second) {
    return -1;
  } else if (first === second) {
    return 0;
  } else {
    return 1;
  }
};
```

## Client-side grading function added - kept as React state of student submission

```
def show
    @speech = Speech.includes({comments: [:user, :votes]},
     :votes).find(params[:id])
  render :show
end
```

## Minimum Viable Product

### Requirements
1. A teacher can see a sidebar list of assignments with title and due date.
2. A teacher can select an assignment by clicking on it in the sidebar.
3. A teacher can toggle between assignment details and student submissions for the
selected assignment.
4. A teacher can expand a student submission in place to see the submission content..

### Optional features
1. The URL should reflect the selected assignment, either using the History API or a hash
fragment.
2. Reloading a page with a selected assignment should keep the assignment selected.
3. Add a button that brings up a modal to create a new assignment. The assignment should
be added to the sidebar and be selectable. The new assignment should only be created
on the client (no API call to create the assignment on the server).
