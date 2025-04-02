export function AppBar() {
    return <div className="h-16 flex justify-between items-center px-6 bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50">
        <div className="text-xl font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            PayTM App
        </div>
        <div className="flex items-center space-x-4">
            <div className="text-gray-600 font-medium">
                Hello
            </div>
            <div className="rounded-full h-10 w-10 bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center shadow-md">
                <div className="text-xl font-semibold text-indigo-800">
                    U
                </div>
            </div>
        </div>
    </div>
}