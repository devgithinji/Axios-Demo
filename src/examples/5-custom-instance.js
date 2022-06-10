import {useEffect} from 'react';
import authFetch from "../axios/custom";

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
    const fetchData = async () => {
        try {
            const {data, status} = await authFetch.get('/api')
            console.log(data);
        } catch (e) {

        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
