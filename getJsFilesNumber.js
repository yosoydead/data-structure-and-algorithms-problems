// https://stackoverflow.com/questions/12941083/execute-and-get-the-output-of-a-shell-command-in-node-js
// const childProcess = require("child_process");
// const fs = require("fs");
import childProcess from "child_process";
import fs from "fs";

const folders = ["HackerRank", "LeetCode", "TudorSorin", "CodeWars"];

const generateExpression = (folderName) => {
  return `find ./${folderName} -mindepth 1 -type f -name "*.js" -printf x | wc -c`;
};

const generateDetailedFolders = (arr) => {
  return `
Current problems sources:
${arr.map((el, index) => `${index+1}. ${el.folder}: ${el.number}`).join('\n')}
`;
};

const generateMarkdownText = (numOfJsFiles, detailedFolders) => {
  return `
# **${numOfJsFiles} JS file count**
---
### My name is **Bogdan** and I am trying to save all data structures and algorithms problems that i have been able to solve over the years or while I am learning new stuff.
#### Problems will vary in difficulty and from where they are. Their parent folder will indicate the source.
1. All problems will be solved with JS
2. Files **DO NOT** guarantee that there is only 1 problem inside.
3. Problems will vary in difficulty. They will include the text of the problem. Their parent folder will indicate the source.
4. At each push to repo, **a new .md file will be generated** to display the **current amount of JS files**, roughly indicating how many solved problems there are.
---
${detailedFolders}
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
    childProcess.execFile(command, [], {shell: true}, function(...args) {
      // console.log("args", args);
      if (args[0]) {
        reject(args[0]);

        return;
      }

      if (args[2]) {
        if (args[2].includes("warning")) { resolve(args[1]); }
        reject(args[2]);

        return;
      }

      resolve(args[1]);
    });
  });
}

/**
 * Am scapat de a numara FIECARE fisier de JS din root. Inainte era un bug ca imi numara si ce era in node_modules.
 * Acum numar doar fisierele de JS din folderele cu probleme de programare.
 */
async function main() {
  console.log("post commit trigger");
  try {
    let jsFileCount = 0;
    const arr = [];
    for (let i = 0; i < folders.length; i++) {
      const expression = generateExpression(folders[i]);
      const num = await execute(expression);
      jsFileCount += parseInt(num);
      arr.push({ folder: folders[i], number: parseInt(num) });
    }
    const detailedFolders = generateDetailedFolders(arr);
    await execute("git status");

    console.log(`Am gasit ${jsFileCount} fisiere de JS. O sa scad 1 din cauza scriptului de post commit.`);
    const text = generateMarkdownText(jsFileCount-1, detailedFolders);

    fs.writeFileSync("readme.md", text, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

    await execute("git add .");
    await execute('git commit -m "POST-COMMIT: adaug fisiere ramase. update pe readme.md"');
  } catch (error) {
    console.error(error.toString());
  }
}

main();