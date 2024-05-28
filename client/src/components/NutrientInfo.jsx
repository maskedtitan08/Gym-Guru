import { useState } from 'react';
import { nutrientOptions, fetchData } from '../utils/fetchData';
import "./NutrientInfo.css"
import Loader from './Loader';


const NutrientInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    age: 0,
    feet: 0,
    inches: 0,
    lbs: 0,
    height: 0,
    kilos: 0,
    activityLevel: 'Active',
  });
  const [nutrientData, setNutrientData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // const url = `https://nutrition-calculator.p.rapidapi.com/api/nutrition-info?measurement_units=std&sex=${formData.gender}&age_value=${formData.age}&age_type=yrs&feet=${formData.feet}&inches=${formData.inches}&lbs=${formData.lbs}&activity_level=${formData.activityLevel}`;
    const url = `https://nutrition-calculator.p.rapidapi.com/api/nutrition-info?measurement_units=met&sex=${formData.gender}&age_value=${formData.age}&age_type=yrs&cm=${formData.height}&kilos=${formData.kilos}&activity_level=${formData.activityLevel}`;


    const nutrientsData = await fetchData(url, nutrientOptions);

    console.log(nutrientsData);
    setNutrientData(nutrientsData);
  };

  return (
    <div className='nutrients-container'>
      <h1>Nutrient Information</h1>
      {nutrientData ? (
        <div>
          <div className="caloric-need">
            <h2>Hello {formData.name} your estimated Daily Caloric Needs</h2>
            <p>Estimated Daily Caloric Needs:<strong> {nutrientData.BMI_EER["Estimated Daily Caloric Needs"]}</strong></p>
          </div>

          <div className="macro-table">
            <h2>Macronutrients</h2>
            <table>
              <thead>
                <tr>
                  <th>{nutrientData.macronutrients_table["macronutrients-table"][0][0]}</th>
                  <th>{nutrientData.macronutrients_table["macronutrients-table"][0][1]}</th>
                </tr>
              </thead>
              <tbody>
                {nutrientData.macronutrients_table["macronutrients-table"].slice(1).map((item, index) => (
                  <tr key={index}>
                    <td className='left-item'>{item[0]}</td>
                    <td>{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (<>
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Ronnie' required/>
          </div>
          <div className='input'>
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='input'>
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required/>
          </div>
          {/* <div>
            <label>Height:</label>
            <div className="height-input">
              <input type="number" name="feet" value={formData.feet} onChange={handleChange} placeholder="Feet" required/>
              <input type="number" name="inches" value={formData.inches} onChange={handleChange} placeholder="Inches" required/>
            </div>
          </div> */}
          <div className='input'>
            <label>Height (cm):</label>
              <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="height" required/>
          </div>
          <div className='input'>
            <label>Weight (kilos):</label>
            <input type="number" name="kilos" value={formData.kilos} onChange={handleChange} required/>
          </div>
          {/* <div className='input'>
            <label>Weight (lbs):</label>
            <input type="number" name="lbs" value={formData.lbs} onChange={handleChange} required/>
          </div> */}
          <div className='input'>
            <label>Activity Level:</label>
            <select name="activityLevel" value={formData.activityLevel} onChange={handleChange} required>
              <option value="Inactive">Inactive</option>
              <option value="Low Active">Low Active</option>
              <option value="Active">Active</option>
              <option value="Very Active">Very Active</option>
            </select>
          </div>
          <button type="submit">Get Nutrient Info</button>
        </form>
      </>)}

    </div>
  );
};

export default NutrientInfo;
