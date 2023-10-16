import React from "react";

import TodosList from "./Todos";
import Lines from "./Lines/Lines";

const Home = () => {
    return (
        <div className="todoList">
            <TodosList />

            <Lines />
        </div>

     );
}
 
export default Home;
