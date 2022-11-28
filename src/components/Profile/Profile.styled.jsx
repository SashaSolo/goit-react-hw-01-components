import styled from 'styled-components';

export const Section = styled.div`
  box-shadow: 0px -5px 20px -4px rgba(0, 0, 0, 0.76);
  -webkit-box-shadow: 0px -5px 20px -4px rgba(0, 0, 0, 0.76);
  -moz-box-shadow: 0px -5px 20px -4px rgba(0, 0, 0, 0.76);
`;

export const Description = styled.div`
  padding: 20px;
  border: solid 2px rgb(226, 224, 224);
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  padding: 40px;
  width: 300px;
  height: auto;
  border-radius: 50%;
  border: solid 1px rgb(226, 224, 224);
`;

export const Name = styled.p`
  font-family: Segoe UI;
  font-size: 32px;
  font-weight: 700;
  color: #595858;
`;

export const Tag = styled.p`
  font-family: Segoe UI;
  font-size: 24px;
  font-weight: 400;
  color: #8a888a;
`;

export const Location = styled.p`
  font-family: Segoe UI;
  font-size: 24px;
  font-weight: 400;
  color: #8a888a;
`;

export const Stats = styled.ul`
  gap: 15px;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
  background-color: #d4d6d4;
  border: solid 1px rgb(226, 224, 224);
  box-shadow: 0px 10px 15px 5px rgba(89, 89, 89, 0.5) inset;
  -webkit-box-shadow: 0px 10px 15px 5px rgba(89, 89, 89, 0.5) inset;
  -moz-box-shadow: 0px 10px 15px 5px rgba(89, 89, 89, 0.5) inset;
`;
export const Element = styled.li`
  display: flex;
  flex-direction: column;
  padding: 40px;
  &:not(:last-child) {
    border-right: solid 1px #858585;
  }
`;

export const Label = styled.span`
  font-family: Segoe UI;
  font-size: 18px;
  font-weight: 500;
  color: #8a888a;
  letter-spacing: 2px;
`;
export const Quantity = styled.span`
  font-family: Segoe UI;
  font-size: 24px;
  font-weight: 900;
  color: #404040;
  margin-top: 5px;
  letter-spacing: 1px;
`;
