// challenge vanilla js
const greeting = (name) => {
  let greet
  const date = new Date()
  const hour = date.getHours()

  if (hour > 4 && hour < 12) greet = 'morning'
  if (hour > 12 && hour < 17) greet = 'afternoon'
  if (hour > 17 && hour < 20) greet = 'evening'
  if (hour > 20 && hour < 4) greet = 'evening'
  
  console.log(`Good ${greet}`, name)
}

greeting('yohan')