import React from 'react';

function Account({ account }) {
    if (!account) {
        return <p>Please login first.</p>;
    }

    return (
        <div>
            <h1>Account</h1>
            <p>Username: {account.username}</p>
        </div>
    );
}

export default Account;
