import styles from './UserItem.module.css'


const UserItems = ({user})=>{
  
    return (
        
         <div className={styles.userItem} >
            <p>{user.name}</p>
      </div>
    )
};
export default UserItems;