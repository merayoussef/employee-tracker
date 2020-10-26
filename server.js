const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: "employees.db",
    port: 3306
});

connection.connect(function (err) {
    if (err) { throw err;
    } else {
    promptQuestions();
    }
});

function promptQuestions() {
    inquirer
        .prompt({
            type: "list",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update employee role",
                "Quit"
            ],
            message: "What would you like to do?",
            name: "option"
        })
        .then(function (result) {
            console.log("You entered: " + result.option);

            switch (result.option) {
                case "View all departments":
                    viewAllDepartment();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addADepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addAnEmployee();
                    break;
                case "Update employee role":
                    updateEmployee();
                    break;
            }
        });
}

function viewAllDepartment() {
    let query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        consoleTable(res);
        promptQuestions();
    });
}

function viewAllRoles() {
    let query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        consoleTable(res);
        promptQuestions();
    });
}

function viewAllEmployees() {
    let query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        consoleTable(res);
        promptQuestions();
    });

}

function addADepartment() {
    inquirer.prompt({

        type: "input",
        message: "What is the name of the department?",
        name: "deptartmentName"

    }).then(function (answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function (err, res) {
            if (err) throw err;
            consoleTable(res)
            promptQuestions()
        })
    })
}


function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What's the name of the role?",
                name: "role"
            },
            {
                type: "input",
                message: "What is the salary for this role?",
                name: "salary"
            },
            {
                type: "input",
                message: "What is the department id number?",
                name: "deptID"
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.role, answer.salary, answer.deptID], function (err, res) {
                if (err) throw err;
                consoleTable(res);
                promptQuestions();
            });
        });
}

function addAnEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What's the first name of the employee?",
                name: "firstName"
            },
            {
                type: "input",
                message: "What's the last name of the employee?",
                name: "lastName"
            },
            {
                type: "input",
                message: "What is the employee's role id number?",
                name: "roleID"
            },
            {
                type: "input",
                message: "What is the manager id number?",
                name: "managerID"
            }
        ])
        .then(function (answer) {


            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function (err, res) {
                if (err) throw err;
                consoleTable(res);
                promptQuestions();
            });
        });
}

function updateEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Which employee would you like to update?",
                name: "eeUpdate"
            },

            {
                type: "input",
                message: "What do you want to update to?",
                name: "updateRole"
            }
        ])
        .then(function (answer) {
            connection.query('UPDATE employee SET role_id=? WHERE first_name= ?', [answer.updateRole, answer.eeUpdate], function (err, res) {
                if (err) throw err;
                consoleTable(res);
                promptQuestions();
            });
        });
}
