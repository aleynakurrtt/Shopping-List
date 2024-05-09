import React from 'react'
import Form from 'react-bootstrap/Form';

function ShoppingList() {
    return (

        <>
            <div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Ürün adını yazınız</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
            </div>

            <div>
                <Form.Select aria-label="Default select example">
                    <option>Marketi seçiniz</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>


            <div>
                <Form.Select aria-label="Default select example">
                    <option>Ürün Kategorisi</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
        </>
    );
}

export default ShoppingList

