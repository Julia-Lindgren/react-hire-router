import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditForm({ hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundPerson = hiredPeople.find((p) => p.login.uuid === id);
    setPerson(foundPerson);
  }, [id, hiredPeople]);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      name: {
        ...prevPerson.name,
        [name]: value, 
      },
    }));
  };

  const handleWageChange = (e) => {
    const { value } = e.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      wage: value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedHiredPeople = hiredPeople.map((p) => 
      p.login.uuid === id ? { ...person } : p
    );
    
    setHiredPeople(updatedHiredPeople);
    navigate('/'); 
  };

  if (!person) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="first"
          value={person.name.first}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="last"
          value={person.name.last}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Wage:
        <input
          type="number"
          name="wage"
          value={person.wage}
          onChange={handleWageChange}
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditForm;
