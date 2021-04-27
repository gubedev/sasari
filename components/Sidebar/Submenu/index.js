import React, { useState } from 'react'
import FeatherIcon from "feather-icons-react"

const Submenu = (props) => {

    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    var children = React.Children.map(
        props.children,
        function (child) {
            return <>{child}</>
        }
    )

    return (
        <li className="menu__item">
            <div 
                className="menu__link" 
                onClick={() => toggleCollapsed()}
            >
                <div className="d-flex justify-content-between p-2">
                    <span className="font-weight-bold">{props.name}</span>
                    {collapsed === true ?
                    <FeatherIcon 
                        icon="chevron-down" 
                    />
                    : <FeatherIcon 
                    icon="chevron-right" 
                /> }
                </div>
            </div>
            <ul 
                className="list-unstyled" 
                style={{ display: collapsed ? 'block' : 'none' }}
            >
                {children}
            </ul>
        </li >
    )
}

export default Submenu

