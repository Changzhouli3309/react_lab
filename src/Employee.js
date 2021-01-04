function Employee({ EmployeeData }) {
  return (
    <>
      <div>
        <img src={EmployeeData.avatar} />
        <h3><strong>{EmployeeData.name}</strong>
        </h3>
        <p><strong>Email: </strong>
          {EmployeeData.email}</p>
        <p><strong>Phone: </strong>
          {EmployeeData.phone}</p>
        <p><strong>Skills: </strong>
          {EmployeeData.skills}</p>
      </div>
    </>
  );
}

export default Employee;