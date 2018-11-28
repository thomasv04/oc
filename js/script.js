function is_valide(projet) {
    if (projet.valide == 1) {
        $('.projet' + getternumero(projet)).addClass('fini');
    }
}

function is_commence(projet) {
    if (projet.commence == 1) {
        $('.projet' + getternumero(projet)).addClass('commence');
    }
}

is_valide(eval("projet1"));
is_valide(eval("projet2"));
is_valide(eval("projet3"));
is_valide(eval("projet4"));
is_valide(eval("projet5"));
is_valide(eval("projet6"));
is_valide(eval("projet7"));
is_valide(eval("projet8"));
is_valide(eval("projet9"));

is_commence(eval("projet1"));
is_commence(eval("projet2"));
is_commence(eval("projet3"));
is_commence(eval("projet4"));
is_commence(eval("projet5"));
is_commence(eval("projet6"));
is_commence(eval("projet7"));
is_commence(eval("projet8"));
is_commence(eval("projet9"));

function getternumero(projet) {
    let project = eval(projet);
    return project.numeros;
};

function gettertitre(projet) {
    let project = eval(projet);
    return project.titre;
};

function nb_competence(projet) {
    let project = eval(projet);
    let nb_comptetence = project.competence.length;
    return nb_comptetence;
};

function gettercompetence(projet) {
    let project = eval(projet);
    return project.competence;
};

function getterlien(projet) {
    let project = eval(projet);
    return project.lien;
};

function getterpourcentage(projet) {
    let project = eval(projet);
    return project.pourcentage;
};


function modif_projet(div_click) {
    let classes = div_click.className.split(' ');
    let nom_projet = eval(classes[1]);
    let numeros_projet = parseInt(getternumero(nom_projet));


    let titre_projet = gettertitre(nom_projet).toString();
    let competence = gettercompetence(nom_projet);
    let pourcentage = getterpourcentage(nom_projet);
    let lien = getterlien(nom_projet);
    let lien_site = getterlien(nom_projet)[0];
    let lien_drive = getterlien(nom_projet)[1];
    let lien_github = getterlien(nom_projet)[2];
    let lien_site_image;
    let lien_drive_image;
    let lien_github_image

    if (lien_site == null) {
        lien_site_image = "img/eye.png";
    }
    if (lien_drive == null) {
        lien_drive_image = "img/google-drive-logo.png";
    }
    if (lien_github == null) {
        lien_github_image = "img/github-logo.png";
    }
    if (lien_site !== null) {
        lien_site_image = "img/eye_violet.png";
    }
    if (lien_drive !== null) {
        lien_drive_image = "img/google-drive-logo-violet.png";
    }
    if (lien_github !== null) {
        lien_github_image = "img/github-logo-violet.png";
    }



    $('.content').html('<div class="lien"><a class="site lien_image" href="' + lien_site + '"><img src="' + lien_site_image + '" alt=""></a><a class="drive lien_image" href="' + lien_drive + '"><img src="' + lien_drive_image + '" alt=""></a><a class="github lien_image" href="' + lien_github + '"><img src="' + lien_github_image + '" alt=""></a></div>');

    if (lien_site == null) {
        $('.site').addClass('vide');
    }
    if (lien_drive == null) {
        $('.drive').addClass('vide');
    }
    if (lien_github == null) {
        $('.github').addClass('vide');
    }


    for (var i = nb_competence(nom_projet) - 1; i > -1; i--) {
        $('.content').prepend('<div class="objectif"><div class="titre"><p>' + competence[i] + '</p></div><div class="barre_progression"><div class="barre"><div class="total" style="width:' + pourcentage[i] + ';"></div></div></div></div>');
    }


    /**<div class="objectif">
                <div class="titre">
                    <p>Créer et mettre à jour votre CV</p>
                </div>
                <div class="barre_progression">
                    <div class="barre">
                        <div class="total" style="width:50%;">

                        </div>
                    </div>
                </div>
            </div>
**/



    $('.carre h2').html(numeros_projet);
    $('.header2 h1').html(titre_projet);
}


$(function () {
    let vitesse_anim = 700;

    $('.projet').click(function () {
        modif_projet(this);
        $('.projet').css('opacity', '0');
        $(this).css('opacity', '1');
        $('.projets').animate({
            top: "130vh",
        }, vitesse_anim).fadeOut(1);

        $('header').animate({
            top: "-10vh",
        }, vitesse_anim);
        //$('body').css('overflow-y', 'auto');
        $('.contenu_projet').css('display', 'block');
        $('.contenu_projet').delay(vitesse_anim).animate({
            opacity: '1'
        }, vitesse_anim);
        $('.carre').delay(vitesse_anim).animate({
            left: '0px'
        }, vitesse_anim);
        $('.header2 h1').delay(vitesse_anim).animate({
            top: '50%'
        }, vitesse_anim);
        $('.content').delay(vitesse_anim).animate({
            'margin-top': '0px'
        }, 1000);

    })

    $('.carre').click(function () {
        $('.projet').css('opacity', '1');
        $('.projets').fadeIn(1).delay(1100).animate({
            top: "60%",
            opacity: "1",
        }, vitesse_anim);
        $('header').delay(1100).animate({
            top: "35%",
        }, vitesse_anim);


        $('.contenu_projet').delay(1100).animate({
            opacity: '0'
        }, vitesse_anim);
        $('.contenu_projet').delay(1101).animate({
            display: 'none'
        }, 1);


        $('.carre').animate({
            left: '-10vw'
        }, vitesse_anim);
        $('.header2 h1').animate({
            top: '-150px'
        }, vitesse_anim);
        $('.content').animate({
            'margin-top': '100vh'
        }, 1000);

    })

})
