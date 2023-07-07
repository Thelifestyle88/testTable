import { useAppSelector } from '../..';
import Train from '../Train/Train';

import styles from './styles/styles.module.css';

function Trains() {
  const trains = useAppSelector((store) => store.getAllTrainsReducer.trainsData);

  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Поезда</caption>
      <thead>
        <tr>
          <th className={styles.th}>Название</th>
          <th className={styles.th}>Описание</th>
        </tr>
      </thead>
      <tbody>
        {trains.map((train, index) => {
          return <Train key={train.id} train={train} index={index} id={train.id} />;
        })}
      </tbody>
    </table>
  );
}

export default Trains;
