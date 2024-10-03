import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({ people, isLoading, setHiredPeople }) {
  
  const [person, setPerson] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    if (!isLoading) {
      const foundPerson = people.find((person) => person.login.uuid === id);
      setPerson(foundPerson);
    }
  }, [id, people, isLoading]);

  if (isLoading) return <p>Loading...</p>
  if (!person) return <p>Person not found</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} />
    </article>
  )
}

export default PersonProfile
