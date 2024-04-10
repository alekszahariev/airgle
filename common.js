let footer = document.getElementById("footer")
footer.innerHTML = `
<footer class="bg-body-tertiary text-center text-md-start">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-5 col-md-12 mb-4 mb-md-0">
      
      
      
      
       <h5 class="text-uppercase mb-0" style="font-size:15px;">Продукти</h5>

          <ul class="list-unstyled">
          <p>
          <a href="./ag25.html" class="text-reset">AG25</a>
        </p>
        <p>
          <a href="./ag300.html" class="text-reset">AG300</a>
        </p>
        <p>
          <a href="./ag600.html" class="text-reset">AG600</a>
        </p>
        <p>
          <a href="./ag900.html" class="text-reset">AG900</a>
        </p>
        <p>
          <a href="./ag2000.html" class="text-reset">AG2000</a>
        </p>
          </ul>
      
      
      
      
      
      
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase" style="font-size:15px;">Страници</h5>

          <ul class="list-unstyled mb-0">
          <p>
          <a href="./index.html" class="text-reset">Начало</a>
        </p>
        <p>
          <a href="./about-us.html" class="text-reset">За нас</a>
        </p>
        <p>
          <a href="./products.html" class="text-reset">Продукти</a>
        </p>
        <p>
        <a href="./contact.html" class="text-reset">Контакт</a>
      </p>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        
          <b><span style="font-size:15px;">Велмар ПК ООД</span></b>
        <p style="font-size:15px;">гр.Сливен, ул.Аспарух 4</p>
        <p style="font-size:15px;">
          Е-Майл: <a href="mailto:velmarpc@gmail.com">velmarpc@gmail.com</a><br>
          Тел: <a href="tel:+359877850707">0877850707</a><br>
          Тел: <a href="tel:+359877333640">0877333640</a> 
        </p>
        

        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->

      
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2024 Copyright:
      <a class="text-reset fw-bold" href="#">airgle.bg</a> <br>
      <a class="website" target="_blank" href="https://imhustler.com">Уебсайт от HustlerLtd.</a>
    </div>
    <!-- Copyright -->
  </footer>
`


let nav = document.getElementById("nav")
nav.innerHTML = `
<nav class="navbar navbar-dark bg-dark">
<a class="navbar-brand" href="./index.html"><img src="./assets/homepage/logo.png"></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="./index.html">Начало</a>
    </li>
    <li class="nav-item active">
    <a class="nav-link" href="./about-us.html">За нас</a>
  </li>
    <li class="nav-item active">
    <a class="nav-link" href="./products.html">Продукти</a>
  </li>
  </li>
    <li class="nav-item active">
    <a class="nav-link" href="./contact.html">Контакт</a>
  </li>
   
</ul>
</div>
</nav>`


let forms = document.querySelectorAll(".form")
forms.forEach(form =>{
    form.innerHTML = `
    <div class="container">
     <form action="./send-mail.php" method="post">
        <h2 class="highlight">Запитване.</h2>

        <div class="form-outline">
            <label class="form-label" for="form1">Име: *</label>
            <input type="text" name="name" placeholder="Име" class="form-control" required/>
        </div>

        <div class="form-outline">
        <label class="form-label" for="form1">Фирма</label>
        <input type="text" name="company" placeholder="Фирма" class="form-control" />
    </div>

        <div class="form-outline">
            <label class="form-label" for="form1">Телефон</label>
            <input type="text" name="phone" placeholder="Телефон" class="form-control" />
        </div>

        <div class="form-outline">
            <label class="form-label" for="form1">Е-майл*</label>
            <input type="text" name="email" placeholder="Е-Майл" class="form-control" required/>
        </div>

        <div class="form-group" style="margin-top:20px;">
        <label for="">Съобщение: *</label>
        <textarea class="form-control" name="message" id="" rows="3" required></textarea>
      </div>

        <button type="submit" name="submit">Изпрати</button>

    </form>
</div>
`
})