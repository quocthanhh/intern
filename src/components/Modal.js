import React from 'react';

// const updatesList = [
//     {id: 1, name: "Laptop Dell Inspiron 13 5301", sku: "210400693", color: "White", image: "https://lh3.googleusercontent.com/C9h0wTjyE87-02b7RdbwpZvcLJwRDXoZBCtKXtwhB3TcAbffp7RQSHbihoEzf06PpgVp5peewwR-829KY7oMgoBuqxuKj7N-hw=w500-rw"},
//     {id: 1, name: "Laptop Dell Inspiron 13 5301", sku: "210400693", color: "White", image: "https://lh3.googleusercontent.com/C9h0wTjyE87-02b7RdbwpZvcLJwRDXoZBCtKXtwhB3TcAbffp7RQSHbihoEzf06PpgVp5peewwR-829KY7oMgoBuqxuKj7N-hw=w500-rw"},
// ]

const Modal = ({showModal, setShowModal, productsChange}) => {
    return (
        <>
        {showModal ? (
            <div className='Background'>
                <div className='wrapper'>
                    <div className='ModalContent'>
                        <p>Re-updated Products</p>
                        <hr></hr>
                        <div className='updatedList'>
                            {productsChange.map( e => {
                                return (
                                    <div className='tol'>
                                        <div className='leftContent'>
                                            <img src={e.image} />
                                        </div>
                                        <div className='rightContent'>
                                            <ul>
                                                <li style={{fontWeight:"600"}}>{e.name}</li>
                                                <li>ID: {e.id}</li> 
                                                <li style={{color:"red"}}>SKU: {e.sku}</li>
                                                <li>Color: {e.color}</li>
                                            </ul>
                                        </div>
                                        <hr></hr>
                                    </div>
                                )}
                            )}
                        </div>
                        <button style={{color:"#fff",border:"1px solid black"}} onClick={() => setShowModal(prev => !prev)} >Confirm</button>
                        <button style={{backgroundColor:"red", color:"#fff",border:"1px solid black"}} onClick={() => setShowModal(prev => !prev)} >Close</button>
                    </div>
                </div>
            </div>
        ) : null}
        </>
    )
};

export default Modal;