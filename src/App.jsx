import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import EditForm from './pages/PersonProfile/components/EditForm';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [people, setPeople] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true);
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} />} />
          <Route path="/view/:id" element={<PersonProfile people={people} isLoading ={isLoading} setHiredPeople={setHiredPeople} />} />
          <Route path="/edit/:id" element={<EditForm hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
        </Routes>
      </header>
    </>
  )
}
