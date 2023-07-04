export default function Cell ({color}) {
    let style = {
        backgroundColor: color
      }; color
    
      return (
        <div className='timeline-cells-cell' style={style}></div>
      )
}