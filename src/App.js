import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
// class gives us access to state
class App extends Component {
  constructor() {
    super();
    this.state =  {
      monsters: [],
      searchField: ''
    }

// dont call () in the dom unless you want it to run on startup
    // constructor binding outside method
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState( { monsters: users }))
  }

  // this context is binding it to the og scope without needing to auto bind
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  

  render() {

    // this notation sets two vars based on their corresponding key in the state obj.
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
      <SearchBox placeholder='search monsta' handleChange={this.handleChange()}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
