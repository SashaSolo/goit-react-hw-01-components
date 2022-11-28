import styled from 'styled-components';

export const Title = styled.h2`
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  color: #6e6969;
  font-weight: 700;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  width: 20%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  color: #e6e3e3;
  box-shadow: 0px -5px 15px 5px rgba(0, 0, 0, 0.49) inset;
  -webkit-box-shadow: 0px -5px 15px 5px rgba(0, 0, 0, 0.49) inset;
  -moz-box-shadow: 0px -5px 15px 5px rgba(0, 0, 0, 0.49) inset;
`;

export const Label = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
  color: #202020;
`;

export const Percentage = styled.span`
  font-size: 28px;
  font-weight: 500;
  color: #202020;
`;
