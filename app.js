const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes')

yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOptions: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOptions: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)

    }
})

yargs.command({
    command: "remove",
    describe: "Remove a Note!",
    builder: {
        title: {
            describe: "Remove note using title",
            demandOptions: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


yargs.command({
    command: "list",
    describe: "Listing all the notes!",
    handler() {
        notes.listNotes();
    }
})
yargs.command({
    command: "read",
    describe: "Read a Note",
    builder: {
        title: {
            describe: "Read a note using title",
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})
yargs.parse()