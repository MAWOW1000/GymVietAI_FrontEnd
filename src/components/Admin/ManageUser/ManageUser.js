import './ManageUser.scss'
import { FiSearch } from "react-icons/fi";
import TableUser from './TableUser';
function ManageUser() {
    return (
        <div className="manageUser">
            <div className="manageUserHeader">
                <span className="manageUser__header__title">Manage User</span>
                <div className='manageUser__header__search__div'>
                    <label htmlFor='manageUser__header__search' className='manageUser__header__search__icon'><FiSearch /></label>
                    <input id='manageUser__header__search' className='manageUser__header__search' type="search" placeholder="Search for..." />
                </div>
                <button className="manageUser__header__button">Create User</button>
            </div>

            <div className="manageUserContent">
                <TableUser/>
            </div>
        </div>
    );
}

export default ManageUser;
