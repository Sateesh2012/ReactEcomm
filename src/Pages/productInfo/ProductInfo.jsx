import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout"
import myContext from "../../context/Mycontext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../Firebase/FirebaseConfig";
import Loader from "../../Components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState('');
    const { id } = useParams();
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    const addCart = () => {
        dispatch(add(product));
        toast.success("Add to cart");
    };
    
    const deleteCart = () => {
        dispatch(remove(product));
        toast.success("Delete cart");
    };
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
    

    // Fetch product data
    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id));
            setProduct(productTemp.data());
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                {loading ?
                    <div className="flex justify-center">
                        <Loader />
                    </div>
                    :
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="flex flex-wrap mb-24 -mx-4">
                            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                <div className="">
                                    <div className="">
                                        <img
                                            className="w-full lg:h-[39em] rounded-lg"
                                            src={product?.productImageUrl}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <div className="mb-6 ">
                                        <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                            {product.title}
                                        </h2>
                                        <div className="flex flex-wrap items-center mb-6">
                                            {/* Star ratings */}
                                        </div>
                                        <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                                            <span>Rs{product.price}</span>
                                        </p>
                                    </div>
                                    <div className="mb-6">
                                        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                            DESCRIPTION:<br /> <br />
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid
                                            necessitatibu laborum pariatur magni maiores quis cupiditate harum impedit.
                                             Possimus illo officia explicabo autem facere, animi quis totam vitae eveniet.
                                        </h2>
                                        {/* Product description */}
                                    </div>
                                    <div className="mb-6">
                                        {/* Add to Cart/Delete from Cart button */}
                                        <div className="flex justify-center">
                                            {cartItems.some((p) => p.id === product.id) ? (
                                                <button
                                                    onClick={deleteCart}
                                                    className="bg-orange-700 hover:bg-orange-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                >
                                                    Delete From Cart
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={addCart}
                                                    className="bg-orange-500 hover:bg-orange-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                >
                                                    Add To Cart
                                                </button>
                                            )}
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </Layout>
    );
}

export default ProductInfo;
