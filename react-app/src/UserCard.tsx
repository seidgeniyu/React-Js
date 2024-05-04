import React from 'react';

interface UserProps {
  name: string;
  avatar: string;
  bio: string;
}

const UserCard: React.FC<UserProps> = (props) => {
  return (
    <div className="user-card">
      <img src={props.avatar} alt="User avatar" />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
};

export default UserCard;
