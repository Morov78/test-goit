import { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { StorageContext } from "../../hooks/useLocalStorage";
import logo from "../../images/logo.png";

import { Button, Card, Logo, Text } from "./CardUser.styled";
import UserAvatar from "./UserAvatar/UserAvatar";

import convertingToNumberWithComma from "../../utils/convertingNumber";

const CardItem = ({ id, tweets, followers, avatar }) => {
  const [isFollowing, setIsFollowing] = useState();
  const [currentFollowers, setCurrentFollowers] = useState(followers);

  const storage = useContext(StorageContext);

  const isFirst = useRef(true);

  // const { id, tweets, avatar } = user;

  useEffect(() => {
    const followings = storage.get("followings");

    if (followings?.includes(id)) {
      setIsFollowing(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("ISFOLLOWINGS", isFollowing);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const users = storage.get("users");

    const newUsers = users?.map((user) => {
      if (user.id === id) {
        return { ...user, followers: currentFollowers };
      }

      return user;
    });

    storage.set("users", newUsers);

    const followings = storage.get("followings");

    console.log("FOLSTART", followings);

    if (isFollowing && !followings.includes(id)) {
      followings.push(id);
    }

    if (!isFollowing && followings.includes(id)) {
      const index = followings.indexOf(id);
      followings.splice(index, 1);
    }

    console.log("FOLEND", followings);
    storage.set("followings", followings);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFollowers]);

  const onClickButton = () => {
    setCurrentFollowers((prevState) =>
      isFollowing ? prevState - 1 : prevState + 1
    );
    setIsFollowing((prevState) => !prevState);
  };

  const convertedFollowers = convertingToNumberWithComma(currentFollowers);

  const convertedTweets = convertingToNumberWithComma(tweets);

  return (
    <Card>
      <Logo src={logo} alt="logo GOIT" />
      <UserAvatar avatar={avatar} />
      <Text>{convertedTweets} tweets</Text>
      <Text style={{ marginBottom: "26px" }}>
        {convertedFollowers} followers
      </Text>
      <Button type="button" isFollowing={isFollowing} onClick={onClickButton}>
        {isFollowing ? "following" : "Follow"}
      </Button>
    </Card>
  );
};

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default CardItem;
