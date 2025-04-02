import axios from "axios"
import { useEffect, useState } from "react";

export function Balance() {
    return <div className="flex items-center bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="font-bold text-lg text-gray-800">
            Your balance:
        </div>
        <div className="ml-3 text-lg font-semibold text-indigo-600">
            <Money />
        </div>
    </div>
}

function Money() {
    const [money, setMoney] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }).then(response => {
            const roundedBalance = parseFloat(response.data.balance).toFixed(2);
            setMoney(roundedBalance);
        });
    }, []);

    return <div>
        Rs. {money}
    </div>
}