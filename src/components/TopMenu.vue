<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-code-slash"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"
        />
      </svg>
      Rodrigo Jiménez
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/index" class="nav-link"> Home </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link"> Contact </router-link>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://app.pluralsight.com/profile/rodrigo-jimenez-16"
          >
            Recent Training
          </a>
        </li>        
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Toy Projects
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a
              class="dropdown-item"
              href="https://roserviceschat.azurewebsites.net/"
            >
              Chat
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="https://dejatupuntito.com/">Web</a>
            <a class="dropdown-item" href="https://api.dejatupuntito.com/">
              Api
            </a>
            <a class="dropdown-item" href="https://identity.dejatupuntito.com/">
              Identity Server
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="qr.html">QR</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownTravel"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Traveling Pics
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownTravel">
            <a class="dropdown-item" href="https://www.flickr.com/photos/ro-mx">
              flickr ro-mx
            </a>
            <a
              class="dropdown-item"
              href="https://www.flickr.com/photos/ro-mx-1"
            >
              flickr ro-mx-1
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="https://500px.com/p/ro-mx">
              500px ro-mx
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>