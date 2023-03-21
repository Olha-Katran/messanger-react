const HeaderContact = (props) => {

    return (
        <div className="header-contact">
            <img className="avatar" src={props.contactInfo.avatar} alt="avatar header" />
            <h2>{props.contactInfo.name}</h2>
        </div>
    )
};

export default HeaderContact;