import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Footer from "./_components/Footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Phone, Terminal } from "lucide-react";

export default async function Home() {

  const sliderList= await GlobalApi.getSliders();

  const categoryList=await GlobalApi.getCategoryList();

  const productList=await GlobalApi.getAllProducts();
  return (
   <div className="p-10 px-5 md:px-16">
  

     {/* Sliders  */}
     <Slider sliderList={sliderList} />
     {/* Category List  */}
     <CategoryList categoryList={categoryList}/>
     {/* <Alert className="mt-10 mb-10" variant="success">
      <Phone className="h-4 w-4" />
      <AlertTitle>Contact Us</AlertTitle>
      <AlertDescription>
        Call us on +1 1234567890 to place and order and get deliver in 24 Hrs
      </AlertDescription>
    </Alert> */}
    {/* Product List */}
    <ProductList productList={productList} />

    {/* Banner  */}
    <Image src='/banner.png' width={1000} height={300}
    alt="banner"
    className="w-full h-[400px] object-contain"
    />

    {/* Footer  */}
    <Footer/>
   </div>
  );
}
