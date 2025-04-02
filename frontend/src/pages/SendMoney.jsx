import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const id = searchParams.get("id");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex justify-center items-center p-4">
            <div className="w-full max-w-md">
                <div className="rounded-2xl bg-white/90 backdrop-blur-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
                    <h2 className="text-3xl font-bold text-center text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Send Money
                    </h2>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md">
                                <span className="text-2xl text-white font-semibold">
                                    {name[0].toUpperCase()}
                                </span>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {name}
                            </h3>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="amount">
                                Amount (in Rs)
                            </label>
                            <input
                                onChange={(e) => setAmount(Number(e.target.value))}
                                type="number"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                id="amount"
                                placeholder="Enter amount"
                            />
                        </div>
                        <button 
                            onClick={() => {
                                axios.post("http://localhost:3000/api/v1/account/transfer", {
                                    to: id,
                                    amount
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + localStorage.getItem("token")
                                    }
                                });
                                navigate("/transaction");
                            }}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg px-6 py-3 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-300/50 transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            Initiate Transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};