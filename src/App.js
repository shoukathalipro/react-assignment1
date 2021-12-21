import React, {Component} from 'react';
import './App.css';
import styles from './Components/App.module.css';
import LeftContainer from './Components/LeftContainer';
import RightContainer from './Components/RightContainer';



class App extends Component {
  constructor() {
    super();
    this.state = {  isCard1Created: false, isCard2Created: false  }
  }

  createNewCard1 = () => {
      if (this.state.isCard1Created) {  this.setState(  { isCard1Created: false } ) } 
      else {  this.setState(  { isCard1Created: true  }  )  } 
  }

  createNewCard2 = () => {
    if (this.state.isCard2Created) {  this.setState(  { isCard2Created: false } ) } 
    else {  this.setState(  { isCard2Created: true  }  )  } 
  }


  render() {
    return (
      <div className="App">
          <h1 className={styles.main_heading}>Styling Using Functional and Class Components</h1>
          <div className={styles.buttonBox}>
              <button className={styles.btn1} onClick={this.createNewCard1}>To see styling in Functional component</button>
              <button className={styles.btn2} onClick={this.createNewCard2}>To see styling in class component</button>
          </div>
          <div className={styles.mainBox}>
              {this.state.isCard1Created? <LeftContainer/> : null}
              {this.state.isCard2Created? <RightContainer/> : null}
          </div>
      </div>
    );
  }
}

export default App;




