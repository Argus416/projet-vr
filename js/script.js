$(function() {
        /*------------------------------------------------------------------------------------
        								TABLEAU DE TARIF								
        -------------------------------------------------------------------------------------*/
        //On appelle le document quand il est prêt
        //On lui demande d'aller récuperer les donner sur le dossier tarif.js
        //une fois recuperer on demande à se que les information soit afficher 
        //On  créer par la suite une fonction demandant d'ecraser les information existant puis
        //reprendre dans le tableau les element a partir de la premiere ligne de l'index et sur toute la largeur du tableau
        //et enfin les classer dans l'ordre demandé colonne par colonne.

        var tarifs = [];
        $(document).ready(function() {
            $('.thead-dark');
        });

        $.get("js/tarif.json", function(response) {
            tarifs = response;
            affichage();
        });

        function affichage() {
            // $('#thead-dark').empty();

            for (var i = 0; i < tarifs.length; i++) {
                $('#thead-dark').append(`<tr>
                                        <th scope="row thead-dark"></th>
                                        <td>${tarifs[i].Categories}</td>
                                        <td>${tarifs[i].Age}</td>
                                        <td>${tarifs[i].Prix}</td>
                                    </tr>`)
            }
            console.log(tarifs);
        }

        /*------------------------------------------------------------------------------------
        								END TABLEAU DE TARIF								
        -------------------------------------------------------------------------------------*/

        /*------------------------------------------------------------------------------------
        								PLUGIN SLICK								
        -------------------------------------------------------------------------------------*/
        //parametrage  du pluging
        $('.slick-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            fade: true,
            cssEase: 'linear',
            centerMode: true,
            centerPadding: '400px',
            mobileFirst: true,
            arrows: false
        });

        $('#nav ul li').click(function() {
            $('ul').css('left', '-100%')
        });
        /*------------------------------------------------------------------------------------
        								END PLUGIN SLICK								
        -------------------------------------------------------------------------------------*/
    })
    /*------------------------------------------------------------------------------------
    								REGEX								
    -------------------------------------------------------------------------------------*/

$(function() {


        $("#formulaire").submit(function() {
            //déclarations
            var nom, prenom, email;
            //regex
            var regEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$");
            var regText = new RegExp("^[A-Za-z- ]+$");


            //affectations
            var envoyer = true;
            nom = $("#form_nom").val();
            prenom = $("#form_pre").val();
            email = $("#form_email").val();

            if (!regText.test(nom)) {
                $('#form_nom').css('border', '1px solid red')
                $('#form_nom').attr('placeholder', 'nom incorrect')
                envoyer = false
            } else {
                $('#form_nom').css('border', '1px solid green')
                $('#form_nom').attr('placeholder', ' ')
            }

            if (!regText.test(prenom)) {
                $('#form_pre').css('border', '1px solid red')
                $('#form_pre').attr('placeholder', 'prénom incorrect')
                envoyer = false
            } else {
                $('#form_pre').css('border', '1px solid green')
                $('#form_pre').attr('placeholder', ' ')
            }

            if (!regEmail.test(email)) {
                $('#form_email').css('border', '1px solid red')
                $('#form_email').attr('placeholder', 'email incorrect')
                envoyer = false
            } else {
                $('#form_email').css('border', '1px solid green')
                $('#form_email').attr('placeholder', ' ')
            }

            return envoyer;
        })

    })
    /*------------------------------------------------------------------------------------
    								END REGEX								
    -------------------------------------------------------------------------------------*/