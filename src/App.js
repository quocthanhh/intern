import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Products from './components/Products';
import Pagination from './components/Pagination';
import Modal from './components/Modal'


const App = () => {
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const productsChange = [];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const resProducts = await axios.get('https://hiring-test.stag.tekoapis.net/api/products');
      const resColors = await axios.get('https://hiring-test.stag.tekoapis.net/api/colors')
      setProducts(resProducts.data);
      setColors(resColors.data)
      setLoading(false)
    }

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage*productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const onChangeProduct = (product) => {
    if (productsChange.includes(product)) {
      productsChange[productsChange.indexOf(product)] = product
    }
    else {
      productsChange.push(product)
    }
  }

  const onSubmit = () => {
    productsChange.forEach(element => {
      console.log(element)
    });
  }


  return (
    <div>
      <div className='title'>
        <h2>Jason - Re-updated Error Products</h2>
      </div>

      <div className="container">
        <Products products={currentProducts} loading={loading} colors={colors} onChangeProduct={onChangeProduct()}/>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
        </div>

        <div className='submit-button'>
          <button onClick={openModal} onSubmit={onSubmit()} >Submit</button>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    </div>
    
  );
}

export default App;
