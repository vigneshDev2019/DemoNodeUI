import React, { useContext } from 'react';
import { context } from '../App';
import CardMaterialComponent from './CardMaterialComponent';

function MainBody(props) {
    const data = useContext(context);
  return (
    <div id="Main-Table">
        <div id="body-div">
        {data.length > 0 && data.map(da => {
            return <CardMaterialComponent {...da}/>
        })}
        </div>
    </div>
  )
}

export default MainBody
