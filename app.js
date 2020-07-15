const inquirer = require('inquirer');
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]);
};
promptUser().then(answers => console.log(answers));
//const fs = require('fs');
//const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(portfolioData);
//const profileDataArgs = process.argv.slice(2);

//const [name, github] = profileDataArgs;


// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });