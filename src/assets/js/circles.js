export function detect() {
    let circle = {};
    if (window.screen.width <= 700) {
        circle[1] = {
            left: "10.9em",
            top: "-3em",
            background: "linear-gradient(181deg, #00086e, #0054d1, #0095ff, cyan, rgb(103 255 103))"
        };
        circle[2] = {
            left: "-1.5em",
            top: "17em",
            background: "linear-gradient(2deg, rgb(255 235 0), rgb(255 167 7), rgb(255 106 0), #ff1616, rgb(255 0 0))"
        };
    } else {
        circle[1] = {
            left: "9.9em",
            top: "-3em",
            background: "linear-gradient(181deg, #00086e, #0054d1, #0095ff, cyan, rgb(103 255 103))"
        };
        circle[2] = {
            left: "-3em",
            top: "17em",
            background: "linear-gradient(2deg, rgb(255 235 0), rgb(255 167 7), rgb(255 106 0), #ff1616, rgb(255 0 0))"
        };
    }


    return circle;
}