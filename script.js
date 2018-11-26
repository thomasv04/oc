$(function () {
    var nb_validate = $('.validate_p').length;


    var nb_projet = $('.projet').length;

    var pourcentage = parseInt((nb_validate / nb_projet) * 100);

    pourcentage = pourcentage + '%';

    $('.compteur div').css('width', pourcentage);
})
