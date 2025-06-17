import React from 'react';
import { useSelector } from 'react-redux';
import './Table.css';
import Nav from './Nav';

export const TableQ = () => {
    debugger
    const theQuestions = useSelector(store => store.theQuestions);
    const return1 = useSelector(store => store.return);
    const users = useSelector(store => store.users);
    console.log(theQuestions);
    console.log(users);
    return (
        <>
            <Nav />
            <div>
                <h1>טבלת השכרות</h1>
                <table id="customers">
                    <tr>
                        <th>קוד השכרה</th>
                        <th>שם משכיר</th>
                        <th>קוד רכב</th>
                        <th>תאריך לקיחה</th>
                        <th>האם הוחזר</th>
                    </tr>
                    {theQuestions.map(q => (
                        <tr key={q.QuestionCode}>
                            <td>{q.QuestionCode}</td>
                            <td>{users.find(r => r.code === q.uesrCode)?.name || "משתמש"}</td>
                            <td>{q.carCode}</td>
                            <td>{q.dateQuestion}</td>
                            <td>
                                {(return1.find(r => r.QuestionCode === q.QuestionCode)) ?
                                    `הוחזר ב: ${(return1.find(r => r.QuestionCode === q.QuestionCode))?.returnDate}` :
                                    'לא הוחזר'}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
};


