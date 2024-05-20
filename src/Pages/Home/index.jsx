import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
const Home = () => {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        )
      } else {
        return (
          <p>We dont have anything </p>
        )
      } 
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-full max-w-lg mx-auto mb-14">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input 
      type="text" 
      placeholder="Search a Products" 
      className="rounded-lg border border-teal-900 w-80 max-w-lg mx-auto p-4 mb-20 focus:outline-none lg:w-80"
      onChange={(event) => context.setSearchByTitle (event.target.value)}/>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mx-auto justify-items-center">
      {renderView()}
      </div>
      <ProductDetail/>
    </Layout>
    
  )
}

export default Home