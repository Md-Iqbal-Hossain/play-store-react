import React, { use, useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import AppCard from '../ui/AppCard';
// import { useLoaderData } from 'react-router';

// const appPromise = fetch('/data.json')
//     .then((res) => res.json());

const TrendingApps = () => {

    // const apps = use(appPromise);
    // console.log(apps, 'apps');

    // const data = useLoaderData();
    // console.log(data, 'data from homepage');

    const [apps, setApps] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            console.log(data);
            setApps(data);

        };
        fetchData();
    }, []);

    console.log(apps, 'apps');


    return (
        <div className='container mx-auto my-[60px]'>
            {/* section header  */}
            <div className='mb-8 text-center'>
                <h2 className='font-bold text-4xl'>Trending apps</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est reprehenderit molestias!</p>
            </div>
            <h2 className='px-16'>Total apps: {apps.length}</h2>
            <div className='grid grid-cols-3 gap-5 justify-items-center'>
                {
                apps.map((app, ind) => {
                    return (
                        <AppCard app={app} key={ind}/>
                    )
                })
            }
            </div>
        </div>
    );
};

export default TrendingApps;