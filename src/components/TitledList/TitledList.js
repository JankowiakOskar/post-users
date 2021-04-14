import PropTypes from 'prop-types';

const TitledList = ({ title, list }) => (
  <div>
    <h3>{title}</h3>
    {list.length ? (
      <ul>
        {list.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    ) : (
      <p data-testid="message-emptylist">{`Brak pasujących wyników dla listy ${title}`}</p>
    )}
  </div>
);

TitledList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TitledList;
