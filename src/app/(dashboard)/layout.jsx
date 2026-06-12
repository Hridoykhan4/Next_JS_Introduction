export default function DashboardLayout({ children }) {
    return (
        <div>
            <div className="grid grid-cols-12">
                {/* Side Nav */}
                <div className="col-span-3">
                    <ul>
                        <li>User List</li>
                    </ul>
                </div>
                {/* Content */}
                <div className="col-span-9">
                    {children}
                </div>
            </div>
        </div>
    )
}
