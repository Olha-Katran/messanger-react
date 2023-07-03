import React from 'react';
import './mainMessageInput.css';

class MainMessageInput extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
        this.currentMessageChanged = this.currentMessageChanged.bind(this);
        this.clearCurrentMessage = this.clearCurrentMessage.bind(this);
    }

    currentMessageChanged = (e) => {
        this.setState({ message: e.target.value });
    }

    clearCurrentMessage = (e) => {
        this.setState({message: ""})
    }

    render () {

        return (
            <form className="main-message-input">
                <div className="input-button-block">
                    <input
                        className="message-input"
                        maxLength="500"
                        type="text"
                        value={this.state.message}
                        placeholder="Type your message"
                        onChange={(e) => this.currentMessageChanged(e)}
                    />

                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault()
                            if (this.state.message !== "") {
                                this.props.addMessage(this.state.message, true, 0)
                            }

                            this.clearCurrentMessage()
                        }}
                    ><i className="fa-solid fa-paper-plane"></i>
                    </button>
                </div>

            </form>
        )
    }

};

export default MainMessageInput;