import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center justify-center py-4 border-b border-gray-200">
            <Link href="/" className="text-3xl font-semibold text-indigo-600">
                Blog
            </Link>
        </div>
    );
}
