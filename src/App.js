
import './App.css';
import Profile from './Profile/Profile';
import Navbar from './Profile/Navbar';

function App() 
{
  const FullName ="André jackson";
  const Bio ="J'ai développé son expertise et prendre des responsabilités techniques :Architecte web, Lead Tech, Développeur web senior, Expert Technique";
  const Profession="developpeur web";
  const handelName=(fn)=>{
   alert(`Welcom ${fn}`);
  }
  return (
    <div>
      <Navbar />
      <h1
        style={{
          marginTop: "50px",
          color: "lightblue",
          width: "180px",
          height: "180px",
          borderRadius: "90px",
          backgroundColor: "orange",
          paddingTop: "60px",
          paddingLeft: "30px",
          marginLeft: "500px",
          marginBottom: "30px",
        }}
      >
        Profile
      </h1>

      <Profile FullName={FullName} Bio={Bio} Profession={Profession} handelName={handelName}>
        https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg
      </Profile>
    </div>
  );
}
  
export default App;