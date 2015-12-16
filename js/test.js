//console.log('Hello World');
//alert('Hello again');
// Game props 


gameProps = {
    Ndots:10,
    seed:1
};

dot = {
    ind:1,
    size:2,
    col:'red'

};

function addCircle(dot, parent){
    svgns = "http://www.w3.org/2000/svg";
    e = document.createElementNS(svgns,'circle');
    e.setAttribute('cx', '50');
    e.setAttribute('cy', '50');
    e.setAttribute('r', '25');
    e.setAttribute('fill', 'purple');
    parent.appendChild(e);
    return e;
}

circleSpec = [
    { x: 10 ,
      y: 20 ,
      c: "green"
    },
    { x: 100,
      y: 200,
      c: "blue"
    }
];

function placeCircles(circSpec) {
    // something
}

people = {name: "Greg", id: 5, last: "Hale"};


for x in people
