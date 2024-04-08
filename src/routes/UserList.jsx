import {Link} from 'react-router-dom';
import useFetchUsers from '../hooks/useFetchUsers';
import classes from './UserList.module.css';

function UserList() {
  const users = useFetchUsers();

  return(
    <>
    <div className={classes.title}>directory</div>
      <ul className={classes.list}>
        {users && 
        users.map((user) => (
          <li key={user.id} className={classes.card}>
            <Link to={`/${user.id}`} className={classes.link} />
            <div>name: {user.name}</div>
            <div>posts: {user.posts.length}</div>
          </li>
        ))
        }
      </ul>
    </>
  );
}

export default UserList;
