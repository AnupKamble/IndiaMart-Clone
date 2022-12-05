 let mainNavbar = () => {

    return `<div id="navbar">
    <div id="logo-div">
         <div>
            <a href="index.html"><img id="i-logo" src="../logos/indiamart.png" alt="logo" style="height:40px;"></a> 
         </div>
         <div>
             <a href="index.html"><h2 id="i-name">indiamart</h2></a>
         </div>
         <div>
             <select name="All India" id="i-location">
                 <option value="Pune">Pune</option>
                 <option value="Mumbai">Mumbai</option>
               </select>
         </div>

         <div>
             <input type="text" id="i-searchbar" placeholder="Enter Product / Service to Search">
         </div>

          <div> <button id="i-searchbtn">Search</button></div>


          <div> <button id="i-bestprice"> Get Best Price </button></div>

          <div id="icons">
           <!-- <div>
                  <img style="width:24px; margin-bottom: 16x;" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAfAB4DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABAUGAAP/xAAqEAABBAECAwcFAAAAAAAAAAABAgMEBQAREiFBgQYTIjFCYXEUMlFS0f/EABcBAQEBAQAAAAAAAAAAAAAAAAEDAgb/xAAbEQADAAMBAQAAAAAAAAAAAAAAAQIDESESQf/aAAwDAQACEQMRAD8AgsZ19BZWDHfxmAWtdApbiUAn23Ea9ML7PUJmsPWc1LgrY3FwoHFenpH9xhV2UW3t1if3bUdpoiJGU4UNg6jQE/GudFeR98/COiesamdWbfrY6mwr7VeYPUcMCy1uBGco7lEN1TsZiQ2tslW4JJIBCT+OJyKxx26XQZY9lbRT8NivZeSxOjFRjbz4HgoklCvnUjrnCVSsWNsVRm1wWEp3TA6NEsHnoeevLJZKilQUkkEcQRyxjOvrSfFTGlS1LaHpCUp3fJA1PXMvG1W5HYRfW7T7SK6sQWq1k+EHzdP7K98S5s2VmVK0gP/Z" alt=""> <br>
                <span>shopping</span>
           </div> -->
          <div>
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/small-business--v1.png"/> <br>
              <span> <a style="text-decoration: none; color:white" href ="sellerPage.html">Sell </a></span>
         </div>

         <div>
             <img  src="https://img.icons8.com/material-outlined/24/ffffff/help.png" /> <br>
             <span>Help</span>
         </div>

         <div>
             <img  src="https://img.icons8.com/material-outlined/24/ffffff/create-new-child-post.png"/>
           <br>  <span>Messages</span>
         </div>

         <div>
             <img  src="https://img.icons8.com/windows/32/ffffff/user.png" /> <br>
             <span id="span_signIn">Sign in</span>
         </div>
       </div>
     </div>  

</div>`
 }

 export default mainNavbar;