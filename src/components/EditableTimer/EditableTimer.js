// stateless functionall component 
import React from 'react';
import TimerFrom from '../TimerForm';
import Timer from '../Timer';

export default function EdittableTimer({

    id, title, project, elapsed, isRunnig, editFormOpen
}) {

    if (editFormOpen) {
        return (<TimerFrom id={id} title={title} project={project} />);
    }
    
    return (
        <Timer id={id} title={title} project={project} elapsed={elapsed} isRunnig={isRunnig} />
    );
}

