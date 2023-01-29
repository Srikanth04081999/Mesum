import React from 'react';

function Contact (){
return (
	<>
	
<div className="container">
  <div>
 	<center>
	 <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
	</center>
  </div>
  <div className="row">
    <div className="column">
	  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15229.778820195592!2d78.44108889999998!3d17.3904334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1667497216248!5m2!1sen!2sin" width="600" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
    <div className="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>

</>
)
}

export default Contact;
