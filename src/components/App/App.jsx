import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import {useDispatch,useSelector} from "react-redux"
import BmiForm from '../BmiForm/BmiForm';
import Info from '../Info/Info';
import Bar from '../Bar/Bar';
import { getData, storeData } from '../../helpers/localStorage';
import { useParams } from 'react-router';
import {setData} from "../../Redux/Actions/allAction"
const Apps = () => {
  const initialState = () => getData('data') || [];
  const [state, setState] = useState(initialState);
  const dispatch= useDispatch()
  const {id}=useParams()
  useEffect(() => {
    storeData('data', state);
    const date = state.map(obj => obj.user_id===id?  obj.date: "");
    const time =state.map(obj =>  obj.user_id===id? obj.time: "");
    const bmi = state.map(obj =>  obj.user_id===id? obj.bmi: "");
    let newData = { date,time, bmi };
    dispatch(setData(newData))
  }, [state]);
  const handleChange = val => {
    let heightInM = val.height / 100;
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
    val.id = uuidv4();
    val.user_id=id;
    let newVal = [...state, val];
    let len = newVal.length;
    if (len > 7) newVal = newVal.slice(1, len);
    setState(newVal);
  };
  const handleDelete = id => {
    storeData('lastState', state);
    let newState = state.filter(i => {
      return i.id !== id;
    });
    setState(newState);
  };

  const handleUndo = () => {
    setState(getData('lastState'));
  };
  const data=useSelector(state=>state.reducer.setData)
  return (
    <div className='container'>

      <div className='row center'>

        <h1 className='white-text'> BMI Tracker </h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
          <BmiForm change={handleChange} />
          <Bar labelData={data.date} labelData1={data.time} bmiData={data.bmi} />

                <div>
            <div className='row center'>
              <h4 className='white-text'>7 Day Data</h4>
            </div>
            <div className='data-container row'>
              {state.length > 0 ? (
                <>
                  {state.map(info => info.user_id===id ? (
                    <Info
                      key={info.id}
                      id={info.id}
                      weight={info.weight}
                      height={info.height}
                      date={info.date}
                      time={info.time}
                      bmi={info.bmi}
                      deleteCard={handleDelete}
                    />
                  ):"")}
                </>
              ) : (
                  <div className='center white-text'>No log found</div>
                )}
            </div>
          </div>
          {getData('lastState') !== null ? (
            <div className='center'>
              <button className='calculate-btn' onClick={handleUndo}>
                Undo
              </button>
            </div>
          ) : (
              ''
            )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
