import { useForm } from 'react-hook-form';

import { useAppSelector } from '../../..';
import Characteristics from '../../Characteristics/Characteristics';

import styles from './styles/styles.module.css';
import { useState } from 'react';

function TrainPage() {
  const train = useAppSelector((store) => store.trainDetailsReducer.train);
  const characteristics = train?.characteristics;

  const { register, handleSubmit } = useForm();

  const [valueEn, setValueEn] = useState('1');
  const [valueFor, setValueFor] = useState('1');
  const [valueSp, setValueSp] = useState('1');

  const handleChangeEn = (valueEn: string) => {
    setValueEn(valueEn);
  };
  const handleChangeFor = (valueFor: string) => {
    setValueFor(valueFor);
  };
  const handleChangeSP = (valueSp: string) => {
    setValueSp(valueSp);
  };
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
                return (
                  <Characteristics
                    key={index}
                    characteristics={item}
                    register={register}
                    onChangeEn={handleChangeEn}
                    onChangeFor={handleChangeFor}
                    onChangeSP={handleChangeSP}
                  />
                );
              })}
            </tbody>
          </table>
          <input
            className={styles.button}
            disabled={
              Number(valueEn) >= 0 && Number(valueFor) >= 0 && Number(valueSp) >= 0 ? false : true
            }
            type="submit"
          />
        </form>
      )}
    </>
  );
}

export default TrainPage;
