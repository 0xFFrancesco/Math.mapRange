# Math.mapRange

## A JavaScript enhancer for the Math object for mapping different numeric ranges.

#### Description:
A JavaScript utility to map a numeric range to a new one preserving value relations.

Here a visual and intuitive explanation:


#### How to use:
- download it
- include it in your code
- reference it through the `Math` object
```javascript
//Blueprint
//Math.mapRange(oldRangeMin, oldRangeMax, oldRangeValue, newRangeMin, newRangeMax) : returns newRangeValue

Math.mapRange(0,100,50,0,1);        //0,5
Math.mapRange(0,100,50,0,6);        //3
Math.mapRange(0,100,50,-6,6);       //0
Math.mapRange(0,100,100,-6,6);      //6
Math.mapRange(0,100,100,0,6);       //6
Math.mapRange(0,100,0,-6,6);        //-6
Math.mapRange(0,100,25,-6,6);       //-3
Math.mapRange(0,100,0,-20,-10);     //-20
Math.mapRange(0,100,50,-20,-10);    //-15

//Range is limited
Math.mapRange(0,100,-50,1,5);    //1
Math.mapRange(0,100,150,1,5);    //5
```