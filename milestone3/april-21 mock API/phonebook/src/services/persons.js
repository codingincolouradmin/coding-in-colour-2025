import axios from 'axios'
const baseUrl = ''   // create a project in mock API and add API endpoint here


// get all phonebook records
const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error("error fetching the data", error)
        throw error;
    }
}
// create a new phonebook record
const create = async (newObject) => {
    try {
        const response = await axios.post(baseUrl, newObject);
        return response.data;
    } catch (error) {
        console.error("error adding the data", error)
        throw error;
    }
}
// update a phonebook record
const update = async (id, updatedObject) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, updatedObject);
        return response.data;
    } catch (error) {
        console.error("error updating the data", error)
        throw error;
    }
}
// remove phonebook record
const remove = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`)
        return response.data;
    } catch (error) {
        console.error("error removing data", error)
        throw error;
    }
}
export default { getAll, create, update, remove }
