let delegateForm = () => {
  let delegate = document.getElementById('delegate').value
  let dispForm = (document.getElementById('dispForm').innerHTML = '')

  for (let i = 1; i <= delegate; i++) {
    document.getElementById('dispForm').innerHTML += `
    <div id="Repeat">
    <h2>DELEGATE - REGISTRATION DETAILS - ${i}</h2>
    <h3 style="font-size: 20px">Please enter the details of the delegate that you wish to register</h3>
    
    <div class="fields">
      <div class="input-field">
        <label class="DSalutation" for="Salutations">Salutation</label>

        <select name="salute" id="salute"${i} value="">
          <option value="select">Please Select...</option>
          <option value="Mr" id="mr"${i}>Mr</option>
          <option value="Dr">Dr</option>
          <option value="Mrs">Mrs</option>
          <option value="Er">Er</option>
        </select>
      </div>
    
      <div class="input-field">
        <label for="dfname">Delegate First name:</label>
        <input type="text" id="dfname"${i} value="" name="dfname" placeholder="Delegate First Name" required />
      </div>
    
      <div class="input-field">
        <label for="dlname">Delegate Last name:</label>
        <input type="text" id="dlname"${i} name="dlname" placeholder="Delegate Last Name" required />
      </div>
    
      <div class="input-field">
        <label for="demail">Delegate Email:</label>
        <input type="email" id="demail"${i} name="demail" placeholder="Enter Email" required />
      </div>
    
      <div class="input-field">
        <label for="dtelephone">Delegate Telephone:</label>
        <input type="Number" id="dtelephone"${i} name="dtelephone" placeholder="Enter Telephone number" required />
      </div>
    
      <div class="input-field">
        <label for="djob">Delegate Job Title:</label>
        <input type="text" id="djob"${i} name="djob" placeholder="Enter Job Title" required />
      </div>
    
      <div class="input-field">
        <label for="dpass">Delegate Passport Number :</label>
        <input type="text" id="dpass"${i} name="dpass" placeholder="Enter your Passport Number" required />
      </div>
    </div>
    
    <div class="product">
      <h2>PRODUCT AND FEES</h2>
      <table style="width: 100%">
        <tr>
          <td>
            <input name="productandfees" type="checkbox" value="5900" id="myCheck1-" />
            <label for="productandfees">All Access (Delegate)</label>
          </td>
          <td>USD 5900</td>
        </tr>
        <tr>
          <td>
            <input name="productandfees" type="checkbox" value="5100" id="myCheck2-" />
            <label for="productandfees">Strategic Conference (Delegate)</label>
          </td>
          <td>USD 5100</td>
        </tr>
        <tr>
          <td>
            <input name="productandfees" type="checkbox" value="1858" id="myCheck3-" />
            <label for="productandfees">Technical Conference Pass - 4 days (Delegate)</label>
          </td>
          <td>USD 1858</td>
        </tr>
        <tr>
          <td>
            <input name="productandfees" type="checkbox" value="1485" id="myCheck4-" placeholder="" />
            <label for="productandfees">Technical Conference Pass - 2 days (Delegate)</label>
          </td>
          <td>USD 1485</td>
        </tr>
        <tr>
          <td>
            <input name="productandfees" type="checkbox" value="1100" id="myCheck5-" />
            <label for="productandfees">Downstream Technical Conference Pass (Delegate)</label>
          </td>
          <td>USD 1100</td>
        </tr>
      </table>
    </div>
    
    
    <div id="Container">
      <h2>PURCHASE SUMMARY</h2>
      <table>
        <tr>
          <td>Total :</td>
          <td>(USD)</td>
          <td id="total"></td>
        </tr>
      </table>
    </div>
    
    <div id="Container1"> </div>

    
    
    </div>    
    
    
    `
  }
  let submitForm = document.getElementById('submit')
  submitForm.addEventListener('click', () => {
    let data = []
    let salute = document.getElementById('salute').value
    let dfname = document.getElementById('dfname').value
    let dlname = document.getElementById('dlname').value
    let demail = document.getElementById('demail').value
    let djob = document.getElementById('djob').value
    let dtelephone = document.getElementById('dtelephone').value
    let dpass = document.getElementById('dpass').value
    let productandfees = document.querySelectorAll('input[name="productandfees"]:checked')

    let createDel = {
      salute,
      dfname,
      dlname,
      demail,
      djob,
      dtelephone,
      dpass
    }

    data.push(createDel)
    data.map((item) => {
      document.getElementById('data').innerHTML = `
      
      <table class="dataTable">
      <tr>
        <td colspan="4">No of Delegate : ${delegate}</td>
      </tr>
      <tr>
        <td>Salutation</td>
        <td>Delegate First Name</td>
        <td>Delegate Last Name</td>
      </tr>
      <tr>
        <td>Select</td>
        <td>${item.dfname}</td>
        <td>${item.dlname}</td>
      </tr>
      <tr>
        <td>Delegate Email</td>
        <td>Delegate Telephone</td>
        <td>Delegate Job Title</td>
      </tr>
      <tr>
        <td>${item.demail}</td>
        <td>${item.dtelephone}</td>
        <td>${item.djob}</td>
      </tr>
      <tr>
        <td>Delegate Passport Number</td>
        <td colspan="2">Product And Fees</td>
      </tr>
      <tr>
        <td>${item.dpass}</td>
        <td colspan="2">${calculateSum()}</td>
      </tr>
    </table>
      `
    })
  })
}

let nextBtn = () => {
  document.querySelector('#Container1').innerHTML = `
<div class="maindiv">
  <h1>Company Information :</h1>
  <div class="fields">
    <div class="input-field">
      <label> Company Name :</label>

      <input class="textinput" type="text" id="company" name="fname" value="" />
    </div>
    <div class="input-field">
      <label> Street :</label>

      <input type="text" id="comstr" name="fstreet" value="" />
    </div>
    <div class="input-field">
      <label> Town/City :</label>

      <input type="text" id="town" name="town" value="" />
    </div>
    <div class="input-field">
      <label> Country :</label>

      <input type="text" id="country" name="country" value="" />
    </div>
    <div class="input-field">
      <label> Zipcode :</label>

      <input id="zip" name="zip" type="text" inputmode="numeric" value="" />
    </div>
    <div class="input-field">
      <label> State :</label>

      <input type="text" id="state" name="state" value="" />
    </div>
  </div>
</div>

<h1>Billing Contact Info :</h1>

<div class="fields">
  <div class="input-field">
    <label class="DSalutation" for="Salutations">Salutation</label>
    <select name="salute" id="salute" value="">
      <option value="">Please Select...</option>
      <option value="Mr">Mr</option>
      <option value="Dr">Dr</option>
      <option value="Mrs">Mrs</option>
      <option value="Er">Er</option>
    </select>
  </div>

  <div class="input-field">
    <label for="Cfname">First name:</label>
    <input type="text" id="Cfname" name="Cfname" placeholder="First Name" value="" required />
  </div>

  <div class="input-field">
    <label for="clname">Last name:</label>
    <input type="text" id="clname" name="clname" placeholder="Last Name" value="" required />
  </div>

  <div class="input-field">
    <label for="cemail">Email:</label>
    <input type="email" id="cemail" name="cemail" placeholder="Enter Email" value="" required />
  </div>

  <div class="input-field">
    <label for="ctelephone">Telephone:</label>
    <input type="phone" id="ctelephone" name="ctelephone" placeholder="Enter Telephone number" value="" required />
  </div>
  <div class="input-field"></div>
</div>

     <div>
        <label for="vat">VAT Registered</label><br />
        <input type="radio" id="vatyes" onclick="showVat()" name="vat" value="Yes" />
        <label for="vatyes">Yes</label>
        <input type="radio" id="vatno" onClick="vatNo()" name="vat" value="No" />
        <label for="vatyes">No</label>
        <div id="Container3"></div>    
        
      </div>
  
  `
}
let showVat = () => {
  let vatyes = document.getElementById('vatyes')
  if (!vatyes) {
    document.getElementById('Container3').innerHTML = ''
  } else {
    document.getElementById('Container3').innerHTML = `
    <div class="input-field">
    <input type="text" id="vatnum" name="vatnum" value="" placeholder="Vat Number" />
    </div>
    `
  }
}

let vatNo = () => {
  let vatno = document.getElementById('vatno')
  if (vatno) {
    document.getElementById('Container3').innerHTML = ''
  }
}
function calculateSum() {
  // Get all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')

  // Use reduce to calculate the sum of checked checkbox values
  const sum = Array.from(checkboxes).reduce((accumulator, checkbox) => {
    if (checkbox.checked) {
      // Parse the value as a number and add it to the accumulator
      return accumulator + parseInt(checkbox.value, 10)
    }
    // If the checkbox is not checked, just return the accumulator
    return accumulator
  }, 0) // Initialize accumulator with 0

  // return sum
  document.getElementById('total').innerHTML = sum
  // alert(`The sum of checked checkbox values is: ${sum}`);
  return sum
}

{
  /* 
 
<div id="Container3">
          <div class="input-field">
            <input type="text" id="vatnum" name="vatnum" value="" placeholder="Vat Number" />
          </div>
        </div>
*/
}
