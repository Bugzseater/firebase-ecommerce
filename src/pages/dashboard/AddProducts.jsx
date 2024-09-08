import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Added deleteDoc, doc
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from "../../firebase";

function AddProducts() {
  const [productName, setProductName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [productType, setProductType] = useState('');
  const [productImage, setProductImage] = useState(null); // For storing the image file
  const [products, setProducts] = useState([]);

  // Function to handle image selection
  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  // Function to upload image and add product to Firestore
  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!productImage) {
      alert("Please select an image.");
      return;
    }

    // Create a reference to the Firebase storage
    const storageRef = ref(storage, `products/${productImage.name}`);

    // Upload the image
    const uploadTask = uploadBytesResumable(storageRef, productImage);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Image upload failed:", error);
      },
      async () => {
        // Get the download URL of the uploaded image
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log('File available at', downloadURL);

        // Now store the product details along with the image URL in Firestore
        try {
          await addDoc(collection(db, 'products'), {
            name: productName,
            price: itemPrice,
            type: productType,
            imageUrl: downloadURL // Storing the image URL
          });
          fetchProducts(); // Refresh the product list
          setProductName('');
          setItemPrice('');
          setProductType('');
          setProductImage(null);
        } catch (err) {
          console.error("Error adding product: ", err);
        }
      }
    );
  };

  // Function to fetch all products
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products")); // Assuming "products" is your collection name
    const productsArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setProducts(productsArray);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to remove a product from Firestore
  const handleRemove = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));  // Deleting the product by document ID
      setProducts(products.filter((product) => product.id !== id));  // Update the local state
      console.log(`Product with id ${id} deleted.`);
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <div className="bg-[#2f2f2f]   w-full flex flex-col items-center">
      <div className='flex justify-center p-10'>
        <h1 className='text-3xl font-bold text-white'>ADD PRODUCTS</h1>
      </div>

      <div className='flex flex-col w-full max-full gap-10'>
        <div className='flex justify-center'>
          <form className="w-full max-w-lg" onSubmit={handleAddProduct}>
            <div className="mb-5">
              <label htmlFor="product-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
              <input
                type="text"
                id="product-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="item-price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Price</label>
              <input
                type="number"
                id="item-price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                placeholder="Item Price"
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="product-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Type</label>
              <select
                id="product-type"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                required
              >
                <option value="">Select Product Type</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home-appliances">Home Appliances</option>
                <option value="books">Books</option>
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor="product-image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
              <input
                type="file"
                id="product-image"
                className="block w-full text-sm text-gray-500"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>

        <div className='mt-[30px] text-3xl text-white font-bold'>
          <h1 className='mb-[20px] text-center'>ALL PRODUCTS</h1>
          <div className='bg-gray-400 flex gap-10 w-[90%] p-[20px] ml-auto mr-auto mb-[20px] h-auto bg-opacity-20 rounded-lg shadow-sm'>
        {products.map((product) => (
          <div key={product.id} className='w-[300px] p-[10px] bg-opacity-10 bg-white flex flex-col justify-center items-center'>
            <img src={product.imageUrl} alt={product.name} className='w-[250px] rounded-md' />
            <h1 className='text-[2rem]'>{product.name}</h1>
            <p className='text-[1.5rem]'>Rs {product.price}</p>
            <button 
              className='bg-gray-200 bg-opacity-10 rounded-xl shadow-md p-[10px]' 
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
