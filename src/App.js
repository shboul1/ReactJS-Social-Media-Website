import Container from './components/container/Container'
import {UserContextProvider} from './components/Context/userContext'

function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <Container />
    </div>
    </UserContextProvider>
  );
}

export default App;
