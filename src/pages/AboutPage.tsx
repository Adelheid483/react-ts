import React from 'react';
import {useHistory} from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useHistory();

    return (
        <div>
            <div>About this Page !!</div>
            <button className="btn" onClick={() => history.push('/')}>Back to the list</button>
        </div>
    );
};
