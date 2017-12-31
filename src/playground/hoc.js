import React from 'react';
import ReactDOM from 'react-dom';
//Higher Order Component
// Return code
// Render hijacking
// Prop Manipulation
// Abstract State

const Info = (props) => (
    <div>
        <h1>Info </h1>
        <p> the info is {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don`t share!</p>}
            <WrappedComponent {...props} />
        </div>
    );

};
// requiredAuthentication

const requiredAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
                <WrappedComponent {...props} />
                 : <p>You need to be authenticated</p>
            }

        </div>
    );
};



const AdminInfo = withAdminWarning(Info);

const AuthInfo = requiredAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app') );
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));