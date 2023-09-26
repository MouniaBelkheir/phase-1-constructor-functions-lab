// Constructor function for Scooter
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Constructor function for Driver
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // Constructor function for PickupLocation
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Testing the constructor functions
  const myScooter = new Scooter(2022, "Red", "X100");
  const myDriver = new Driver("John Doe", 30, 5);
  const myPickupLocation = new PickupLocation("123 Main St", "New York");
  
  // Printing the created objects
  console.log("Scooter:", myScooter);
  console.log("Driver:", myDriver);
  console.log("Pickup Location:", myPickupLocation);
  