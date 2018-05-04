import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {FormGroup, FormFeedback} from 'reactstrap';

class TextInput extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  onBlurHandler(e) {
    if(e.target.value.trim() !== '') {
      e.target.classList.add('has-val');
    } else {
      e.target.classList.remove('has-val');
    }
  }

  render() {
    const id = `id_${this.props.name}`;
    const type = this.props.type || 'text';

    return (
      <FormGroup>
        <div className="input-wrapper">
          <input className="input" name={this.props.name} type={type} id={id}
            onBlur={this.onBlurHandler} onChange={this.props.onChange}/>
          <span className="input-focus" data-placeholder={this.props.placeholder}></span>
          {this.props.error ? <FormFeedback className="invalid-feedback">this.props.error</FormFeedback> : ''}
        </div>
      </FormGroup>
    );
  }
}

// TextInput.propTypes = {
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   placeholder: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   error: PropTypes.string
// };

export default TextInput;
