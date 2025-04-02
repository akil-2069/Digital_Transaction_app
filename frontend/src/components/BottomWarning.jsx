import { Link } from "react-router-dom";

export function BottomWarning({label, linkText, to}) {
    return <div className="px-2 py-4 text-sm flex justify-center gap-1">
        <div className="text-gray-600">
            {label}
        </div>
        <Link className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors" to={to}>
            {linkText}
        </Link>
    </div>
}
