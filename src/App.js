import React from 'react';
import { Button } from 'antd';
import { login} from '@/api/app'

function fetchNext(params) {
  console.log('xxxx');
  login().then(res=>{
    console.log(res);
  })
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Button onClick={ fetchNext } type="primary">Button</Button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
