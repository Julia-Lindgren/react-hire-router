import { Link } from 'react-router-dom';

function PeopleListItem(props) {
  const { person, isHiredColumn } = props

  return (
    <li>
      <Link to={`/view/${person.login.uuid}`} >
        <h3>
          {person.name.first} {person.name.last}
        </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {isHiredColumn && (
        <Link to={`/edit/${person.login.uuid}`}>
          <button>Edit</button>
        </Link>
      )}
    </li>
  )
}

export default PeopleListItem
