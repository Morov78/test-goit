import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 178px;
  margin-bottom: 62px;
`;

export const Frame = styled.div`

  position: relative;
  width: 380px;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
  inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  &:before {
    content: "";
    position: absolute;
    display: block;
    top: -36px;
    left: 50%;
    transform: translateX(-40px);
    width: 80px;
    height: 80px;
    border-radius: 100% 100%;
    background-color #ebd8ff;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),inset 0px -2.19582px 4.39163px #ae7be3, inset 0px 4.39163px 3.29372px #fbf8ff; 
  }
`;
export const AvatarUser = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  background-color: #5736a3;
  border-radius: 100% 100%;
  left: 50%;
  top: -27px;

  transform: translateX(-31px);
`;
