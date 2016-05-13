## Theodoro-React Pomodoro Timer and Todo List

## Introduction

Theodoro is a todo list and Pomodoro timer combination built using React, Gulp, and generic Bootstrap components. If you're unfamiliar, <a href="http://pomodorotechnique.com/">the Pomodoro method</a> is a popular way of working involving 25 minutes of work followed by 5 minutes of rest.

Let's get one thing out of the way first—**the project is pretty ugly.** It's mobile responsive (or it should be), and it uses default Bootstrap components so it's not terrible. I used this project to learn about React not practice my design skills. First, I wanted to build this through default JavaScript methods. Next, I'll translate everything to using Reflux.

The clock component contains two default settings—25 min on/5 min off or 50 min on/10 min off. The todo component does the basics. You should be able to add, edit, and delete todos. It shouldn't allow you to add duplicate todos or create empty ones. Here's a little snapshot in action:

## Code Samples

I ran into a few typical gotchas while building the todo list. I'll highlight the ones that caused me to scratch my head for a sec.

#### Keeping the `todo` component stateless

The main issue was updating the todo when it was edited. I circumvented that issue using `onChange` on the `input` and passing the `event.target.value` to the `editTask` prop of the `todo`. Here's an abbreviated example:

```
// Todo component

editTask: function( event ) {
	this.props.editTask( event.target.value );
},

// in render
<input type="text" value={ this.props.taskValue } onChange={ this.editTask } />
```

Then, in Todolist, I could access the value of `event.target.value`:

```
// Todolist component
onEditTask: function( i, event ) {
	// Set the task field equal to the event.target.value passed in
	this.incompleteTaskHolder[i].taskValue = event;

	// Update the state
	this.setState( {
		incompleteTasks: this.incompleteTaskHolder
	} );
},

// in render
<Todo
    editTask={ this.onEditTask.bind( null, i ) }
/>
```

#### Figuring out which todo was being worked on
It seems pretty darn simple, but with todolist holding all of the information about the actual todos, the todo actions (Edit, Save, and Delete) gave me some issues. This actually turned out to be pretty simple, and the Facebook folks even have <a href="https://facebook.github.io/react/tips/expose-component-functions.html">a doc about it</a>. In my case, I just passed in the index value in the `.bind()` call like this:

```
<Todo
    onComplete={ this.onComplete.bind( this, i ) }
/>
```

Problem solved.

I'm sure I'll run into a ton of additional fun headscratchers when I build Theodoro using Reflux, but this has been a fun little project so far.

## Installation

This should be pretty easy to get up and running locally if you're so inclined:
1. `git clone https://github.com/jeremeylduvall/Theodoro.git`

2. `cd Theodoro`

3. `npm install`

4. `gulp`

If that doesn't work for some reason or if anything is broken, feel free to let me know on Twitter (@jeremeyd).

Hat tip to Michael Dyrynda for <a href="http://michaeldyrynda.github.io/readme-generator/">making this README easy to build.</a>