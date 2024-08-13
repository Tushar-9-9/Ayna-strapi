const axios = require('axios');

// Fetch user details from Strapi
const fetchUser = async (userId) => {
    try {
        const response = await axios.get(`https://blessed-desk-ccf349152c.strapiapp.com/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};
