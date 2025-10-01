import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
            <StudentCard name="Lujain Aljehani" id="20227787" dept="Computer Science" />
            <StudentCard name="Fajer Abdullah" id="202280160" dept="Computer Science" />

        </div>
      </main>
    </div>
  )
}

export default App
