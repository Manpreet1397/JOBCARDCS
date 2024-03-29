import React from 'react';
import JobCard from './JobCard';

const jobData = [
    {
        price: "$120/hr",
        image: "./cardimg.png",
        logo: "./nike.png",
        post: "Azure Data Engineer"
    },
    {
        price: "$150/hr",
        image: "./sb2.gif",
        logo: "./google.png",
        post: "Senior SeBackend Engineer"
    },
    {
        price: "$150/hr",
        image: "./azure.png",
        logo: "./azurelogo.png",
        post: "Azure Data Engineer"
    },
    {
        price: "$150/hr",
        image: "./azure.png",
        logo: "./azurelogo.png",
        post: "Azure Data Engineer"
    },
    {
        price: "$150/hr",
        image: "./cardimg.png",
        logo: "./google.png",
        post: "Senior Backend Engineer"
    },
    {
        price: "$150/hr",
        image: "./cardimg.png",
        logo: "./nike.png",
        post: "Senior ui Developer"
    },
]

const Home: React.FC = () => {
    return (
        <div className='flex justify-center items-center min-h-[100vh] px-16 py-12 bg-yellow-400'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {jobData.map((data, index) => (
                    <JobCard key={index} price={data.price} image={data.image} logo={data.logo} post={data.post} />
                ))}
            </div>
        </div>
    );
}

export default Home;
