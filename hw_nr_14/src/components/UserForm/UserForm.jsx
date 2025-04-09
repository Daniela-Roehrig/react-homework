import { useState, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { setUserInfo } from '../../redux/actions';

import styles from './UserForm.module.css';

const UserForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [userStatus, setUserStatus] = useState('');

    const userNameId = useId();
    const userStatusId = useId();

    const onSubmit = (values) => {

        dispatch(setUserInfo({
            name: values.username,
            status: values.status,
        }));

        setUserName(values.username);
        setUserStatus(values.status);

        reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>{user.username}Edit User Information</h2>
            <div>
                <label htmlFor={userNameId}>Name </label>
                <input
                    {...register('username', {
                        required: 'This field is required',
                        minLength: {value: 5, message: 'Name must be at least 5 characters long'                        }
                    })}
                    type="text"
                    placeholder="Name"
                    id={userNameId}
                    value={userName}
                    onChange={(element) => setUserName(element.target.value)}
                />
                {errors.username && <p className={styles.error}>{errors.username.message}</p>}
            </div>
            <div>
                <label htmlFor={userStatusId}>Status </label>
                <input
                    {...register('status', {
                        required: 'This field is required',
                        minLength: {value: 4, message: 'Status must be at least 4 characters long'                        }
                    })}
                    type="text"
                    placeholder="Status"
                    id={userStatusId}
                    value={userStatus}
                    onChange={(element) => setUserStatus(element.target.value)}
                />
                {errors.status && <p className={styles.error}>{errors.status.message}</p>}
            </div>

            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
