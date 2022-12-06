export function detect() {
    let circle = {};
    if ((window.screen.width <= 700)) {
        circle[1] = {
            top: "-3em",
            left: "9em"
        };

        circle[2] = {
            top: "16em",
            left: "-2em"
        }
    } else {
        circle[1] = {
            top: "-3em",
            left: "10em"

        };

        circle[2] = {
            top: "16em",
            left: "-3em"
        }
    }

    return circle;
}