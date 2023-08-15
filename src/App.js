import Main from "./Components/Main";
import {InterfaceProvider} from './Components/Context/InterfaceContext'

function App() {
  return (
    <div >
      <InterfaceProvider>
        <Main />
      </InterfaceProvider>
    </div>
  );
}

export default App;
