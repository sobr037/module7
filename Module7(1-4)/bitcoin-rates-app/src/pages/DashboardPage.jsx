import { useNavigate, Outlet } from 'react-router-dom';
import { useUserContext } from './UserContext'; // Import your user context as needed

export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();

  return (
    <div className="DashboardPage componentBox">
      <h1>Dashboard</h1>

      <Outlet /> {/* Render nested route components here */}

      <button onClick={() => navigate('/dash/tasks')}>Show Tasks</button>
      <button onClick={() => navigate('/dash/messages')}>Show Messages</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

// Add this code to render DashboardMessages component
export function DashboardMessages(props) {
  const { currentUser } = useUserContext(); // Use your user context here
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard, {currentUser.email}</p>
    </div>
  );
}

// Add this code to render DashboardTasks component
export function DashboardTasks(props) {
  const tasks = [
    { id: 1, name: 'Learn React' },
    { id: 2, name: 'Decide on capstone project' },
    { id: 3, name: 'Learn databases' }
  ];

  return (
    <div className="DashboardTasks">
      <ul className="tasks">
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
