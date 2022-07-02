import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A German specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
    {
      id: 'm5',
      name: 'Pasta Casserole',
      description: 'Delicious and cheesy',
      price: 15.99,
    },
    {
      id: 'm6',
      name: 'Fruit Bowl',
      description: 'Healthy and fruity!',
      price: 11.50,
    },
    {
      id: 'm7',
      name: 'Capri Sun',
      description: 'Refreshing Fruit Punch',
      price: 3.00,
    },
  ];

const AvailableMeals = () =>{
    const mealList = DUMMY_MEALS.map(meal => (
         <MealItem 
         id={meal.id}
         key={meal.id} 
         name={meal.name} 
         description={meal.description} 
         price={meal.price}
         />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;