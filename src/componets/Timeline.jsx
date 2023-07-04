import Cell from "../componets/Cell";
import WeekDay from "../componets/WeekDay";
import Month from "../componets/Month";
import moment from "moment";

export default function Timeline ({range, data, colorFunc}) {
    let days = Math.abs(range[0].diff(range[1], 'days'));
    let cells = Array.from(new Array(days));
    let weekDays = Array.from(new Array(7));
    let months = Array.from(new Array(Math.floor(days / 7)));
  
   

    return (
        <div className='timeline'>
    
          <div className="timeline-months">
            {months.map((_, index) => <Month key={index} index={index} startDate={range[0]} />)}
          </div>
    
          <div className="timeline-body">
    
            <div className="timeline-weekdays">
              {weekDays.map((_, index) => <WeekDay key={index} index={index} startDate={range[0]} />)}
            </div>
    
            <div className="timeline-cells">
             {cells.map((_, index) => <Cell key={index} index={index} startDate={range[0]}/>)}
            </div>
          </div>
        </div>
      );
    }
    
  
