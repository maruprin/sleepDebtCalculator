const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 8;
      case "tuesday":
        return 6;
      case "wednesday":
        return 7;
      case "thursday":
        return 5;
      case "friday":
        return 8;
      case "saturday":
        return 6;
      case "sunday":
        return 7;
    }
  };
  
  const getActualSleepHours = () => {
    return (
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday")
    );
  };
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      return console.log("You have got the perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
      return console.log(
        `You have got more sleep than needed. You have slept ${
          actualSleepHours - idealSleepHours
        } hours more`
      );
    } else if (actualSleepHours < idealSleepHours) {
      return console.log(
        `You should get some rest. You have slept ${
          idealSleepHours - actualSleepHours
        } hours less`
      );
    }
  };
  
  calculateSleepDebt();