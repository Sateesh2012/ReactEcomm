import { useContext, useState } from "react";
import myContext from "../../context/Mycontext";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../Firebase/FirebaseConfig";
import Loader from "../../Components/loader/Loader";

const categoryList = [
  {
      name: 'fashion'
  },
  {
      name: 'shirt'
  },
  {
      name: 'jacket'
  },
  {
      name: 'mobile'
  },
  {
      name: 'laptop'
  },
  {
      name: 'shoes'
  },
  {
      name: 'home'
  },
  {
      name: 'books'
  }
]

const AddProductPage = () => {
  const context = useContext(myContext)
  const {loading, setLoading} = context;
  const navigate = useNavigate();
   // product state
   const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity : 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }
    )
});

  // Add Product Function
  const addProductFunction = async () => {
    if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
        return toast.error("all fields are required")
    }

    setLoading(true);
    try {
        const productRef = collection(fireDB, 'products');
        await addDoc(productRef, product)
        toast.success("Add product successfully");
        navigate('/admin-dashboard')
        setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
        toast.error("Add product failed");
    }

}
  return (
      <div>
          <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
              {/* Login Form  */}
              <div className="login_Form bg-orange-50 px-8 py-6 border border-orange-100 rounded-xl shadow-md">

                  {/* Top Heading  */}
                  <div className="mb-5">
                      <h2 className='text-center text-2xl font-bold text-orange-500 '>
                          Add Product
                      </h2>
                  </div>

                  {/* Input One  */}
                  <div className="mb-3">
                      <input
                          type="text"
                          name="title"
                          value={product.title}
                          onChange={(e)=>{
                            setProduct({
                              ...product,
                              title: e.target.value
                            })
                          }}
                          placeholder='Product Title'
                          className='bg-orange-50 text-orange-300 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300'
                      />
                  </div>

                  {/* Input Two  */}
                  <div className="mb-3">
                      <input
                          type="number"
                          value={product.price}
                          onChange={(e)=>{
                            setProduct({
                              ...product,
                              price: e.target.value
                            })
                          }}
                          placeholder='Product Price'
                          className='bg-orange-50 text-orange-300 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300'
                      />
                  </div>

                  {/* Input Three  */}
                  <div className="mb-3">
                      <input
                          type="text"
                          value={product.productImageUrl}
                          onChange={(e)=>{
                            setProduct({
                              ...product,
                              productImageUrl: e.target.value
                            })
                          }}
                          placeholder='Product Image Url'
                          className='bg-orange-50 text-orange-300 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300'
                      />
                  </div>

                  {/* Input Four  */}
                  <div className="mb-3">
                      <select
                      
                      value={product.category}
                      onChange={(e) => {
                          setProduct({
                              ...product,
                              category: e.target.value
                          })
                      }}
                      className="w-full px-1 py-2 text-orange-300 bg-orange-50 border border-orange-200 rounded-md outline-none  ">
                          <option disabled>Select Product Category</option>
                          {categoryList.map((value, index) => {
                              const { name } = value
                              return (
                                  <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                              )
                          })}
                      </select>
                  </div>

                  {/* Input Five  */}
                  <div className="mb-3">
                      <textarea 
                        value={product.description}
                        onChange={(e) => {
                            setProduct({
                                ...product,
                                description: e.target.value
                            })
                        }}
                      
                      name="description" placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-orange-300 bg-orange-50 border border-orange-200 rounded-md outline-none placeholder-orange-300 ">

                      </textarea>
                  </div>

                  {/* Add Product Button  */}
                  <div className="mb-3">
                      <button
                      onClick={addProductFunction}
                          type='button'

                          className='bg-orange-500 hover:bg-orange-600 w-full text-white text-center py-2 font-bold rounded-md '
                      >
                          Add Product
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default AddProductPage;
