// import { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";

// // export const scroll = new SmoothScroll('a[href*="#"]', {
// //   speed: 1000,
// //   speedAsDuration: true,
// // });

// const App = () => {
//   const [landingPageData, setLandingPageData] = useState({});
//   // useEffect(() => {
//   //   setLandingPageData(JsonData);
//   // }, []);

//   return (
//     <div>
//       {/* <Navigation /> */}
//       <Header data={landingPageData.Header} />
//       {/* <Features data={landingPageData.Features} />
//       <About data={landingPageData.About} />
//       <Services data={landingPageData.Services} />
//       <Gallery data={landingPageData.Gallery}/>
//       <Testimonials data={landingPageData.Testimonials} />
//       <Team data={landingPageData.Team} />
//       <Contact data={landingPageData.Contact} /> */}
//     </div>
//   );
// };

// export default App;




// // import React, { useRef, useEffect } from 'react';
// // import { useLocation, Switch } from 'react-router-dom';
// // import AppRoute from './utils/AppRoute';
// // import ScrollReveal from './utils/ScrollReveal';
// // import ReactGA from 'react-ga';

// // // Layouts
// // import LayoutDefault from './layouts/LayoutDefault';

// // // Views 
// // import Home from './views/Home';

// // // Initialize Google Analytics
// // ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// // const trackPage = page => {
// //   ReactGA.set({ page });
// //   ReactGA.pageview(page);
// // };

// // const App = () => {

// //   const childRef = useRef();
// //   let location = useLocation();

// //   useEffect(() => {
// //     const page = location.pathname;
// //     document.body.classList.add('is-loaded')
// //     childRef.current.init();
// //     trackPage(page);
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [location]);

// //   return (
// //     <ScrollReveal
// //       ref={childRef}
// //       children={() => (
// //         <Switch>
// //           <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
// //         </Switch>
// //       )} />
// //   );
// // }

// // export default App;