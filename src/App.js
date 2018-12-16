// create your App component here
import React, {Component} from 'react'
import ExampleComponent from './components/ExampleComponent'
import Button from './components/Button'
import Greeting from './components/Greeting'



export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(r=>r.json())
    .then(p=>console.log(p))
  }

  render() {
    return (
      <div>
      <ExampleComponent />
      <Button />
      <Greeting />
      </div>
    )
  }
}
