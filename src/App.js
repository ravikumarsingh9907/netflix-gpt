import Body from "./Component/Body";
import { Provider } from 'react-redux';
import store from './Utils/store';

function App() {
  return (
    <Provider store={store}><Body /></Provider>
  );
}

export default App;
