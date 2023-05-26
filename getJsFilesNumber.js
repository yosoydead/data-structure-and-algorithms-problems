// https://stackoverflow.com/questions/12941083/execute-and-get-the-output-of-a-shell-command-in-node-js
const childProcess = require("child_process");
const fs = require("fs");

const generateMarkdownText = (numOfJsFiles) => {
  return `
    ### Hello there. My name is Bogdan and I am trying to save all data structures and algorithms problems that i have been able to solve over the years or while I am learning new stuff.
    #### Problems will vary in difficulty and from where they are. Their parent folder will indicate the source.
    1. All problems will be solved with JS
    2. Files **DO NOT** guarantee that there is only 1 problem inside.
    3. Problems will vary in difficulty. They will include the text of the problem. Their parent folder will indicate the source.
    4. At each push to repo, **a new .md file will be generated** to display the **current amount of JS files**, roughly indicating how many solved problems there are.
    ---
    # Currently, there are **${numOfJsFiles} JS files**, with roughly as many, or more, solved problems.
  `;
};

/**
 * @param {string} command A shell command to execute
 * @return {Promise<string>} A promise that resolve to the output of the shell command, or an error
 * @example const output = await execute("ls -alh");
 */
function execute(command) {
  /**
   * @param {Function} resolve A function that resolves the promise
   * @param {Function} reject A function that fails the promise
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
   */
  return new Promise(function(resolve, reject) {
    /**
     * @param {Error} error An error triggered during the execution of the childProcess.exec command
     * @param {string|Buffer} standardOutput The result of the shell command execution
     * @param {string|Buffer} standardError The error resulting of the shell command execution
     * @see https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
     */
    childProcess.exec(command, function(error, standardOutput, standardError) {
      if (error) {
        reject();

        return;
      }

      if (standardError) {
        reject(standardError);

        return;
      }

      resolve(standardOutput);
    });
  });
}

async function main() {
  try {
    const jsFileCount = await execute('find . -mindepth 1 -type f -name "*.js" -printf x | wc -c');

    console.log(jsFileCount);
    const text = generateMarkdownText(parseInt(jsFileCount));

    fs.writeFile("readme.md", text, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  } catch (error) {
    console.error(error.toString());
  }
  
}

main();