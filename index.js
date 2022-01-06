var inquirer = require('inquirer');
const fs = require('fs');

    const questions = [
        {
            type: "input",
            message: "What's your email?",
            name: "email"
        },
        {
            type: "list",
            message: "Which best describes your role? ",
            name: "role",
            choices: [
                "Manager",
                "Employee", 
                "Engineer", 
                "Intern" 
            ]
        }]

        questions()
//         },
//         if ("Manager")
//             prompt
            
// //     /* Pass your questions in here */

// //   .then((answers) => {
// //     // Use user feedback for... whatever!!
// //   })
