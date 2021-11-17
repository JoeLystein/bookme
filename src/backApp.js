<NavBar/>
      {/* <Home/>
      <Messages/>
      <Galery/>
      <Pricing/>
      <Booking/>
      <ContactUs/> */}
      <Router>
        <Switch>
          <Route exact path="/book">
            <Booking/>
          </Route>
          <Route exact path="/">
              <Home/>
              <Messages/>
          </Route>
          <Route exact path="/Photogalery">
            <Galery/>
          </Route>
          <Route exact path="/aboutus">
            <AboutUs/>
          </Route>
          <Route exact path="/Pricing">
            <Pricing/>
          </Route>
          <Route exact path="/contactUs">
              <ContactUs/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
      ----

      <div className="App" style={{position:"relative"}}>
      <NavBar/>
      <Home/>
      <Messages/>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <AboutUs/>
          </Fade>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Pricing/>
          </Fade>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Galery/>
          </Fade>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Booking/>
          </Fade>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <ContactUs/>
          </Fade>
        </Container>
      </div>
    </div>
  