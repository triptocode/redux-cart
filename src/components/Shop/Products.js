import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2> 구매할 상품 카트에 담기</h2>
      <ul>
        <ProductItem
          title='a book'
          price={5}
          description='this is a first product!'
        />
      </ul>
    </section>
  );
};

export default Products;
