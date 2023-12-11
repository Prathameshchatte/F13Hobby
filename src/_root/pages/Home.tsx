import PostCard from "../../components/shared/PostCard"

const Home = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Renders</h2>
          
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              
                <li key="" className="flex justify-center w-full">
                  <PostCard post="" />
                </li>
            </ul>
        </div>
      </div>

      
    </div>
  )
}

export default Home