const mongoose=require(id="mongoose");
const uri='mongodb+srv://Gayatri:gaytripra123@cluster0.rpdzp.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(uri)

const productSchema=new mongoose.Schema({
    name:String,
    company:String,
    price:Number,
    image:String,
    colors:[String],
    category:String,
    isFeatured:Boolean
});


const Product=new mongoose.model(name="product",productSchema)
const data1 = {
    name: "Designer Handbag2",
    company: "64c23350e32f4a51b19b923a",
    price: 2466,
    colors: ["#000000", "#cc6600", "#663300"],
    image: "/images/product-handbag.png",
    category: "64c2342de32f4a51b19b9250",
    isFeatured: true,
  };
const main=async()=>{
    try{
        
//  const data= await Product.find({price:{$lt:3466}}).skip(10247)
// await Product.insertMany(data1)
// const data = await Product.find({price:{$eq:2466}})
//  console.log(data)

// await Product.findOneAndUpdate(
//     {name:"Designer Handbag2",price:2466},{$set:{
//         price:2499
//     }}
// )
await Product.findOneAndDelete(
    {name:"Designer Handbag2",price:2499}
)
const data = await Product.find({name:"Designer Handbag2",price:2499})
console.log(data)
    }
    catch{
        console.log(error)
    }
    finally{
        mongoose.connection.close()
    }
};
main()