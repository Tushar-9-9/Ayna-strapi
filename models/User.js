const axios = require('axios');

// Fetch user details from Strapi
const fetchUser = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:1337/users/${userId}`); // Adjust URL if necessary
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};
