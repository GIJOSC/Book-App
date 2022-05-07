import React from 'react';
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Menu() {
  const navigate = useNavigate();

  const cart = useSelector(state => state.cart) 

  return <div className='menu-container'>
    <h1>books</h1>
    <span onClick={() => navigate('carrinho')}>{cart.items.length} Livros</span>
  </div>
}

export default Menu; 