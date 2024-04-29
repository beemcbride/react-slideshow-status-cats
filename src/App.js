import React, { Component } from "react";
import Slideshow from "./Slideshow.js";
import "./App.css";
// import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class App extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0,
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const slideImages = [
      {
        code: "102",
        caption: "Processing",
      },
      {
        code: "200",
        caption: "OK",
      },
      {
        code: "201",
        caption: "Created",
      },
      {
        code: "400",
        caption: "Bad Request",
      },
      {
        code: "401",
        caption: "Unauthorized",
      },
      {
        code: "403",
        caption: "Forbidden",
      },
      {
        code: "404",
        caption: "Not Found",
      },
      {
        code: "408",
        caption: "Request Timeout",
      },
      {
        code: "418",
        caption: "I'm a teapot",
      },
      {
        code: "500",
        caption: "Internal Server Error",
      },
    ];

    // to use the component in this project, uncomment lines 2 and 71-76, comment out lines 4 and 79-127.
    return (
      <div className="App">
      <h3>🍔 HTTP Status Cats Slideshow 🍔</h3>
        <Slideshow slides={slideImages}/>
      </div>
    );

    // to use the component in this project, uncomment lines 2 and 71-76, comment out lines 4 and 79-127.
    // const properties = {
    //   duration: 5000,
    //   autoplay: false,
    //   transitionDuration: 500,
    //   arrows: false,
    //   infinite: true,
    //   easing: "ease",
    //   indicators: (i) => <div className="indicator">{i + 1}</div>,
    // };
    // const statusCatUrl = "https://http.cat/";
    // const statusCodeUrl = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/";

    // return (
    //   <div className="App">
    //     <h3>🍔 HTTP Status Cats Slideshow 🍔</h3>
    //     <div className="slide-container">
    //       <Slide ref={this.slideRef} {...properties}>
    //         {slideImages.map((each, index) => (
    //           <div key={index} className="each-slide">
    //             <img
    //               className="lazy"
    //               src={statusCatUrl + each.code}
    //               alt={each.caption}
    //             />
    //             <h4>
    //               HTTP Status {each.code} Cat: {each.caption}
    //             </h4>
    //             <p>
    //               For more information, please visit mdn web docs for&nbsp;
    //               <a href={statusCodeUrl + each.code} target="_blank">
    //                 HTTP status code {each.code}
    //               </a>
    //               .
    //             </p>
    //           </div>
    //         ))}
    //       </Slide>
    //     </div>

    //     <div className="slide-container buttons">
    //       <button onClick={this.back} type="button">
    //         Previous
    //       </button>
    //       <button onClick={this.next} type="button">
    //         Next
    //       </button>
    //     </div>
    //   </div>
    // );
  }
}

export default App;
