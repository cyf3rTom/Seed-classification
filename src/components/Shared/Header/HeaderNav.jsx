import { Popover } from "antd"
import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { Drawer, Button } from 'antd';
import { FaHome, FaPhoneAlt, FaWrench, FaUserMd, FaAddressBook, FaBloggerB, FaSignInAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/auth";
import avatarImage from "../../../images/avatar.jpg";


const HeaderNav = ({ open, setOpen, isLoggedIn, avatar, content }) => {
  const [auth, setAuth] = useAuth();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}>Home</NavLink></li>
                    <li><NavLink to={'/service'} className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}>Service</NavLink></li>
                    <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? "nav-link scrollto active" : ""}>Contact</NavLink></li>
                
               
                {!auth?.user ? (
                        <li><Link to={'/login'} className="nav-link scrollto"><FaSignInAlt className="icon mr-2" />Login</Link></li>
                    ) : (
                        <li>
                        <Popover content={content}>
                            <div className='profileImage'>
                                <img src={avatarImage} alt="" className="profileImage shadow img-fluid" />
                            </div>
                        </Popover>
                        </li>
                    )}
                    </ul>
                <FaBars className='mobile-nav-toggle' onClick={showDrawer} />
            </nav>
            <Drawer
                placement={'left'}
                width={500}
                onClose={onClose}
                open={open}
                size={"default"}
                extra={<Button type="primary" onClick={onClose}> Close</Button>}
            >
                <ul className="mobile-menu-nav">
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? "nav-link scrollto " : ""}><FaHome className="icon" />Home</NavLink></li>
                    <li><NavLink to={'/service'} className={({ isActive }) => isActive ? "nav-link scrollto " : ""}><FaWrench className="icon" />Service</NavLink></li>
                    <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? "nav-link scrollto " : ""}><FaPhoneAlt className="icon" />Contact</NavLink></li>
                    {!auth?.user ? (
                        <li><Link to={'/login'} className="nav-link scrollto"><FaSignInAlt className="icon mr-2" /> Login</Link></li>
                    ) : (
                        <li>
                        <Popover content={content}>
                            <div className='profileImage'>
                                <img src={avatarImage} alt="" className="profileImage shadow img-fluid" />
                            </div>
                        </Popover>
                        </li>
                    )}
                </ul>
            </Drawer>
        </>
    )
}

export default HeaderNav