import React from 'react';
import styles from './cards.module.css';

const Cards = ({ cartItems, calculateTotal }) => (
  <div className={styles.shoppingCart}>
    <div className={styles.cartHeader}>
      <h3 className={styles.cartHeaderTitle}>Seu Carrinho</h3>
      <button className={styles.closeButton}>✕</button>
    </div>

    <div className={styles.cartItems}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.itemInfo}>
              <h4 className={styles.itemTitle}>{item.title}</h4>
              <div className={styles.itemDetails}>
                <span className={styles.itemQuantity}>
                  Qtd: {item.quantity}
                </span>
                <span className={styles.itemPrice}>
                  R$ {item.price.toFixed(2)}
                </span>
              </div>
            </div>
            <button className={styles.removeButton}>✕</button>
          </div>
        ))
      ) : (
        <p className={styles.emptyCartMessage}>Seu carrinho está vazio</p>
      )}
    </div>

    {cartItems.length > 0 && (
      <div className={styles.cartFooter}>
        <div className={styles.cartTotal}>
          <span className={styles.totalLabel}>Total:</span>
          <span className={styles.totalValue}>
            R$ {calculateTotal().toFixed(2)}
          </span>
        </div>
        <button className={styles.checkoutButton}>Finalizar Compra</button>
      </div>
    )}
  </div>
);

export default Cards;