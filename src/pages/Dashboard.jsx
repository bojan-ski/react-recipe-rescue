import RecipeList from "../components/RecipeList"
import SearchByNameForm from "../components/SearchByNameForm"

const Dashboard = () => {
  return (
    <>
      <SearchByNameForm />
      <RecipeList />
    </>
  )
}

export default Dashboard