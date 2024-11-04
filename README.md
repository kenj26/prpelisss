# prpelisss

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PRPelisss</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="bootstrap-5.3.3-dist/css/bootstrap.min.css">
</head>

<body>
    <header>
        <div class="logo">PRPelisss</div>
        <nav>
            <ul>
                <li><a href="#">Películas</a></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">Novedades</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        <div class="search">
            <input type="text" placeholder="Buscar...">
            <button>Buscar</button>
        </div>
    </header>
    
    <main>

        <section class="banner">
            <img src="img/banner.jpg" alt="Banner Principal">
        </section>

        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="img/la sustancia.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="img/mario bross.jpeg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="img/venom2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    




        <section class="content">
            <h2>Nuevas Películas</h2>
            <div class="movie-list">
                <div class="movie">
                    <img src="pelicula6.jpg" alt="Pelicula 6">
                    <h3>Pelicula 6</h3>
                    <p>Año: 2024</p>
                    <p>Rating: ★★★★☆</p>
                    <button>Ver Ahora</button>
                </div>
                <div class="movie">
                    <img src="pelicula7.jpg" alt="Pelicula 7">
                    <h3>Pelicula 7</h3>
                    <p>Año: 2023</p>
                    <p>Rating: ★★★☆☆</p>
                    <button>Ver Ahora</button>
                </div>
                <div class="movie">
                    <img src="pelicula8.jpg" alt="Pelicula 8">
                    <h3>Pelicula 8</h3>
                    <p>Año: 2022</p>
                    <p>Rating: ★★★★★</p>
                    <button>Ver Ahora</button>
                </div>
                <div class="movie">
                    <img src="pelicula9.jpg" alt="Pelicula 9">
                    <h3>Pelicula 9</h3>
                    <p>Año: 2021</p>
                    <p>Rating: ★★★★☆</p>
                    <button>Ver Ahora</button>
                </div>
                <div class="movie">
                    <img src="pelicula10.jpg" alt="Pelicula 10">
                    <h3>Pelicula 10</h3>
                    <p>Año: 2020</p>
                    <p>Rating: ★★★☆☆</p>
                    <button>Ver Ahora</button>
                </div>
                <div class="movie">
                    <img src="pelicula11.jpg" alt="Pelicula 11">
                    <h3>Pelicula 11</h3>
                    <p>Año: 2024</p>
                    <p>Rating: ★★★★☆</p>
                    <button>Ver Ahora</button>
                </div>
                <div class="movie">
                    <img src="pelicula12.jpg" alt="Pelicula 12">
                    <h3>Pelicula 12</h3>
                    <p>Año: 2023</p>
                    <p>Rating: ★★★★★</p>
                    <button>Ver Ahora</button>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; PRPelisss Todos los derechos reservados.</p>
        <div class="socials">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
        </div>
    </footer>

    <script src="bootstrap-5.3.3-dist/js/bootstrap.min.js"></script>
</body>

</html>
