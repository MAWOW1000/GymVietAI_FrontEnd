import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { MdHomeFilled } from "react-icons/md";
import { FaUser, FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Sidebar.scss'
import sidebarHeader_logoImg from '../../../assets/image/logoImage2.jpg'
import { useNavigate } from 'react-router-dom';

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
    const navigative = useNavigate();
    return (
        <ProSidebar
            // collapsed={collapsed}
            // toggled={toggled}
            breakPoint="md"
        // onToggle={handleToggleSidebar}
        >
            <SidebarHeader className='sidebarHeader'>
                <div
                    className='sidebarHeader_logoTitle'
                    style={{
                        padding: '24px',
                        // textTransform: 'uppercase',
                        fontWeight: 600,
                        fontSize: 20,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: '#FFFFFF',
                        lineHeight: 1.334,
                    }}
                >
                    <img className='sidebarHeader_logoImg' src={sidebarHeader_logoImg} />
                    GymViet
                </div>
            </SidebarHeader>

            <SidebarContent className='sidebarContent'>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<MdHomeFilled />}
                        className='sidebarItem active'
                    // suffix={<span className="badge red">Dev Pham</span>}
                    >
                        Dashboard
                        <Link to='/admin' />
                    </MenuItem>


                    <MenuItem icon={<FaUser />} className='sidebarItem'>
                        Manage Users
                        <Link to='/admin/manage-user' />
                    </MenuItem>

                    <MenuItem icon={<FaBookOpen />} className='sidebarItem'>
                        Manage Exercise
                        <Link to='/admin/manage-exercise' />
                    </MenuItem>
                </Menu>
                {/* <Menu iconShape="circle">
                    <SubMenu
                        // suffix={<span className="badge yellow">Features</span>}
                        title="Features"
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>
                            Manage Users
                            <Link to='/admin/manage-user' />
                        </MenuItem>
                        <MenuItem>
                            Manage Exercise
                            <Link to='/admin/manage-exercise' />
                        </MenuItem>
                    </SubMenu>
                </Menu> */}
            </SidebarContent>

            <SidebarFooter className='sidebarFooter' style={{ textAlign: 'center' }}>
                <button type='button' className='btn btn-primary btnSidebarFooter'
                    onClick={() => { navigative('/') }}
                >
                    Go to Home Page <MdHomeFilled />
                </button>
                {/* <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            View source
                        </span>
                    </a>
                </div> */}
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideBar;