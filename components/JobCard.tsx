import { CiBookmark } from "react-icons/ci";

interface JobCardProps {
    price: string;
    image: string;
    logo: string;
    post: string;
}

const JobCard: React.FC<JobCardProps> = (props) => {
    return (
        <div className="p-6 border-2 border-black rounded-3xl flex flex-col gap-4 bg-white">
            <div className="flex justify-between">
                <p className="text-xl font-bold">{props.price}</p>
                <button><CiBookmark /></button>
            </div>
            <div className="flex object-cover">
                <img src={props.image} alt="" />
            </div>
            <div className="flex justify-between items-center gap-4">
                <div className="w-1/5 flex justify-center">
                    <img src={props.logo} className="h-20 object-contain" alt="logo" />
                </div>
                <p className="w-3/5 text-2xl font-bold">{props.post}</p>
                <button className="min-w-1/5 px-6 py-3 bg-black text-white rounded-full">View</button>
            </div>
        </div>
    );
};

export default JobCard;