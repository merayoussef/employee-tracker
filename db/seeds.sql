INSERT INTO department (name)
VALUES ("IT"), ("Front Desk"), ("HR"), ("Events"), ("Sales");

INSERT INTO role (title, salary, department_id)
VALUE ("IT Mananger", 65000, 1), ("Front Desk", 40000, 2), ("HR", 55000, 3), ("Event Manager", 60000, 4), ("Sales Manager", 90000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("John", "Smith", 1, null), ("Bill", "Bob", 1, 1), ("James", "Abraham", 2, 4), ("Amanda", "Green", 3, 2), ("Betty", "White", 5, 2);