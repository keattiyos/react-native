function getUrl(){
    return "http://web.sit.kmutt.ac.th/sanit/int493/" ;
}

function fetchParks(){
    return fetch(getUrl()+'parks.php')
            .then((resp) => resp.json())
            .then((resJ) => {
                return resJ.parks;})
            .catch(err => 
                console.log(err)) ;
            
}

export default 
{fetchParks : fetchParks};