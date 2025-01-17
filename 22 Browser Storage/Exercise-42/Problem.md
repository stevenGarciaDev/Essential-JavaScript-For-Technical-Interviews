### Problem #42: Implement a Simple Note-Taking Application with Browser Storage

---

### What This Problem Test:

**Problem #42**:

-   Practical skills in using local storage to create a functional application.
-   Handling dynamic updates in a web application with JavaScript.

---

Create a basic note-taking application that allows users to add, view, and delete notes. Use **local storage** to persist the notes so that they remain available even after the browser is closed.

**Requirements**:

1. Implement the following features:
    - Add a new note.
    - View all saved notes.
    - Delete a specific note by its index.
2. Use local storage to store and retrieve notes.
3. Ensure the application is responsive and updates the displayed notes whenever a note is added or deleted.

**Starter Code**:

```javascript
// HTML Structure
/*
<div id="app">
    <textarea id="noteInput"></textarea>
    <button id="addNote">Add Note</button>
    <ul id="notesList"></ul>
</div>
*/

document.getElementById("addNote").addEventListener("click", () => {
    const note = document.getElementById("noteInput").value;
    // Add logic to save the note to local storage
});

// Add logic to load notes from local storage and display them in the <ul id="notesList">
```

**Expected Behavior**:

-   Notes persist between browser sessions using local storage.
-   Adding or deleting a note updates the displayed notes list in real time.
