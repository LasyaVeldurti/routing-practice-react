import {Route, Switch} from 'react-router-dom'

import {Header} from './components/Header'

import {Home} from './components/Home'

const App = () => (
  <>
    <Header />

    <Route exact path="/" />
  </>
)

export default App
