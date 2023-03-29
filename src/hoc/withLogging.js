import React from "react";

export function withLogging(Component) {
    
    const x = 10;

    return (props) => <Component {...props} onClick={() => {
        
        props.onClick();
    }} />;
}
