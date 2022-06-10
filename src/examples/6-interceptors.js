import {useEffect} from 'react';
import authFetch from "../axios/interceptors";

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
    const fetchData = async () => {
        try {
            const {data, status} = await authFetch('/react-store-productss');
            console.log(data)
        } catch (e) {
            console.log(e.response)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
