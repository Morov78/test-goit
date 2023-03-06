import PropTypes from "prop-types";

import { Container, Frame, AvatarUser } from "./UserAvatar.styled";

const UserAvatar = ({ avatar, user }) => {
  const altImage = `Avatar for ${user}`;
  return (
    <Container>
      <Frame />
      <AvatarUser src={require(`../../../images/${avatar}`)} alt={altImage} />
    </Container>
  );
};

UserAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default UserAvatar;
