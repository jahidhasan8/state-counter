import React, { useState } from 'react';

const Child = () => {
    const [count,setCount]=useState(0)
    return (
        <div>
            <div>
                <h1>{count}</h1>
                <div>
                    <button>Decrement</button>
                    <button>Increment</button>
                </div>
            </div>
        </div>
    );
};

export default Child;