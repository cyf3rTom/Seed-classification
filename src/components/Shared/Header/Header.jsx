import { useEffect, useState } from 'react';
import './index.css';
import useAuthCheck from '../../../redux/hooks/useAuthCheck';
import TopHeader from '../TopHeader/TopHeader';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../images/AgriBuddyLogo.png';
import avatar from '../../../images/avatar.jpg';
import { Button, message } from 'antd';
import { loggedOut } from '../../../service/auth.service';
import HeaderNav from './HeaderNav';
import toast from 'react-hot-toast';
import { useAuth } from '../../../context/auth';

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLogged] = useState(false);
    const [show, setShow] = useState(true);
    const [open, setOpen] = useState(false);
    const [auth, setAuth] = useAuth();

    // const lastScrollRef = useRef(0);
    const handleScroll = () => {
        const currentScroll = window.scrollY;
        // if (currentScroll > lastScrollRef.current) { // Undo scroll up effect
        if (currentScroll > 50) {
            setShow(false);
        } else {
            setShow(true);
        }
        // lastScrollRef.current = currentScroll;
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return (() => window.removeEventListener('scroll', handleScroll));
    }, [])

    const handleLogout = () => {
        setAuth({
          ...auth,
          user: null,
          token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
      };
  
    const userData = localStorage.getItem('auth');
    const user = JSON.parse(userData);
    const content = (
        <div className='nav-popover'>
            <div className='my-2'>
                <h5 className='text-capitalize'>{user?.user?.name}</h5>
                <p className='my-0'>{user?.user?.email}</p>
            </div>
            <Button variant="outline-danger" className='w-100' size="sm" onClick={handleLogout}>
                Logged Out
            </Button>
        </div >
    );
    return (
        <>
            <div className={`navbar navbar-expand-lg navbar-light ${!show && "hideTopHeader"}`} expand="lg">
                <TopHeader />
            </div>
            <header id="header" className={`fixed-top ${!show && "stickyHeader"}`}>
                <div className="container d-flex align-items-center">

                    <Link to={'/'} className="logo me-auto">
                        <img src={img} alt="" className="img-fluid" />
                    </Link>
                    <HeaderNav isLoggedIn={isLoggedIn}
                        avatar={avatar} content={content} open={open} setOpen={setOpen} />
                </div>
            </header>
        </>
    )
}

export default Header