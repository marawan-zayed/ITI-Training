import React from "react";

export default function Hero({ studentData }) {
  console.log(studentData);
  return (
    <>
    <h1 className=" text-center text-success text-decoration-underline">Student Data</h1>
      <div className="table-responsive  text-success">
        <table className="table   table-striped ">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Faculty</th>
              <th>Level</th>
              <th>GPA</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => {
              return (
                <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age} </td>
                  <td>{student.faculty} </td>
                  <td>{student.level} </td>
                  <td>{student.gpa} </td>
                  <td>{student.city} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
