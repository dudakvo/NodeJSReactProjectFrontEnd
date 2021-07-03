import { Component } from 'react';
import ReactDOM from 'react-dom';

import './ModalTaskPages.css'

class ModalTaskPages extends Component {
  modal = document.createElement('div');
  componentDidMount() {
    document.body.appendChild(this.modal);
  }
   componentWilddUnmount() {
    document.body.removeChild(this.modal);
     }
  render() {
    return ReactDOM.createPortal(this.props.children, this.modal);
  }
}

export default ModalTaskPages;
