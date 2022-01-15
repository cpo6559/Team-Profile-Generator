var inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./individualcontributors');
const Manager = require('./bigboss');
const Engineer = require('./geniusengineers');
const Intern = require('./internlife');
const generateHTML = require('./generateHTML');
console.log("Section 1")

const employeesArray = []
const initialquestion = [
    {
        type: "list",
        message: "Which best describes the team member's role? ",
        name: "role",
        choices: [
            "Manager",
            // "Employee", 
            "Engineer",
            "Intern",
            "Team is complete"
        ]
    }
]


const managerquestions = [
    {
        type: "input",
        message: " What is team member's name?",
        name: "name"
    },

    {
        type: "input",
        message: "What is team member's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the team member's email address?",
        name: "email"
    },
    {
        type: "input",
        message: " What is team member's office number?",
        name: "officeNumber"
    }];
console.log("Section 3")
const engineerquestions = [
    {
        type: "input",
        message: " What is team member's name?",
        name: "name"
    },

    {
        type: "input",
        message: "What is team member's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the team member's email address?",
        name: "email"
    },
    {
        type: "input",
        message: " What is team member's Github username?",
        name: "github"
    }];

const internquestions = [
    {
        type: "input",
        message: " What is team member's name?",
        name: "name"
    },

    {
        type: "input",
        message: "What is team member's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the team member's email address?",
        name: "email"
    },
    {
        type: "input",
        message: " What is team member's university name?",
        name: "school"
    }];
console.log("Section 4")
function startWorking() {
    console.log("Build the team")
    inquirer.prompt(initialquestion).then((answers) => {
        console.log(answers)
        let name = answers.name
        let email = answers.email
        let id = answers.id

        // if(answers.role === "Employee"){
        //     let employee = new Employee(name,id,email)
        // }
        if (answers.role === "Manager") {
            inquirer.prompt(managerquestions).then((answers) => {
                let officeNumber = answers.officeNumber
                let manager = new Manager(name, id, email, officeNumber)
                employeesArray.push(Manager)
                startWorking()
            })

        } else if (answers.role === "Engineer") {
            inquirer.prompt(engineerquestions).then(answers => {
                let github = answers.github
                let engineer = new Engineer(name, id, email, github)
                employeesArray.push(Engineer)
                startWorking()
            })

        } else if (answers.role === "Intern") {
            inquirer.prompt(internquestions).then(answers => {
                let school = answers.school
                let intern = new Intern(name, id, email, school)
                employeesArray.push(Intern)
                startWorking()
            })

        } else {
            console.log("Build HTML here")
            function generateHTML() {
                return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Profile</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <header>
                    <nav class="navbar" id="navbar">
                        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
                    </nav>
                </header>
                <main>
                    <div class="container">
                        <div class="row justify-content-center" id="team-cards">
                            <!--Team Cards-->
                            ${employeeCards}
                        </div>
                    </div>
                </main>
                
            </body>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
            </html>
          `;
            }
            generateHTML();
        }
})
    }



// const employeequestion = [{
//     type: "list",
//     name: "moreMembers",
//     message: "Would you like to add more team members?",
//     choices: [
//         "Yes, a Manager",
//         "Yes, an Engineer",
//         "Yes, an Intern",
//         "No, thank you. I'm done building my team."
//     ],
//   
// }];

function addMembers() {
    inquirer.prompt(employeequestion)
        .then((data) => {
            switch (data.moreMembers) {
                case "Yes, a Manager":
                    inquirer.prompt(managerquestions)
                    addMembers()
                    break;

                case "Yes, an Engineer":
                    inquirer.prompt(engineerquestions)
                    addMembers()
                    break;

                case "Yes, an Intern":
                    inquirer.prompt(internquestions)
                    addMembers()
                    break;

                case "No, thank you. I'm done building my team.":
                    writeToFile()
                    break;
            }
        })

}


// questions()  Note you cannnot call an array. Only a function.
//         },
//         if ("Manager")
//             prompt

// //     /* Pass your questions in here */

// //   .then((answers) => {
// //     // Use user feedback for... whatever!!
// //   })
const testData = generateHTML([new Manager("bob", "3143", "bob@g.com", "10")])

function writeToFile(data) {
    fs.writeFile("index1.html", data,
        (err) => err ? console.error(err) : console.log("index.html has been generated."))
}
writeToFile(testData);

//  function init() {
//  startWorking().then(function(){
//      addMembers()
//  })

//     // writeToFile(generateHTML(manager,engineer,intern));
// }
// init();
