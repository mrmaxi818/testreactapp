import React, { Component } from 'react';
import './index.css';

class Home extends Component {



  componentDidMount() {




  }



  componentWillUnmount() {

  }




  render() {



    const menuItems = [ '/', '/profile'];

    const menu = menuItems.map(item => {
      return (
        <li>
          <a href={item}>item</a>
        </li>
      )
    });




    return (





      <div className="home">
        <header className="home-header">
          <h1>Hello World</h1>
          <ul>
            {menu}
          </ul>
        </header>
      </div>
    );
  }
}

export default Home;
