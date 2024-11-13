//
import React, { useState } from 'react';
import axios from 'axios';

const FormSubmission = ({
    csrfToken
}) => {
    console.log("🚀 ~ csfrToken:", csrfToken)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            name,
            email,
            message
        };
        console.log("🚀 ~ handleSubmit ~ data:", data)
        const res = await axios.post('http://localhost:3333/form-post', data, {
            headers: {
                'X-CSRF-Token': csrfToken,
                'Content-Type': 'application/json'
            }
        })
        
        console.log("🚀 ~ handleSubmit ~ res:", res)


    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormSubmission;