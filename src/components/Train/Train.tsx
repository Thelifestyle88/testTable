import { TTrain } from '../../utils/typesData';
import { Link, useLocation } from 'react-router-dom';

import { useAppDispatch } from '../../index';

import styles from './styles/train.module.css';
import { addTrainDetails } from '../../services/actions/getTrainDetails';

type TrainProps = {
  train: TTrain;
  index: number;
  id: string;
};

function Train({ train, index }: TrainProps) {
  const dispatch = useAppDispatch();

  const location = useLocation();

  const handleClick = () => {
    dispatch(addTrainDetails(train));
  };

  return (
    <tr className={styles.tr}>
      <td data-sell="name" className={styles.sell}>
        <Link
          className={styles.link}
          onClick={() => handleClick()}
          to={{ pathname: `train/${index}` }}
          state={{ background: location }}>
          {train.name}
        </Link>
      </td>
      <td data-sell="description" className={styles.sell}>
        <Link
          className={styles.link}
          onClick={() => handleClick()}
          to={{ pathname: `train/${index}` }}
          state={{ background: location }}>
          {train.description}
        </Link>
      </td>
    </tr>
  );
}

export default Train;
