exports.redirect_to=function(role){

    // var role=$('#user_role').val();
     alert(role)

    if(role=='artist'){
        $('#redirect_link').attr('href','/artist-home');
        $('#redirect_link')[0].click();
    }

    else if(role=='admin'){
        $('#redirect_link').attr('href','/dashboard');
        $('#redirect_link')[0].click();
    }

    else if(role=='organizer'){
        $('#redirect_link').attr('href','/organizer-home');
        $('#redirect_link')[0].click();
    }

    else if(role=='supplier'){
        $('#redirect_link').attr('href','/supplier-home');
        $('#redirect_link')[0].click();
    }

    else if(role=='venue_owner'){
        $('#redirect_link').attr('href','/venue_owner-home');
        $('#redirect_link')[0].click();
    }

    
}