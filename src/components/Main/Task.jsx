import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

function Task({ task }) {

    const [isChecked, setIsChecked] = useState(false);

    function checked(event) {
        setIsChecked(event.target.checked)
    }

    return (
        <div className={isChecked ? 'task taskDone' : 'task'}>
            <FormControlLabel
                control={
                    <Checkbox
                        name="checkbox"
                        onChange={(event) => { checked(event) }}
                    />}
                label={task.name} labelPlacement="end" />
        </div>
    );
}

export default Task;