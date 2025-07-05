const Friends = ({friend,className}) => {
    return (
        <img className={`col-sm-4 p-1 ${className}`} src={friend} alt="Friend" />


    );
};

export default Friends;