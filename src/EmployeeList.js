import { useEffect, useState } from "react";
import Employee from "./Employee"

function EmployeeList() {
    const [employees, setEmployees] = useState([
        {
            name: "Aaaaa",
            email: "a@a.com",
            phone: "1234567",
            skills: "Java",
            avatar: "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        },
        {
            name: "Bbbb",
            email: "b@a.com",
            phone: "7654321",
            skills: "C++",
            avatar: "https://images.unsplash.com/photo-1505776777247-d26acc0e505b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ]);

    function addEmp() {
        setEmployees((prevState) => {
            return [
                ...prevState,
                {
                    name: "New C",
                    email: "c@c.com",
                    phone: "1111111",
                    skills: "JavaScript",
                    avatar: "https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                }
            ]
        });
    }
    return (
        <>
            <h2>Employee List</h2>
            <button onClick={addEmp}>Add Employee</button>
            {employees.map((employee) =>
                (<Employee EmployeeData={employee} />)
            )}
        </>
    );
}

export default EmployeeList;