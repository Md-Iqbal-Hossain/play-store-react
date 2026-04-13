import React, { use } from 'react';

const appPromise = fetch('/data.json')
    .then((res) => res.json());

const TrendingApps = () => {

    const apps = use(appPromise);
    console.log(apps, 'apps');
    

    return (
        <div>
            {/* section header  */}
            <div className='mb-8 text-center'>
                <h2 className='font-bold text-4xl'>Trending apps</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est reprehenderit molestias!</p>
            </div>
        </div>
    );
};

export default TrendingApps;