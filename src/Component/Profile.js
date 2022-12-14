
 import PropTypes from 'prop-types';
let Profile=({Fullname,Bio,profession,handleName})=>{
    return(
        <div>
            <h1>myfullname is :{Fullname}</h1>
            <h2>my bio :{Bio}</h2>
            <h3>profession :{profession}</h3>
            <img className='pics'  src="/pic.png"></img>
            <button className='butt' onClick={()=>handleName("riadh")}>Name</button>

        </div>
    )
}
Profile.defaultProps={
    Fullname : "test"}

    Profile.propTypes = {
    
        Bio: PropTypes.number
     }


export default Profile