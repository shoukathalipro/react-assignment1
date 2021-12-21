import React, {Component} from "react";
import styles from '../Components/App.module.css';

const primary = {
    color: "blue"
}

class RightContainer extends Component {

    render() {

        return(
                <div    className={styles.card2}>
                    <h2>This is created using Class Component</h2>
                    <h5>This is done using external CSS</h5>
                    <h5 style={primary}>This is done using internal CSS</h5>
                </div>
        )
    }
}

export default RightContainer;