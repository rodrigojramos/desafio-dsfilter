import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextProductsCount } from "./utils/context-products"

export default function App() {

  const [contextProductsCount, setContextProductsCount] = useState<number>(0);

  return (
    <>
      <ContextProductsCount.Provider value={{contextProductsCount, setContextProductsCount}}>
        <Header />
        <ListingBody />
      </ContextProductsCount.Provider>
    </>
  )
}

