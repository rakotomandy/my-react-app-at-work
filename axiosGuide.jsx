/**
 * Axios CRUD Example – Using .then() and .catch()
 * Fully commented for learning purposes
 */

import axios from 'axios';
// If using Node.js without ES6 modules, uncomment the next line:
// const axios = require('axios');

// Base URL for API requests
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * 1️⃣ GET request – Retrieve all posts
 */
axios.get(`${BASE_URL}/posts`) // Send GET request to /posts
  .then(response => {
    // If request succeeds, this block runs
    console.log('GET /posts response data:', response.data); // Actual data from API
    console.log('Status code:', response.status);            // HTTP status code (200, 404, etc.)
    console.log('Headers:', response.headers);              // Response headers
  })
  .catch(error => {
    // If request fails, this block runs
    if (error.response) {
      // Server responded with status code outside 2xx
      console.error('GET /posts failed with status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('GET /posts no response received:', error.request);
    } else {
      // Something else triggered the error
      console.error('GET /posts error message:', error.message);
    }
  });

/**
 * 2️⃣ GET request with query parameters – Retrieve posts by userId
 */
axios.get(`${BASE_URL}/posts`, { params: { userId: 1 } }) // ?userId=1
  .then(response => {
    console.log('GET /posts?userId=1 response data:', response.data);
  })
  .catch(error => {
    console.error('GET /posts?userId=1 error:', error.message);
  });

/**
 * 3️⃣ POST request – Create a new post
 */
axios.post(`${BASE_URL}/posts`, {
    title: 'Learning Axios POST',       // Title of the new post
    body: 'This is a sample post via axios.post.', // Content of the post
    userId: 1                            // Associated user ID
  })
  .then(response => {
    console.log('POST /posts created:', response.data);
  })
  .catch(error => {
    console.error('POST /posts error:', error.message);
  });

/**
 * 4️⃣ PUT request – Replace an existing post entirely
 */
axios.put(`${BASE_URL}/posts/1`, {
    title: 'PUT: Full Replace',                  // New title
    body: 'This post has been fully replaced via PUT.', // New body
    userId: 1                                   // User ID
  })
  .then(response => {
    console.log('PUT /posts/1 response:', response.data);
  })
  .catch(error => {
    console.error('PUT /posts/1 error:', error.message);
  });

/**
 * 5️⃣ PATCH request – Update part of a post
 */
axios.patch(`${BASE_URL}/posts/1`, {
    body: 'PATCH: Partial update only' // Only updating the body field
  })
  .then(response => {
    console.log('PATCH /posts/1 response:', response.data);
  })
  .catch(error => {
    console.error('PATCH /posts/1 error:', error.message);
  });

/**
 * 6️⃣ DELETE request – Remove a post
 */
axios.delete(`${BASE_URL}/posts/1`) // Delete post with ID 1
  .then(response => {
    console.log('DELETE /posts/1 response data:', response.data); // Usually empty object
    console.log('DELETE /posts/1 status:', response.status);      // HTTP status code
  })
  .catch(error => {
    console.error('DELETE /posts/1 error:', error.message);
  });

/**
 * ✅ Summary:
 * - axios.get(url, config)       => Retrieve data
 * - axios.post(url, data)        => Create data
 * - axios.put(url, data)         => Replace entire resource
 * - axios.patch(url, data)       => Update part of resource
 * - axios.delete(url)            => Delete resource
 * 
 * All requests here use .then() for success and .catch() for error handling.
 * Full comments explain each line for learning.
 */
