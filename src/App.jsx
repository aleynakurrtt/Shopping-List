import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { Container, Table, Button, Form } from "react-bootstrap";
import { nanoid } from 'nanoid';
import DeleteButtons from './components/DeleteButtons';
import JSConfetti from 'js-confetti'



const shops = [
  { id: 1, name: "Migros" },
  { id: 2, name: "Teknosa" },
  { id: 3, name: "Bim" }
]

const categories = [
  { id: 1, name: "Elektronik" },
  { id: 2, name: "Şarküteri" },
  { id: 3, name: "Oyuncak" },
  { id: 4, name: "Bakliyat" },
  { id: 5, name: "Fırın" }
]


const TableRow = styled.tr`
  text-decoration: ${(props) => props.isBought === true ? "line-through" : "unset"
  };
`
const jsConfetti = new JSConfetti()




function App() {

  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState("");

  const [productShop, setProductShop] = useState("");

  const [productCategory, setProductCategory] = useState("");

  const addProduct = () => {

    const newProduct = {
      id: nanoid(),
      name: productName,
      categories: productCategory,
      shop: productShop,


    }
    setProducts([...products, newProduct]);
  }

  const Button = styled.button`
 margin-left: 10px;
 margin-top: -5px;
	padding: 10px 25px;
	border-radius: 10px;
	font-family: 'Pacifico', cursive;
	font-size: 15px;
	color: #FFF;
	text-decoration: none;
  background-color: #6a1c4f;
	border-bottom: 5px solid #5e1242;
	text-shadow: 0px -2px #500836; 
  `

  return (
    <>
      <div className='container'>
        <div className='my-list'>
          <Form.Label className='productName'>ÜRÜN ADINI YAZINIZ</Form.Label>
          <Form.Group className="nameOfProduct" controlId="writeProduct">
            <Form.Control
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>


          <div>
            <Form.Select aria-label="Default select example"
              value={productShop}
              onChange={(e) => setProductShop(e.target.value)}>
              <option>Shop</option>
              {shops.map((shop) => (
                <option key={shop.id} value={shop.id}>{shop.name}</option>
              ))}
            </Form.Select>
          </div>


          <div>
            <Form.Select aria-label="Default select example"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option>Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </Form.Select>
          </div>
          <Button className='button' onClick={addProduct}>Ekle</Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>

              <th> Name</th>
              <th> Shop</th>
              <th>Category</th>
              <th>ID</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <TableRow
                isBought={product.isBought}
                onClick={() => {
                  const updatedProducts = products.map(oldProduct => {
                    if (oldProduct.id === product.id) {
                      return { ...oldProduct, isBought: true };
                    } else {
                      return oldProduct;
                    }
                  })

                  if (updatedProducts.every(product => product.isBought)) {
                    alert("Alışveriş Tamamlandı");
                    jsConfetti.addConfetti()
                  }


                  setProducts(updatedProducts);
                }}


                key={product.id}>
                <td>{product.name}</td>
                <td>{
                  shops.find(
                    (shops) => shops.id === parseInt(product.shop)
                  )?.name
                }</td>
                <td>
                  {categories.find(
                    (categories) => categories.id === parseInt(product.categories)
                  )?.name}
                </td>
                <td>{product.id}</td>
                <td><DeleteButtons

                  overClick={() => {
                    setProducts(products.filter(filterProduct => filterProduct.id !== product.id));
                  }}

                /></td>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default App
