import React from 'react';

import './Header.css';

import { useTasks }  from '../../config/TasksConfig';

function Header() {

    const { tasks, setTasks } = useTasks();

    function clearTasks() {
        setTasks([]);
    }

    function getDate() {
        const newDate = new Date();
        return newDate;
    }

    function convertDate() {
        let day = getDate().getUTCDay();
        switch (day) {
            case 0: 
            return 'Sunday';
            case 1:
            return 'Monday';
            case 2:
            return 'Tuesday';
            case 3:
            return 'Wednesday';
            case 4:
            return 'Thursday';
            case 5:
            return 'Friday';
            case 6:
            return 'Saturday';    
            default:
            return 'Week Day'
        }
    }

    function convertMonth() {
        let month = getDate().getUTCMonth();
        switch (month) {
            case 0: 
            return 'January';
            case 1:
            return 'February';
            case 2:
            return 'March';
            case 3:
            return 'April';
            case 4:
            return 'May';
            case 5:
            return 'June';
            case 6:
            return 'July';    
            case 7:
            return 'August';
            case 8:
            return 'September';
            case 9:
            return 'October';
            case 10:
            return 'November';
            case 11:
            return 'December';
            default:
            return 'Month';
        }
    }

    function convertDay() {
        let numberDay = getDate().getUTCDate();
        if (numberDay === 1 || numberDay === 21 || numberDay === 31) {
            return numberDay + 'st';
        } 
        if (numberDay === 2 || numberDay === 22) {
            return numberDay + 'nd';
        } 
        if (numberDay === 3 || numberDay === 23) {
            return numberDay + 'rd'
        }
        if ((numberDay > 3 && numberDay < 21) || (numberDay > 23 && numberDay <= 30)) {
            return numberDay + 'th'
        }
    }

    return (
        <>
            <div className="header">
                <div className="first-line">
                    <span className="day"><strong>{convertDate()},</strong> {convertDay()}</span>
                    <span className="quantity-tasks">{tasks.length} tasks</span>
                </div>
                <div className="second-line">
                    <span className="month">{convertMonth()}</span>
                    <button className="btn-clear" onClick={clearTasks}>Clear List</button>
                </div>
            </div>
        </>
    );
}

export default Header; 