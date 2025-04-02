export function InputBox({label, placeholder, onChange}) {
    return <div className="py-2">
        <div className="text-sm font-medium text-gray-700 mb-1">
            {label}
        </div>
        <input 
            onChange={onChange} 
            placeholder={placeholder} 
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50"
        />
    </div>
}