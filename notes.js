
const { default: chalk } = require('chalk');
const fs = require('fs');
const Note = require('./note')


const listNotes = () => {
    const notes = allNotes();

    notes.forEach(note => console.log(`Title is ${note.title} and body is ${note.body}`))
}

const addNote = (title, body) => {

    if (title === '' || body === '') return

    const notes = allNotes();
    let isDuplicate = notes.some((note) => note.title === title);

    if (!isDuplicate || notes.length === 0) {
        const note = new Note(title, body);
        notes.push(note);

        saveNotes(notes)

    } else {
        console.log("Note already exists!")
    }
}


const removeNote = (title) => {

    const notes = allNotes();

    if (title === '' || notes.length === 0) return "Note not exists";

    const filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);
}

const readNote = (title) => {
    const notes = allNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.bgGreen(`${note.title} - ${note.body}`))
    } else {
        console.log(chalk.bgBlue('Note not available'))
    }
}


// Utility function

const allNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const data = JSON.parse(dataBuffer.toString());
        return data;
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const validNotes = notes.length === 0 ? [] : notes;
    fs.writeFileSync('notes.json', JSON.stringify(validnotes));
}


module.exports = {
    addNote: addNote,
    allNotes: allNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};