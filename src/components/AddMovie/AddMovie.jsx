import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddMovie() {

  //dispatch to saga and it returns all of the genres from the DB to the genre reducer
  useEffect(() => {
    dispatch ({
      type: 'FETCH_GENRES'
    })
  }, []);
}