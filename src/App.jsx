import { useEffect, useState } from 'react'
import jettfull from '/full/jett.svg'
import harborfull from '/full/harbor.svg'
import reynafull from '/full/reyna.svg'
import breachfull from '/full/breach.svg'
import razefull from '/full/raze.svg'
import sagefull from '/full/sage.svg'
import sovafull from '/full/sova.svg'
import skyefull from '/full/skye.svg'
import killjoyfull from '/full/killjoy.svg'
import viperfull from '/full/viper.svg'
import cypherfull from '/full/cypher.svg'
import phoenixfull from '/full/phoenix.svg'
import omenfull from '/full/omen.svg'
import yorufull from '/full/yoru.svg'
import astrafull from '/full/astra.svg'
import kayofull from '/full/kayo.svg'
import gekkofull from '/full/gekko.svg'
import fadefull from '/full/fade.svg'
import neonfull from '/full/neon.svg'
import brimstonefull from '/full/brimstone.svg'

import GQlogo from "/logo/GQ.svg";
import ATZlogo from "/logo/ATZ.svg";
import FNClogo from "/logo/FNC.svg";
import LOUDlogo from "/logo/LOUD.svg";
import SCNlogo from "/logo/SCN.svg";
import TMNTlogo from "/logo/TMNT.svg";
import SElogo from "/logo/SE.svg";
import TMXlogo from "/logo/TMX.svg";
import ODYlogo from "/logo/ODY.svg";

import bind from '/map/bind.svg'
import ascent from '/map/ascent.svg'
import haven from '/map/haven.svg'
import icebox from '/map/icebox.svg'
import split from '/map/split.svg'
import lotus from '/map/lotus.svg'
import fracture from '/map/fracture.svg'
import pearl from '/map/pearl.svg'
import breeze from '/map/breeze.svg'


import immo3 from '/rank/Immortal_3_Rank.png'


import Carousel from 'react-spring-3d-carousel';
import './App.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC3mGvVt65neIWOQT2seJ8SdgeJMi3sJU",
  authDomain: "underpeel.firebaseapp.com",
  projectId: "underpeel",
  storageBucket: "underpeel.appspot.com",
  messagingSenderId: "678606517432",
  appId: "1:678606517432:web:d89e32f72643918d5d704d",
  measurementId: "G-18ZJY139RL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


const agentToFull = new Map([
  ["Jett", jettfull],
  ["Breach", breachfull],
  ["Reyna", reynafull],
  ["Raze", razefull],
  ["Sage", sagefull],
  ["Sova", sovafull],
  ["Skye", skyefull],
  ["Killjoy", killjoyfull],
  ["Viper", viperfull],
  ["Cypher", cypherfull],
  ["Phoenix", phoenixfull],
  ["Omen", omenfull],
  ["Yoru", yorufull],
  ["Astra", astrafull],
  ["Kay/o", kayofull],
  ["Gekko", gekkofull],
  ["Fade", fadefull],
  ["Neon", neonfull],
  ["Brimstone", brimstonefull],
  ["Harbor", harborfull]
]);

const maptoLogo = new Map([
  ["Bind", bind],
  ["Ascent", ascent],
  ["Haven", haven],
  ["Icebox", icebox],
  ["Split", split],
  ["Fracture", fracture],
  ["Breeze", breeze],
  ["Pearl", pearl],
  ["Lotus", lotus]
]);

const getHighestAgent = (agentlist)  => {
  let highest = "Jett";
  let highestval = 0;
  for (const [key, value] of Object.entries(agentlist)) {
    console.log(`${key}: ${value}`)
    if (value > highestval) {
      highest = key;
      highestval = value;
    }
  }
  return highest;
}

function UpcomingCard({team1, team2, date, time, map}){
  return (
  <div className="card w-[24rem] h-[14rem] bg-neutral-900 image-full p-0 m-4">
    <figure><img src={maptoLogo.get(map)} alt="Shoes" /></figure>
    <div className="card-body justify-center flex-col items-center">
      <div className='textcontainer flex-col items-center justify-center text-white text-lg'>
        <p>{team1} - {team2}</p>
        <p>{date} - {time}</p>
      </div>
    </div>
  </div>
  )
}


function get2Decimals(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

function get1Decimals(num) {
  return Math.round((num + Number.EPSILON) * 10) / 10
}


function PlayerCard({rank, name, agent, tag, acs, kills, deaths, assists, hs}) {
  return(
    <div className="card p-0 w-[18em] h-[20em] bg-neutral-900 text-center mb-0">
      <figure>
        <img src={agent} alt="agent" className=' max-w-[100%] h-auto'/>
      </figure>
      <div className="card-body p-0 ml-[2em] w-[80%] rounded-b-lg text-center z-0 bg-gradient-to-b from-neutral-900 from-30% to bg-neutral-800">
        <h2 className="card-title flex items-start justify-center p-0 text-xl">
          <img src={rank} alt="" className='w-10' />
          {tag} {name}
        </h2>
        <p className="text-xl text-cyan-200 t">{acs} {kills}/{deaths}/{assists} {hs}%</p>
      </div>
    </div> 
  )
}

function CarouselItem({key, team1, team2, date, time, map}) {
  return (
    <div className="carousel-item" key={key}>
      <UpcomingCard team1={team1} team2={team2} date={date} time={time} map={map}/>
    </div>
  )
}

const tagToTeam = new Map([
  ["SE" , "Six Eyes"],
  ["GQ" , "Good Question"],
  ["LOUD" , "Living Out Ur Dreams"],
  ["FNC" , "Fun Near Carrots"],
  ["ATZ" , "All Time Zones"],
  ["TMX" , "Team X"],
  ["SCN" , "Shrouded Cyclone"],
  ["TMNT" , "Those Meddling Neanderthals There"],
  ["ODY" , "Odyssey"],
  ["SUB", "SUB"]
]);

const teamToLogo = new Map([
  ["Six Eyes" , SElogo],
  ["Good Question" , GQlogo],
  ["Living Out Ur Dreams" , LOUDlogo],
  ["Fun Near Carrots" , FNClogo],
  ["All Time Zones" , ATZlogo],
  ["Team X" , TMXlogo],
  ["Shrouded Cyclone" , SCNlogo],
  ["Those Meddling Neanderthals There" , TMNTlogo],
  ["Odyssey" , ODYlogo]
]);

const teamToTag = new Map([
  ["Six Eyes", "SE"],
  ["Good Question", "GQ"],
  ["Living Out Ur Dreams", "LOUD"],
  ["Fun Near Carrots", "FNC"],
  ["All Time Zones", "ATZ"],
  ["Team X", "TMX"],
  ["Shrouded Cyclone", "SCN"],
  ["Those Meddling Neanderthals There", "TMNT"],
  ["Odyssey", "ODY"],
  ["SUB", "SUB"]
]);

const standings = [
  { Team : "GQ", W: 6, L : 0, RD: 35, Logo: GQlogo},
  { Team : "LOUD", W: 4, L : 2, RD: 14, Logo: LOUDlogo},
  { Team : "FNC", W: 4, L : 2, RD: -7, Logo: FNClogo},
  { Team : "ATZ", W: 3, L : 2, RD: 9, Logo: ATZlogo},
  { Team : "SE", W: 2, L : 2, RD: 11, Logo: SElogo},
  { Team : "TMX", W: 2, L : 2, RD: -2, Logo: TMXlogo},
  { Team : "SCN", W: 2, L : 3, RD: -6, Logo: SCNlogo},
  { Team : "TMNT", W: 1, L : 3, RD: -3, Logo: TMNTlogo},
  { Team : "ODY", W: 0, L : 5, RD: -24, Logo: ODYlogo}
];

// const viberStandings = [
//   { Team : "GZ", W: 2, L : 0, RD: 12, Logo: GZlogo},
//   { Team : "UWU", W: 2, L : 0, RD: 8, Logo: UWUlogo},
//   { Team : "JPT", W: 2, L : 1, RD: -2, Logo: JPTlogo},
//   { Team : "POUT", W: 1, L : 1, RD: 2, Logo: POUTlogo},
//   { Team : "MRK", W: 1, L : 2, RD: 6, Logo: MRKlogo},
//   { Team : "FROG", W: 1, L : 2, RD: -9, Logo: FROGlogo},
//   { Team : "HOOJ", W: 0, L : 3, RD: -16, Logo: HOOJlogo}
// ];

function StandingsTable(){
  const rows = standings.map((team) => (
    <tr className='hover text-lg' key={team.Team}>
      <td>
      <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={team.Logo} alt="team logo" />
            </div>
          </div>
          <div>
            <div className="font-bold">{tagToTeam.get(team.Team)} </div>
            <div className="text-sm opacity-50">{team.Team}</div>
          </div>
        </div>
      </td>
      <td>{team.W}</td>
      <td>{team.L}</td>
      <td>{team.RD}</td>
    </tr>
  ));

  console.log(rows);
  return(
    <div className="overflow-x-auto w-96">
      <table className='table rounded-lg border-white'>
        <thead>
          <tr>
            <th>Team</th>
            <th>W</th>
            <th>L</th>
            <th>RD</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}



function App() {
  const playerCompare = (a, b) => {
    if ((a.acs / a.mp) < (b.acs / b.mp)) {
      return 1;
    } else {
      return -1;
    }
  }

  const [slides , setSlides] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const temparray = [];
      const q = query(collection(db, "players"), where("team", "!=", "SUB"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const tempdata = doc.data();
        tempdata.id = doc.id;
        temparray.push(tempdata);
      });
      temparray.sort(playerCompare);
      console.log("here", temparray);
      const tempslides = [
        {
          key: 1,
          content: <PlayerCard 
          rank={immo3} 
          tag={teamToTag.get(temparray[0].team)} 
          name = {temparray[0].name} 
          agent={agentToFull.get(getHighestAgent(temparray[0].agents_played))} 
          acs={get1Decimals(temparray[0].acs / temparray[0].mp)} 
          kills={Math.round(temparray[0].kills/temparray[0].mp)}
          deaths={Math.round(temparray[0].deaths/temparray[0].mp)}
          assists={Math.round(temparray[0].assists/temparray[0].mp)}
          hs={get1Decimals(temparray[0].hs * 100/temparray[0].mp)}
          >
          </PlayerCard>
        },
        {
          key: 2,
          content: <PlayerCard 
          rank={immo3} 
          tag={teamToTag.get(temparray[1].team)} 
          name = {temparray[1].name} 
          agent={agentToFull.get(getHighestAgent(temparray[1].agents_played))} 
          acs={get1Decimals(temparray[1].acs / temparray[1].mp)} 
          kills={Math.round(temparray[1].kills/temparray[1].mp)}
          deaths={Math.round(temparray[1].deaths/temparray[1].mp)}
          assists={Math.round(temparray[1].assists/temparray[1].mp)}
          hs={get1Decimals(temparray[1].hs * 100/temparray[1].mp)}
          >
          </PlayerCard>
        },
        {
          key: 3,
          content: <PlayerCard 
          rank={immo3} 
          tag={teamToTag.get(temparray[2].team)} 
          name = {temparray[2].name} 
          agent={agentToFull.get(getHighestAgent(temparray[2].agents_played))} 
          acs={get1Decimals(temparray[2].acs / temparray[2].mp)} 
          kills={Math.round(temparray[2].kills/temparray[2].mp)}
          deaths={Math.round(temparray[2].deaths/temparray[2].mp)}
          assists={Math.round(temparray[2].assists/temparray[2].mp)}
          hs={get1Decimals(temparray[2].hs * 100 /temparray[2].mp)}
          >
          </PlayerCard>
        }
      ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
      });
      setSlides(tempslides);
    }
    fetchPlayers();

  }, [])

  const [goToSlide, setgoToSlide] = useState(0);

  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    async function fetchUpcoming() {
      const temparray = [];
      const querySnapshot = await getDocs(collection(db, "upcoming"));
      querySnapshot.forEach((doc) => {
        const tempdata = doc.data();
        tempdata.id = doc.id;
        temparray.push(tempdata);
      });
      setUpcoming(temparray);
    }
    fetchUpcoming();
  }, []);  
  console.log(upcoming);


  const changeLeft = () => {
    if (goToSlide === 0) {
      setgoToSlide(2)
    } else {
      setgoToSlide(goToSlide - 1)
    }
  }

  const changeRight = () => {
    if (goToSlide === 2) {
      setgoToSlide(0)
    } else {
      setgoToSlide(goToSlide + 1)
    }
  }

  const compare = (a, b) => {
    if (a.time < b.time) {
      return -1;
    } else if (a.time > b.time) {
      return 1;
    }
    return 0;
  }

  upcoming.sort(compare);

  

  return (
    <div className="App">
      <header className="bg-neutral-900 w-[100vw] flex flex-row items-center justify-center h-[5vh] ">
        <div className="form-control absolute top-0 left-[5rem]">
          <label className="label cursor-pointer">
            <span className="label-text">Sweaters</span> 
            <input type="checkbox" className="toggle" checked/>
          </label>
        </div>
        <div className="tabs">
          <a className="tab tab-lg tab-bordered tab-active">Standings</a> 
          <a className="tab tab-lg tab-bordered">Teams</a> 
          <a className="tab tab-lg tab-bordered">Players</a>
        </div>      
      </header>
      <main className="flex min-h-screen flex-row items-center justify-between p-24 bg-neutral-900 w-[100vw]">
      
        <div className="h-[70vh] carousel carousel-vertical rounded-box ml-20">
          {upcoming.map((match) => (
            <CarouselItem key={match.id} team1={match.team1} team2={match.team2} date={match.date} time={match.time} map={match.map}/>
          ))}
        </div>
        <StandingsTable/>
        <div className='carousel-container flex-col justify-start min-w-[30%] min-h-[100%] bg-neutral-900'>
          <p className='margin-0 p-0 text-xl absolute top-[25rem] right-[18rem] z-50'>Players to Watch</p>
          <Carousel slides={slides} goToSlide={goToSlide} />
          <button className="btn btn-ghost absolute top-[35rem] right-[30rem] z-50 font-bold text-xl text-center" onClick={changeLeft}>{"<"}</button>
          <button className="btn btn-ghost absolute top-[35rem] right-[12rem] z-50 font-bold text-xl text-center" onClick={changeRight}>{">"}</button>
        </div>
        
      </main>
    </div>
  );
}

export default App


// <div className='playercontainer flex flex-row align items-center justify-between'>
//   <PlayerCard2 rank={immo3} tag={"SE"} name = {"kunichi"} agent={harborfull}></PlayerCard2>
//   <PlayerCard2 rank={immo3} tag={"SE"} name = {"kunichi"} agent={jettfull}></PlayerCard2>
//   <PlayerCard2 rank={immo3} tag={"SE"} name = {"kunichi"} agent={reynafull}></PlayerCard2>
// </div> 

//<UpcomingCard team1="SE" team2="SCN" date="June 24th" time = "2:00 pm" /> 