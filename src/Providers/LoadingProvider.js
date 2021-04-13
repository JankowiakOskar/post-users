import PropTypes from 'prop-types';

const LoadingProvider = ({ isLoading, children }) => {
  return isLoading ? (
    <p data-testid="loader-message">Trwa ładowanie danych...</p>
  ) : (
    children
  );
};

LoadingProvider.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoadingProvider;
