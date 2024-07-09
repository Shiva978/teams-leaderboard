// src/UserCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: ${({ isTopThree }) => (isTopThree ? '#FFA500' : '#fff')};
  color: ${({ isTopThree }) => (isTopThree ? '#fff' : '#000')};
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  width: 150px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

const Points = styled.p`
  font-size: 1em;
  margin: 5px 0;
`;

const Badge = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const UserCard = ({ rank, name, points }) => {
  const isTopThree = rank <= 3;
  const badgeSrc = isTopThree ? `/badge${rank}.png` : null;

  return (
    <Card isTopThree={isTopThree}>
      {isTopThree ? (
        <Badge src={badgeSrc} alt={`Rank ${rank}`} />
      ) : (
        <Image src={`https://via.placeholder.com/50`} alt={name} />
      )}
      <Name>{name}</Name>
      <Points>{points}</Points>
    </Card>
  );
};

export default UserCard;
