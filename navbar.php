
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <fb:login-button
        id="fb-btn"
        scope="public_profile,email"
        onlogin="checkLoginState();">
    </fb:login-button>
      <a id="logout" onclick="logout()" href="#">Logout</a>
        <br>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"><span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="maps.php">GOOGLE MAPS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>