import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.ebayimg.com/images/g/NxgAAOSwqu9VDmFE/s-l300.jpg" className="App-logo" alt="logo" />
          <p className="App-box1">
            Bachillerato en Ciencias y Humanidades
            Hillcrest School
                2016-Actualidad<br></br>
            Ingeniería en sistemas computacionales<br></br>
            Universidad Tecnológica Centroamericana
            </p>
          <p className="App-box2">Persona seria, responsable y con muchas ganas de trabajar y de
              aprender, Me considero con capacidad de liderazgo
              ,de organización y dispuesto a trabajar en equipo.
          </p>
          <p className="App-box3">
                Idiomas:<br></br>
                Italiano<br></br>
                Inglés<br></br>
                Español<br></br>
            </p>
        </header>
      </div>
    );
  }
}

export default App;
