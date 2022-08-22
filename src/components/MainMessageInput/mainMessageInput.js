import React from 'react';

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
            <form
                // submit={() => this.clearCurrentMessage}
            >
                <input
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
                        this.props.addMessage(this.state.message, true, 0)
                        this.clearCurrentMessage()
                    }}

                >Send
                </button>
            </form>
        )
    }

};

export default MainMessageInput;