import User from '../User/User'
import UserForm from '../UserForm/UserForm'

import styles from './App.module.css'

function App() {

  return (
    <>
    <h1>User Profile</h1>
    <div className={styles.container} >
     <User />
     <UserForm />
    </div>
    </>
  )
}

export default App