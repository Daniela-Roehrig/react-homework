import { useForm } from 'react-hook-form'
import styles from './DynamicForm.module.css'

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const firstFieldValue = watch('firstField', '');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="firstField" className={styles.label}>
            First Field
          </label>
          <input
            id="firstField"
            type="text"
            className={styles.input}
            {...register('firstField',
              {
                required: 'This field is required', minLength: { value: 6, message: 'Minimum length is 6' }
              })}
          />
          {errors.firstField && <p className={styles.error}>{errors.firstField.message}</p>}
        </div>


        {firstFieldValue.length >= 6 && (
          <div className={styles.formGroup}>
            <label htmlFor="secondField" className={styles.label}>
              Second Field
            </label>
            <input
              id="secondField"
              type="text"
              className={styles.input}
              {...register('secondField', { required: 'This field is required' })}
            />
            {errors.secondField && <p className={styles.error}>{errors.secondField.message}</p>}
          </div>
        )}

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;

