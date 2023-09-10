import PropTypes from 'prop-types';
import { TelNumber } from './ContactItem.styled';
export const ContactItem = ({ userData }) => (
  <p>
    {userData.name}  : <TelNumber>{userData.number}</TelNumber>
  </p>
);

ContactItem.propTypes = {
  userData: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
