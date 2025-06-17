import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Details } from './Details';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Update } from './Update';
import { removeCar } from '../login/data/Action';

function BasicExample(props) {
  const [flag, setFlag] = useState(false);
  const [up, setUp] = useState(false);
  const dispatch = useDispatch();
  const { img, codeModel, year, place, city, availble, codeCar } = props;
  const currentUser = useSelector(store => store.currentUser);
  const b = currentUser.name;
  const models = useSelector(store => store.modelCarArr);
  const modDetails = models.find(x => x.modelCode === codeModel);
  console.log(models);
  console.log(codeModel);
  const typsCars = useSelector(x => x.typeCarArr);
  const mYType = modDetails?.typeCode;
  const typeDetails = typsCars.find(x => x.typeCode === mYType);
  const dis = availble === 'true' ? 'true' : 'false';
  const text = dis === 'true' ? 'פרטים נוספים' : 'לא זמין';

  const navigate = useNavigate();

  const handleDetailsToggle = () => {
    if (b && modDetails) {
      setFlag(prevFlag => !prevFlag);
    } else {
      Swal.fire({
        title: "😕 אתה לא מחובר",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "הרשמה",
        denyButtonText: `התחברות`,
        cancelButtonText: "ביטול",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/Sign');
        } else if (result.isDenied) {
          navigate('/Login');
        } else if (result.isDismissed) {
          Swal.fire("פעולה בוטלה", "", "error");
        }
      });
    }
  };

  const sendimg = () => {
    setUp(prevUp => !prevUp);
  };

  const delete1 = () => {
    dispatch(removeCar(codeCar));
  };

  return (
    <>
      <Card style={{ width: '18rem', position: 'relative' }} className='divCard'>
        <Card.Img variant="top" src={img} className='carImg' />
        <div className='path'></div>
        {currentUser.type === 'מנהל' && (
          <div className='icon-container'>
            <FaTrash
              style={{ width: '1.5rem', height: '1.5rem', cursor: 'pointer' }}
              onClick={delete1}
              className='icon1'
            />
            <FaEdit
              style={{ width: '1.5rem', height: '1.5rem', cursor: 'pointer' }}
              onClick={sendimg}
              className='icon2'
            />
          </div>
        )}
        <Card.Body>
          <h3>{modDetails?.company} {modDetails?.model}</h3>
          <Card.Title>שנה: {year}</Card.Title>
          <Card.Text>{place} מקומות, מיקום: {city}</Card.Text>
          <br />
          <Button
            onClick={handleDetailsToggle}
            style={{ width: '100%', height: '2.5vw', position: 'absolute', bottom: '0px', left: '0%' }}
            variant="primary"
            id='n1'
            disabled={dis === 'false'}
          >
            {text}
          </Button>
        </Card.Body>
      </Card>
      {flag && (
        <Details
          img={img}
          codeCar={codeCar}
          detailsModel={modDetails}
          onClose={() => setFlag(false)}
        />
      )}
      {up && (
        <Update
          codeCar={codeCar}
          onClose={sendimg} />
      )}
    </>
  );
}

export default BasicExample;
