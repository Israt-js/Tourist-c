import { useLoaderData } from "react-router-dom";
import MyList from "./MyList";
const MyListPage = () => {
  const lists = useLoaderData();

    return(
      <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mb-5">
     {
        lists.map(list => <MyList key={list._id} list={list}></MyList>)
     }
    </div>
     </div>
    )
}
export default MyListPage;