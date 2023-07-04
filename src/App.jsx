import './App.css'
import moment from 'moment';
import Timeline from './componets/Timeline';
import useFetch from "./Fetch_API/useFetch.js";
import { useState, useEffect } from 'react';

function App() {
  const [calendar, setCalendar] = useState([])
 
  const {get} = useFetch("https://dpg.gg/test/");
  // console.log(get)

    useEffect(() => {
      get("calendar.json").then(data => {
        console.log(data)
        setCalendar(data);
       
      })
      .catch(error => console.log(error))
    }, [])



  let startDate = moment().add(-365, 'days');
  let dateRange = [startDate, moment()];

  let data = Array.from(new Array(365)).map((_, index) => {
    return {
      date: moment(startDate).add(index, 'day'),
      value: Math.floor(Math.random() * 100)
    };
  });

 
 
  return(
  <>
    
      <Timeline range={dateRange} data={data} colorFunc={({ alpha }) => `rgba(3, 160, 3, ${alpha})`} />
     
  </>
  )
    
  

}
export default App
