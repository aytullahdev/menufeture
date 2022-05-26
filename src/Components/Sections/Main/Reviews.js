import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import {Link} from 'react-router-dom'
const Reviews = () => {
  const { isLoading, error, data, refetch } = useQuery("reviews", () =>
    axios.get(`https://menufeture.herokuapp.com/reviews`).then((res) => res.data)
  );
  return (
    <div className="bg-white text-black py-5">
      <h1 className="text-center text-3xl uppercase">Users Reviews</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 mx-3 gap-5">
        {!isLoading &&
          data &&
          data.map((el) => {
            return (
              <div>
                <div class="card bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="text-center font-semibold">{el.name}</h2>
                    <p className="text-sm">{el.text}</p>
                    <div>
                      <div class="rating ">
                        <input
                          type="radio"
                          name="rating-1"
                          class="mask mask-star bg-orange-400"
                          checked={el.rating===1}
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          class="mask mask-star bg-orange-400"
                          checked={el.rating===2}
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          class="mask mask-star bg-orange-400"
                          checked={el.rating===3}
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          class="mask mask-star bg-orange-400"
                          checked={el.rating===4}
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          class="mask mask-star bg-orange-400"
                          checked={el.rating===5}
                        />
                      </div>
                    </div>
                    <div class="card-actions justify-center">
                     <Link to={`/products/details/${el.productid}`} className="link text-center block">view product</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Reviews;
