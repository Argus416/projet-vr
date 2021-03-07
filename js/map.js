$(function() {
    /*------------------------------------------------------------------------------------
    								GEOLOCALISATION								
    -------------------------------------------------------------------------------------*/
    /*Création d'une fonction qui lit la longitude et la latitude
    création d'un bouton cliquable permettant de me donner mon emplacement par rapport à l'entreprise 
    ( emplacement marquer par le logo de la société)
    Si la position est nul inscrire geloc n'est pas autorisé sinon indique la position actuel ou on se trouve  */

    let map, infoWindow;

    function initMap() {
        let position = {
            lat: 48.85969199023829,
            lng: 1.2049523855640014
        };

        map = new google.maps.Map(document.getElementById("map"), {
            center: position,
            zoom: 10,
        });

        marker(position, "style/img/logovr.png", "L'emplacemnt de notre boutique");

        infoWindow = new google.maps.InfoWindow();

        const locationButton = document.createElement("button");
        locationButton.textContent = "Pan to Current Location";
        locationButton.classList.add("custom-map-control-button");

        map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

        locationButton.addEventListener("click", () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        // marker(pos, "style/img/logovr.png")
                        marker(pos, null, "Votre position actuelle");

                        map.setCenter(pos);
                    },
                );
            } else {
                console.log("geloc n'est pas autorisé");
            }
        });
    }

    function marker(position, urlIcon, textIconPull) {
        let icon
        if (urlIcon != null) {
            icon = {
                url: urlIcon,
                scaledSize: new google.maps.Size(50, 50)
            };
        }

        let marqueur = new google.maps.Marker({
            position,
            map,
            icon
        });
        marqueur.addListener('click', function() {
            infoWindow.setPosition(position);
            infoWindow.setContent(textIconPull);
            infoWindow.open(map);
        })
        return marqueur;
    }
    initMap();
})

/*------------------------------------------------------------------------------------
								END GEOLOCALISATION								
-------------------------------------------------------------------------------------*/