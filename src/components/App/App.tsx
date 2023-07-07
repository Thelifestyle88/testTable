import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import MainPage from '../Pages/MainPage/MainPage';
import TrainPage from '../Pages/TrainPage/TrainPage';

import { useAppDispatch } from '../..';
import { getAllTrains } from '../../services/actions/getAllTrains';

import Modal from '../Modal/Modal';
import { deleteTrainDetails } from '../../services/actions/getTrainDetails';

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getAllTrains());
  }, [dispatch]);

  const closeTrainModal = () => {
    dispatch(deleteTrainDetails());
    navigate(background.pathname || '/', { replace: true });
  };

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/train/:id" element={<TrainPage />} />
      </Routes>
      {background?.pathname === '/' && (
        <Routes>
          <Route
            path="/train/:id"
            element={
              <Modal
                name="Характеристики"
                onClose={() => {
                  closeTrainModal();
                }}
                children={<TrainPage />}
              />
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
