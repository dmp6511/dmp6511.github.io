// For testing puroposes, you may need to change these places to something closer to you
const places = [
    { name: "Rochester Abandoned Subway", latitude: 43.154722, longitude: -77.609722 },
    { name: "Washington Square Park", latitude: 43.1534, longitude: -77.6053 },
    { name: "Rochester Contemporary Art Center", latitude: 43.156619, longitude: -77.600730 },
    // my location
    { name: "My Location", latitude: 43.08319, longitude: -77.600730 }
];


const loadPlaces = () => {
    const scene = document.querySelector("a-scene");

    places.forEach(place => {
        // change to sphere
        const shape = document.createElement("a-sphere");
        shape.setAttribute("color: blue");

        shape.setAttribute("gps-entity-place", `latitude: ${place.latitude}; longitude: ${place.longitude}`);
        //entity.setAttribute("geometry", "primitive: sphere; radius: 1");

        const text = document.createElement("a-text");
        text.setAttribute("value", place.name);
        text.setAttribute("align", "center");
        text.setAttribute("position", "0 2 0");
        shape.appendChild(text);

        shape.addEventListener("click", () => alert(`You clicked on: ${place.name}`));

        scene.appendChild(shape);
    });
};

window.onload = loadPlaces;