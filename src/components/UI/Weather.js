import Section from '../UI/Section';

const Weather = (props) => {
  let weatherList = <h2>No forecasts found!</h2>;


  let content = weatherList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading weather...';
  }

  props.onSaveUserData(userData);

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Weather;
