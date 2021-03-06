import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../controller/AuthContext";
import firebase from "../model/firebase";

const Header = props => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="font-semibold text-xl tracking-tight" to="/">
            Home
          </Link>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow" />
          <div>
            {currentUser && (
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                to="/dashboard"
              >
                Dashboard
              </Link>
            )}
            {currentUser && (
              <button
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                onClick={() => firebase.auth().signOut()}
              >
                Signout
              </button>
            )}

            {!currentUser && (
              <Link
                className="mr-4 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                to="/login"
              >
                Login
              </Link>
            )}

            {!currentUser && (
              <Link
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                to="/register"
              >
                Register
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
