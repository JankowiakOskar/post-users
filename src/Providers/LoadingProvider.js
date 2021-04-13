import PropTypes from 'prop-types';

const LoadingProvider = ({ isLoading, children }) => {
  return isLoading ? <p>Trwa ładowanie danych...</p> : children;
};

LoadingProvider.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoadingProvider;
