import { useState } from 'react';
import './App.css';
import {Button, IOS, Android} from './styles';

export default function MainApp() {

  const user = {id: 1, name: "Olivia Wilde", src: './PNG/photo.png'};
  const [colActive, setColActive] = useState(2);
  const [week, setWeek] = useState(9);
  const [checks, setChecks] = useState(() => {
    const temp = [];
    for (let i = 1; i < 85; i++) temp[i] = [];
    return temp;
  });
  // eslint-disable-next-line
  const [any, setAny] = useState();
  const line = <img className = "line" src = ".\PNG\line.png" alt = "line"/>;

  const days = [];
  const entries = {
    1: 'Bod•ē Shake',
    2: 'Ham and Swiss      Roll Ups',
    3: 'Bod•ē Burn with Mozzarella and Tomato PNG',
    4: 'Turkey Melt',
    5: 'Grilled Steak         (HC)',
    6: 'Bod•ē Burn and Whole-Wheat English Muffin       with Butter Spray',
    7: 'Garlic Lime Chicken (HC)'
  };
  days[64] = [entries[1], entries[2], entries[4], entries[3], entries[4], 'LOW-CARB'];
  days[65] = [entries[1], entries[2], entries[4], entries[3], entries[4], 'LOW-CARB'];
  days[66] = [ entries[1], entries[5], entries[1], entries[6], entries[7], 'HIGH-CARB'];
  days[67] = [entries[1], entries[2], entries[4], entries[3], entries[4], 'LOW-CARB'];
  days[68] = [ entries[1], entries[2], entries[1], entries[3], entries[4], 'HIGH-CARB'];
  days[69] = [ entries[1], entries[5], entries[1], entries[6], entries[7], 'HIGH-CARB'];
  days[70] = 'free';

  days[58] = 'free';

  days[62] = [ entries[1], entries[2], entries[1], entries[3], entries[4], 'HIGH-CARB'];
  days[63] = [ entries[1], entries[2], entries[1], entries[3], entries[4], 'HIGH-CARB'];
  days[61] = [ entries[1], entries[2], entries[1], entries[3], entries[4], 'HIGH-CARB'];
  const weeks = [[]];

  for (let i = 0; i < 12; i++){
    if (i) weeks.push([]);
    for (let j = i * 7 + 1; j < i*7 + 8; j++){
      weeks[i].push(
        days[j] ? days[j] : null
      );
    }
  }

  const row = [[]];

  const hanleColGroup = (ev, x) => {
    setColActive(x);
  }

const handleCheck = (ev, day, pos) => {
  setChecks(prev => {
    prev[day][pos] = !prev[day][pos];
    return prev;
  });
  setAny(Math.random());
}

// -------------------------------------------------------------------
let content;

for (let k = 0; k < 8; k++){
  if (k) row.push([]);
  for (let i = 1; i < 8; i++){
    const day = week * 7 + i;
    switch (k){
      case 0: content = <th onClick = {ev => hanleColGroup(ev, i)} key = {i}
        className = {`${colActive === i ? "active" : ""} first-row`}>DAY {day}</th>;
      break;
      case 6: if (i === 7) content = <td className = "last print" rowSpan = "2" key = {i}>
          <img src = "./PNG/print.png" alt = 'print'/>
          <span>Print</span>
        </td>
        else if (days[day] === "free") content = (<td className = "last" rowSpan = "2" key = {i}></td>)
        else content = (<td className = "last" key = {i}>
            {days[day] ? days[day][5] : " --- "}
          </td>);
        break;
      case 7: if (i === 7 || days[day] === "free") {content = null; break}
        content = <td className = {`last ${colActive === i && "weight"}`}
             key = {i} onClick = {colActive === i ? ev => handleCheck(ev, day, 6) : null}>
          <img src = {checks[day][6] ? "./PNG/sztanga_kolor.png" : "./PNG/sztanga_szara.png"} alt = ""/>
          {checks[day][6] && <img className = 'check2' src = "./PNG/check.png" alt = ''/>} 
        </td>; break;
     
      default: {
        if (days[day] === "free"){
          if (k !==1) break;
          content = <td className = "free" key = {i} rowSpan = "5">
            <div className = "vertical">GUILT-FREE DAY</div>
            <img src = ".\PNG\hapy.png" alt = ""/>
          </td>;
        }else if (!days[day]) content = <td key = {i}> --- </td>
        else content = <td key = {i} className = {colActive === i ? "active" : ""} 
          onClick = {colActive === i ? ev => handleCheck(ev, day, k) : null}>
            {days[day][k-1] === 'Bod•ē Shake' ? <img alt = 'kubek'
              src = {colActive === i ? "./PNG/cup_color.png" : "./PNG/cup_gray.png"}/> : days[day][k - 1]}
            {checks[day][k] && colActive === i && <img className = "check" src = "./PNG/check2.png" alt = ''/>} 
          </td>;
      }
    }
    if (days[day] === "free" && k !== 1 && k !==6 && k !== 0) continue;
    row[k].push(content);
  }
}

// ------------------------------------------------------------------------------
  const colgroup = [];
  
  for (let i = 0; i < 7; i++) colgroup[i] = <col className = {(i + 1)===colActive ? "border" : ""} key = {i}
   onClick = {ev => hanleColGroup(ev)}/>;

  const progres = [<img alt = "" key = {0}
  src = {week === 0 ? './PNG/progr_white.png' : './PNG/progres_green.png'}
  />];
  for (let i = 1; i < 12; i++){
    let currentPng;
    if (i < week) currentPng = './PNG/progr_green_left.png'
    else currentPng = i === week ? './PNG/progr_act.png' : './PNG/progr.gray.png';
    progres.push(<img key = {i} src = {currentPng} alt = ""/>);
  }

  return (
    <>
          <div className = "header">
              <div className = "view">
                <span>DASHBOARD &nbsp;
                  {line}
                </span>
                <span>RECIPES </span>
                <span>CHALLENGE </span>
              </div>  
              <span className = 'user'>
                  <img src = {user.src} alt = 'user'/>
                {user.name}
                <img src = ".\PNG\select.png" alt= ""/>
              </span>
          </div>    
      <div className = "main">

        <div className = "main-container">
           
            <div className = "main-table">
              <div className = "caption">
                <div>
                  <div>YOUR 12 WEEK PROGRESS</div>
                  <div className = 'progresImg'>
                    {progres}
                  </div>
                  <div>1 2 3 4 5 6 7 8 9 10 11 12</div>
                </div>
                <div className = 'week-container'>
                  <button onClick = {() => setWeek(prev => !prev ? 0 : prev -1)}>
                    <img src = ".\PNG\arrow_left.png" alt = ""/>
                  </button>
                  <span className = "week"> Week {week + 1} </span>
                  <button onClick = {() => setWeek(prev => prev === 11 ? prev : prev + 1)}>
                    <img src = ".\PNG\arrow.png" alt = ""/>
                  </button>
                </div>
                <div className = 'protein-option'>
                  <div>SELECT YOUR PROTEIN OPTIONS</div>
                  <div>
                    <img src = ".\PNG\brokul.png" alt= ""/>
                    <img src = ".\PNG\ser.png" alt= ""/>
                    <img src = ".\PNG\meat.png" alt= ""/>
                    <img src = ".\PNG\not_fish.png" alt= ""/>
                    <img src = ".\PNG\not_chicken.png" alt= ""/>

                  </div>
                </div>
              </div>
              <table>
                <colgroup>
                  <col onClick = {hanleColGroup} className = "gray first-col"/>
                  {colgroup}
                </colgroup>
                <tbody>
                  
                  <tr>
                    <th rowSpan = "2"><span className = "AM">6:00 AM</span></th>
                    {row[0]}
                  </tr>
                  <tr>
                    {row[1]}
                  </tr>
                  <tr>
                    <th>9:00 AM</th>
                    {row[2]}
                  </tr>
                  <tr>
                    <th>12:00 AM</th>
                    {row[3]}
                  </tr>
                  <tr>
                    <th>3:00 PM</th>
                    {row[4]}
                  </tr>
                  <tr>
                    <th rowSpan = "2"><span className = "PM">6:00 PM</span></th>
                    {row[5]}
                  </tr>
                  <tr className = "gray last">
                    {row[6]}
                  </tr>
                  <tr className = "gray last">
                    <th>Workout</th>
                    {row[7]}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className = "features">
                <h2>Running out of products?</h2>
                <p className = "first_section">Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
                <Button>Buy now &nbsp;<img src = ".\PNG\arrow.png" alt= ""/></Button>
              <h2>Bod•e Trainer in <br/>your pocket</h2>
              <p>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
                <IOS><img src = ".\PNG\IOS.png" alt= ""/></IOS>
                <Android><img src = ".\PNG\Android.png" alt= ""/></Android>
              <h2>Frequently Asked Questions</h2>
                <p>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</p>
                <Button top = "-3px">Read FAQs&nbsp;&nbsp;<img src = ".\PNG\arrow.png" alt= ""/></Button>                
            </div>
          </div>
        </div>
    </>
  );
}