import React from "react";
import styles from '../Components/App.module.css';

const primary = {
    color: "red"
}

const LeftContainer = () => {

        return(
                <div  className={styles.card1}>
                    <h2>This is created using Functional Component</h2>
                    <h5>This is done using external CSS</h5>
                    <h5 style={primary}>This is done using internal CSS</h5>
                </div>
        )
}

export default LeftContainer;






