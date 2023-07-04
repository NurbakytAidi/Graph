import moment from "moment";

export default function Month({startDate, index}) {

    let date = moment(startDate).add(index * 7, 'day');
    let monthName = date.format('MMM');
  
    return (
      <div className={`timeline-months-month ${monthName}`}>
        {monthName}
      </div>
    )

}