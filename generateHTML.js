function generateHTML(data){
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 
    if (role === "manager") {
        console.log("true")
    }  

}}
module.exports = generateHTML;
