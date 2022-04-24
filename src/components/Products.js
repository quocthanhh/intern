import React from "react";
import Colors from "./Colors";

const Products = ({products, loading, colors, onChangeProduct}) => {
    if(loading){
        return <h2>Loading....</h2>
    }

    return ( 
        <table>
        <tr>
          <th>ID</th>
          <th>Error Description</th>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>SKU</th>
          <th>Color</th>
        </tr>
        {products.map(product => {
          return ( 
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.errorDescription}</td>
                <td><img src={product.image}/></td>
                <td><input contentEditable={true} type="text" defaultValue={product.name} onChange={event => {if(event.target.value.length > 50){alert("Invalid name")} else{ product.name = event.target.value; onChangeProduct(product) }}} ></input></td>
                <td><input contentEditable={true} type="text" defaultValue={product.sku} onChange={event => {if(event.target.value.length > 20 || event.target.value.length ==0){alert("Invalid SKU")} else{ product.name = event.target.value; onChangeProduct(product)}}} ></input></td>
                <td>
                    <Colors colors={colors} selected={product.color} />
                </td>
            </tr>
          )
        })}
      </table>
    );
};

export default Products