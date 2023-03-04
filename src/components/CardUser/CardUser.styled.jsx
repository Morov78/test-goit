import styled from "styled-components";
import backgroundPicture from "../../images/background.png";

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 380px;
  height: 460px;
  border-radius: 20px;
  background-image: url(${backgroundPicture}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 308px 168px, auto;
  background-repeat: no-repeat;
  background-position: 36px 28px, 100%;
`;
export const Logo = styled.img`
  margin-left: 20px;
  margin-top: 20px;
  width: 76px;
  height: 22px;
`;
export const Text = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.22;
  color: #ebd8ff;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  color: #373737;
  background-color: ${({ isFollowing }) =>
    isFollowing ? "#5CD3A8" : "#ebd8ff"};
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.22;
  border-radius: 10px;
  border-width: 0px;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.1);
    background-color: ${({ isFollowing }) =>
      isFollowing ? "#2ca076" : "#ca99ff"};
  }
`;
