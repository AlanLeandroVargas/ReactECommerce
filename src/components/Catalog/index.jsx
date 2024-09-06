import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard';
import Header from '../Header';
import Categories from '../Categories';
import './Catalog.css'
function Catalog() {
    const [products, setProducts] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const handleNextClick = () => {
        setCurrentPage((currentPage) => currentPage + 1);
        console.log(currentPage);
    }
    const handlePreviousClick = () => {
        setCurrentPage((currentPage) => currentPage - 1);
        console.log(currentPage);
    }
    useEffect(() => {
        fetch(`./src/models/products${currentPage}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error
                        (`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) =>
                setProducts(data.products))
            .catch((error) =>
                console.error("Unable to fetch data:", error));
    }, [currentPage])
    const renderProducts = () => {
        console.log('Products', products)
        if (products) {
            console.log('Here')
            return products.map((product) => (
                <ProductCard name={product.name} description={product.description} url={product.url} price={product.price} />
            ))
        }
        return <li>Nothing</li>
    }
    return (
        <>            
            <Header></Header>
            <main>
                <Categories></Categories>
                <div className="catalog">
                    {renderProducts()}
                    <div className="btns-container">
                        <button className='btns-container-btn' onClick={handlePreviousClick}>
                            Previous
                        </button>
                        <button className='btns-container-btn' onClick={handleNextClick}>
                            Next
                        </button>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Catalog
