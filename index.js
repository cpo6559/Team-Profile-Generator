var inquirer = require('inquirer');
// const fs = require('fs');
const { Employee } = require('./individualcontributors');
// const { generateHTML } = require('./utils/generateHTML');

    const questions = [
      
        { type: "input",
            message: " What is team member's name?",
        name: "membername"
    },{
            type: "list",
            message: "Which best describes the team member's role? ",
            name: "role",
            choices: [
                "Manager",
                "Employee", 
                "Engineer", 
                "Intern" 
            ]
        },
        
        {type: "input",
        message: "What is team member's id?",
        name: "id"
    },
    { type:"input",
        message: "What is the team member's email address?",
        name: "email"
    }],
                   
function startWorking(){
    console.log("Build the team")
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)}
        if(answers.role === "Employee"){
            askEmployee()
//             // run another inquirer prompt that asks the manager questions
//         } else if(answers.role==="Manager"){
// inquirer.prompt="What is the team member's username?"

// ]
//         } else if(answers.role==="Engineer"){
//             inquirer.prompt="What is the team member's username?"

// ]
//         } else if(answers.role==="Intern"){}
        
//     // })
//  {
    type: "list",
    message: "Would you like to add more team members?",
    choices: [
        "yes",
        "no"
    ],
    name: "moreMembers"}],
startWorking()


        // questions()  Note you cannnot call an array. Only a function.
//         },
//         if ("Manager")
//             prompt
            
// //     /* Pass your questions in here */

// //   .then((answers) => {
// //     // Use user feedback for... whatever!!
// //   })
// function writeToFile(data) {
//     fs.writeFile("index.html", data, 
//     (err) => err ? console.error(err) : console.log("index.html has been generated."))
// }
// async function init() {
//     await handleEmployee();
//     writeToFile(generateHTML(managersArr,engineersArr,internsArr));
// }
// init();
    