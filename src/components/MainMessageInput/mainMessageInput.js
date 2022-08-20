import React from 'react';

class MainMessageInput extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
        this.currentMessageChanged = this.currentMessageChanged.bind(this);
    }

    currentMessageChanged = (e) => {
        this.setState({ message: e.target.value });
    }

    render () {

        return (
            <form action=''>
                <input
                    maxLength="500"
                    type="text"
                    value={this.state.message}
                    placeholder="Type your message"
                    onChange={this.currentMessageChanged}
                />
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        this.props.addMessage(this.state.message)
                    }}
                >Send
                </button>
            </form>
        )
    }

};

export default MainMessageInput;