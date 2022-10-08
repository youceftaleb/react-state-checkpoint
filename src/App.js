import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    Person: { fullName: 'youcef', bio: 'student', imgSrc: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600', profession: 'web development' },
    shows: true,
    counter:0
  }
  componentDidMount() {
    this.timer = setInterval(
      () => this.state.counter+=1,
      1000
    );
  }
  componentDidUpdate() {
    clearInterval(this.timer);
    this.timer = setInterval(
      () => this.state.counter += 1,
      1000
    );
  }
  render() {
    const toggleshow = () => {
      if (this.state.shows) {
        this.setState({ shows: false });
      } else {
        this.setState({ shows: true })
      }
    }
    return (
      <div className="App text-white container p-5">
        {this.state.shows && <div className='card text-center col-md-4 offset-md-4' style={{ backgroundColor: 'black', border: '3px solid salmon' }}>
          <div className='card-body'>
            <img src={this.state.Person.imgSrc} alt={this.state.Person.fullName} style={{ width: '40vh' }} />
          </div>
          <div className='card-footer' style={{ borderTop: '3px solid salmon' }}>
            <h1>{this.state.Person.fullName}</h1>
            <h3>{this.state.Person.bio}</h3>
            <h3>{this.state.Person.profession}</h3>
          </div>
        </div>}
        <button onClick={toggleshow} className='btn col-md-4 offset-md-4' style={{ backgroundColor: 'salmon', color: 'white' }}>{this.state.shows ? "Hide!" : "Show!"}</button>
        <div className='col-md-4 offset-md-4 text-center'>{this.state.counter} seconds</div>
      </div>
    )
  }
}

export default App;
