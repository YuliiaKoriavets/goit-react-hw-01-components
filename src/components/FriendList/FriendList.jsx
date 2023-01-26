import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          status={friend.isOnline}
          avatarUrl={friend.avatar}
          friendName={friend.name}
        />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
