this entire project is used to build a web application, in order to understand the concepts of routers in ReactJS, using react-router-dom
which is a third party library. This project has used specials features in this library namely:
1. useLoaderData() hook, to use the data from the loader.
2. using the router, using createBrowserRouter() function in this library, which takes an object as a parameter, and in that object, we put in the path: , element and children.
3. we can also use the loader: and put in an async(and await) callback function to optimise the data loading from a fetch api request.

We also learn that the className can be passed as a javascript variable enclosed in backticks to add a functionality of highlighting a button of the current active page. This can be done, by using the isActive() method in the Link and NavLink in ReactJS. The value is boolean and turns true when that destination link is active.