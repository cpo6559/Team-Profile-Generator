var inquirer = require('inquirer');
const fs = require('fs');
const  Employee = require('./individualcontributors');
const Manager = require('./bigboss');
const Engineer = require('./geniusengineers');
const Intern = require('./internlife');
const generateHTML  = require('./generateHTML');
console.log("Section 1")
   
const employeesArray = []


const questions = [
      
   {
            type: "list",
            message: "Which best describes the team member's role? ",
            name: "role",
            choices: [
                "Manager",
                "Employee", 
                "Engineer", 
                "Intern" 
            ]
        },     { type: "input",
            message: " What is team member's name?",
        name: "name"
    },
        
        {type: "input",
        message: "What is team member's id?",
        name: "id"
    },
    { type:"input",
        message: "What is the team member's email address?",
        name: "email"
    }];
    console.log("Section 2")
    const managerquestions = [
        { type: "input",
               message: " What is team member's office number?",
           name: "officeNumber"
       }]
       console.log("Section 3")
       const engineerquestions = [
        { type: "input",
               message: " What is team member's Github username?",
           name: "github"
       }]

        const internquestions = [
        { type: "input",
               message: " What is team member's university name?",
           name: "school"
       }]
       console.log("Section 4")
function startWorking(){
    console.log("Build the team")
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        let name = answers.name
        let email = answers.email
        let id = answers.id
        if(answers.role === "Employee"){
            let employee = new Employee(name,id,email)
        }
        else if(answers.role==="Manager"){
            inquirer.prompt(managerquestions).then((manageranswers)=>{
            let officeNumber = manageranswers.officeNumber
            let manager = new Manager(name,id,email,officeNumber)})
            employeesArray.push(Manager)
console.log(employee)
        }else if(answers.role==="Engineer"){
    inquirer.prompt(engineerquestions)
    let github = answers.github
    let engineer = new Engineer(name,id,email,github)
    employeesArray.push(Engineer)

} else if(answers.role==="Intern"){
    inquirer.prompt(internquestions)
    let school = answers.school    
    let intern = new Intern (name,id,email,school)
    employeesArray.push(Intern)

}
})}          

   const employeequestion = [{
       type: "list",
       name: "moreMembers",      
        message: "Would you like to add more team members?",
    choices: [
        "Yes, a Manager",
        "Yes, an Engineer",
        "Yes, an Intern",
        "No, thank you. I'm done building my team."
    ],
    //   
    }];

function addMembers(){
    inquirer.prompt(employeequestion)
    .then((data) => {
        switch (data.moreMembers){
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
const testData = generateHTML([new Manager("bob", "3143", "bob@g.com","10")])

function writeToFile(data) {
    fs.writeFile("index1.html", data, 
    (err) => err ? console.error(err) : console.log("index.html has been generated."))
}
writeToFile(testData);

 function init() {
 startWorking().then(function(){
     addMembers()
 })

    // writeToFile(generateHTML(manager,engineer,intern));
}
init();
    