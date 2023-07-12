import { useForm } from 'react-hook-form';

import { useAppSelector } from '../../..';
import Characteristics from '../../Characteristics/Characteristics';

import styles from './styles/styles.module.css';

export type FormValues = {
  engine: number[];
  force: number[];
  speed: number[];
};

function TrainPage() {
  const train = useAppSelector((store) => store.trainDetailsReducer.train);
  const characteristics = train?.characteristics;
  const validation = useForm<FormValues>({ mode: 'onBlur' });
  const onSubmit = (data: FormValues) => {
    const speed = data.speed.map((item) => {
      return Number(item);
    });
    const final = speed.sort((a, b) => {
      return a - b;
    });
    console.log(final);
  };
  const errors = validation.formState.errors;

  return (
    <>
      {characteristics && (
        <form onSubmit={validation.handleSubmit(onSubmit)} className={styles.form}>
          <table className={styles.table}>
            <caption className={styles.caption}>{train.name}</caption>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th className={styles.th}>Ток двигателя</th>
                <th className={styles.th}>Сила тяги</th>
                <th className={styles.th}>Скорость</th>
              </tr>
            </thead>
            <tbody>
              {characteristics.map((item, index) => {
                return (
                  <Characteristics
                    key={index}
                    characteristics={item}
                    name={index}
                    validation={validation}
                  />
                );
              })}
            </tbody>
          </table>
          <input
            className={styles.button}
            disabled={Object.keys(errors).length === 0 ? false : true}
            type="submit"
          />
        </form>
      )}
    </>
  );
}

export default TrainPage;
