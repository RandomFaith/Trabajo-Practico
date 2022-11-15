CON1.addEventListener('mousedown', function(e) { 
    let D1 = (e.path[0]);
    let D2 = D1.id;

    switch (D2) {

        case "P2":
                V1.play();
            break;

        case "S1":
                V1.pause();
            break;
            
    };

 }); 