import { useState, useEffect } from "react";
// import { PythonShell } from "python-shell";

// let { PythonShell } = require("python-shell");

let dataObj = {};
let total_price = 0.0;
function Cart() {
  if (localStorage !== null) {
    let data = [];

    console.log("local storage");
    let i = 0;
    for (i = 0; i < localStorage.length; i++) {
      data.push(localStorage.getItem(localStorage.key(i)));
      let result = data[i].split(",");
      total_price = total_price + parseFloat(result[0] / 2);
      dataObj[i] = { price: result[0], BookTitle: result[1] };
      console.log(
        localStorage.key(i) +
          "=[" +
          localStorage.getItem(localStorage.key(i)) +
          "]"
      );
    }
  }

  console.log("Reaching return statement");

  // console.log(typeof dataObj[0].price);
  return (
    <div>
      <h1>Please confim price and checkout</h1>
      {dataObj &&
        Object.keys(dataObj).map((value, index) => {
          return (
            <div key={index} className="shoppingCard">
              {console.log("Value " + dataObj[value].BookTitle)}
              <div>
                {/* <img src="https://placehold.co/600x400"></img> */}
                <div className="shoppingCardInner">
                  {dataObj[value].BookTitle}
                  <br></br>
                  {parseFloat(dataObj[value].price).toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}

      <button
        onClick={() => {
          alert("Thank you for buying our books.");

          // let options {
          //   args:[obj1Popularity, obj1Price]
          // }

          // PythonShell.run(
          //   "\\python_scripts\\main.py",
          //   [dataObj[0].popularity, dataObj[0].price],
          //   (err, res) => {
          //     if (err) console.log(err);
          //     if (res) console.log(res);
          //   }
          // );

          localStorage.clear();
          window.location.reload();
        }}
      >
        Purchase for total price of ${parseFloat(total_price).toFixed(2)}
      </button>
    </div>
    // <div>
    //   <h1>Please confim price and checkout</h1>
    //   {dataObj &&
    //     dataObj.map &&
    //     dataObj.map((value, index) => {
    //       return <div key={index}>Hello World</div>;
    //     })}
    // </div>
  );
}
export default Cart;
