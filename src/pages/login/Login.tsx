import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/layouts/_login.scss'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic kiểm tra login (giả lập)
//     if (username === 'admin' && password === '123456') {
//       navigate('/dashboard/company'); // Điều hướng tới trang chủ sau khi login thành công
//     } else {
//       alert('Invalid credentials');
//     }
//   };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
}

export default Login;