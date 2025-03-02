import axios from "axios"
import { useEffect, useState } from "react";

export function Balance() {
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance:
        </div>
        <div className="font-semibold ml-3 text-lg">
            <Money />
        </div>
    </div>
}

function Money() {
    const [money, setMoney] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            const roundedBalance = parseFloat(response.data.balance).toFixed(2);
            setMoney(roundedBalance);
        })
    }, []);
    

    return <div>
        Rs. {money}
    </div>
}