function makeBid(){
    if(!HighestBidderIsMe()){
        var lastBit = parseInt(document.getElementById('jsMainLotCurrentBid').textContent)
        var nextBit = lastBit+1;
        if(nextBit <= MaxBid()){
            console.log('placer une offre');
            document.getElementById('jsActiveBidInput').value = nextBit;
            document.getElementById('jsActiveBidButton').click();
            setTimeout(makeBid,500);
        }
        else{
            console.log('abandonne');
        }
    }
    else{
        setTimeout(makeBid,500);
    }
}

function MaxBid(){
    var retailPrice = document.getElementsByClassName('retail-price')[0].childNodes[1].textContent;
    var ndx = retailPrice.indexOf('€')
    var price = parseInt(retailPrice.substring(ndx+1))/5
    console.log('MaxBid:'+price);
    return price;
}

function HighestBidderIsMe(){
    var highestBidder = document.getElementById('highestBidder').textContent
    console.log('Highest bidder:'+ highestBidder);
    if(highestBidder == 'Pierre Mignolet'){
        return true;
    }
    
    return false;
}

//function makeBid(){exit(1);}