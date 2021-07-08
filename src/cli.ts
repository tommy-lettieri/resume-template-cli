import { validate } from "./validate";
import { init } from "./init";
/**
 * Entry point for the CLI.
 * Due to the simplicity of the CLI as of now using a simple switch statement rather than a CLI library for parsing command line arguements
 */
const command = process.argv[2]?.toUpperCase();
console.log(`Started with command: [${command}]`);

enum COMMANDS {
    VALIDATE='VALIDATE',
    INIT='INIT',
}

switch(command) {
    case COMMANDS.VALIDATE:
        validate();
        break;
    case COMMANDS.INIT:
        init();
        break;
    default:
        console.error(`Invalid command: [${command}]`);
}
