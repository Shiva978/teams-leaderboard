import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// styled components 
const LeaderboardContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  background-color: orange;
  padding: 10px;
  color: white;
`;

const HeroSection = styled.div`
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
`;

const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  table-layout: fixed;
`;

const TableHeader = styled.th`
  padding: 8px;
  background-color: #f2f2f2;
  text-align: center; /* Center align the table headers */
  border: none;
`;

const TableRow = styled.tr`
  background-color: ${(props) => props.bgColor || 'transparent'};
  &:nth-child(even) {
    background-color: ${(props) => props.bgColor || '#f2f2f2'};
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: none;
  text-align: center; /* Center align the table cells */
`;

const TopThreeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const TopThreeCard = styled.div`
  background-color: orange;
  width: 150px;
  height: 200px;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Badge = styled.div`
  font-size: 3em;
`;

const Name = styled.div`
  font-size: 1.2em;
  margin-top: 10px;
`;

const Points = styled.div`
  font-size: 1em;
  margin-top: 5px;
`;

const ClockContainer = styled.div`
  font-size: 1.5em;
  margin-bottom: 20px;
  background-color: #fff3cd;
  padding: 10px;
  border-radius: 5px;
`;
// data initailizing 
const leaders = [
  { rank: 1, name: 'John', points: 4235, badge: '🥇' },
  { rank: 2, name: 'John', points: 4235, badge: '🥈' },
  { rank: 3, name: 'Merry', points: 3967, badge: '🥉' },
  { rank: 4, name: 'Alice', points: 3900, badge: '🟣' },
  { rank: 5, name: 'Bob', points: 3800, badge: '🟠' },
  { rank: 6, name: 'Eve', points: 3700 },
  { rank: 7, name: 'Charlie', points: 3600 },
  { rank: 8, name: 'Dave', points: 3500 },
  { rank: 9, name: 'Trudy', points: 3400 },
  { rank: 10, name: 'Mallory', points: 3300 },
];
// function initialization
function Leaderboard() {
  const [timeLeft, setTimeLeft] = useState(24* 60 * 60); 
   // useEffect updates time left
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1); 
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // dividing top 3 teams
  const topThree = leaders.slice(0, 3);
  const rest = leaders.slice(3);

  // format time converts time left into a formatted string 
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // to determine the color of the rows based on their badges
  const getRowBgColor = (badge) => {
    if (badge === '🟣') return '#dda0dd'; // Medium purple
    if (badge === '🟠') return '#ffcc99'; // Medium orange
    return '#fff8dc'; // Light yellow for others
  };

  // to write html like code inside js
  return (
    <LeaderboardContainer>
      <Title>Youth Business Program</Title>
      <HeroSection>
        <h2>Teams Leaderboard</h2>
        <HeroText>Compete, Earn Points, and Rise to the Top! Engage weekly and see your team climb the ranks. Earn badges to outshine others!</HeroText>
      </HeroSection>
      <ClockContainer>Time Remaining: {formatTime(timeLeft)}</ClockContainer>
      <TopThreeContainer>
        {topThree.map((leader) => (
          <TopThreeCard key={leader.rank}>
            <Badge>{leader.badge}</Badge>
            <Name>{leader.name}</Name>
            <Points>{leader.points}</Points>
          </TopThreeCard>
        ))}
      </TopThreeContainer>
      <LeaderboardTable>
        <thead>
          <tr>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Points</TableHeader>
            <TableHeader>Badge</TableHeader>
          </tr>
        </thead>
        <tbody>
          {rest.map((leader) => (
            <TableRow key={leader.rank} bgColor={getRowBgColor(leader.badge)}>
              <TableCell>{leader.rank}</TableCell>
              <TableCell>{leader.name}</TableCell>
              <TableCell>{leader.points}</TableCell>
              <TableCell>{leader.badge}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </LeaderboardTable>
    </LeaderboardContainer>
  );
}

export default Leaderboard;
