import React, { useState } from 'react';

const Count: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Count Component</div>
                        <div className="card-body">
                            <p>{count}</p>
                            <button onClick={handleIncrement}>+1</button>
                            <button onClick={handleDecrement}>-1</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Count;