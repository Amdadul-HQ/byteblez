import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import BooksMarks from "../Pages/BooksMarks/BooksMarks";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>,
                loader: async () => await fetch('https://dev.to/api/articles?&top=7')
            },
            {
                path:'/booksmarks',
                element:<BooksMarks></BooksMarks>
            }
        ]
    }
])