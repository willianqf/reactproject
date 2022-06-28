import React from 'react';
import { useParams } from 'react-router-dom';
import './TaskDetails.css'

import Button from "./Button";
import { useNavigate } from 'react-router-dom';

const TaskDetails = () => {
    const parans = useParams(); //RETORNA OS PARAMETROS QUE UTILIZAMOS NA URL 
    const navigate = useNavigate();

    const handleBackButtonClick = () =>
    {
        navigate(-1);
    }

    return (
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{parans.taskTitle}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto voluptates assumenda obcaecati enim fuga odio!</p>
        </div>
        </>
    );
}
 
export default TaskDetails;