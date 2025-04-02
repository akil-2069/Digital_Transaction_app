import { useEffect, useState } from "react"
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => setUsers(response.data.user));
    }, [filter]);

    return <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="font-bold text-lg text-gray-800 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Users
        </div>
        <div className="mb-4">
            <input 
                onChange={(e) => setFilter(e.target.value)} 
                type="text" 
                placeholder="Search users..." 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50"
            />
        </div>
        <div className="space-y-4">
            {users.map(user => <User key={user._id} id={user._id} user={user} />)}
        </div>
    </div>
}

function User({id, user}) {
    const navigate = useNavigate();

    return <div className="flex justify-between items-center p-2 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
        <div className="flex items-center space-x-3">
            <div className="rounded-full h-10 w-10 bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center shadow-md">
                <div className="text-lg font-semibold text-indigo-800">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="text-gray-800 font-medium">
                {user.firstName} {user.lastName}
            </div>
        </div>
        <Button 
            onClick={() => navigate("/send?id=" + id + "&name=" + user.firstName)} 
            label={"Send Money"} 
        />
    </div>
}