import React from 'react';

function AssumptionLog({ assumptions }) {
  return (
    <div className="mt-4">
     <h3>Assumptions / Notes:</h3>
<ul>
  {assumptions.map((note, idx) => (
    <li key={idx}>{note}</li>
  ))}
</ul>
</div>
  );
}

export default AssumptionLog;