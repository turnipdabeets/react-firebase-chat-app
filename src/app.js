import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Chat from './components/Chat'

class App extends Component {

  render(){
  
    return(
       <div>
        <Chat />
       </div> 

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
