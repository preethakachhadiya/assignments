import React from 'react';    

function Header() {
    return(
        <nav class="navbar navbar-expand-lg bg-light d-flex">
        <div class="container-fluid d-flex w-100 mx-3">
          <a class="navbar-brand" href="#">Event Management</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar d-flex" id="navbarNavDropdown">
            <div class="navbar-nav d-flex flex-row">
              <li class="nav-item pr-4">
                <form class="d-flex pe-5" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-primary"><i class="bi bi-search"></i></button>
                    </form>
              </li>
              <li class="nav-item pe-2 d-flex">
                <a class="nav-link active" aria-current="page" href="#">My Wishlist<i class="bi bi-bookmarks-fill"></i> </a>
              </li>
              <li class="nav-item pe-2">
                <a class="nav-link" href="#"><i class="bi bi-bell-fill"><span class="badge rounded-pill bg-primary">4</span></i></a>
              </li>
              <li class="nav-item pe-2 dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Profile <i class="bi bi-person-circle"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Edit Profile</a></li>
                  <li><a class="dropdown-item" href="#">My Events</a></li>
                  <li><a class="dropdown-item" href="#">My Preferences</a></li>
                </ul>
              </li>
            </div>
          </div>
        </div>
    </nav>
    )
}

export default Header;