import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Transaction = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0); 
    const navigate = useNavigate();

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 2 : 100));
        }, 60);

        setTimeout(() => {
            clearInterval(progressInterval);
            setLoading(false);

            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);
        }, 3000);

        return () => clearInterval(progressInterval);
    }, [navigate]);

    return <>
        {loading ? (
            <div className="bg-slate-300 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="rounded-lg bg-white w-80 py-10 px-4 h-auto flex flex-col justify-center shadow-lg">
                        <div className="flex flex-col items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div 
                                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-75" 
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <p className="mt-4 text-lg font-medium text-gray-700">
                                Processing Transaction...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="bg-green-300 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="rounded-lg bg-white w-80 py-10 px-4 h-50 flex flex-col justify-center shadow-lg">
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-semibold text-green-600">
                                Transaction Successful
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
}