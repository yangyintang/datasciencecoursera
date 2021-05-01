import React from 'react';
import './App.css';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';

class App extends React.Component{
    render() {
        const style = {
            /* Home */
            position: 'relative',
            width: '1440px',
            height: '5212px',
            background: '#FFFFFF'
        }
        return (
            <div style={style}>
              <Header />
              <Footer />
            </div>);
    }
}

export default App;
