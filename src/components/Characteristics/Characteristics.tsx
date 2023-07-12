import { UseFormReturn } from 'react-hook-form';

import { TrainCharacteristics } from '../../utils/typesData';

import styles from './styles/styles.module.css';
import { FormValues } from '../Pages/TrainPage/TrainPage';

type characteristicsProps = {
  characteristics: TrainCharacteristics;
  validation: UseFormReturn<FormValues>;
  name: number;
};

function Characteristics({ characteristics, validation, name }: characteristicsProps) {
  const engine = characteristics.engineAmperage;
  const force = characteristics.force;
  const speed = characteristics.speed;

  return (
    <tr>
      <td className={styles.td}>
        <input
          defaultValue={engine}
          className={`${
            validation.getFieldState(`engine.${name}`).invalid ? styles.redInput : styles.input
          }`}
          type="number"
          {...validation.register(`engine.${name}`, {
            required: true,
            validate: {
              positive: (v) => v >= 0,
            },
          })}
        />
      </td>
      <td>
        <input
          defaultValue={force}
          className={`${
            validation.getFieldState(`force.${name}`).invalid ? styles.redInput : styles.input
          }`}
          type="number"
          {...validation.register(`force.${name}`, {
            validate: {
              positive: (v) => v >= 0,
            },
            required: true,
          })}
          step={0.0001}
        />
      </td>
      <td>
        <input
          defaultValue={speed}
          className={`${
            validation.getFieldState(`speed.${name}`).invalid ? styles.redInput : styles.input
          }`}
          type="number"
          {...validation.register(`speed.${name}`, {
            required: true,
            validate: {
              positive: (v) => v >= 0,
            },
          })}
        />
      </td>
    </tr>
  );
}

export default Characteristics;
