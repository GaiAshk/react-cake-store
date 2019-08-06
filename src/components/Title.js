import React from 'react';

export default function Title({name, title}) {
    return (
        <div className="row mt-0 mb-2">
            <div className="col-10 mx-auto my-100 mx-10 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong className="text-blue"> {title}
                    </strong>
                </h1>
            </div>
        </div>
    );
}
