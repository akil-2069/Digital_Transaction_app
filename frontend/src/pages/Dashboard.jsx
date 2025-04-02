import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";

export const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/transactions", {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }).then(response => {
            const formattedTransactions = response.data.transactions.map(t => ({
                ...t,
                date: new Date(t.date).toLocaleDateString()
            }));
            setTransactions(formattedTransactions);
        }).catch(error => console.error("Error fetching transactions:", error));
    }, []);

    const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#14B8A6"];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <AppBar />
            <div className="m-8 space-y-8">
                <Balance />
                <Users />
                <div className="bg-white/90 backdrop-blur-lg shadow-xl p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Transaction History
                    </h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={transactions}>
                            <XAxis dataKey="date" stroke="#6B7280" />
                            <YAxis stroke="#6B7280" />
                            <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="amount" fill="#6366F1" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};