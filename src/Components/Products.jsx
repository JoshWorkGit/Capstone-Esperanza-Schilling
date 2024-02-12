import React, { useState, useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import potter from "../assets/potter.jpg";
import dictionary from "../assets/dictionary.jpg";
import illiad from "../assets/illiad.webp";
import captain from "../assets/captain.jpg";
const state = {
  products: [
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
    },
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      id: 9,
      name: "Raincoat",
      price: 14.99,
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      id: 8,
      price: 14.99,
      name: "Socks",
      description: "for keeping feet warm",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 7,
      name: "Gloves",
      description: "to protect hands",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 6,
      name: "Shoes",
      description: "all purpose footwear",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 5,
      name: "Hat",
      description: "head wear",
      productImage: dictionary,
    },
    {
      id: 1,
      name: "Chamber Of Secrets",
      price: 14.99,
      productImage: potter,
    },
    {
      id: 2,
      name: "The Illiad",
      price: 35.95,
      productImage: illiad,
    },
    {
      id: 3,
      name: "Dictionary",
      price: 10.99,
      productImage: dictionary,
    },
    {
      id: 4,
      name: "Captain Underpants",
      price: 1.99,
      productImage: captain,
    },
    {
      price: 14.99,
      id: 9,
      name: "Raincoat",
      description: "foul weather outerwear",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 8,
      name: "Socks",
      description: "for keeping feet warm",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 7,
      name: "Gloves",
      description: "to protect hands",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 6,
      name: "Shoes",
      description: "all purpose footwear",
      productImage: dictionary,
    },
    {
      price: 14.99,
      id: 5,
      name: "Hat",
      description: "head wear",
      productImage: dictionary,
    },
    {
      id: 1,
      name: "Chamber Of Secrets",
      price: 14.99,
      productImage: potter,
    },
    {
      id: 2,
      name: "The Illiad",
      price: 35.95,
      productImage: illiad,
    },
    {
      id: 3,
      name: "Dictionary",
      price: 10.99,
      productImage: dictionary,
    },
    {
      id: 4,
      name: "Captain Underpants",
      price: 1.99,
      productImage: captain,
    },
  ],
};

function Products() {
  const url = new URL("http://localhost:4000/products/");
  //const { ISBN } = useParams();

  const [book, setBook] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setBook(json);
        console.log("Could find record");
        console.log(book);
      } catch (e) {
        console.log(e);
        console.log("Couldnt find record");
      }
    }
    fetchData();
  }, []);
  //Search Hook
  const [search, setSearch] = useState("");
  console.log(search);
  const [pagelimit, setpageLimit] = useState(10);

  //Filter Retrieved by Search Bar
  const ListRealItems = book
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.BookTitle.toLowerCase().includes(search) ||
            item.BookAuthor.toLowerCase().includes(search) ||
            item.category.toLowerCase().includes(search);
    })
    .map((item, index) => {
      //{item.BookTitle.length >20? item>BookTitle.slice(0, 20) + "..." : item.BookTitle }
      const title = item.BookTitle.slice(0, 20) + "...";
      const roundedNumber = item.price.toFixed(2);
      return (
        <li key={index}>
          <h3>
            {title}
            <br />
            <Link to={"productDetails/" + item.ISBN}>
              <img
                src={
                  item.ImageURLL == null
                    ? "https://t3.ftcdn.net/jpg/00/06/45/56/360_F_6455661_Ptvg5iAO0DpUlt0ItlO8YewZpvU3IxwX.jpg"
                    : item.ImageURLL
                }
              />
            </Link>
            <br />
            {roundedNumber}
          </h3>
        </li>
      );
    });
  /////////////////////////////////////////////
  console.log(typeof book);
  // constListRealItems = book((item, index) => {
  //   return(
  //     <li key={index}>{item.BookTitle}</li>
  //   )
  // })
  function addpages() {
    setpageLimit(pagelimit + 50);
  }

  console.log(typeof ListRealItems);
  return (
    <div>
      <h4>Books Page</h4>
      <input
        onChange={(e) => setSearch(e.target.value)}
        id="a"
        placeholder="Search . . ."
      />
      <div>
        <ul>{ListRealItems.slice(0, pagelimit)}</ul>
      </div>
      <button id="showMore" onClick={addpages}>
        Show More
      </button>
    </div>
  );
  // return(
  //   <div>{book.BookTitle}</div>
  // )
}

export default Products;
//   const [pagelimit, setpageLimit] = useState(4);
