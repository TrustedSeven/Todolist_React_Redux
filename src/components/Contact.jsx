import React from "react";

const onSubmit = () => {
    console.log("!!!!");
}

export const Contact = () => {
  return (
    <div className="container my-4 py-1 border">
      <form className="mt-3 mb-2" id="contactForm" onSubmit={onSubmit}>
        
          <div>
            <label className="sr-only">First Name</label>
            <input
              type="text"
              name="firstname"
              className="form-control mb-2 mr-sm-3"
              placeholder="First Name"
              required
            //   onChange={(e) => changeEvent(e)}
            />
            {/* <span className="text-danger">{error?.title}</span> */}
          </div>

          <div>
            <label className="sr-only">Last Name</label>
            <input
              type="text"
              name="lastname"
              className="form-control mb-2 mr-sm-3"
              placeholder="Last Name"
              required
            //   onChange={(e) => changeEvent(e)}
            />
            {/* <span className="text-danger">{error?.description}</span> */}
          </div>

          <div>
            <label className="sr-only">Email</label>
            <input
              type="text"
              name="email"
              className="form-control mb-2 mr-sm-3"
              placeholder="Email"
              required
            //   onChange={(e) => changeEvent(e)}
            />
            {/* <span className="text-danger">{error?.description}</span> */}
          </div>

          <div>
            <label className="sr-only">Comments</label>
            <textarea
              type="text"
              name="Description"
              className="form-control mb-2 mr-sm-3"
              placeholder="What would you like to say?"
              required
            //   onChange={(e) => changeEvent(e)}
            />
            {/* <span className="text-danger">{error?.description}</span> */}
          </div>

          <div>
            <button className="btn btn-primary mb-2" type="submit">
              Submit
              
            </button>
          </div>
        
      </form>
    </div>
  );
};
