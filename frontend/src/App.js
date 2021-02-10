
import data from './data';
function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">Entwine Mart</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
            <div className="row center">
              {data.products.map((product) => 
          <div key={product.id}className="card">
                    <a href={`/product/${product._id}`}>
                        <img className="medium" 
                        src={product.image} 
                        alt={product.name}
                        />
                    </a>
                    <div className="rating">
                    <a href={`/product/${product._id}`}>
                            <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                            <span><li className="fa fa-star"></li></span>
                            <span><li className="fa fa-star"></li></span>
                            <span><li className="fa fa-star"></li></span>
                            <span><li className="fa fa-star"></li></span>
                            <span><li className="fa fa-star"></li></span>
                        </div>
                        <div className="price">${product.price}</div>
                    </div>
                </div>                          
              )}
            </div>
        </main>
        <footer className="row center">
            Allright Reserved
        </footer>
    </div>
  );
}

export default App;
