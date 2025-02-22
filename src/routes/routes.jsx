import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
import SignUp from "../components/pages/SignUp";
import ProfilePage from "../components/pages/ProfilePage";
import SubCategoryShow from '../components/pages/SubCategoryShow'
import Category from "../components/pages/Category";
import Verification from "../components/pages/Verification";
import Login from "../components/pages/LogIn";
import VerificationOTP from "../components/pages/VerificationOtp";
import Verifying from "../components/pages/Verifying";
import Success from "../components/pages/Success";
import SubscriptionPlan from "../components/pages/SubscriptionPlan";
import PaymentMethod from "../components/pages/PaymentMethod";
import PaymentSuccess from "../components/pages/PaymentSuccess";
import RegistrationSuccess from "../components/pages/RegistrationSuccess";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";
import Cancelled from "../components/pages/cancelled";
import Technician from '../components/pages/Technician'
// import { LogIn } from "lucide-react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // This wraps the entire layout (Navbar and Footer)
    children: [
      {
        path: '/',
        element: <Home />, // Home is the default component
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>, // Home is the default component
      },
      {
        path: '/registration-success',
        element: <RegistrationSuccess></RegistrationSuccess>, // Home is the default component
      },
      {
        path: '/login',
        element: <Login></Login>, // Home is the default component
      },
      {
        path: '/verificationOtp',
        element: <VerificationOTP></VerificationOTP>, // Home is the default component
      },
      {
        path: '/verifying',
        element: <Verifying></Verifying>, // Home is the default component
      },
      {
        path: '/success',
        element: <Success></Success>, // Home is the default component
      },
      {
        path: '/cancelled',
        element: <Cancelled></Cancelled>, // Home is the default component
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/profile',
        element: <ProfilePage></ProfilePage>, // Home is the default component
      },
      {
        path: '/technicians/:id',
        element: <Technician></Technician>, // Home is the default component
      },
      {
        path: '/category/:slug',
        element: <Category></Category>, // Home is the default component
      },
      {
        path: '/subcategory/:slug',
        element: <SubCategoryShow></SubCategoryShow>, // Home is the default component
      },
      // {
      //   path: "/electricity",
      //   element: <Electricity></Electricity>, // Home is the default component
      // },
      {
        path: '/subscription-plan',
        element: <SubscriptionPlan></SubscriptionPlan>, // Home is the default component
      },
      {
        path: '/payment-method',
        element: <PaymentMethod></PaymentMethod>, // Home is the default component
      },
      {
        path: '/paymentSuccess',
        element: <PaymentSuccess></PaymentSuccess>, // Home is the default component
      },
    ],
  },
])

export default router;
