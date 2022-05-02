import dummyImg from '../../assets/images/095-2020-1.jpg';

const CartContent = () => {
	return (
		<div className='cart'>
      <div className='cart-text-box'>
        <div className="cart-item-details">
          <h4 className="item-name">Backpack 095-2020</h4>
          <h4 className="item-info">
            <span className="info-type">Material:</span>
            <span className="info">Canvas, leather</span>
          </h4>
          <h4 className="item-info">
            <span className="info-type">Size:</span>
            <span className="info">50x30x25cm</span>
          </h4>
        </div>
        <div className="cart-totals">
          <h4>Total</h4>
          <h4>$230</h4>
        </div>
      </div>
      <div className='cart-img-box'>
        <img src={dummyImg} alt="cart item" className="cart-img" />
      </div>
		</div>
	);
};

export default CartContent;
