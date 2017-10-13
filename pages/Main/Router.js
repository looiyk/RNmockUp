import StackNavigator from "react-navigation";

import ScreenOne from "../Component/ScreenOne";
import ScreenTwo from "../Component/ScreenTwo";
import ScreenThree from "../Component/ScreenThree";
import ScreenFour from "../Component/ScreenFour";
import ScreenFive from "../Component/ScreenFive";
import ScreenSix from "../Component/ScreenSix";
import ScreenSeven from "../Component/ScreenSeven";
import ScreenEight from "../Component/ScreenEight";
import ScreenNine from "../Component/ScreenNine";

export const StackOne = StackNavigator({
  ScreenOne: {
    screen: ScreenOne,
  },
  ScreenTwo: {
    screen: ScreenTwo,
  },
  ScreenThree: {
    screen: ScreenThree,
  },
});

export const StackTwo = StackNavigator({
  ScreenFour: {
    screen: ScreenFour,
  },
  ScreenFive: {
    screen: ScreenFive,
  },
  ScreenSix: {
    screen: ScreenSix,
  },
});

export const StackThree = StackNavigator({
  ScreenSeven: {
    screen: ScreenSeven,
  },
  ScreenEight: {
    screen: ScreenEight,
  },
  ScreenNine: {
    screen: ScreenNine,
  },
});
