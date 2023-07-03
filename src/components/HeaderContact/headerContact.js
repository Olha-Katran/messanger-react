import './headerContact.css';



const HeaderContact = (props) => {

    return (
        <div className="header-contact">
            <button className='burger-menu'><i className="fa-solid fa-bars"></i></button>
            <img className="avatar" src={props.contactInfo.avatar} alt="avatar header" />
            <h2>{props.contactInfo.name}</h2>
        </div>
    )
};

export default HeaderContact;