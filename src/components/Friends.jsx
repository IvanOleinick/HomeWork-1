const Friends = ({friend,className}) => {
    return (
        <img className={`w-full ${className}`} src={friend} alt="Friend" />


    );
};

export default Friends;