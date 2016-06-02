import React from 'react';
import './input-field.scss';

class InputField extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
			currValue: this.props.initialText
		};

		this._toggleEditMode = this._toggleEditMode.bind( this );
		this._onKeyUp = this._onKeyUp.bind( this );
	}

	componentDidUpdate () {
		if ( this.state.editMode ) {
			this.refs.textField.focus();
		}
	}

	render () {

		let checkEdit = () => {
			if ( this.state.editMode ) {
				return 'edit';
			} else {
				return '';
			}
		};

		return <div className={'input-field ' + checkEdit()}>

			<p className="input-display"
				onClick={this._toggleEditMode}>{this.state.currValue}</p>

			<label className="input-label"
				for={this.props.inputId}>{this.props.lblText}</label>

			<div>
				<input type="text"
					id={'text-field-' + this.props.inputId}
					placeholder="enter text"
					className="text-field"
					ref="textField"
					onKeyUp={this._onKeyUp}/>

				<button type="button"
					onClick={this._toggleEditMode}
					autofocus="true"
					className="input-confirm">
					+
				</button>
			</div>
		</div>
	}

	_toggleEditMode ( retain ) {
		var newState = {
			editMode: !this.state.editMode
		};

		if ( retain === undefined ) {
			retain = true;
		}

		if ( this.state.editMode ) {
			if ( this.refs.textField.value.length > 0 && retain ) {
				newState.currValue = this.refs.textField.value;
			} else {
				newState.currValue = InputField.defaultProps.initialText;
			}
		}

		this.setState( newState );
	}

	_onKeyUp ( event ) {
		if ( event.keyCode === 13 ) {
			this._toggleEditMode();
		}

		if ( event.keyCode === 27 ) {
			this._toggleEditMode( false );
		}
	}
}

InputField.propTypes = {
	initialText: React.PropTypes.string
};

InputField.defaultProps = {
	lblText: 'default label',
	initialText: 'default value',
	inputId: 'initialID000'
}

export default InputField;