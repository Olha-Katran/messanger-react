function MainMessageInput () {
    return (
        <form>
            <input type="text" />
            <button type="submit" onClick={() => props.addMessage}>Sent</button>
        </form>
    )
};

export default MainMessageInput;