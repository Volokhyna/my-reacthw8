import {useSelector, useDispatch} from "react-redux";
import {incCreator, decCreator, resetCreator} from "./redux/action-creators";
import React, {useEffect} from "react";
import {fetchPosts} from "./redux/action-creators";

export default function App() {
    const counter = useSelector(({counter}) => counter);
    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    },[dispatch]);

    const incClick = () => dispatch(incCreator());
    const decClick = () => dispatch(decCreator());
    const resetClick = () => dispatch(resetCreator());

  return (
      <div>
          <h1> Counter: {counter}</h1>
          <button onClick={incClick}>inc</button>
          <button onClick={decClick}>dec</button>
          <button onClick={resetClick}>reset</button>
          {
              posts.map(post => (
                  <h2>
                      {post.id} - {post.title}
                  </h2>
              ))
          }

      </div>
  );
}

