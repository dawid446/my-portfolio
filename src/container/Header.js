import React from 'react'
import './Header.css'

function Header(){
    return(
        <header className="App-header">

          <div className="header">
            <h1>Dawid Majewski</h1>
            <h2>Junior C# Web Developer</h2>
          </div>

          <div className="code">
            <div>
              .h1 <br></br>
              <div>
                background-color: #050f1d <br></br>
                min-height: 100vh <br></br>
                display: flex; <br></br>
                flex-direction: column <br></br>
                align-items: center <br></br>
              </div>
            </div>

            <div>
              .h1 &#123; <br></br>
              background-color: #050f1d <br></br>
              min-height: 100vh <br></br>
              display: flex; <br></br>
              flex-direction: column <br></br>
              align-items: center <br></br>
              &#125;
            </div>

            <div>
              .h1 &#123; <br></br>
              background-color: #050f1d <br></br>
              min-height: 100vh <br></br>
              display: flex; <br></br>
              flex-direction: column <br></br>
              align-items: center <br></br>
              &#125;
            </div>

          </div>

        </header>
    )

}
export default Header;