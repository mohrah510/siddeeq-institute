import { useEffect, useState } from 'react'

type Program = {
  id: number
  name: string
  description: string
  branch: 'SIDDEEQ' | 'AISHAH'
  capacity: number
  registrationDeadline: string
}

function App() {
  const [programs, setPrograms] = useState<Program[]>([])

  useEffect(() => {
    fetch('/api/programs')
      .then((response) => response.json())
      .then((data) => setPrograms(data))
  }, [])

  return (
    <main>
      <header>
        <p>siddeeqinstitute@gmail.com</p>
        <h1>As-Siddeeq Institute</h1>
        <p>Sister branch: A’ishah Institute</p>
      </header>

      <h2>Current Programs</h2>
      {programs.map((program) => (
        <section key={program.id}>
          <h3>{program.name}</h3>
          <p>{program.description}</p>
          <p>Branch: {program.branch === 'AISHAH' ? "A'ishah" : 'Siddeeq'}</p>
          <p>Spots: {program.capacity}</p>
          <p>Register by: {program.registrationDeadline}</p>
        </section>
      ))}
    </main>
  )
}

export default App 