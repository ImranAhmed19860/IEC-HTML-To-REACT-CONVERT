import './App.css';
function App() {
  return (
    <>      
      <h1><strong>Heading1</strong> </h1>
    <ul>

        <li><a href="src={#}"> Link1</a></li>
        <li><a href="src={#}"> Link2</a></li>
        <li><a href="src={facebook.com}"> Link3</a></li>
    </ul>
    
    <h2>Heading2</h2>
    <p>This is a paragraph</p>
    <blockquote>This is a blockquote.</blockquote>
    <ul>
        <li> List item1</li>
        <li> List item2</li>
        <li> List item3</li>
    </ul>
    <ol>
        <li> Ordered item1</li>
        <li> Ordered item2</li>
        <li> Ordered item3</li>
    </ol>
    {/* <img src={"./imges/Book Iamge -01.JPG" alt="width= 200px" height="200px"}> */}
    <pre>ShutterStock.com - 1956094603</pre>  <br/>
    <center></center>Figure Caption<center/>
    <br/>
    <br/>
    <table border="2">
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Asad</td>
            <td>22</td>   
        </tr>
        <tr>
            <td>Kashif</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Noman</td>
            <td>19</td>
        </tr>
        <tr>
            <td>Umair</td>
            <td>20</td>
        </tr>
    </table>
    <br/>
    <br/>

    Name:<input type="text"/>  Email:<input type="text"/>  Message:<textarea></textarea> <button>Submit</button>

    <h1><strong> Form Elements</strong></h1>
    Text Input: <input type="text"/> 
     
    Password Input: <input type="password"/>
    
    Email Input: <input type="email"/>
    
    Number Input: <input type="number"/>
      
    Range Input: <input type="range"/>
      
    Date Input: <input type="date"/>
      
    Time Input: <input type="time"/>
    <br/>

    Datetime-Local Input:<input type="Datetime-Local Input"/>
    
    Color Input: <input type="color"/>
    Checkbox: <input type="checkbox"/>
    <h4>Radio Buttons</h4><br/>
    <input type="radio"/>Radio1<br/>
    <input type="radio"/>Radio2<br/>
    <input type="radio"/>Radio3<br/>
    {/* Textarea:<textarea name="" id="" cols="20" rows="2"/></textarea><br/> */}
      {/* File Input <input type="File"/> <br/> */}
  {/* //  Submit Button : <button type="Submit"/>Submit</button><br/> */}
  {/* //  Reset Button <button type="reset"/>Reset<button><br/> */}
  {/* //  Button <button type="button"/>Button</button><br/> */}
  {/* //  <p>@2023 Company Name<p/> */}
  // </>
  );
}

export default App;
