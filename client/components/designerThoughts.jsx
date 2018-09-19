import React, { Component } from 'react';
import styles from '../styles/DesignerThoughts.css'
import axios from 'axios';

class DesignerThoughts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designers: []
    }
    this.getDesigners = this.getDesigners.bind(this);
  }

  componentDidMount() {
    this.getDesigners();
  }

  getDesigners() {
    axios.get('http://localhost:4000/api/designer', {
      params: { productLine: 'fillmein' }
    })
      .then((response) => {
        this.setState({
          designers: response.data
        });
      }).catch(err => { console.log(err) });
  }

  render() {
    return (
      <div>
        {this.state.designers.map((designer, i) => {
          return (
            <div className={styles.container} key={i}>
              <img className={styles.image} src={designer.imageUrl}></img>
              <div className={styles.thoughtContainer}>
                <span className={styles.header}>Designer thoughts</span>
                <span className={styles.designer}>Designer&nbsp;{designer.designerName}</span>
                <div className={styles.thought}>"{designer.thoughts}"</div>
              </div>
            </div>
          )
        })}


      </div>
    );
  }
}

export default DesignerThoughts;