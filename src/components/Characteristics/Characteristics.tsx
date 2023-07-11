import { useState } from 'react';

import { UseFormRegister, FieldValues } from 'react-hook-form';

import { TrainCharacteristics } from '../../utils/typesData';

import styles from './styles/styles.module.css';

type characteristicsProps = {
  characteristics: TrainCharacteristics;
  register: UseFormRegister<FieldValues>;
  onChangeEn(valueEn: string): void;
  onChangeFor(valueFor: string): void;
  onChangeSP(valueSp: string): void;
};

function Characteristics({
  characteristics,
  register,
  onChangeEn,
  onChangeFor,
  onChangeSP,
}: characteristicsProps) {
  const [engine, setEngine] = useState(characteristics.engineAmperage);
  const [force, setForce] = useState(characteristics.force);
  const [speed, setSpeed] = useState(characteristics.speed);

  const onChangeEngine = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEngine(e.target.value);
    onChangeEn(e.target.value);
  };
  const onChangeForce = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForce(e.target.value);
    onChangeFor(e.target.value);
  };
  const onChangeSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(e.target.value);
    onChangeSP(e.target.value);
  };

  return (
    <tr>
      <td className={styles.td}>
        <input
          className={`${Number(engine) >= 0 ? styles.input : styles.redInput}`}
          title="engine"
          type="number"
          value={engine}
          {...(register('engine'),
          {
            name: 'engine',
            required: true,
            onChange: onChangeEngine,
            min: 0,
          })}
        />
      </td>
      <td>
        <input
          className={`${Number(force) >= 0 ? styles.input : styles.redInput}`}
          title="force"
          type="number"
          {...(register('force'),
          {
            name: 'force',
            required: true,
            onChange: onChangeForce,
            step: 0.01,
            min: 0,
          })}
          value={force}
        />
      </td>
      <td>
        <input
          className={`${Number(speed) >= 0 ? styles.input : styles.redInput}`}
          {...(register('speed'),
          {
            name: 'speed',
            required: true,
            onChange: onChangeSpeed,
            min: 0,
          })}
          title="speed"
          type="number"
          value={speed}
          onChange={(e) => onChangeSpeed(e)}
          min={0}
        />
      </td>
    </tr>
  );
}

export default Characteristics;
