# resume-template-cli
This is a CLI for initializing the data and validating it.

# Testing against local react consumer project with watch
## From this project
```
npm run build:watch
```

## From react consumer project
This is just a suggestion, you might want to approach this different. For example if you don't want a global nodemon you could just install it in the project,
I did not do that since it is temporary.

1. npm link or npm install relative directory
```bash
npm install ../resume-template
```

2. Add a `nodemon.json` file to root
```json
{
    "ignore": [
        "**/*.test.ts",
        "**/*.spec.ts",
        "node_modules/**/node_modules/**",
        "node_modules/@z87/**/src/**"
    ],
    "ignoreRoot": [
        ".git",
        "public"
    ],
    "watch": [
        "./node_modules/@z87/resume-template-cli/dist/**.js"
    ],
    "ext": "json,js,ts",
    "execMap": {
        "ts": "node --require ts-node/register"
    },
    "signal": "SIGINT",
    "delay": "1000"
}
```

3. Install nodemon globally
```bash
sudo npm install -g nodemon
```

4. Run this project through nodemon with the command to test
```bash
nodemon ./node_modules/.bin/resume-template-cli init
```