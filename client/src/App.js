import {useEffect} from 'react';
import './App.css';
import Main from "./components/Main";
import {base_url} from "./utils/constants";

function App() {

  useEffect(() => {
    // TEST API, it might be removed
    fetch(base_url+'live').then(res => res.json()).then(res => {
      console.log('API CONNECTION IS OK');
    }).catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'))
  }, []);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
