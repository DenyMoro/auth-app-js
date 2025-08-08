import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

export default function Navbar() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    return (
        <nav style={{ padding: '10px', background: '#eee' }}>
            <span>My App</span>
            <span style={{ float: 'right' }}>
        {user ? (
            <>
                👋 Hello, {user.firstName}
                <button onClick={() => dispatch(logout())} style={{ marginLeft: '10px' }}>
                    Logout
                </button>
            </>
        ) : (
            'Not logged in'
        )}
      </span>
        </nav>
    );
}
