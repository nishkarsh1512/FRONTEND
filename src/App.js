import BasicForm from './components/BasicForm.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Show from './Show'
import Chat from './components/Chat.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router-dom'
import Edit from './Edit'
import FullEdit from './FullEdit'
import History from './History'
import Home from './Home'

function App() {
  const params = useParams()
  console.log(params.userId)
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route
            exact
            path="/register"
            element={<BasicForm></BasicForm>}
          ></Route>
          <Route exact path="/show" element={<Show></Show>}></Route>
          <Route exact path="/edit" element={<FullEdit></FullEdit>}></Route>
          <Route exact path="/history" element={<History></History>}></Route>
          <Route exact path="/edit/:id" element={<Edit></Edit>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
