import yargs from 'yargs';
import { addNote } from './add-note'
import { listNotes } from './list-notes';
import { modifyNote } from './modify-note';
import { readNote } from './read-note';
import { removeNote } from './remove-note';

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
      user: {
        describe: 'name of the user',
        demandOption: true,
        type: 'string',
      },
      title: {
        describe: 'title of the note',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'color of the note',
        demandOption: true,
        type: 'string',
      },
      color: {
        describe: 'color of the note',
        demandOption: true,
        type: 'string',
      }
    },
    handler(argv) {
      if(typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.color === 'string' && typeof argv.body === 'string')
        console.log(addNote(argv.user, argv.title, argv.color, argv.body));
    }
});

yargs.command({
  command: 'modify',
  describe: 'modify a note',
  builder: {
    user: {
      describe: 'name of the user',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'title of the note',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'color of the note',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'color of the note',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    if(typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.color === 'string' && typeof argv.body === 'string')
      console.log(modifyNote(argv.user, argv.title, argv.color, argv.body));
  }
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    user: {
      describe: 'name of the user',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'title of the note',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    if(typeof argv.user === 'string' && typeof argv.title === 'string')
      console.log(readNote(argv.user, argv.title));
  }
});

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    user: {
      describe: 'name of the user',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'title of the note',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    if(typeof argv.user === 'string' && typeof argv.title === 'string')
      console.log(removeNote(argv.user, argv.title));
  }
});

yargs.command({
  command: 'list',
  describe: 'list notes of an user',
  builder: {
    user: {
      describe: 'name of the user',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    if(typeof argv.user === 'string')
      console.log(listNotes(argv.user));
  }
});

yargs.parse();