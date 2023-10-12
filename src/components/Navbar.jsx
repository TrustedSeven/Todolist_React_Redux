import React from "react";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Todolist_React_Redux">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Todolist_React_Redux/#todo">
                Todo
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Todolist_React_Redux/#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
