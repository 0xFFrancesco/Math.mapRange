# Math.mapRange

### A JavaScript enhancer for the Math object for mapping different numeric ranges while preserving value relations.

#### Description:
Here a visual and intuitive explanation (it maps a numeric range to a new one keeping the value relations):

![the visual self-explanatory image](https://raw.githubusercontent.com/Francesco-Rizzi/Math.mapRange/master/assets/image.jpg)

#### How to use:
- download it
- include it (once) in your code
- reference it through the `Math` object
```javascript
//Function blueprint
//Math.mapRange(oldRangeMin, oldRangeMax, oldRangeValue, newRangeMin, newRangeMax) => newRangeValue

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