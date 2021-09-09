import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const baseInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});

/**
 * GET request
 * @param url
 * @param config
 */
export const get = async (url, config = {}) => {
    return await baseInstance.get(url, config);
};

/**
 * POST request
 * @param url
 * @param data
 * @param config
 */
export const post = async (url, data, config = {}) => {
    return await baseInstance.get(url, data, config);
};

/**
 * PUT request
 * @param url
 * @param data
 * @param config
 */
export const put = async (url, data, config = {}) => {
    return await baseInstance.put(url, data);
};

/**
 * PATCH request
 * @param url
 * @param data
 * @param config
 */
export const patch = async (url, data, config = {}) => {
    return await baseInstance.patch(url, data, config);
};

/**
 * DELETE request
 * @param url
 */
export const delt = async (url) => {
    return await baseInstance.delete(url);
};
