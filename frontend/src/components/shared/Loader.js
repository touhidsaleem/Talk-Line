import React from 'react';
import Card from './Card/Card';


const Loader = ({ message }) => {
    return (
        <Card>
           <svg className="animate-spin" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" stroke="#C4C5C5" strokeWidth="4"/><path d="M19.778.001A20 20 0 1 1 .542 24.627l3.876-.922a16.016 16.016 0 1 0 15.404-19.72L19.778.001Z" fill="#43e32f"/></svg>
            <span>{message}</span>
        </Card>
    )
}

export default Loader