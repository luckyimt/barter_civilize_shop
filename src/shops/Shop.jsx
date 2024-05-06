import  React,{ useState } from 'react'
import ProductCards from './ProductCards'

import Search from './Search'
import Data from '../products.json';
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import {Helmet} from 'react-helmet-async'

const showResult = "Review Courses";
const Shop = () => {

    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


    // function to change current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // filter products base on category
    const [selectedCategory, setSelectedCategory] = useState('All');
    const menuItems= [...new Set(Data.map((Val)=> Val.category))];
    
    const filterItem = (currentCat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === currentCat
        })
        setSelectedCategory(currentCat);
        setProducts(newItem);
    }
    return (
        <>
            <Helmet>
              <title>เสริมจมูกเชียงใหม่</title>
              <meta name='description' content='เสริมจมูกใกล้บ้านจังหวัดเชียงใหม่ เสริมจมูกสวยราคาไม่แพง คลินิกเสริมจมูก เสริมจมูกเชียงใหม่ เสริมจมูกครั้งแรก' />
              <link rel='canonical' href='https://chiangmai-beauty-clinic.web.app/shop/'/>
            </Helmet>


            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                
                                <div className="shop-title d-flex flex-warp justify-content-between">
                                    
                                    <p>{showResult}</p>

                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a className="grid" onClick={() => setGridList(!GridList)}>
                                            <i className="icofont-ghost"></i>
                                        </a>

                                        <a className="list"  onClick={() => setGridList(!GridList)}>
                                            <i className="icofont-listine-dots"></i>
                                        </a>
                                    </div>

                                </div>

                                <div>
                                    <ProductCards GridList={GridList} products={currentProducts}/>
                                </div>

                                {/* <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                /> */}

                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={ products } GridList={ GridList }/>
                                <ShopCategory filterItem={filterItem}
                                    setItem={setProducts}
                                    menuItems={menuItems}
                                    setProducts={setProducts}
                                    selectedCategory={ selectedCategory}
                                />
                                <PopularPost />
                                {/* <Tags/> */}
                            </aside>
                        </div>
                    </div>
                </div>
                </div>
                
      </>
  )
}

export default Shop