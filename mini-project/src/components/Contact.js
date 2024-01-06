import './Contact.css'
const Contact=()=>{
    return(
        <div className="contact">
             <h1>Contact.</h1>
             <div className='contact-from'>
             <form>
    
    <div class="group">      
      <input type="text" required></input>
     
      <label>Name</label>
    </div>
      
    <div class="group">      
      <input type="text" required></input>
   
      <label>Email</label>
    </div>
    <div class="group">      
    <textarea  className='large' required></textarea>
    <label>Message</label>
      
     
      <button type='submit' className='button'>Send Message</button>
    </div>
    
  </form>
                
             </div>
        </div>
    )
} 
export default  Contact; 