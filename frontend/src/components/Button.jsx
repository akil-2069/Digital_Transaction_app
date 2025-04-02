export function Button({label, onClick}) {
    return <button 
        type="button" 
        onClick={onClick} 
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg px-4 py-2
        hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-300/50
        transition-all duration-200 transform hover:-translate-y-0.5"
    >
        {label}
    </button>
}