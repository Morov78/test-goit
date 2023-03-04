import PropTypes from "prop-types";

import CardUser from "../CardUser/CardUser";
import { List } from "./ListUsers.styled";

const ListUsers = ({ users }) => {
  return (
    <List>
      {users.map(({ id, tweets, followers, avatar }) => {
        return (
          <li key={id}>
            <CardUser
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
            />
          </li>
        );
      })}
    </List>
  );
};

export default ListUsers;

ListUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      user: PropTypes.string,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
