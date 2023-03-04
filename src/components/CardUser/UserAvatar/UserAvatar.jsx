import PropTypes from "prop-types";

import { Container, Frame, AvatarUser } from "./UserAvatar.styled";

const UserAvatar = ({ avatar }) => {
  return (
    <Container>
      <Frame />
      <AvatarUser src={require(`../../../images/${avatar}`)} />
    </Container>
  );
};

UserAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default UserAvatar;
