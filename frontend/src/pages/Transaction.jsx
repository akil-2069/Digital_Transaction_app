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

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex justify-center items-center p-4">
            {loading ? (
                <div className="w-full max-w-md">
                    <div className="rounded-2xl bg-white/90 backdrop-blur-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div 
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all duration-75 ease-in-out" 
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <p className="text-lg font-medium text-gray-700">
                                Processing Transaction...
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full max-w-md">
                    <div className="rounded-2xl bg-white/90 backdrop-blur-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-semibold text-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Transaction Successful
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};