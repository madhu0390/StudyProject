import {React,useState} from "react";
import cloudyWhite from "../../assets/images/cloudy-white.svg"
import cloudyPurpleActive from "../../assets/images/cloudy-purple-active.svg";
import {TabContainer,TabItem,TabItemHeading,TabItemBottom} from "../styles/Container.styled"

const ForecastTabs = (props) => {
  const [active,setActive] = useState(0);  
  const forecastClickHandler = (active) => {
    setActive(active);
    props.onTabChange(active);
  }
 
  return (
    <TabContainer>
      {props.forecast.days.slice(0, 4).map((day, i) => (
        <TabItem key={i} 
        bi={i === active ? true : false} 
        br={4}
        onClick={() => forecastClickHandler(i)}>
          <TabItemHeading color={i === active ? "#FFF":"#1c1c1c"}>{day.day}</TabItemHeading>
            <img
              src={i === active ? cloudyPurpleActive : cloudyWhite}
              alt="Cloudy"
            />
          <TabItemBottom color={i === active ? "#FFF":"#1c1c1c"}>Humidity: {day.forecast[0].humidity}%</TabItemBottom>
          </TabItem>
      ))}
    </TabContainer>
  );
};

export default ForecastTabs;
