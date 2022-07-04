import React from 'react'
import styled from "styled-components";
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,selectedCity,handleCityChange}) => {
    console.log(selectedCity);
  return (
    <ButtonWrap>
        <Button variant={`${selectedCity == null? "secondary" :"dark"}`} onClick={() => handleCityChange("current")}>Current Location</Button>
        {cities.map((item_city,index) => {
            return <Button variant={`${selectedCity == item_city? "secondary" :"dark"}`} key={index} onClick={()=>handleCityChange(item_city)}>{item_city}</Button>
        })}
    </ButtonWrap>
  )
}

const ButtonWrap = styled.div`
    margin-bottom: 1em;
`

export default WeatherButton