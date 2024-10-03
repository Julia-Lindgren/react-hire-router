import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, isHiredColumn} = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} isHiredColumn={isHiredColumn} />
      ))}
    </ul>
  )
}

export default PeopleList
