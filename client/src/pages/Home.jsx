import React, { useState } from 'react';
import DishInput from '../components/DishInput';
import NutritionOutput from '../components/NutritionOutput';
import AssumptionLog from '../components/AssumptionLog';

function Home() {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
  <h1 className="text-2xl font-bold mb-4">VYB Nutrition Estimator</h1>
  <DishInput setResult={setResult} />
  {result && (
    <>
      <NutritionOutput data={result} />
      <AssumptionLog assumptions={result.assumptions} />
    </>
  )}
</div>

  );
}

export default Home;