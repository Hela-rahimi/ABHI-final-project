import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

// GraphQL Query to get universities
const GET_UNIVERSITIES = gql`
query {
  universities {
    id
    name
    departments {
      id
      name
      specializations {
        id
        name
        students {
          id
          name
        }
      }
    }
  }
}

`;

const UniversityDropdown = () => {
  const { loading, error, data } = useQuery(GET_UNIVERSITIES);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const universities = data.universities;

  return (
    <div>
      <select onChange={(e) => {
        const university = universities.find(u => u.id === parseInt(e.target.value));
        setSelectedUniversity(university);
        setSelectedDepartment(null);
        setSelectedSpecialization(null);
      }}>
        <option value="">Select University</option>
        {universities.map(university => (
          <option key={university.id} value={university.id}>{university.name}</option>
        ))}
      </select>

      {selectedUniversity && (
        <select onChange={(e) => {
          const department = selectedUniversity.departments.find(d => d.id === parseInt(e.target.value));
          setSelectedDepartment(department);
          setSelectedSpecialization(null);
        }}>
          <option value="">Select Department</option>
          {selectedUniversity.departments.map(department => (
            <option key={department.id} value={department.id}>{department.name}</option>
          ))}
        </select>
      )}

      {selectedDepartment && (
        <select onChange={(e) => {
          const specialization = selectedDepartment.specializations?.find(s => s.id === parseInt(e.target.value));
          setSelectedSpecialization(specialization);
        }}>
          <option value="">Select Specialization</option>
          {selectedDepartment.specializations ? (
            selectedDepartment.specializations.map(specialization => (
              <option key={specialization.id} value={specialization.id}>{specialization.name}</option>
            ))
          ) : (
            <option disabled>No specializations available</option>
          )}
        </select>
      )}

      {selectedSpecialization && (
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {selectedSpecialization.students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UniversityDropdown;
