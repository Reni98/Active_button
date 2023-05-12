/*Html fájlba szükséges data-page, ahogy az alábbi példában is szerepel:
                <li class="nav-item">
            <a
              class="btn btn-default border-dark"
              href="./lovasok.html"
              data-page="lovasok"
              >Lovasok</a
            >
          </li>*/

<script>
      const currentPage = window.location.pathname
        .split("/")
        .pop()
        .replace(".html", "");
      const navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

      navLinks.forEach((link) => {
        const linkPage = link.getAttribute("data-page");
        if (currentPage === linkPage) {
          link.classList.add("active");
        }
      });
    </script>
