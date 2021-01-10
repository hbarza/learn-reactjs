'use strict';

class App extends React.Component
{
    render() 
    {
        return (
          <h1>Hello World!</h1>  
        );
    }
}

let root = document.querySelector('#root');
ReactDOM.render(<App />, root);
