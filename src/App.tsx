import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation} from "./components/Website";
import { Error404 } from "./components/Website/Error404/Error404";
import { AboutUs, BlogDetails, BlogPage, CafeDetails, CafeListing, ContactUs, Home, Notifications, EditAccount, SavedCafes, AllReviews, Reviews, Photos, MyProfile, MapView, People, Business, Cafeowner, Cafeform, BusinessProfile } from "./pages/Website";
import AdminNavigation from "./components/Admin/Navigation/Navigation";
import { Branch, Customer, Dashboard, EditProfile } from "./pages/Admin";
import User from "./pages/Admin/User/User";
import Blogs from "./pages/Admin/Blogs/Blogs";
import AddBlog from "./pages/Admin/Blogs/Addblog/AddBlog";
import CafeDescription from "./pages/Admin/Cafe/CafeDescription";

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/blog-details" element={<BlogDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cafe-listing" element={<CafeListing />} />
        <Route path="/cafe-details" element={<CafeDetails/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/edit-account" element={<EditAccount/>} />
        <Route path="/saved-cafes" element={<SavedCafes/>} />
        <Route path="/all-reviews" element={<AllReviews/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/photos" element={<Photos/>} />
        <Route path="/my-profile" element={<MyProfile/>} />
        <Route path="/map-view" element={<MapView/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/cafe-register" element={<Business/>} />
        <Route path="/cafe-owner" element={<Cafeowner/>} />
        <Route path="/cafe-form" element={<Cafeform/>} />
        <Route path="business-profile" element={<BusinessProfile />} />
      </Route>

      <Route path="admin" element={<AdminNavigation />}>
        <Route index element={<Dashboard />} />
        <Route path="cafes" element={<Branch />} />
        <Route path="users" element={<Customer />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="user" element={<User />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="add-blog" element={<AddBlog />} />
        <Route path="cafe-details" element={<CafeDescription />} />
      </Route>

    </Routes>
  );
};

export default App;
