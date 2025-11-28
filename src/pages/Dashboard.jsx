import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [scans, setScans] = useState([
        { id: 1, repo: "frontend-app", branch: "main", status: "Passed", time: "2m ago" },
        { id: 2, repo: "backend-api", branch: "feat/auth", status: "Failed", time: "15m ago" },
        { id: 3, repo: "mobile-ios", branch: "dev", status: "Passed", time: "1h ago" },
        { id: 4, repo: "landing-page", branch: "main", status: "Passed", time: "3h ago" },
    ]);

    const handleAddRepo = () => {
        const repoName = prompt("Enter repository name (e.g., my-org/new-repo):");
        if (repoName) {
            const newScan = {
                id: Date.now(),
                repo: repoName,
                branch: "main",
                status: "Pending",
                time: "Just now"
            };
            setScans([newScan, ...scans]);
            // Auto-start scan
            setTimeout(() => runScan(newScan.id), 500);
        }
    };

    const runScan = (id) => {
        setScans(prev => prev.map(scan =>
            scan.id === id ? { ...scan, status: "Scanning..." } : scan
        ));

        setTimeout(() => {
            const randomStatus = Math.random() > 0.3 ? "Passed" : "Failed";
            setScans(prev => prev.map(scan =>
                scan.id === id ? { ...scan, status: randomStatus, time: "Just now" } : scan
            ));
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-loom-black-900 flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-loom-gray-800 bg-loom-black-800 hidden md:flex flex-col">
                <div className="p-6">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-loom-green-500 rounded-lg flex items-center justify-center text-loom-black-900 font-bold text-xl">
                            T
                        </div>
                        <span className="text-xl font-bold text-loom-gray-100 tracking-tight">
                            Loom<span className="text-loom-green-500">ix</span>
                        </span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <NavItem active icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>}>Overview</NavItem>
                    <NavItem icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>}>Repositories</NavItem>
                    <NavItem icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>}>Activity</NavItem>
                    <NavItem icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>}>Settings</NavItem>
                </nav>

                <div className="p-4 border-t border-loom-gray-800">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-loom-black-900 border border-loom-gray-800">
                        <div className="w-8 h-8 rounded-full bg-loom-green-500 flex items-center justify-center text-loom-black-900 font-bold text-xs">GU</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-loom-gray-100 truncate">Gilberto User</p>
                            <p className="text-xs text-loom-gray-500 truncate">Pro Plan</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 border-b border-loom-gray-800 flex items-center justify-between px-8 bg-loom-black-900/50 backdrop-blur-sm">
                    <h1 className="text-xl font-bold text-loom-gray-100">Dashboard</h1>
                    <button
                        onClick={handleAddRepo}
                        className="px-4 py-2 bg-loom-green-500 hover:bg-loom-green-400 text-loom-black-900 rounded-lg font-semibold text-sm transition-colors"
                    >
                        + Add Repository
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto p-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StatCard title="Total Scans" value={scans.length.toString()} change="+12%" />
                        <StatCard title="Issues Found" value="42" change="-5%" positive />
                        <StatCard title="Time Saved" value="142h" change="+8%" />
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-loom-black-800 border border-loom-gray-800 rounded-xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-loom-gray-800">
                            <h3 className="font-semibold text-loom-gray-100">Recent Scans</h3>
                        </div>
                        <div className="divide-y divide-loom-gray-800">
                            {scans.map(scan => (
                                <ActivityRow
                                    key={scan.id}
                                    {...scan}
                                    onRunScan={() => runScan(scan.id)}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

const NavItem = ({ children, icon, active }) => (
    <a href="#" className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-loom-green-900/20 text-loom-green-500' : 'text-loom-gray-400 hover:text-loom-gray-100 hover:bg-loom-gray-800'}`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
        {children}
    </a>
);

const StatCard = ({ title, value, change, positive }) => (
    <div className="p-6 bg-loom-black-800 border border-loom-gray-800 rounded-xl">
        <p className="text-sm text-loom-gray-400 mb-1">{title}</p>
        <div className="flex items-end justify-between">
            <h4 className="text-3xl font-bold text-loom-gray-100">{value}</h4>
            <span className={`text-sm font-medium ${positive ? 'text-loom-green-500' : 'text-loom-green-500'}`}>
                {change}
            </span>
        </div>
    </div>
);

const ActivityRow = ({ repo, branch, status, time, onRunScan }) => (
    <div className="px-6 py-4 flex items-center justify-between hover:bg-loom-black-900/50 transition-colors group">
        <div className="flex items-center gap-4">
            <div className={`w-2 h-2 rounded-full ${status === 'Passed' ? 'bg-loom-green-500' : status === 'Failed' ? 'bg-red-500' : 'bg-yellow-500 animate-pulse'}`}></div>
            <div>
                <p className="text-sm font-medium text-loom-gray-100">{repo}</p>
                <p className="text-xs text-loom-gray-500">{branch}</p>
            </div>
        </div>
        <div className="flex items-center gap-6">
            <span className={`px-2 py-1 rounded text-xs font-medium ${status === 'Passed' ? 'bg-loom-green-900/30 text-loom-green-500' :
                    status === 'Failed' ? 'bg-red-900/30 text-red-500' :
                        'bg-yellow-900/30 text-yellow-500'
                }`}>
                {status}
            </span>
            <span className="text-sm text-loom-gray-500 w-16 text-right">{time}</span>
            <button
                onClick={onRunScan}
                className="opacity-0 group-hover:opacity-100 p-2 text-loom-gray-400 hover:text-loom-green-500 transition-all"
                title="Run Scan"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
        </div>
    </div>
);

export default Dashboard;
