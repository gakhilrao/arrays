import logo from './logo.svg';
import './App.css';
import TenthStudent from './classes/TenthStudent';

function App() {

  //let akhil = new TenthStudent();
  //akhil.engMarks=91;
  //akhil.telMarks=91;
  //akhil.hindhiMarks=91;
  //akhil.mathMarks=91;
  //akhil.sciMarks=91;
  //akhil.socMarks=34;
  //akhil.claculateResult();
  //console.log(TenthStudent.passMarks);

  //TenthStudent.aboutTenth();
  


    let playersOfIndia =["Sachin Tendulkar","Rahul Dravid","Sourav Ganguly","Virendra Sehwag","Gautam Gambhir","Yuvraj Singh",
      "MSDhoni","Zaheer Khan","Irfan Pathan","Yusuf Pathan","Sreesanth","Virat Kohli","Rohit Sharma","Anil Kumble",
      "Harbhajan Singh","Kuldeep Yadav","Ravichandran Ashwin","Ravindra Jadeja","Ashish Nehra","VVS Laxman","Ambati Rayudu",
      "Mohammed Siraj","Surya Kumar Yadav","Jasprit Bumrah","Mohammed Shami","Hardik Pandya","Sanju Samson","Axar Patel",
    "Shivam Dube"]

  return (
    <div className="App">
      <h1>Players of INDIAN CRICKET</h1>
       <button onClick={() => {
            console.log(playersOfIndia.length);
            for (let i= 0; i<playersOfIndia.length;i++){
              console.log(playersOfIndia[i]);
            }
       }}>Length</button>
       <button onClick={() => {
        console.log(playersOfIndia[11]);
        console.log(playersOfIndia.at(11));
       }}>at</button>
       <button onClick={() => {
            console.log(playersOfIndia);
            console.log(playersOfIndia.toString());
            console.log(playersOfIndia.join("--"));
       }}>tostring,join</button>
       <button onClick={() => {
        playersOfIndia.push("Abhishek Sharma");
        console.log(playersOfIndia);
       }}>push</button>
       <button onClick={() => {
          console.log(playersOfIndia);
          playersOfIndia.pop();
          console.log(playersOfIndia);
       }}>pop</button>
       <button onClick={() => {
        console.log(playersOfIndia);
        playersOfIndia.shift();
        console.log(playersOfIndia);
       }}>shift</button>
       <button onClick={() => {
            console.log(playersOfIndia);
            playersOfIndia.unshift("Kapil Dev");
            console.log(playersOfIndia);
       }}>unshift</button>
       <button onClick={() => {
          console.log(playersOfIndia);
          //playersOfIndia.splice(5,10);
          //playersOfIndia.splice(2,10,"Shubman Gill","Ruturaj Gaikwad");
          //playersOfIndia.splice(playersOfIndia-1,1);
          //playersOfIndia.splice(0,1);
          //playersOfIndia.splice(0,0,"Dinesh Karthik");
          playersOfIndia.splice(playersOfIndia.length-1,0,"Mayank Agarwal");
          console.log(playersOfIndia);
       }}>splice</button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>
       <button onClick={() => {}}></button>   
    </div>
  );
}

export default App;
