import React, { Component } from "react";

class AddBook extends Component {
  render() {
    return (
      <div className="container-fluid bg-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <img
                class="card-img-top img-fluid"
                src="https://dummyimage.com/400x200/389393/ffffff&text="
                alt="Add book cover"
                width="400"
              />
              <div class="input-group mt-2">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label class="custom-file-label" for="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div className="col">
              <form>
                <div className="row jumbotron reg pt-0">
                  <div
                    class="col-lg-12 login-title mb-2"
                    style={{
                      paddingBottom: "1rem",
                      fontSize: "3rem",
                      borderBottom: ".2rem solid gray",
                    }}
                  >
                    Add Book
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="isbn">ISBN</label>
                    <input
                      type="text"
                      className="form-control"
                      name="isbn"
                      id="isbn"
                      placeholder="Enter ISBN"
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="author">Author name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="author"
                      id="author"
                      placeholder="Enter Author name."
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="tbook">Book Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="tbook"
                      id="tbook"
                      placeholder="Enter Book Title"
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="cat">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cat"
                      id="cat"
                      placeholder="Enter Category"
                    />
                  </div>

                  <div className="col-sm-6 form-group">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      id="price"
                      placeholder="Enter Price"
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="qty">Quantity</label>
                    <input
                      type="number"
                      name="qty"
                      className="form-control"
                      id="qty"
                      placeholder="Enter Quantity"
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label htmlFor="publ">Publisher</label>
                    <input
                      type="text"
                      name="publ"
                      className="form-control"
                      id="publ"
                      placeholder="Enter Publisher Name"
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label for="example-url-input">URL</label>

                    <input
                      class="form-control"
                      type="url"
                      value="https://xyz.com"
                      id="example-url-input"
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label for="desc">Book Description</label>
                    <textarea
                      class="form-control rounded-0"
                      id="desc"
                      rows="5"
                      placeholder="Enter book description"
                    ></textarea>
                  </div>

                  <div className="col-sm-12 form-group mb-0 float-left">
                    <a
                      className="btn btn-primary btn-lg  mt-3"
                      type="submit"
                      href="#addbook"
                    >
                      add book
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddBook;
