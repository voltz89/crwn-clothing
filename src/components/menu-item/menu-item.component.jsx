import React from 'react';
import { withRouter } from 'react-router-dom'; //react tools in order to prevent props tunneling (passing props to sub-component)
import './menu-item.styles.scss';


const MenuItem = ({title, imageUrl, imageSize, linkUrl, history, match}) => ( // history is the props from parent's component that can be accessed using with Router()
    <div 
        className={`${imageSize} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div 
                className = 'background-image'
                style = {{
                backgroundImage : `url(${imageUrl})`
            }}/>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
    </div>
)

export default withRouter(MenuItem); //using withRouter() gives the component (Menu Item's Component) super power to access props from parent's component.                                                                                     