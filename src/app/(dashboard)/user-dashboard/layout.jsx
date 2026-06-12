const layout = ({ children }) => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-4">
                <ul className="col-span-3">
                    <li>User Stats</li>
                    <li>My Orders</li>
                    <li>Profile</li>
                </ul>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;