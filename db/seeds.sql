USE employees_DB;

INSERT INTO department (name)
VALUES ("IT"), ("Front Desk"), ("HR"), ("Events"), ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("IT Mananger", 65000, 1), ("Front Desk", 40000, 2), ("HR", 55000, 3), ("Event Manager", 60000, 4), ("Sales Manager", 90000, 5);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("John", "Smith", null, 1), ("Bill", "Bob", 1, 2), ("James", "Abraham", 2, 3), ("Amanda", "Green", 3, 4), ("Betty", "White", 2, 5);

