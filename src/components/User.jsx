const User = ({ userId }) => {
  let userName;
  switch (userId) {
    case 1:
      userName = "ag ag";
      break;
    case 2:
      userName = "mg mg";
      break;
    case 3:
      userName = "kg kg";
      break;
    case 4:
      userName = "tg tg";
      break;
    case 5:
      userName = "yg yg";
      break;
    default:
      userName = "unknown user";
      break;
  }

  return (
    <p>
      Posted by - <span className="userName">{userName}</span>
    </p>
  );
};

export default User;
