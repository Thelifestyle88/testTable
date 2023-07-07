import { useForm } from 'react-hook-form';

import { useAppSelector } from '../../..';
import Characteristics from '../../Characteristics/Characteristics';

import styles from './styles/styles.module.css';

function TrainPage() {
  const train = useAppSelector((store) => store.trainDetailsReducer.train);
  const characteristics = train?.characteristics;

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    const allspeed = document.getElementsByName('speed');
    setTimeout(() => {
      const arr = Array.from(allspeed);
      const result = arr
        .map((item) => {
          //@ts-ignore
          return item.value;
        })
        .sort((a, b) => {
          return a - b;
        });
      console.log(result);
    }, 0);
  };

  return (
    <>
      {characteristics && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
                return <Characteristics key={index} characteristics={item} register={register} />;
              })}
            </tbody>
          </table>
          <input className={styles.button} type="submit" />
        </form>
      )}
    </>
  );
}

export default TrainPage;
