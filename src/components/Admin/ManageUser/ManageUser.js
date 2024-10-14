import './ManageUser.scss'
import { FaPen, FaTrash } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
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
                <table className="table table-borderless table-striped table-hover">
                    <thead className='theadUser'>
                        <tr>
                            <th scope="col"><input type='checkbox' /></th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Time</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type='checkbox' /></td>
                            <td>1</td>
                            <td>Dev Pham</td>
                            <td>dev@gmail.com</td>
                            <td>Admin</td>
                            <td>Dec 12,2024</td>
                            <td><FaPen /> <FaTrash /></td>
                        </tr>
                        <tr>
                            <td><input type='checkbox' /></td>
                            <td>2</td>
                            <td>John Nguyen</td>
                            <td>johnnguyenajah@gmail.com</td>
                            <td>User</td>
                            <td>Sep 9,2024</td>
                            <td><FaPen /> <FaTrash /></td>
                        </tr>
                        <tr>
                            <td><input type='checkbox' /></td>
                            <td>1</td>
                            <td>Dev Pham</td>
                            <td>dev@gmail.com</td>
                            <td>Admin</td>
                            <td>Dec 12,2024</td>
                            <td><FaPen /> <FaTrash /></td>
                        </tr>
                        <tr>
                            <td><input type='checkbox' /></td>
                            <td>2</td>
                            <td>John Nguyen</td>
                            <td>johnnguyenajah@gmail.com</td>
                            <td>User</td>
                            <td>Sep 9,2024</td>
                            <td><FaPen /> <FaTrash /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManageUser;