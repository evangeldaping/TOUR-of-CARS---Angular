import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './car';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      { 
        id:           1,
        make:         'Acura',
        model:        'Acura RSX',       
        year:         2006,
        description:  `The Acura RSX two-door sport hatchback comes in two trim levels: base and Type-S. 
                      Both are well-equipped. With the base RSX, you get standard features such as 16-inch alloy wheels; automatic climate control; power windows, 
                      locks and mirrors; cruise control; a power moonroof; a leather-wrapped steering wheel; and a CD player. 
                      These items, plus 17-inch wheels, stronger brakes, firmer suspension tuning, a rear spoiler and an in-dash six-disc CD changer come on the Type-S. 
                      Leather seats are also standard on the Type-S, and you can upgrade the base car's cloth with leather if you so desire.`,
        photoPath:    'https://st.motortrend.com/uploads/sites/10/2018/07/2019-acura-rdx-suv-angular-front.png'
      },
      {
        id:           2,
        make:         'BMW',
        model:        'BMW M4 Coupe',    
        year:         2020,
        description:  `The BMW M4 Coupe is the high-performance, sporty equivalent of the 4 series model. 
                      It was developed under the brand's motorsport division BMW GmbH, which explains exactly how it earned the the M-performance badge. 
                      The 4 series is a great 2-door car, however, it is not enough to compete on the track. 
                      So, engineers from GmbH took its DNA, made a number of genetic alterations, ran a few tests, and there we have it: an M-bred 4 series dubbed as the M4. 
                      
                      Basically, BMW replaced everything a race car driver don't like about the 4 series. 
                      Upgrades include a more powerful twin turbo engine able to spur out 450 hp and 550 Nm of torque, better handling and suspensions, new braking system, and an aerodynamic body. 
                      All worthy of a tri-color M badge you can found inside and outside of the car. Not to mention, a feast of carbon fiber materials are found all throughout the M4. 
                      You may witness an interior glazed with BMW's fleet of technology, including a head-up display and the M Apps. 
                      It features wireless smartphone charging, while a roof aerial connection improves your phone's signal reception.`,
        photoPath:   'https://www.bmwusa.com/content/dam/bmwusa/XModels/Overview/2019/BMW-MY19-XSeries-Overview-Hero.png'
      }, 
      {
        id:           3,
        make:         'Mitsubishi',
        model:        'Mitsubishi Montero Sport',
        year:         2020,
        description:  `The Mitsubishi Montero Sport is one of the most popular SUVs in the Philippines, 
                      constantly hitting the list of annual top-selling cars in the country. 
                      It continues to gain popularity not just as a status symbol but as a family car and a tough, reliable midsize body-on-frame SUV on and off the road. 
                      The third-generation Montero Sport has a totally redesigned front that showcases Mitsubishi's 'Dynamic Shield' grille, 
                      which is the benchmark of the brand's modern lineup.
  
                      The Montero Sport has chrome linings that surround the huge air intakes and extends up to the fog lamps, complemented by sleek LED head and tail lights. 
                      Inside, seats for the top-of-the-line Montero Sport variants are wrapped in leather with added sportier trims for the GT variant. 
                      An 8-inch touchscreen infotainment system serves as the central control and entertainment for its driver and passengers. 
                      As for its engine, the all-new Montero Sport is powered by a new 2.4L four-cylinder DOHC 16V MIVEC VG Turbocharged clean diesel power plant. 
                      MIVEC, which stands for Mitsubishi Innovative Valve timing Electronic Control system, is responsible in achieving its high power output, low fuel consumption, 
                      and low exhaust emissions.`, 
        photoPath:    'https://assets.newcars.com/images/pictures/VEHICLE/2020/Mitsubishi/Mitsubishi-Outlander-Sport-USD00MIS052A021001-E.png'
    
      }, 
      {
        id:          4,
        make:        'Toyota',
        model:       'Toyota Camry',
        year:        2018,
        description: `The 2018 Toyota Camry is an exemplary used midsize sedan. In fact, it won three of our 2018 Best Car awards: 
                      Best Midsize Car for the Money, Best Midsize Car for Families, and Best New Cars for Teens. 
                      It delivers excellent performance, from its powerful engines to its composed handling. 
                      Add in a long list of standard features and great gas mileage, and the Camry is one of the best values in the class.
  
                      The Camry has many strengths:
                      
                      Outstanding predicted reliability rating
                      Perfect safety score
                      More standard safety features than most rivals
                      Straightforward cabin technology
                      Composed handling
                      Comfortable ride
                      Zippy, fuel-efficient base engine
                      Muscular available V6 engine
                      There are a few drawbacks:
                      
                      Subpar trunk space for the class
                      Smaller rear seats than some rivals
                      No Apple CarPlay or Android Auto smartphone integration`,
        photoPath:    'https://www.pngkit.com/png/full/340-3403525_2018-toyota-camry-2019-toyota-camry-l.png'
     
      }, 
      {
        id:           5,
        make:         'Honda',
        model:        'Honda Civic',     
        year:         2017,
        description:  `The Civic is a great option if you’re shopping for a used compact car. The well-rounded Civic is available as a coupe, sedan, or hatchback. 
                      It provides nimble but comfortable handling, superb fuel economy estimates, and a large array of convenience and safety features for a reasonable price.
  
                      Why You Can Trust Us
                      We’ve researched 34 Honda Civic reviews, as well as hard data points like reliability scores and total cost of ownership estimates, 
                      to help you make the best car-buying decision possible.
                      
                      U.S. News & World Report has been ranking cars since 2007, and our team has more than 75 years of automotive industry experience combined. 
                      While we’re passionate about cars, we’re even more committed to providing helpful consumer advice. To ensure our reviews remain impartial, 
                      we refuse expensive gifts and trips from car companies, and an outside team handles the advertising on our site.`,
        photoPath:   'https://www.pngkit.com/png/full/339-3396335_2017-honda-civic-honda-civic.png'
     
      }
    ];
    return {cars};
  }

  // Overrides the genId method to ensure that a car always has an id.
  // If the cars array is empty,
  // the method below returns the initial number (11).
  // if the cars array is not empty, the method below returns the highest
  // car id + 1.
  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 11;
  }
}