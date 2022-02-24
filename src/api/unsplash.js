// using a different axios method to create a basic tempelate for fetching
// https://axios-http.com/docs/instance
import axios from 'axios';
import React from 'react';

const unsplash = axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID iEiQaB708_FJfzfEWtnIrB1T_wi2IXQrzJF4RwI1FW8'
	}
});
export default unsplash;
